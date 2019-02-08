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
      get_favorites user
    else
      cookies.delete :token
      render json: { error: error_message }, status: 404
    end
  end

  def get_favorites(user)
    email = user.email
    unit = user.unit
    id = user.id

    # could maybe do sort in frontend to lessen server load
    query =
      <<-SQL 
        SELECT a.priority, b.city, b.country, b.city_id
        FROM user_locations AS a
        LEFT JOIN locations AS b
          ON b.id = a.location_id
        WHERE a.user_id = #{id}
        ORDER BY a.priority
      SQL

    user_locations = ActiveRecord::Base.connection.execute(query)
    render json: { email: email, unit: unit, user_locations: user_locations}
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
    User.find_by(email: email)
  end

  def extract_user_from_cookie
    token = decrypt_cookie
    return if !token
    payload = decode_jwt token
    get_user_from_token payload
  end
end
