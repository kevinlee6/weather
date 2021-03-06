# frozen_string_literal: true

class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :city, null: false
      t.string :country, null: false
      # store results in future so less hits to external api?
      # t.string :zip_code
      # t.string :weather
      # t.integer :min_temp
      # t.integer :max_temp
      # t.integer :temp
      # t.integer :humidity
      # t.integer :windSpeed
      t.timestamps
    end

    add_index :locations, %i[city country], unique: true
  end
end
