import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async () => {
  const movies = await getData();
  return (
    <main className="flex min-h-screen flex-col justify-start p-24 bg-slate-300">
      <AddMovie />
      <MovieList movie={movies} />
    </main>
  );
};

export default page;
