import React from 'react';

const Search = (props) => {
  return (
    <div className="searchBar">
      <input type="text"
             ref={(input) => {this.textInput = input;}} />
      <input type="button" value="GO" onClick={()=>(props.searchMovies(this.textInput.value))}/>
    </div>
  )
}

export default Search;