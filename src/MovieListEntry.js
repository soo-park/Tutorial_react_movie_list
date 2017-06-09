import React from 'react';

const MovieListEntry = (props) => {

  // react style accepts the camel case
  var style = {
    "backgroundColor": props.movie.watched ? "lightGreen": "white"
  };

  return (
    <div className="movieListEntry">
      <div className="movieTitle">
        {props.movie.title}
      <input type="button"
             className="watched"
             value="watched"
             style={style}
             onClick={()=>{props.toggleWatched(props.movie);}}/>
      </div>
    </div>
  );
}

export default MovieListEntry;