class Api::UsersController < ApplicationController
  def new

  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
    else

    end
  end

  def user_params
  params.require(:user).permit(:bandname,:password)
end


end
