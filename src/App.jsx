import BaseCard from './BaseCard.jsx'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://dummyapi.online/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div className="hero-bg bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="movie-list grid grid-cols-4" >
        {movies.map((movie) => (
          <BaseCard key = {movie.id} movie = {movie}/>
        ))}
      </div>
    </div>
  )
}

export default App
