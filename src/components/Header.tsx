
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-plumbing-blue font-display text-2xl font-bold">NCR</span>
            <span className="text-plumbing-medium-blue font-display text-2xl font-bold">Plumbing</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-plumbing-blue font-medium transition-colors">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-plumbing-blue font-medium transition-colors">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-plumbing-blue font-medium transition-colors">
            About
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-plumbing-blue font-medium transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-plumbing-blue font-medium transition-colors">
            Contact
          </a>
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <Button className="bg-plumbing-blue hover:bg-plumbing-dark-blue text-white">
            <a href="tel:+911234567890" className="flex items-center">
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-plumbing-blue font-medium py-2 transition-colors" onClick={toggleMenu}>
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-plumbing-blue font-medium py-2 transition-colors" onClick={toggleMenu}>
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-plumbing-blue font-medium py-2 transition-colors" onClick={toggleMenu}>
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-plumbing-blue font-medium py-2 transition-colors" onClick={toggleMenu}>
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-plumbing-blue font-medium py-2 transition-colors" onClick={toggleMenu}>
              Contact
            </a>
            <Button className="bg-plumbing-blue hover:bg-plumbing-dark-blue text-white w-full">
              <a href="tel:+911234567890" className="flex items-center justify-center w-full">
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
