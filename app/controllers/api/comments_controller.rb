class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    @comment = current_user.comments.new(comment_params)
    # @comment.user_id = current_user.id
    @comment.artist_id = params[:artist_id]
    if @comment.save
      # render "/api/comments/show"
      render :show
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
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    render "/api/comments/show"
  end

  def comment_params

    params.require(:comment).permit(:body)
  end


end
