import React from 'react';
import { connect } from 'react-redux';
import {fetchAllComments, createSingleComment, updateSingleComment,deleteSingleComment} from '../../actions/comment';
import CommentForm from './comment_form';
// import {withRouter} from 'react-router-dom';

import {values} from 'lodash';

//track is like ownprops destructured
const mapStateToProps = (state,{artist}) => {

  return{
  comments: values(state.entities.comments),
  currentUser: state.session.currentUser,
  artist};
};

const mapDispatchToProps = dispatch => ({
  fetchAllComments: (artistId) => dispatch(fetchAllComments(artistId)),
  createSingleComment: (comment,artistId) => dispatch(createSingleComment(comment,artistId)),
  updateSingleComment: (comment,artistId) => dispatch(updateSingleComment(comment,artistId)),
  deleteSingleComment: (commentId) => dispatch(deleteSingleComment(commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
