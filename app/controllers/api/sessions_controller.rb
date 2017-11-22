class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:bandname],params[:user][:password])
    if user
      sign_in(user)
    else

    end
  end

  def destroy
    sign_out
  end
end
