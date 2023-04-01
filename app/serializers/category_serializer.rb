class CategorySerializer < ActiveModel::Serializer
  attributes :id, :genre, :sub_genre, :description, :age_category
  has_many :books
end
