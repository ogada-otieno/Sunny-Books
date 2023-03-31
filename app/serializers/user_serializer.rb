class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :avatar_url, :is_admin
end
