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

  //we don't need all the bullshit in handleChange
  handleChange(e){
    e.preventDefault();
    this.setState({search:e.target.value})
    // const query = Object.assign({}, this.state)
    this.props.fetchSearchResults(this.state.search);
    // let suggestions = document.querySelector('.suggestions');
    //
    // if(!this.props.searchResults) return null;
    // let html = this.props.searchResults.slice(0,3).map(result => {
    //   let id = result.name ? result.id : result.artist_id
    //   let name = result.name ? result.name : result.title;
    //   let url= "/artists";
    //   return `
    //
    //     <li>
    //             <Link to="${url}">
    //       <span>${name}</span>
    //       <span>${result.type}</span>
    //         </Link>
    //     </li>
    //
    //   `
    // }).join('')
    // suggestions.innerHTML = html;
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
        <Dropdown results={this.props.searchResults}/>
      </div>
    )
  }
}

export default SearchForm;
