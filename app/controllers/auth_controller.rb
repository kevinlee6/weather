class AuthController < ApplicationController
  include AuthHelper
  def create
    sign_in
  end

  def destroy
    # reuse env var if in production; create-react-app only accepts react_app_ prefix for env
    cookies.delete(:token, domain: ENV['HEROKU_DOMAIN'] || 'localhost')
    render json: { email: '' }
  end

  def verify
    @user = extract_user_from_cookie
    if @user
      get_favorites @user
    else
      render json: { email: '' }
    end
  end
end
