Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :books, only: [:index, :show, :create, :update, :destroy]
  resources :categories, only: [:index, :show, :create, :update, :destroy]
  resources :orders, only: [:index, :show, :create, :update, :destroy]
  resources :order_books, only: [:create]

  # sessions and cookies
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
