# frozen_string_literal: true

Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    resources :users, only: [:create]
    post '/users/toggle_unit', to: 'users#toggle_unit'
    resources :locations
    resources :user_locations
    patch '/user_locations', to: 'user_locations#reorder'
    scope :auth do
      post '/', to: 'auth#create'
      post '/verify', to: 'auth#verify'
      delete '/', to: 'auth#destroy'
    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
