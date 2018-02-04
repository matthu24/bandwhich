import React from 'react';
import { connect } from 'react-redux';
import SearchIndex from './search_index';

//search_results is an array of search item objects
const mapStateToProps = state => ({
  search_results: state.entities.searches.searchResults
});


const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
