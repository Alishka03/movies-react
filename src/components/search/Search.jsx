import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance/axiosInstance';
import Movies from '../movies/movies';
import { useDispatch, useSelector } from 'react-redux';
import changeValueOfSearch from '../../store/Actions/action_search';

const Search = () => {

    const [inputval, setinputval] = useState('');
    const [moviesOfSearch, setMoviesOfSearch] = useState([]);
    const valueOfSearch = useSelector(state => state.valueOfSearch.valueOfSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        setinputval(valueOfSearch)
        handelSearch(valueOfSearch)
    }, [valueOfSearch])
    const setValueOfSearch = (ev) => {
        setinputval(ev.target.value)
    }

    const handelSearch = (val) => {

        dispatch(changeValueOfSearch(val))
        axiosInstance.get(`/search/movie?&query=${val}`).then((response) => {
            setMoviesOfSearch(response.data.results)
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <section>
            <main className=' flex-column  d-flex  justify-content-center ' >

                <h3 className=' text-center m-sm-3'>
                    <span className='text-white border-bottom border-3 border-dark'>Search</span>
                </h3>

                <div className="  input-group w-50 mx-auto around-0 ">
                    <input type="text" className="form-control rounded-0" placeholder="Search" value={inputval} onChange={(e) => { setValueOfSearch(e) }} />

                    <button type="button"
                            className={`btn btn-dark rounded-0 `} onClick={() => handelSearch(inputval)} ><span >Search</span></button>
                </div>
            </main>
            {(moviesOfSearch.length) ? <Movies movies={moviesOfSearch} /> : <h6 className='text-center m-sm-5' >No Result of Search </h6>}
        </section >
    );
}

export default Search;
