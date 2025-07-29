import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  

  const addFavorite = (movie) => {
    console.log("addFavorite called with:", movie);
    setFavorites((prev) => {
      if (!prev.find((m) => m.id === movie.id)) {
        const updated = [...prev, movie];
        console.log("Saving to localStorage:", updated);
        return updated;
      }
      return prev;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((m) => m.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
