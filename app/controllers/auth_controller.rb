class AuthController < ApplicationController
  include AuthHelper
  def create
    sign_in
  end

  def destroy
    cookies.delete(:token, domain: 'localhost')
    render json: { email: '' }
  end

  def verify
    user = extract_user_from_jwt
    if user
      unit = user.unit
      render json: { email: email, unit: unit }
    else
      render json: { email: '' }
    end
  end
end
