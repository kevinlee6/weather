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
    user = extract_user_from_cookie
    if user
      email = user.email
      unit = user.unit

      @id = user.id
      query = <<-SQL 
        SELECT a.priority, b.city, b.country, b.city_id
        FROM user_locations AS a
        LEFT JOIN locations AS b
          ON b.id = a.location_id
        WHERE a.user_id = #{@id}
        ORDER BY a.priority
      SQL

      user_locations = ActiveRecord::Base.connection.execute(query)
      render json: { email: email, unit: unit, user_locations: user_locations}
    else
      render json: { email: '' }
    end
  end
end
