Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins (ENV['RAILS_ENV'] == 'production' ?
      'https://weather-kevinlee6.herokuapp.com' :
      'localhost:3000')

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
