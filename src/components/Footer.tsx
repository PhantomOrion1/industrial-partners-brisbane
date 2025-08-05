import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-primary-foreground/60 mr-3" />
                <span className="text-primary-foreground/80">12 Hazelmere Parade, SHERWOOD, QLD 4075</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary-foreground/60 mr-3" />
                <span className="text-primary-foreground/80">+61 414 727 052</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary-foreground/60 mr-3" />
                <span className="text-primary-foreground/80">john@industrialpartners.com.au</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">About</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Over 30 years of experience in Brisbane's industrial property market. 
              Specialising in warehouse sales and leasing with personalised service.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/industrial-partners-property-consultants/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;