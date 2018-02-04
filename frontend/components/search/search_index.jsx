import React from 'react';

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
        {
          this.props.search_results.map(result => <li>{result.type}</li>)
        }
      </div>
    )
  }
}

export default SearchIndex;
