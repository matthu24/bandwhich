import { RECEIVE_COMMENT,RECEIVE_COMMENTS,REMOVE_COMMENT } from '../actions/comment';
import merge from 'lodash/merge';



export default (comments={},action) => {
  Object.freeze(comments);
  switch (action.type) {
    case RECEIVE_COMMENTS:
     return merge({},action.comments);
    case RECEIVE_COMMENT:
      return merge({},comments,{[action.comment.id]:action.comment});
      // return action.artist;
    case REMOVE_COMMENT:
      let newState = comments;
      delete newState[action.comment.id];
      return newState;
    default:
      return comments;
  }
};
