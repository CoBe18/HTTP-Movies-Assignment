import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], error: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/movies")
      .then(res => this.setState({ movies: res.data }))
      .catch(() => this.setState({error: "Movies could not be loaded. Please try again."}));
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.error && <p role="alert">{this.state.error}</p>}
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
