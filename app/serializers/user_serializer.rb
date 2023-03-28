class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :phone_number, :avatar_url, :is_admin
end
