import React from 'react';

const MovieListEntry = (props) => {

  // react style accepts the camel case
  var style = {
    backgroundColor: props.movie.watched ? "light-green": 'white'
  };

  return (
    <div className="movieListEntry">
      <div className="movieTitle">
        {props.movie.title}
      <input type="button"
             className="watched"
             value="unwatched"
             style={style}
             onClick={()=>{props.checkWatched(props.movie);}}/>
      </div>
    </div>
  );
}

export default MovieListEntry;