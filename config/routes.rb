Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    resources :users
    resources :locations
    resources :user_locations
    scope :auth do
      post '/', to: "auth#create"
      post '/verify', to: "auth#verify"
      delete '/', to:"auth#destroy"
    end
  end
end
