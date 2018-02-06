import SearchForm from './search_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchSearchResults} from '../../actions/search';

const mapStateToProps = state => ({
  searchResults: state.entities.searches.searchResults

});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
});






export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
