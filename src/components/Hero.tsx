import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
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
    <section id="home" className="relative min-h-screen flex items-center pt-safe pt-24 md:pt-safe">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {canPlayVideo ? (
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={`${basePath}IPvideocolour.mp4`} type="video/mp4" />
            <img src={`${basePath}lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png`} alt="Modern industrial warehouse" className="w-full h-full object-cover" />
          </video>
        ) : (
          <img src={`${basePath}lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png`} alt="Modern industrial warehouse" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Brisbane Australia
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
            Industrial Real Estate Excellence
          </h2>
          <p className="text-xl md:text-2xl mb-12 fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Brisbane's premier destination for warehouse sales and leasing. Professional service, prime locations, exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
              onClick={() => window.open('https://www.realcommercial.com.au/agency/industrial-partners-MDWHPW', '_blank')}
            >
              View Properties
            </Button>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-lg text-white/80">Properties Transacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">40+</div>
              <div className="text-lg text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-lg text-white/80">Square Metres</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;