import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import languageContext from '../../contexts/language';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useNavigate} from 'react-router-dom';
import changeValueOfSearch from '../../store/Actions/action_search';
import {ToastContainer, toast} from 'react-toastify';
const Header = () => {
    const navigate = useNavigate();
    const counterOfMoviesFavorites = useSelector(state => state.moviesFav.moviesFavo.length)
    const [inputval, setinputval] = useState('');
    const dispatch = useDispatch()
    const handelSearch = () => {
        if ((inputval.trim()).length >= 1) {
            dispatch(changeValueOfSearch(inputval))
            navigate(`/search`);
            setinputval('')
        } else {
            toast.warning("Enter a word the search");
        }
    }

    return (
        <>
            {/* <ToastContainer /> */}
            <Navbar bg="primary" expand='sm' className="mb-3  sticky-top">
                <a className="navbar-brand" href="#">Movies app</a>
                <Container fluid className='px-md-5'>
                    <ul className="navbar-nav  mt-lg-0">
                        <li className="nav-item">
                            <NavLink className='m-1 m-md-2 text-decoration-none'
                                     style={({isActive}) => (isActive) ? {color: 'blue'} : {color: "#abc"}} to="/">
                                Home</NavLink>
                            <NavLink className='m-1 m-md-2 text-decoration-none'
                                     style={({isActive}) => (isActive) ? {color: 'blue'} : {color: "#abc"}}
                                     to="/moviesFavorites">
                                Favorite Movies</NavLink>
                        </li>
                    </ul>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm'/>
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand-sm'
                        aria-labelledby='offcanvasNavbarLabel-expand-sm'
                        placement="end"
                        className="w-75"
                    >
                        <Offcanvas.Header closeButton>

                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <div className=' text-warning me-sm-2 '>
                                    <i role="button" className="bi bi-star-fill fs-4 me-1"> </i>
                                    <span className='fs-4'>{counterOfMoviesFavorites}</span>
                                </div>
                                <div className="  col-sm-7  col-md-5 col-lg-4 ">
                                    <div className="  input-group  ">
                                        <input type="text" value={inputval} className="form-control"
                                               placeholder="Search" onChange={(e) => {
                                            setinputval(e.target.value)
                                        }}/>

                                        <button type="button" id="button-addon2"
                                                className={`btn btn-outline-success  `} onClick={handelSearch}>Search
                                        </button>
                                    </div>
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover

            />
        </>


    );

}


export default Header;
