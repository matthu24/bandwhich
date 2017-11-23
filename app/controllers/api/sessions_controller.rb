class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
    if @user
      sign_in(@user)
      #need to render @user as json object in view so that the ajax call can receive it and hit the front end 
      render 'api/users/show'
    else
       render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    sign_out
  end
end
