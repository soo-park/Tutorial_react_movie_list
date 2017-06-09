import React from 'react';

const Watched = (props) => {

  // react style accepts the camel case
  var style1 = {
    "backgroundColor": props.watched ? "lightGreen": "white"
  };

  var style2 = {
    "backgroundColor": props.toWatch ? "lightGreen": "white"
  }

  return (
    <div>
      <input className="Tab" type="button" value="Watched" style={style1} onClick={()=> {props.getMoviesByWatched("watched")}}/>
      <input className="Tab" type="button" value="To Watch" style={style2} onClick={()=>{props.getMoviesByWatched("toWatch")}}/>
    </div>
  )
}

export default Watched;