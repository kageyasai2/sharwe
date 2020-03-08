class CreateRecipeContents < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_contents do |t|
      t.integer :number
      t.string :content
      t.references :recipe, foreign_key: true

      t.timestamps
    end
  end
end
