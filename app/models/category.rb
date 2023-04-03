class Category < ApplicationRecord
    has_many :books

    validates :genre, :sub_genre, :description, presence: true
    validates :age_category, { 
        presence: true,
        inclusion: {
            in: %w[YoungAdult Children Adult],
            message: "Age category can only be Young adult, Children or Adult"
        }
    }
end
