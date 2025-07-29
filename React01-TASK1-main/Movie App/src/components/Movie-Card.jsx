import { useState, useEffect } from "react";
import { useFavorites } from "../hooks/useFavorites";

function MovieCard({ movie }) {
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    original_language,
    id,
  } = movie;
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();


  function onFavouriteClick() {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(movie);
    }
  }
  //This doesn't do anything. this is just an example before we get into API calls!
  useEffect(() => {
    console.log("📦 Component mounted!");

    // Cleanup
    return () => {
      console.log("🧹 Component unmounted!");
    };
  }, []);

  return (
    <div
      className={`movie-card border-2 ${
       isFavorite(id) ? "border-pink-500" : "border-gray-700"
      } rounded-lg p-4 shadow-md bg-black-900 text-white`}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "https://via.placeholder.com/500x750"
        }
        alt={title}
      />
      <h3>{title}</h3>

      <button onClick={onFavouriteClick}>
        {isFavorite(id) ? "❤️" : "🤍"}
      </button>

      <div className="movie-datails">
        <span>{release_date?.slice(0, 4) || "N/A"}</span>
        <span> |</span>
        <span>⭐ {vote_average?.toFixed(1) || "N/A"}</span>
        <span> | {original_language?.toUpperCase() || "N/A"}</span>
      </div>
    </div>
  );
}

export default MovieCard;
