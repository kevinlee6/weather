# frozen_string_literal: true

class RemoveUniqueIndexCityCountryFromLocations < ActiveRecord::Migration[5.2]
  def up
    remove_index :locations, name: 'index_locations_on_city_and_country'
  end

  def down
    add_index :locations, %i[city country]
  end
end
