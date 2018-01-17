class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def create 
    @album = Album.new(album_params)
    if @album.save!
      render 'api/albums/show'
    else
      render json: @album.errors.full_messages
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def destroy

  end

  def update

  end

  def album_params
    params.require(:album).permit(:artist_id,:title,:year,:image_file_name)
  end
end
