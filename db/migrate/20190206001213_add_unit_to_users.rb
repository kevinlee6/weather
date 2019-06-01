# frozen_string_literal: true

class AddUnitToUsers < ActiveRecord::Migration[5.2]
  def up
    execute <<-SQL
     CREATE TYPE unit_type AS ENUM ('imperial', 'metric');

     ALTER TABLE users
     ADD unit unit_type
     DEFAULT 'imperial' NOT NULL;
    SQL
  end

  def down
    remove_column :users, :unit
    execute <<-SQL
      DROP TYPE unit_type;
    SQL
  end
end
