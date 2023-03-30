class CategoriesController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  before_action :require_admin, only: [:create, :update, :destroy]
  before_action :set_category, only: %i[ show update destroy ]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories, status: 200
  end

  # GET /categories/1
  def show
    render json: @category, status: 200
  end

  # POST /categories
  def create
    @category = Category.create!(category_params)
    render json: @category, status: :created, location: @category
  end

  # PATCH/PUT /categories/1
  def update
    @category.update(category_params)
    render json: @category, status: :created, location: @category
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def category_params
      params.require(:category).permit(:genre, :sub_genre, :description, :age_category)
    end

        # render error for not found
    def not_found
      render json: { message: 'Category not found' }, status: 404
    end

    # render error for invalid parameters / unprocessable_entity
    def render_validation_errors(invalid)
      render json: { error: invalid.record.errors.full_messages }, status: 422
    end
end
