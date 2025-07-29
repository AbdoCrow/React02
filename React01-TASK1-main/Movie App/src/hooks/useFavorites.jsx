import { useContext } from "react";
import { FavoritesContext } from "../context/FavouritesContext";

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used inside a FavoritesProvider");
  }
  return context;
};
