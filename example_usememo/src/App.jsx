import React, { useState, useMemo } from 'react';

// Assume this is a very large array of movies
const allMovies = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'The Shawshank Redemption' },
  { id: 3, title: 'The Godfather' },
  { id: 4, title: 'The Dark Knight' },
  // ...imagine thousands more movies
];

function MovieFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0); // A state to trigger re-renders

  // Without useMemo, this expensive filter would run on EVERY render,
  // even when just the 'count' changes.

  //  With useMemo, it only re-runs when 'allMovies' or 'searchTerm' changes.
  const filteredMovies = useMemo(() => {
    console.log('Filtering movies... (This should only log when typing)');
    return allMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); // Dependency: only re-calculate when searchTerm changes

  return (
    <div>
      <h2 className="text-2xl font-bold">Movie Filter</h2>
      
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded w-full my-4"
      />

      <div className="my-4">
        <h3 className="text-xl">Unrelated Counter: {count}</h3>
        <button onClick={() => setCount(c => c + 1)} className="p-2 bg-gray-200 rounded">
          Re-render Component
        </button>
      </div>

      <ul className="list-disc pl-5">
        {filteredMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieFilter;