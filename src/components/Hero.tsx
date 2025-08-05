import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { basePath } from '@/utils/path';

const Hero = () => {
  const [canPlayVideo, setCanPlayVideo] = useState(true);

  useEffect(() => {
    // Check if the browser can play MP4
    const video = document.createElement('video');
    const canPlay = video.canPlayType('video/mp4');
    setCanPlayVideo(canPlay !== '');
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-safe pt-32 md:pt-safe">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {canPlayVideo ? (
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={`${basePath}IPvideogreyscale.mp4`} type="video/mp4" />
            {/* Fallback image */}
            <img 
              src={`${basePath}lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png`} 
              alt="Modern industrial warehouse"
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img src={`${basePath}lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png`} alt="Modern industrial warehouse" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 overlay-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground/80 font-medium">Brisbane, Australia</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Industrial Real Estate
              <span className="block text-primary-foreground">Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground mb-8 max-w-2xl leading-relaxed">
              Brisbane's premier destination for warehouse sales and leasing. 
              Professional service, prime locations, exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth" onClick={() => window.open('https://www.realcommercial.com.au/agency/industrial-partners-MDWHPW', '_blank')}>
                <Building2 className="w-5 h-5 mr-2" />
                View Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/contact">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-smooth">
                  Contact Us Today
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary-foreground mb-2">200+</div>
                <div className="text-primary-foreground/80">Properties Sold</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary-foreground mb-2">30+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary-foreground mb-2">1M+</div>
                <div className="text-primary-foreground/80">Square Metres</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;