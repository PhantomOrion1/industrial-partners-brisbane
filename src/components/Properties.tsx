import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Square, DollarSign, Calendar } from 'lucide-react';
import warehouseInterior from "@/assets/warehouse-interior.jpg";
import industrialComplex from "@/assets/industrial-complex.jpg";

const Properties = () => {
  const featuredProperties = [
    {
      id: 1,
      image: warehouseInterior,
      title: "Modern Distribution Centre",
      location: "Port of Brisbane",
      size: "15,000 sqm",
      type: "For Sale",
      price: "$12.5M",
      description: "State-of-the-art distribution facility with premium infrastructure and excellent transport links.",
      features: ["12m Clear Height", "40 Dock Doors", "Sprinkler System", "3-Phase Power"]
    },
    {
      id: 2,
      image: industrialComplex,
      title: "Industrial Complex",
      location: "Acacia Ridge",
      size: "8,500 sqm",
      type: "For Lease",
      price: "$85/sqm p.a.",
      description: "Multi-tenanted industrial complex ideal for manufacturing and logistics operations.",
      features: ["Container Access", "Secure Parking", "Office Space", "Flexible Terms"]
    },
    {
      id: 3,
      image: warehouseInterior,
      title: "Logistics Hub",
      location: "Yatala",
      size: "22,000 sqm",
      type: "For Sale",
      price: "$18.9M",
      description: "Premium logistics facility strategically positioned for distribution networks.",
      features: ["Cross-Dock Design", "Rail Access", "Automated Systems", "Grade A Fitout"]
    }
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover premium warehouse and industrial properties in Brisbane's most strategic locations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <Card key={property.id} className={`overflow-hidden shadow-medium transition-smooth hover:shadow-strong hover:-translate-y-1 fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={property.type.includes('Sale') ? 'default' : 'secondary'}
                    className="font-semibold"
                  >
                    {property.type}
                  </Badge>
                </div>
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

                <div className="flex gap-2">
                  <Button className="flex-1 transition-smooth">
                    View Details
                  </Button>
                  <Button variant="outline" size="icon" className="transition-smooth">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="transition-smooth">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;