class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :genre
      t.string :sub_genre
      t.string :description
      t.string :age_category

      t.timestamps
    end
  end
end
