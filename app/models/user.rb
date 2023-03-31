class User < ApplicationRecord
    def is_admin?
        self.is_admin # `is_admin` is a boolean attribute on the `User` model
    end

    has_many :orders
    
    has_secure_password

    validates :email, presence: true, uniqueness: true, format: {with: URI::MailTo::EMAIL_REGEXP}
    validates :password, presence: true, length: {:within => 6..20}, if: -> { new_record? || !password.nil?}
    validates :name, presence: true
    # validates :phone_number, presence: true
    # validates :avatar_url, presence: true
    # validates :is_admin, presence: true

end
