import React from 'react';
import MovieListEntry from './MovieListEntry.js'


const MovieList = (props) => {

  const MovieListEntries = props.movies.map((movie, idx) => (
    <MovieListEntry key={idx} movie={movie} toggleWatched={props.toggleWatched}/>
  ));

  return (
    <div className="movieList">
      { MovieListEntries }
    </div>
  )};

export default MovieList;