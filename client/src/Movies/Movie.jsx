import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null, error: ""
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentDidUpdate(previousProps) {
    if (this.props.match.params.id !== previousProps.match.params.id) {
      this.fetchMovie(this.props.match.params.id);
    }
  }

  fetchMovie = id => {
    this.setState({movie:null,error:""});
    axios
      .get(`/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(() => this.setState({error: "This movie could not be loaded."}));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (this.state.error) return <p role="alert">{this.state.error}</p>;
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <button className="save-button" onClick={this.saveMovie}>
          Save
        </button>
      </div>
    );
  }
}
