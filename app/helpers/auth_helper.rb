module AuthHelper
  def gen_jwt(payload)
    JWT.encode(payload, ENV['JWT_SECRET'], 'HS256') 
  end

  def sign_in
    email, password = params[:email], params[:password]
    user = User.find_by(email: email)
    pass = user && user.authenticate(password)
    error_message = 'Username or password incorrect'
    return render json: { error: error_message } if !pass
    payload = { email: email }
    token = self.gen_jwt(payload)

    if token
      # may want to have rails secrets
      cookies.encrypted[:token] = {value: token, httponly: true}
      render json: {email: email}
    else
      cookies.delete :token
      render json: { error: error_message }, status: 404
    end
  end
end