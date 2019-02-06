class Location < ApplicationRecord
  has_many :user_locations
  has_many :users, through: :user_locations

  validates :city, presence: true
  validates :country, presence: true
  validates_uniqueness_of :city, scope: :country, case_sensitive: false
end
