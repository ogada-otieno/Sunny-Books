class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :phone_number
      t.string :avatar_url
      t.boolean :is_admin, default: false

      t.timestamps
    end
  end
end
