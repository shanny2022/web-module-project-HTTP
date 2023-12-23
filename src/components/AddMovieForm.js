import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddMovieForm = () => {
    const [movie, setMovie] = useState({ title: '', director: '', genre: '', metascore: '', description: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:9000/api/movies', movie)
        .then(() => {
          navigate('/movies');
        })
        .catch(err => {
          console.error(err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Title" required />
          <input type="text" name="director" value={movie.director} onChange={handleChange} placeholder="Director" required />
          <input type="text" name="genre" value={movie.genre} onChange={handleChange} placeholder="Genre" required />
          <input type="number" name="metascore" value={movie.metascore} onChange={handleChange} placeholder="Metascore" required />
          <textarea name="description" value={movie.description} onChange={handleChange} placeholder="Description" required />
          <input type="submit" value="Add Movie" />
        </form>
      );
  };

  export default AddMovieForm;
