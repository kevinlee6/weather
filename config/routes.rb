Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    resources :sessions
  end
end
