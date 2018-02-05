import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (!this.props.search_results) {
      return null;
    }
    return(
      <div className="search">
        <ul className='search-list'>
        {
          this.props.search_results.map((result,idx) =>
            <SearchIndexItem artists={this.props.artists} key={idx} result={result}/>
          )
        }
        </ul>
      </div>
    )
  }
}

export default SearchIndex;
