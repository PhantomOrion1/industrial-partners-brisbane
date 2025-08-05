import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Square } from 'lucide-react';

const Properties = () => {
  const featuredProperties = [
    {
      id: 1,
      image: "/IPimage1.jpg",
      title: "Darra Industrial Property",
      location: "Darra, QLD 4076",
      size: "538 m²",
      type: "Recently Leased",
      price: "Leased",
      description: "Premium industrial facility featuring a quality building with modern office space, extensive parking, and secure container yard. Located in a flood-free zone with excellent access.",
      features: ["Quality Building", "Modern Office Space", "Extensive Parking", "Container Yard", "Flood-Free Location", "2 Roller Doors"],
      link: "https://www.realcommercial.com.au/leased/property-darra-qld-4076-504756520"
    },
    {
      id: 2,
      image: "/IPimage3.jpg",
      title: "Franklin Street Industrial",
      location: "27 Franklin Street, Rocklea QLD 4106",
      size: "3,000 m²",
      type: "Recently Leased",
      price: "Leased",
      description: "Spacious industrial facility with yard and shed configuration, offering excellent value for money. Available February 2025 with container space and ready-to-occupy setup.",
      features: ["Yard and Shed Configuration", "Container Space", "Value for Money", "Ready to Occupy", "Strategic Location"],
      link: "https://www.realcommercial.com.au/leased/property-27-franklin-street-rocklea-qld-4106-504613280"
    },
    {
      id: 3,
      image: "/IPimage4.jpg",
      title: "Ipswich Road Industrial",
      location: "B1 1699 Ipswich Rd, Rocklea QLD 4106",
      size: "1,926 m² + 2,300 m² hardstand",
      type: "Recently Leased",
      price: "Leased",
      description: "Premium industrial facility with main road exposure featuring a modern office/warehouse complex and extensive hardstand area. 24/7 operations with secure access.",
      features: ["Main Road Exposure", "24/7 Operations", "Multiple Roller Doors", "Secure Facility", "Modern Office/Warehouse", "Extensive Hardstand"],
      link: "https://www.realcommercial.com.au/leased/property-b1-1699-ipswich-rd-rocklea-qld-4106-504699324"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Recently Leased Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our latest successful leasing transactions in Brisbane's most strategic industrial locations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <Card key={property.id} className={`overflow-hidden shadow-medium transition-smooth hover:shadow-strong hover:-translate-y-1 fade-in-delay-${index + 1}`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className={`w-full h-full object-cover object-center ${index === 1 ? 'scale-125' : 'scale-110'}`}
                />
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="font-bold text-foreground">{property.price}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.location}</span>
                  <Square className="w-4 h-4 ml-4 mr-2" />
                  <span>{property.size}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {property.description}
                </p>

                <div className="space-y-2 mb-6">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full transition-smooth"
                  onClick={() => window.open(property.link, '_blank')}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="transition-smooth" onClick={() => window.open('https://www.realcommercial.com.au/agency/industrial-partners-MDWHPW', '_blank')}>
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;