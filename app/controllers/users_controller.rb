class UsersController < ApplicationController
  include AuthHelper

  def create
    # reject if password != password_confirmation
    error = UsersHelper.handle_create_errors(params)
    return render json: error if error

    @user = User.new(user_params)
    if @user.save
      sign_in
      # Don't need anyone seeing password-related stuff after save
      # render json: @user.to_json(only: :email), status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def toggle_unit
    user = extract_user_from_cookie

    if user
      current_unit = user.unit
      incoming_unit = unit_param[:unit]
      return render(json: { unit: current_unit, error: 'Units are the same' }) if incoming_unit == current_unit
      next_unit = current_unit == 'metric' ? 'imperial' : 'metric'

      if user.update_attribute(:unit, next_unit)
        render json: { unit: next_unit }
      else
        render json: user.errors, status: :unprocessable_entity
      end
    else
      render json: unit_param 
    end
  end

  private
    def unit_param
      params.permit(:unit)
    end

    def user_params
      params.permit(:email, :password)
    end
end
