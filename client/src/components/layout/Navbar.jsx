import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / App Name */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-yellow-400 text-2xl font-bold">📝</span>
            <span className="font-bold text-xl tracking-wide">DoTrack</span>
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/login"
              className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Signup
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl">
              {menuOpen ? "✖️" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 px-6 space-y-3">
          <Link
            to="/login"
            className="block w-full text-center border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block w-full text-center bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
