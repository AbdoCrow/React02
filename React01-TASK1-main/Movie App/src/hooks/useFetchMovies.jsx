import { useEffect, useState } from "react";

export const useFetchMovies = (API_URL, API_OPTIONS) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL, API_OPTIONS);
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err);
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [API_URL, API_OPTIONS]);

  return { movies, loading, error };
};
