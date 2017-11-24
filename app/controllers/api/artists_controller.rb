class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save!
      render '/api/artists/show'
    else
      render json: @artist.errors.full_messages
    end
  end

  def show
    @artist = Artist.find(params[:id])
  end

  def destroy

  end

  def update

  end

  def artist_params
    params.require(:artist).permit(:name,:genre,:image_file_name)
  end

end
