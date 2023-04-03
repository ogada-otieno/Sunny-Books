class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ApplicationHelper

    def index
        @books = Book.all
    end

    def
    
    # authorize access to application controllers.
    def authorize
        render json: { error: "Not authorized" }, status: 401 unless session.include? :user_id
    end

    # require admin permission to create, update and destroy
    def require_admin
      unless current_user && current_user.is_admin?
        render json: { error: "You need to be an admin to perform this action." }, status: :unauthorized
      end
    end




end
