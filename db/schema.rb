# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_30_133917) do
  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.string "description"
    t.string "publisher"
    t.datetime "year_of_publication"
    t.decimal "price"
    t.string "image_url"
    t.string "isbn"
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_books_on_category_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "genre"
    t.string "sub_genre"
    t.string "description"
    t.string "age_category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_books", force: :cascade do |t|
    t.integer "quantity"
    t.integer "order_id", null: false
    t.integer "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_order_books_on_book_id"
    t.index ["order_id"], name: "index_order_books_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.decimal "total_price"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.integer "phone_number"
    t.string "avatar_url"
    t.boolean "is_admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "books", "categories"
  add_foreign_key "order_books", "books"
  add_foreign_key "order_books", "orders"
  add_foreign_key "orders", "users"
end
