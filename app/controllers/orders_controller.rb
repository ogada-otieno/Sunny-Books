class OrdersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  before_action :set_order, only: %i[ show update destroy ]

  # GET /orders
  def index
    @orders = Order.all
    render json: @orders, status: :ok
  end

  # GET /orders/1
  def show
    render json: @order, status: :ok
  end

  # POST /orders
  def create
    @order = Order.create!(order_params)
    render json: @order, status: :created, location: @order
  end

  # PATCH/PUT /orders/1
  def update
    @order.update!(order_params)
    render json: @order, status: :created, location: @order
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.permit(:quantity, :total_price, :user_id, :book_id)
    end

    # render error for not found
    def not_found
      render json: { message: 'Order not found'}, status: 404
    end

    # render error for invalid parameters / unprocessable entities
    def render_validation_errors(invalid)
      render json: { error: invalid.record.errors.full_messages }, status: 422
    end
end
