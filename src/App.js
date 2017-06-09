import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddTitle from './AddTitle.js';
import Watched from './Watched.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.searchMovies = (query) => {
      let movies = this.state.movies.filter((movie)=>{
        return movie.title.slice(0, query.length) === query;
      })
      this.setState({
        visibleMovies:  movies
      })
    };

    this.getMoviesByWatched = (watched) => {
      if (watched === "watched") {
        this.setState({ watched: !this.state.watched, toWatch: false });
        let movies = this.state.movies.filter((movie)=>{
          return movie.watched === false;
        })
        this.setState({
          visibleMovies: movies
        })
       } else {
        this.setState({ toWatch: !this.state.toWatch, watched: false });
        let movies = this.state.movies.filter((movie)=>{
          return movie.watched === true;
        })
        this.setState({
          visibleMovies: movies
        })
      }
    };

    this.addTitle = (title) => {
      this.setState({
        movies: this.state.movies.concat([{ title: title, watched: false }]),
        visibleMovies: this.state.visibleMovies.concat([{ title: title, watched: false }])
      })
    };

    this.toggleWatched = (movie) => {
      movie.watched = !movie.watched;
      this.setState({movies: this.state.movies});

    }

    this.state = {
      movies: this.props.movies,
      visibleMovies: this.props.movies,
      watched: false,
      toWatch: false     
    }

  }

  render() {  
    return (
      <div className="App">
        <div className="MovieListTitle">Movie List</div>
        <AddTitle addTitle={this.addTitle} />
        <Watched watched={this.state.watched} toWatch={this.state.toWatch} getMoviesByWatched={this.getMoviesByWatched} />
        <Search searchMovies={this.searchMovies} />
        <MovieList movies={this.state.visibleMovies} toggleWatched={this.toggleWatched} />
      </div>  
    );

  }
}

export default App;
