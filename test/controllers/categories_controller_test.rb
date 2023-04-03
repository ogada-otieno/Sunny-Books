require "test_helper"

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @category = categories(:one)
  end

  test "should get index" do
    get categories_url, as: :json
    assert_response :success
  end

  test "should create category" do
    assert_difference("Category.count") do
      post categories_url, params: { category: { age_category: @category.age_category, description: @category.description, genre: @category.genre, sub_genre: @category.sub_genre } }, as: :json
    end

    assert_response :created
  end

  test "should show category" do
    get category_url(@category), as: :json
    assert_response :success
  end

  test "should update category" do
    patch category_url(@category), params: { category: { age_category: @category.age_category, description: @category.description, genre: @category.genre, sub_genre: @category.sub_genre } }, as: :json
    assert_response :success
  end

  test "should destroy category" do
    assert_difference("Category.count", -1) do
      delete category_url(@category), as: :json
    end

    assert_response :no_content
  end
end
