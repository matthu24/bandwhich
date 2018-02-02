import React from 'react';

class SearchForm extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <input className='search-form' type='text' placeholder='Search an artist, album, or song'/>
      </div>
    )
  }
}

export default SearchForm;
