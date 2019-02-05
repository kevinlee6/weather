class LocationsController < ApplicationController
  def create
    location_params.
  end

  private
  def set_location
    @location = Location.find(city: )
  end

  def location_params
    params.permit(:city, :country)
  end
end