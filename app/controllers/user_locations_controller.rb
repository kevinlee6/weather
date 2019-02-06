class UserLocationsController < ApplicationController
  include AuthHelper
  before_action :get_user, only: [:index, :create]
  before_action :get_location, only: [:create]
  before_action :get_locations, only: [:index]

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

      if @user_location.save
        render json: @user_location
      else
        destroy
      end
    end
  end

  def update
  end

  def destroy
    UserLocation.destroy @user_location.id
  end

  private
  def get_user
    @user = extract_user_from_cookie
  end

  def get_locations
    @locations = @user.user_locations
  end

  def get_location
    @location = Location.find_by(user_location_params)
  end

  def get_user_location
    @user_location = UserLocation.find_by(user_id: @user.id, location_id: @location.id)
  end

  def user_location_params
    params.permit(:city, :country, :city_id)
  end
end
