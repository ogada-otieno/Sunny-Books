class OrderSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :total_price
  has_one :user
  has_one :book
end
