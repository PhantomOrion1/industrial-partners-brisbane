import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Key, Search, TrendingUp, Users, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Warehouse Sales",
      description: "Expert guidance through the complete warehouse acquisition process, from initial search to final settlement.",
      features: ["Market Analysis", "Property Valuation", "Legal Support", "Settlement Assistance"]
    },
    {
      icon: Key,
      title: "Warehouse Leasing",
      description: "Comprehensive leasing solutions for businesses seeking flexible warehouse space in prime Brisbane locations.",
      features: ["Flexible Terms", "Property Management", "Maintenance Support", "Lease Negotiations"]
    },
    {
      icon: Search,
      title: "Property Search",
      description: "Tailored property search services to find the perfect industrial space that meets your specific requirements.",
      features: ["Custom Search", "Site Inspections", "Due Diligence", "Market Insights"]
    }
  ];

  const additionalServices = [
    { icon: TrendingUp, title: "Market Analysis", description: "Comprehensive market research and analysis" },
    { icon: Users, title: "Consultation", description: "Expert consultation and strategic advice" },
    { icon: FileText, title: "Documentation", description: "Complete legal and documentation support" }
  ];

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive industrial real estate solutions tailored to your business needs. 
            From sales to leasing, we deliver exceptional results.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className={`shadow-medium transition-smooth hover:shadow-strong hover:-translate-y-1 fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full transition-smooth">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-8">Additional Services</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div key={service.title} className={`text-center fade-in`} style={{animationDelay: `${(index + 3) * 0.2}s`}}>
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;