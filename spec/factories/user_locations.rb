# frozen_string_literal: true

FactoryBot.define do
  factory :user_location do
    # Last may not reflect true last in production
    # But will most likely work just for testing
    # Have to be careful while testing to take care when using .last
    user_id { User.last.id }
    location_id { Location.last.id }
  end
end
