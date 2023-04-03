class RemoveBookIdFromOrders < ActiveRecord::Migration[7.0]
  def change
    remove_column :orders, :book_id, :integer
  end
end
