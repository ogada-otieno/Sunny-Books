class OrderBooksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_validation_errors

    def create
        order_book = OrderBook.create!(order_books_params)
        render json: order_book, status: :created
    end

    private

    def order_books_params
        params.permit(:order_id, :quantity)
    end

    # render error for invalid parameters / unprocessable entities
    def render_validation_errors(invalid)
      render json: { error: invalid.record.errors.full_messages }, status: 422
    end
end
