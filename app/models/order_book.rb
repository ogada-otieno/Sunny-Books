class OrderBook < ApplicationRecord
  belongs_to :order
  belongs_to :book

  validates :order_id, :book_id, :quantity presence: true
end
