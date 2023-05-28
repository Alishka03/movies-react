
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance/axiosInstance';

const Pagination = (props) => {
    let [page, setpage] = useState(1);
    const handelPrev = () => {
        localStorage.setItem('page', page - 1);
        setpage(page - 1)
    }

    const handelNext = () => {
        localStorage.setItem('page', page + 1);
        setpage(page + 1)
    }
    const changePage = (number) => {
        localStorage.setItem('page', number);
        setpage(number)
    }


    useEffect(() => {
        if (localStorage.getItem('page') != null) {
            setpage(parseInt(localStorage.getItem('page')))
            getDataByPage(parseInt(localStorage.getItem('page')))
        } else {
            getDataByPage(page)
        }
    }, [page]);

    function getDataByPage(number) {
        axiosInstance.get(`/movie/popular?&page=${number}`).then((response) => {
            props.setmovies(response.data.results)
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <section className='mb-5'>
            <nav aria-label="Page navigation ">
                <ul className="pagination justify-content-center">
                    <li>
                        <button type="button" className={`page-link rounded-start rounded-0   ${(page === 1) ? 'disabled text-muted  bg-dark ' : ""}`} onClick={handelPrev}>&laquo;</button></li>
                    <li>
                        <span className="page-link  text-primary " > page : {page}</span></li>
                    <li>
                        <button type="button" className={`page-link ${(page === 1) ? 'bg-primary text-white ' : ''}`} onClick={() => changePage(1)}>1</button></li>
                    <li>
                        <button type="button" className={`page-link ${(page === 2) ? 'bg-primary text-white' : ''}`} onClick={() => changePage(2)}>2</button></li>
                    <li>
                        <button type="button" className={`page-link ${(page === 3) ? 'bg-primary text-white ' : ''}`} onClick={() => changePage(3)}>3</button></li>
                    <li>
                        <button type="button" className={`page-link rounded-end rounded-0  ${(page === 10) ? 'disabled text-muted  border-dark' : ""}`} onClick={handelNext}>&raquo;</button></li>
                </ul>
            </nav>
        </section>

    );
}

export default Pagination;
