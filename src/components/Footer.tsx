import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="font-bold text-2xl mb-4">
              Industrial<span className="text-primary-foreground/70">Partners</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Brisbane's leading industrial real estate specialists. 
              Over 40 years of experience in warehouse sales and leasing solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/industrial-partners" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  12 Hazelmere Parade<br />
                  SHERWOOD, QLD 4075
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+61 414 727 052</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">john@industrialpartners.com.au</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Industrial Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;