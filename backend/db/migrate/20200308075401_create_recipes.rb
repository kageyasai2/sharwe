class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name, :null => false
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
