class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors
rescue_from ActiveRecord::RecordNotFound, with: :not_found
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all

    render json: @users, status: :ok
  end

  # GET /users/:id
  def show
    render json: @user, status: :ok
  end

  # POST /users
  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    @user.update!(user_params)
    render json: @user, status: :created
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :email, :password, :phone_number, :avatar_url, :is_admin)
    end

    # render error for not found
    def not_found
      render json: { message: 'User not found'}, status: 404
    end

    # render error for invalid parameters / unprocessable entities
    def render_validation_errors(invalid)
      render json: { error: invalid.record.errors.full_messages }, status: 422
    end
end
