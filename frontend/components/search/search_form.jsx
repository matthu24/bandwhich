import React from 'react';
import { Link } from 'react-router-dom';


class SearchForm extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {search:''}
  }

  handleSubmit(e){
    e.preventDefault();

  }

  handleChange(e){
    e.preventDefault();

    this.setState({search:e.target.value})
    this.props.fetchSearchResults(this.state.search);
  }

  render(){
    return(

      <div className='search-bundle'>
        <form onSubmit={this.handleSubmit} className='search-container' >
          <Link to='/search'>
            <input value={this.state.search} onChange={this.handleChange} id='search-form' className='search-form' type='text' autocomplete='off' placeholder='Search an artist, album, or song'/>

        </Link>
        </form>
        <ul className='suggestions'>
          <li>hello?</li>
          <li>hello2</li>
          <li>hey</li>
          <li>hi</li>
        </ul>
      </div>
    )
  }
}

export default SearchForm;
