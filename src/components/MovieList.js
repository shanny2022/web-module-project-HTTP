import React from 'react';
import { Link } from 'react-router-dom';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';


const MovieList = (props) => {
  const { movies,  } = props;

  return (
    <div className="col">
      <Link to="/movies/add">Add Movie</Link>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Metascore</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)
          }
        </tbody>
      </table>
      <MovieFooter totalMovies={movies.length} />
    </div>
  );
}

export default MovieList;
