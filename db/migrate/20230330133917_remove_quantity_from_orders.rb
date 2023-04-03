class RemoveQuantityFromOrders < ActiveRecord::Migration[7.0]
  def change
    remove_column :orders, :quantity, :integer
  end
end
