class AuthController < ApplicationController
  include AuthHelper
  def create
    sign_in
  end

  def destroy
    cookies.delete :token
  end
end
