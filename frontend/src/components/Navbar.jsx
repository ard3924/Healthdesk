import { useState } from 'react';
import logo from '../assets/Logo1.png';
import cartIcon from '../assets/carticon.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
        <img src={logo} alt="Health Desk Clinic Logo" className="h-13" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm font-medium items-center">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#shop" className="hover:text-blue-600">Shop</a>
          <a href="#about" className="hover:text-blue-600">About Us</a>
          <a href="#faq" className="hover:text-blue-600">FAQ</a>
          <a href="#blog" className="hover:text-blue-600">Blog</a>
          <a href="#contact" className="hover:text-blue-600">Contact Us</a>
          <img src={cartIcon} alt="Cart" className="h-6 w-6 ml-4 cursor-pointer hover:opacity-75" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>Home</a>
            <a href="#shop" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>Shop</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>About Us</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>FAQ</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 text-sm font-medium" onClick={toggleMenu}>Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}
