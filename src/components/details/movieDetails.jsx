import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosInstance from '../../axiosInstance/axiosInstance';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from '../spinner/spinner';
import {useSelector} from 'react-redux';

const MovieDetails = () => {
    const [movie, setmovie] = useState({});
    const loader = useSelector(state => state.loader.loader)
    const {id} = useParams()
    useEffect(() => {
        axiosInstance.get(`movie/${id}`).then(result => {
            setmovie(result.data)
        }).catch(error => console.log(error))
    }, []);


    return (<section className='row mx-auto  my-md-3 '>
            {(loader) ? <Spinner/> :
                <article className='col-11  col-md-9  col-lg-7 mx-auto mb-5'>
                    <div className=' text-center p-3'>
                        <h5>Movie Details</h5>
                    </div>
                    <Card>
                        <Card.Img variant="top" className='img-responsive'
                                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path
                                  }`}/>
                        <Card.Body>
                            <Card.Title>{movie.original_title}</Card.Title>
                            <Card.Text>{movie.overview} </Card.Text>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{movie.tagline}</ListGroup.Item>
                            <ListGroup.Item>{movie.status}</ListGroup.Item>
                            <ListGroup.Item>{movie.release_date} </ListGroup.Item>

                            {/* <Image  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} ></Image> */}


                        </ListGroup>

                    </Card>
                </article>}

        </section>

    );
}

export default MovieDetails;
