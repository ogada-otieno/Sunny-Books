class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :publisher
      t.datetime :year_of_publication
      t.decimal :price
      t.string :image_url
      t.string :isbn
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
