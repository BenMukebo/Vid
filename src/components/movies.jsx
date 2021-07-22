import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
// import { getMoviese } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies,
    // movies: getMoviese(),
  };

  handleDelete = (movieElm) => {
    const movies = this.state.movies.filter((m) => m._id !== movieElm._id);
    this.setState({ movies: movies }); // this.setState({ movies });
  };

  render() {
    const { length: movCount } = this.state.movies;

    if (movCount === 0) return <p>Thre are no Movies in the datebase.</p>;

    return (
      <React.Fragment>
        <p>Showing {movCount} Movies in the database.</p>
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
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInstock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
