class CreateDogs < ActiveRecord::Migration[7.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :current_weight
      t.integer :final_weight
      t.integer :age_in_mos

      t.timestamps
    end
  end
end
