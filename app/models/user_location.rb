# frozen_string_literal: true

class UserLocation < ApplicationRecord
  before_validation(on: :create) { create_and_increment_priority }

  belongs_to :user
  belongs_to :location

  validates :priority, presence: true,
                       numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates_uniqueness_of :location_id, scope: :user_id

  private

  def create_and_increment_priority
    user_id = self.user_id
    user = User.find user_id
    return { error: 'No user found' } unless user

    user_locations = user.user_locations
    self.priority = user_locations.length
  end
end
