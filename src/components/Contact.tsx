import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(07) 3000 0000",
      description: "Speak with our experts"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@industrialpartners.com.au",
      description: "Send us a message"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Level 15, 123 Eagle Street, Brisbane QLD 4000",
      description: "Visit our CBD office"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri 8:30AM - 5:30PM",
      description: "Available for consultations"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your industrial property needs? 
            Get in touch with Brisbane's leading warehouse specialists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={info.title} className={`flex items-start space-x-4 fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-foreground mb-1">{info.details}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">
                  Why Choose Industrial Partners?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    25+ Years Brisbane Market Experience
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    500+ Successful Transactions
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Award-Winning Professional Service
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Comprehensive Market Knowledge
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send Us A Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" className="transition-smooth" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Smith" className="transition-smooth" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@company.com" className="transition-smooth" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone
                    </label>
                    <Input type="tel" placeholder="(07) 0000 0000" className="transition-smooth" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Inquiry Type
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Warehouse Purchase</option>
                      <option>Warehouse Lease</option>
                      <option>Property Valuation</option>
                      <option>Market Analysis</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your industrial property requirements..."
                      className="min-h-[120px] transition-smooth"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full transition-smooth">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;