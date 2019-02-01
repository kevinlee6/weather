class AuthController < ApplicationController
  def create
    email, password = params[:email], params[:password]
    token = AuthHelper.sign_in(email, password)
    if token
      cookies.encrypted[:token] = {value: token, httponly: true}
      render json: { message: 'Sign in successful'}
    else
      cookies.delete :token
      error_message = 'Username or password incorrect'
      render json: { error: error_message }, status: 404
    end
  end

  def destroy
    cookies.delete :token
  end
end
