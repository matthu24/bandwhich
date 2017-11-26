class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def create
    @track = Track.new(track_params)
    if @track.save!
      render '/api/tracks/show'
    else
      render json: @track.errors.full_messages
    end

  end

  def show
    @track = Track.find(params[:id])
  end

  def track_params
    params.require(:track).permit(:artist_id,:album_id,:title,:track_num,:audio_file_name)
  end

end
