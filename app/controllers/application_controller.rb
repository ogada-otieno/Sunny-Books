class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ApplicationHelper

    def index
        @books = current_user.books
    end
    
    def authorize
        render json: { error: "Not authorized" }, status: 401 unless session.include? :user_id
    end




end
