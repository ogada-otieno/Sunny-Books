class OrderBookSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :order_id, :book_id
end
