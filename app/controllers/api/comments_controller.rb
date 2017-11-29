class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.artist_id = params[:artist_id]
    if @comment.save

      render "/api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update_attributes(comment_params)
      
    else
      render json: @comment.errors.full_messages, status: 401

    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @commetn.destroy
  end

  def user_params
    params.require(:comment).permit(:body)
  end


end
