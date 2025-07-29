import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;