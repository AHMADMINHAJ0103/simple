import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu after clicking a link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-[#9B2A22] to-[#2F0D0A] fixed top-0 w-full z-10 shadow-md">
      <div className="max-w-[1500px] px-4 sm:px-6 md:px-8 mx-auto">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-white text-lg sm:text-xl lg:text-2xl">
                The Guide
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link
              to="/"
              className="text-white hover:text-gray-300 text-sm sm:text-base lg:text-lg transition"
            >
              Home
            </Link>
            <Link
              to="/articlepage"
              className="text-white hover:text-gray-300 text-sm sm:text-base lg:text-lg transition"
            >
              Articles
            </Link>
            <Link
              to="/poempage"
              className="text-white hover:text-gray-300 text-sm sm:text-base lg:text-lg transition"
            >
              Poems
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-gray-300 text-sm sm:text-base lg:text-lg transition"
            >
              Login
            </Link>
            <Link
              to="/myspace"
              className="text-white hover:text-gray-300 text-sm sm:text-base lg:text-lg transition"
            >
              My Space
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-[#9B2A22] to-[#2F0D0A] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-2 space-y-2">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-white hover:text-gray-300 text-base py-2 transition"
          >
            Home
          </Link>
          <Link
            to="/articlepage"
            onClick={handleLinkClick}
            className="text-white hover:text-gray-300 text-base py-2 transition"
          >
            Articles
          </Link>
          <Link
            to="/poempage"
            onClick={handleLinkClick}
            className="text-white hover:text-gray-300 text-base py-2 transition"
          >
            Poems
          </Link>
          <Link
            to="/login"
            onClick={handleLinkClick}
            className="text-white hover:text-gray-300 text-base py-2 transition"
          >
            Login
          </Link>
          <Link
            to="/myspace"
            onClick={handleLinkClick}
            className="text-white hover:text-gray-300 text-base py-2 transition"
          >
            My Space
          </Link>
        </div>
      </div>
    </nav>
  );
}
