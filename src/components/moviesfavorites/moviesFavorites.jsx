

import React, { useEffect, useState } from 'react';
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeMoviesFav } from '../../store/Actions/moviesFav';

const MoviesFavorites = () => {
    const favorites = useSelector(state => state.moviesFav.moviesFavo)
    const dispatch = useDispatch()
    const [movies, setMovies] = useState(favorites);
    const deleteMovFav = (movieId) => {
        let favoritesAfterDelete = favorites.filter(movie => movie.id != movieId)
        dispatch(changeMoviesFav(favoritesAfterDelete))
    }

    useEffect(() => {
        setMovies(favorites)
    }, [favorites]);

    return (
        <section className="container-fluid " >
            <article className="row row-cols-3 row-cols-sm-4  row-cols-md-5 row-cols-lg-6  my-5 justify-content-center  g-2">
                {(favorites.length > 0) ? (movies.map((movie) => {
                    if (movie.backdrop_path != null) {
                        return (<Card className="m-1 m-sm-2" key={movie.id} >
                            <Card.Img variant="top" alt='error in server' src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} />
                            <Card.Body className='d-flex flex-column px-0 px-sm-2  '>
                                <h5 className='flex-grow-1  font-responsive1 '  >{movie.title}</h5>
                                <div className='my-sm-2 mx-2 text-end'   >
                                    <OverlayTrigger
                                        overlay={
                                            <Tooltip id={movie.id}>
                                                <small  >delete from Favorite</small>
                                            </Tooltip>
                                        }
                                    >
                                        <i role='button' className="bi bi-trash font-responsive3 text-danger"  onClick={() => { deleteMovFav(movie.id) }}></i>
                                    </OverlayTrigger>
                                </div>
                                <Card.Text className='font-responsive2'>{movie.release_date} </Card.Text>
                                <Link to={`/movie/${movie.id}`} className='font-responsive2' >More Details </Link>
                            </Card.Body>
                        </Card>)
                    }
                })
                ) : <h3 className='text-center w-100 '> You don't have any favorite movie</h3>}
            </article>
        </section>
    );
}

export default MoviesFavorites;
