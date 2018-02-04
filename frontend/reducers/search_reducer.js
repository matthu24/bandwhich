import { RECEIVE_SEARCH_RESULTS } from '../actions/search';

export default (search = {}, action) => {
  Object.freeze(search);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({},action.results);
    default:
      return search;
  }
}
