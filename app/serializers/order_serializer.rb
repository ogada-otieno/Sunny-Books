class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total_price
  # belongs_to :user
  has_many :books
end
