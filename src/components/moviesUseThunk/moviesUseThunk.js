
import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import changeMovies from '../../store/Actions/movies';

const MoviesUseThunk = () => {

    const  dispatch = useDispatch()
    const movies =useSelector((stat)=>stat.movies.movies)
    useEffect(() => {
    // console.log(movies);
        dispatch(changeMovies())
      }, []);

    return (
        <section className="container-fluid " >
    <div className="row row-cols-4 my-5 justify-content-center align-items-center g-2">

      {movies.map((movie) => {

        return (<Card className="m-2" key={movie.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
          <Card.Body  >
            <Card.Title>{movie.title}</Card.Title>
            <i  role="button" className="bi bi-star-fill fs-4" >  </i>
            <Card.Text>{movie.release_date} </Card.Text>
            <Button variant="secandary">
              <Link to={`/movie/${movie.id}`}  >More Details </Link>
            </Button>
          </Card.Body>
        </Card>)
      })


      }
    </div>




  </section>


  );
        

}

export default MoviesUseThunk;
