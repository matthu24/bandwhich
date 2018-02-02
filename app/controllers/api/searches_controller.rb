class Api::SearchesController < ApplicationController
  def index
    @artists = Artist.top_results(search_params[:query])
    @albums = Album.top_results(search_params[:query])
    @tracks = Track.top_results(search_params[:query])
    render :index
  end


  def search_params
    params.require(:search).permit(:query)
  end
end
