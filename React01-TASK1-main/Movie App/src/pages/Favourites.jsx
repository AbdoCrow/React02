import { useContext } from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useFavorites } from "../hooks/useFavorites";
import MovieCard from "../components/Movie-Card";

function Favourites() {
  const { favorites, addFavorite } = useFavorites();
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            accept: "application/json",
          },
        });
        const data = await res.json();
        const shuffled = data.results.sort(() => 0.5 - Math.random());
        setRecommended(shuffled.slice(0, 10));
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div className="favourites px-6 py-12">
      <section className="fvourites-grid">
      <h2 className="text-5xl font-bold text-center mb-20">Your Favourites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.length > 0 ? (
            favorites.map(movie => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p className="text-center col-span-full">You have no favorite movies yet.</p>
          )}
        </div>
      </section>
      <section className="recommendations">
        <h2 className="text-5xl font-bold text-center mb-20">
          Top{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-6xl">
            {" "}
            10
          </span>{" "}
          Recommended{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Movies
          </span>{" "}
          For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommended.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Favourites;
