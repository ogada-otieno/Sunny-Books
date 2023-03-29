class BooksController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  before_action :authorize
  before_action :set_book, only: %i[ show update destroy ]
  before_action :require_admin, only: [:create, :update, :destroy]

  # user = User.find_by(id: session[:user_id])

  # GET /books
  def index
    @books = Book.all
    render json: @books, status: :ok
  end

  # GET /books/1
  def show
    render json: @book, status: :ok
  end

  # POST /books
  def create
    @book = Book.create!(book_params)
    render json: @book, status: :created, location: @book
  end

  # PATCH/PUT /books/1
  def update
    @book.update(book_params)
    render json: @book, status: :created, location: @book
  end

  # DELETE /books/1
  def destroy
    @book.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :author, :description, :publisher, :year_of_publication, :price, :image_url, :isbn, :category_id)
    end

    # render error for not found
    def not_found
      render json: { message: 'Book not found' }, status: 404
    end

    # render error for invalid parameters / unprocessable_entity
    def render_validation_errors(invalid)
      render json: { error: invalid.record.errors.full_messages }, status: 422
    end

    # require admin permission to create, update and destroy
    def require_admin
      unless current_user && current_user.is_admin?
        # flash[:alert] = "You need to be an admin to perform this action."
        pp "You need to be an admin to perform this action."
        # redirect_to root_path
      end
    end
end
