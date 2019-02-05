class UserLocationsController < ApplicationController
  before_action :set_user, only: [:index]
  before_action :get_locations, only: [:index]

  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def set_user
    @user = User.find_by email: email 
  end

  def get_locations
    @locations = @user.locations
  end
end
