import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Movie = (props) => {
  const { deleteMovie } = props;


  const [movie, setMovie] = useState('');

  const { id } = useParams();

useEffect(() => {
  axios.get(`http://localhost:9000/api/movies/${id}`)
    .then(res => {
      setMovie(res.data);
      })
      .catch(err => {
        console.log(err.response);
      })
  }, [id]);

  const handleDelete = () => {
    deleteMovie(id);
  };

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">

              <section className="movie-details">
                {/* ... */}
              </section>

              <section>
                <span className="m-2 btn btn-dark">Favorite</span>
                <Link to={`/movies/edit/${movie.id}`} className="m-2 btn btn-success">Edit</Link>
                <span className="delete">
                  <input type="button" className="m-2 btn btn-danger" value="Delete" onClick={handleDelete} />
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
