
import React, { useState } from 'react';
import Pagination from '../pagination/pagination';
import Movies from '../movies/movies';
const Home = () => {
    const [movies, setmovies] = useState([]);
    return (
        <section>
           <Movies movies={movies}/>
    <Pagination setmovies={setmovies} ></Pagination>
        </section>
    );
}

export default Home;
