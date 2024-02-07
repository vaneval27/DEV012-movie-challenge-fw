import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import MovieList from './components/MoviesList'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=84ebe95e82049e14d7681db34ef740d3")
      .then((response) => response.json())
      .then(responseData => setMovies (responseData.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <MovieList movies={movies}/>
      <Footer />
    </div>
  );
};

export default App
