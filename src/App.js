import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddTitle from './AddTitle.js';

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

    this.addTitle = (title) => {
      this.setState({
        movies: this.state.movies.concat([{ title: title, watched: false }]),
        visibleMovies: this.state.visibleMovies.concat([{ title: title, watched: false }])
      })
      console.log(title);
    };

    this.checkWatched = (movie) => {
      movie.watched = true;
      this.setState({movies: this.state.movies});
      console.log(this.state.movies)
    }

    this.state = {
      movies: this.props.movies,
      visibleMovies: this.props.movies
    }

  }

  render() {  
    return (
      <div className="App">
        <div className="MovieListTitle">Movie List</div>
        <AddTitle addTitle={this.addTitle} />
        <Search searchMovies={this.searchMovies} />
        <MovieList movies={this.state.visibleMovies} checkWatched={this.checkWatched} />
      </div>  
    );

  }
}

export default App;
