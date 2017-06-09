import React from 'react';

const MovieListEntry = (props) => {

  // Making the style conditional on our `state` lets us 
  // update it based on user interactions.
  // react style accepts the camel case
  var style = {
    "backgroundColor": props.movie.watched ? "lightGreen": "white"
  };

  // You can pass inline styles using React's `style` attribute to any component
  // snake-cased css properties become camelCased this this object
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