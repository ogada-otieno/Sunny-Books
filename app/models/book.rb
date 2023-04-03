class Book < ApplicationRecord
    belongs_to :category
    has_many :order_books, dependent: :destroy
    has_many :orders, through: :order_books

    validates :title, :author, :description, :year_of_publication, :price, :image_url, :isbn, :category_id, presence: true
end
