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
    token = cookies.encrypted[:token]
    return render json: { email: '' } if !token
    payload = JWT.decode token, ENV['JWT_SECRET'], true, {alg: 'HS256'}
    email_index = payload.find_index { |el| el.has_key? 'email' }
    email = payload[email_index]['email']
    user = User.find_by(email: email)
    if user
      render json: { email: email }
    else
      render json: { email: '' }
    end
  end
end
