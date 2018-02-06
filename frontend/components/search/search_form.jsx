import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './search_dropdown';

class SearchForm extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {search:''}
  }

  componentWillReceiveNewProps(newProps){
    let suggestions = document.querySelector('.suggestions');
    suggestions.innerHTML = '';
  }

  handleSubmit(e){
    e.preventDefault();

  }

  handleChange(e){
    e.preventDefault();
    this.setState({search:e.target.value})
    this.props.fetchSearchResults(this.state.search);
  }

  //instead of rendering the empty ul right here, just render anotehr component called suggestions
  //just pass searchResults as a prop into suggestions component
  render(){
    // if (!this.props.searchResults) {
    //   return null;
    // }
    return(
      <div className='search-bundle'>
        <form onSubmit={this.handleSubmit} className='search-container' >
          <Link to='/search'>
            <input value={this.state.search} onChange={this.handleChange} id='search-form' className='search-form' type='text' autoComplete='off' placeholder='Search an artist, album, or song'/>
          </Link>
        </form>
      </div>
    )
  }
}

export default SearchForm;
