class Location < ApplicationRecord
  has_many :user_locations
  has_many :users, through: :user_locations

  validates :city, presence: true, uniqueness: { case_sensitive: false }
  validates :country, presence: true
end
