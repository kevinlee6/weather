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
      unit = user.unit
      render json: { email: email, unit: unit }
    else
      cookies.delete :token
      render json: { error: error_message }, status: 404
    end
  end

  # decryption methods
  def decrypt_cookie
    cookies.encrypted[:token]
  end

  def decode_jwt(token)
    JWT.decode token, ENV['JWT_SECRET'], true, { alg: 'HS256' }
  end

  def get_user_from_token(payload)
    email_index = payload.find_index { |el| el.has_key? 'email' }
    email = payload[email_index]['email']
    user = User.find_by(email: email)
  end

  def extract_user_from_cookie
    token = decrypt_cookie
    return if !token
    payload = decode_jwt token
    get_user_from_token payload
  end
end
