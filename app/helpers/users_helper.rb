# frozen_string_literal: true

module UsersHelper
  def self.handle_create_errors(user)
    return { error: 'No user given' } unless user

    password = user[:password]
    password_confirmation = user[:password_confirmation]
    error_message = 'Passwords do not match'
    { error: error_message } if password != password_confirmation
  end
end
