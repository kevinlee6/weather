# frozen_string_literal: true

FactoryBot.define do
  factory :location do
    city { 'New York' }
    country { 'US' }

    # doesn't start at 1?
    sequence(:city_id) { |i| i }
  end
end
