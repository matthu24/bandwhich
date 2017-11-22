import { postUser, deleteSession, postSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});



export const signup = formUser => dispatch => {
  postUser(formUser).then(user => dispatch(receiveCurrentUser(user)));
};

export const login = formUser => dispatch => {
  postSession(formUser).then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
  deleteSession().then(() => dispatch(receiveCurrentUser(null)));
};
