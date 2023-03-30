class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ApplicationHelper

    # def current_user
    #     @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    # end

    def index
        @books = current_user.books
    end
    
    def authorize
        render json: { error: "Not authorized" }, status: 401 unless session.include? :user_id
    end




end
