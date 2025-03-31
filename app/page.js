import Navbar from '@/components/Navbar'; // Adjust path as needed
import Footer from '@/components/Footer'; // Adjust path as needed

const moviesData = [
  {
    title: 'The Shawshank Redemption',
    actors: ['Tim Robbins', 'Morgan Freeman'],
    releaseYear: 1994,
  },
  {
    title: 'The Godfather',
    actors: ['Marlon Brando', 'Al Pacino'],
    releaseYear: 1972,
  },
  {
    title: 'The Dark Knight',
    actors: ['Christian Bale', 'Heath Ledger'],
    releaseYear: 2008,
  },
  {
    title: 'Pulp Fiction',
    actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    releaseYear: 1994,
  },
];

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Movies List</h1>
        <ul>
          {moviesData.map((movie, index) => (
            <li key={index} className="mb-6 border p-4 rounded-md">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-700">
                <strong>Actors:</strong> {movie.actors.join(', ')}
              </p>
              <p className="text-gray-700">
                <strong>Release Year:</strong> {movie.releaseYear}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}