class LocationsController < ApplicationController
  def create
    @location = Location.new(location_params)

    if @location.save
      render json: @location
    else
      render json: @location.errors
    end
  end

  private
  def set_location
    @location = Location.find(location_params)
  end

  def location_params
    params.permit(:city, :country)
  end
end