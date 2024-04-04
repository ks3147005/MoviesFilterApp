import React, { useState } from "react";
import './App.css';
import GenreFilter from './movies/GenreFilter';
import MoviesList from './movies/MoviesList';
import data from './movies/data';


function App() {
  const [filteredGenre, setFilteredGenre] = useState(null);

  const handleGenreChange = (genre) => {
    setFilteredGenre(genre);
  };

  const filteredData = filteredGenre ? data.filter((movie) => movie.genre === filteredGenre) : data;
  return (
    <div className="App">
      <h1>Top 15 Movies of All Time</h1>
     <GenreFilter onGenreChange={handleGenreChange}/>
     <MoviesList data={filteredData}/>
    </div>
  );
}

export default App;
