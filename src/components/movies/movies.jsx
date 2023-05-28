import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeMoviesFav } from '../../store/Actions/moviesFav';
import Spinner from '../spinner/spinner';
import Card from 'react-bootstrap/Card';
import './movies.css';

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const loader = useSelector(state => state.loader.loader);
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    console.log('did mount')
    setMovies(props.movies);
  }, [props]);

  // componentDidUpdate
  useEffect(() => {
    console.log('did update')
    // Code to be executed when 'movies' state or any other dependency updates
  }, [movies]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('will unmount')
      // Cleanup code to be executed when component is unmounted
    };
  }, []);

  const moviesFavourites = useSelector(state => state.moviesFav.moviesFavo);

  const addMoviesFav = (movie) => {
    let check = moviesFavourites.find((item) => item.id === movie.id);
    if (check) {
      let favoritesAfterDelete = moviesFavourites.filter(item => item.id !== movie.id);
      dispatch(changeMoviesFav(favoritesAfterDelete));
    } else {
      dispatch(changeMoviesFav([...moviesFavourites, movie]));
    }
  };

  const findMoviesFavourites = (movieId) => {
    return moviesFavourites.some(movie => movie.id === movieId);
  };

  // render
  return (
      <section className="container-fluid">
        {loader ? (
            <Spinner />
        ) : (
            <article className="row row-cols-3 row-cols-sm-4  row-cols-md-5 row-cols-lg-6  my-5 justify-content-center  g-2">
              {movies.length > 0 &&
                  movies.map((movie) => {
                    if (movie.backdrop_path != null) {
                      return (
                          <Card className="m-1 m-sm-2" key={movie.id}>
                            <Card.Img
                                variant="top"
                                alt="error in server"
                                src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
                            />
                            <Card.Body className="d-flex flex-column px-0 px-sm-2">
                              <h5 className="flex-grow-1 font-responsive1">{movie.title}</h5>
                              <i
                                  role="button"
                                  className="bi bi-star-fill fs-4"
                                  style={
                                    findMoviesFavourites(movie.id)
                                        ? { color: 'orange' }
                                        : { color: 'lightgray' }
                                  }
                                  onClick={() => addMoviesFav(movie)}
                              ></i>
                              <Card.Text className="font-responsive2">{movie.release_date}</Card.Text>
                              <Link to={`/movie/${movie.id}`} className="font-responsive2">
                                More Details
                              </Link>
                            </Card.Body>
                          </Card>
                      );
                    } else {
                      return null;
                    }
                  })}
            </article>
        )}
      </section>
  );
};

export default Movies;
