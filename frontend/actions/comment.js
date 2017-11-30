import { fetchArtistComments,createComment,updateComment,deleteComment } from '../utils/comment_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchAllComments = artistId => dispatch => {
  return fetchArtistComments(artistId).then(comments => dispatch(receiveComments(comments)));
};

export const createSingleComment = (comment,artistId) => dispatch => {
  return createComment(comment,artistId).then(newComment => dispatch(receiveComment(newComment)));
};

export const updateSingleComment = (comment,artistId) => dispatch => {
  return updateComment(comment,artistId).then(newComment => dispatch(receiveComment(newComment)));
}

export const deleteSingleComment = (commentId) => dispatch => {
  return (deleteComment(commentId).then(comment => dispatch(removeComment(comment))));
};
