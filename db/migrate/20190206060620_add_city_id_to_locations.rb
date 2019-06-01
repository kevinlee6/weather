# frozen_string_literal: true

class AddCityIdToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :city_id, :integer, null: false
    add_index :locations, :city_id, unique: true
  end
end
