import { Link } from 'react-router-dom'; // Import the Link component

function NavBar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">🎬 MovieApp</Link>

      <ul className="flex gap-6 text-lg">
        <li>
          <Link to="/" className="hover:text-pink-400">Home</Link>
        </li>
        <li>
          <Link to="/favourites" className="hover:text-pink-400">Favorites ❤️</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;