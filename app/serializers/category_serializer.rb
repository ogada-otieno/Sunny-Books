class CategorySerializer < ActiveModel::Serializer
  attributes :id, :genre, :sub_genre, :description, :age_category
end
