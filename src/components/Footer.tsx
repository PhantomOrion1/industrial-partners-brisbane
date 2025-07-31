import { MapPin, Phone, Mail, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="font-bold text-2xl mb-4">
              Industrial<span className="text-primary-foreground/70">Partners</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Brisbane's leading industrial real estate specialists. 
              Over 25 years of experience in warehouse sales and leasing solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">Home</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">Services</a></li>
              <li><a href="#properties" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">Properties</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">About</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Level 15, 123 Eagle Street<br />
                  Brisbane QLD 4000
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">(07) 3000 0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@industrialpartners.com.au</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Industrial Partners. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-fast">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-fast">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-fast">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;