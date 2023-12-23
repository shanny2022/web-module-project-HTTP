import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Route, Routes, Navigate } from "react-router-dom";
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import EditMovieForm from './components/EditMovieForm'; // Assuming you have this component for editing movies
import AddMovieForm from './components/AddMovieForm'; // new import
import MovieHeader from './components/MovieHeader';

import FavoriteMovieList from './components/FavoriteMovieList';

import axios from 'axios';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9000/api/movies')
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteMovie = (id) => {
    axios.delete(`/api/movies/${id}`)
      .then(() => {
        setMovies(movies.filter(movie => movie.id !== id));
        navigate('/movies');
      })
      .catch(err => {
        console.error(err);
      });
  };

  const addToFavorites = (movie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" > HTTP / CRUD Module Project</span>
      </nav>

      <div className="container">
        <MovieHeader />
        <div className="row ">
          <FavoriteMovieList favoriteMovies={favoriteMovies} />

          <Routes>
            <Route path="movies/edit/:id" element={<EditMovieForm />} />
            <Route path="movies/:id" element={<Movie deleteMovie={deleteMovie} />} />
            <Route path="movies" element={<MovieList movies={movies} deleteMovie={deleteMovie} addToFavorites={addToFavorites} />} />
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="/movies/add" element={<AddMovieForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
