class Location < ApplicationRecord
  has_many :user_locations
  has_many :users, through: :user_locations

  validates :city, presence: true
  validates :country, presence: true
  validates :city_id, uniqueness: { scope: :city },
                      presence: true,
                      numericality: { only_integer: true }
end
