import {search} from '../utils/search_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});


export const fetchSearchResults = query => dispatch => {
  search(query).then(results => dispatch(receiveResults(results)));
}
