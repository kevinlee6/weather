class ApplicationController < ActionController::API
  include ::ActionController::Cookies

  def react_app
    render file: 'frontend/public/index.html'
  end
end
