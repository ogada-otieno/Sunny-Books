class OrderBook < ApplicationRecord
  belongs_to :order
  belongs_to :book

  validates :order_id, :quantity, presence: true
end
