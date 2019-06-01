# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  before_save { email.downcase! }

  has_many :user_locations
  has_many :locations, through: :user_locations

  EMAIL_REGEX = /.+@.+\..+/.freeze
  validates :email, presence: true,
                    format: { with: EMAIL_REGEX },
                    uniqueness: { case_sensitive: false },
                    length: { maximum: 254 }
  validates :password, presence: true, length: { minimum: 6 }
end
