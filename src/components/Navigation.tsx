import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Our Principle', href: '/john-legg' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'opacity-0 pointer-events-none' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="hover:opacity-80 transition-fast">
            <img 
              src="/WhiteIndustryPartnersLogo (2).png" 
              alt="Industrial Partners Property Consultants" 
              className="h-24 md:h-30 w-auto"
            />
          </a>

          {/* Desktop Navigation - Moved to right side */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/80 transition-fast font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Contact Button */}
            <div className="ml-4">
              <Button variant="outline" size="sm" className="transition-smooth">
                <Phone className="w-4 h-4 mr-2" />
                +61 414 727 052
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-fast font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" size="sm" className="self-start transition-smooth">
                <Phone className="w-4 h-4 mr-2" />
                +61 414 727 052
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;