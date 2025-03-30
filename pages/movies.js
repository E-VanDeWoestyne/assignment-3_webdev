
import { useEffect, useState } from "react";
import Navbar from ".../components/Navbar";
import Footer from ".../components/Footer";
import MovieForm from ".../components/MovieForm";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Movies List</h2>
        <MovieForm setMovies={setMovies} />
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} className="border p-2 mb-2">
              {movie.title} ({movie.releaseYear}) - {movie.actors.join(", ")}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
