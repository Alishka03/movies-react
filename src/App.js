import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Movies from './components/movies/movies';
import MovieDetails from './components/details/movieDetails';
import NotFound from './components/not Found/notFound';
import MoviesFavorites from './components/moviesfavorites/moviesFavorites';
import { useState } from 'react';
import { LanguageProvider } from './contexts/language'
import MoviesUseThunk from './components/moviesUseThunk/moviesUseThunk';
import Search from './components/search/Search';

function App() {

  const [language, setLanguage] = useState('ar')


  return (
    <>
      <LanguageProvider value={{ language, setLanguage }}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/search" element={<Search></Search>} />
          <Route path="/search/:value" element={<Search></Search>} />
          <Route path="/moviesFavorites" element={<MoviesFavorites></MoviesFavorites>} />
          <Route path="/movie/:id" element={<MovieDetails></MovieDetails>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </LanguageProvider>
    </>
  );
}

export default App;
