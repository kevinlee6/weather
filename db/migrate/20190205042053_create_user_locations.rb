class CreateUserLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :user_locations do |t|
      t.belongs_to :user, index: true
      t.belongs_to :location, index: true
      t.integer :priority, null: false
      t.timestamps
    end
  end
end
