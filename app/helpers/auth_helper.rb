module AuthHelper
  def self.gen_jwt(payload)
    JWT.encode(payload, ENV['JWT_SECRET'], 'HS256') 
  end

  def self.sign_in(email, password)
    user = User.find_by(email: email)
    pass = user && user.authenticate(password)
    return if !pass
    payload = { user: user.id }
    self.gen_jwt(payload)
  end
end
