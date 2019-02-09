class AuthController < ApplicationController
  include AuthHelper
  def create
    sign_in
  end

  def destroy
    prod = ENV['PRODUCTION_DOMAIN']
    cookies.delete(:token, { domain: prod || 'localhost', secure: !!prod })
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
