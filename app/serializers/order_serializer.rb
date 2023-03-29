class OrderSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :total_price
  # belongs_to :user
  has_many :books
end
