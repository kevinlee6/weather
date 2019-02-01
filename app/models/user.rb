class User < ApplicationRecord
  before_save { email.downcase! }

  EMAIL_REGEX = /.+@.+\..+/
  validates :email, presence: true,
                    format: {with: EMAIL_REGEX},
                    uniqueness: { case_sensitive: false },
                    length: { maximum: 254 }
  validates :password, presence: true, length: { minimum: 6 }

  has_secure_password
end
