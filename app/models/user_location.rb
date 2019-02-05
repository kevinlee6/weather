class UserLocation < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :priority, presence: true,
                       numericality: { only_integer: true, greater_than: 0 }
end
