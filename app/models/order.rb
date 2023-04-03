class Order < ApplicationRecord
  belongs_to :user
  has_many :order_books, dependent: :destroy
  has_many :books, through: :order_books
end
