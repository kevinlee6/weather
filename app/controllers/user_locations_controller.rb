class UserLocationsController < ApplicationController
  include AuthHelper
  include UserLocationsHelper
  before_action :get_user, only: [:index, :create, :reorder]
  before_action :get_location, only: [:create]
  before_action :get_user_locations, only: [:index, :reorder]

  def index
  end

  def create
    return if !@user
    if !@location
      # use location.create method
      @location = Location.new(user_location_params)
      return if !@location.save
    end

    user_id = @user.id
    location_id = @location.id
    get_user_location
    if @user_location
      destroy
    else
      @user_location = UserLocation.new(user_id: user_id, location_id: location_id)

      if !@user_location.save
        destroy
      end

      render json: { location: @location, favorite: @user_location }
    end
  end

  def reorder
    size = @user_locations.size
    handle_reorder(size, update_params)
  end

  def destroy
    @priority = @user_location.priority
    UserLocation.destroy @user_location.id
    update_priorities
    render json: { location: @location }
  end

  private
  def get_user
    @user = extract_user_from_cookie
  end

  def get_user_locations
    @user_locations = @user.user_locations
  end

  def get_location
    @location = Location.find_by(user_location_params)
  end

  def get_user_location
    @user_location = UserLocation.find_by(user_id: @user.id, location_id: @location.id)
  end

  def update_priorities
    get_user_locations
    # probably better method than this
    @user_locations.update_all("priority =
      CASE
        WHEN priority > #{@priority}
          THEN priority - 1
        ELSE priority
      END")
  end

  def user_location_params
    params.permit(:city, :country, :city_id)
  end

  def update_params
    params.permit(:destination, :source)
  end
end
