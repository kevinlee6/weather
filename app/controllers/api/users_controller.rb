class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # Don't want users to potentially access all users for this app
  # def index
  #   @users = User.all
  #   render json: @users
  # end

  # GET /api/users/1
  def show
    render json: @user
  end

  # POST /api/users
  def create
    # reject if password != confirmation
    user = params[:user]
    password, confirm = user[:password], user[:confirm]
    error = handle_create_errors(password, confirm)

    return render json: error if error

    @user = User.new(user_params.except :confirm)

    if @user.save
      # Don't need anyone seeing password-related stuff after save
      render json: @user.to_json(except: :password_digest), status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/users/1
  def destroy
    @user.destroy
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :password, :confirm)
    end

    def handle_create_errors(password, confirm)
      error_message = "Passwords do not match"
      { "error": error_message } if password != confirm
    end
end
