import { useState } from "react";

export default function MovieForm({ setMovies }) {
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, actors: actors.split(","), releaseYear: parseInt(releaseYear) }),
    });
    const newMovie = await res.json();
    setMovies((prev) => [...prev, newMovie]);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 mr-2" />
      <input type="text" placeholder="Actors (comma separated)" value={actors} onChange={(e) => setActors(e.target.value)} className="border p-2 mr-2" />
      <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} className="border p-2 mr-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Add Movie</button>
    </form>
  );
}
