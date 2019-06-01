# frozen_string_literal: true

class ChangeLocationsUniqueCityIdIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :locations, name: 'index_locations_on_city_id'
    add_index :locations, %i[city_id city], unique: true
  end
end
