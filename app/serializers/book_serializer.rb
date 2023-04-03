class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :publisher, :year_of_publication, :price, :image_url
  belongs_to :category
end
