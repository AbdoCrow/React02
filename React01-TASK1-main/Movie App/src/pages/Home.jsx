import MovieCard from "../components/Movie-Card";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";

function Home() {
  //const [movies, setMovies] = useState([]);
  const API_BASE_URL = "https://api.themoviedb.org/3/";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };


  // const fetchMovies = async () => {
  //   try {
  //     const response = await fetch(
  //       `${API_BASE_URL}discover/movie?sort_by=popularity.desc`,
  //       API_OPTIONS
  //     );
  //     const data = await response.json();
  //     setMovies(data.results);
  //   } catch (error) {
  //     console.log(`Error fetching movies: ${error}`);
  //   } finally {
  //     console.log("finally");
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  const { movies, loading, error } = useFetchMovies(
    `${API_BASE_URL}discover/movie?sort_by=popularity.desc`,
    API_OPTIONS
  );


  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
    console.log(searchQuery);
  };

  return (
    <div className="home">
      <div className="hero">
        <img src="hero.png" alt="" className="mx-auto" />
        <h2 className="text-5xl font-bold text-center mb-20">
          Find{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Movies
          </span>{" "}
          You Love <br /> Without The Hassle
        </h2>
        <form onSubmit={handleSearch} className="search-form w-full mx-auto">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
