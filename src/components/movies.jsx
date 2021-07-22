import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
// import { getMoviese } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies,
    // movies: getMoviese(),
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {this.state.movies.map((movie) => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInstock}</td>
              <td>{movie.dailyRentalRate}</td>
              <button className="btn btn-danger btn-sm"> Delete </button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
