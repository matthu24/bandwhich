import React from 'react';

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
    this.setState({search:e.target.value})
  }

  render(){
    return(

      <div>
        <form onSubmit={this.handleSubmit} className='search-container' >
          <input onChange={this.handleChange} id='search-form' className='search-form' type='text' placeholder='Search an artist, album, or song'/>
        </form>
      </div>
    )
  }
}

export default SearchForm;
