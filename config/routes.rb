Rails.application.routes.draw do
  resources :users, only: [:index, :create, :update, :destroy]
  resources :books, only: [:index, :show, :create, :update, :destroy]
  resources :categories, only: [:index, :show, :create, :update, :destroy]
  resources :orders, only: [:index, :show, :create, :update, :destroy]
  resources :order_books, only: [:create]

  # sessions and cookies
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  patch '/reset_password', to: 'users#reset_password'

end
