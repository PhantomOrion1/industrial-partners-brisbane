import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { basePath } from '@/utils/path';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Our Principal", href: "/our-principle" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'opacity-0 pointer-events-none' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={`${basePath}WhiteIndustryPartnersLogo (2).png`}
              alt="Industrial Partners Logo"
              className="h-14 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors ml-6"
              onClick={() => window.open('tel:+61414727052', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              +61 414 727 052
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-strong border border-white/20">
              <div className="py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-fast font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;