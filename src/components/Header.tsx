import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ImageWithFallback 
              src="https://i.postimg.cc/DfPtsJtr/Diksha-Logo-High-Quality.png"
              alt="RCUCOE - Empowering Changes" 
              className="h-20 w-32 rounded-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            <a href="#home" className="px-4 py-2 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-medium">
              Home
            </a>
            <a href="#team" className="px-4 py-2 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-medium">
              Meet The Team
            </a>
            <a href="#events" className="px-4 py-2 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 font-medium">
              Events
            </a>
            <a href="#services" className="px-4 py-2 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 font-medium">
              Avenues
            </a>
            <a href="#about" className="px-4 py-2 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 font-medium">
              About
            </a>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none rounded-full px-6 py-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white border-t border-gray-100">
              <a
                href="#home"
                className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#team"
                className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition-all duration-300 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Meet The Team
              </a>
              <a
                href="#events"
                className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-600 transition-all duration-300 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a
                href="#services"
                className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-600 transition-all duration-300 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Avenues
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 transition-all duration-300 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none rounded-full py-3">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}