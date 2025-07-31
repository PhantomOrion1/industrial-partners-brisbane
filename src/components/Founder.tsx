import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Phone, Mail } from 'lucide-react';

const Founder = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Principal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading Brisbane's industrial property market with decades of experience and unwavering commitment to excellence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-strong">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src="/lovable-uploads/2f527cab-acf8-4d29-8c28-64f3c64d035e.png" 
                    alt="John Industrial Partners Principal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent lg:bg-gradient-to-r"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="fade-in">
                    <div className="flex items-center mb-6">
                      <Badge variant="secondary" className="mr-3">Principal & Founder</Badge>
                      <Badge variant="outline">REIQ Licensed</Badge>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      John Mitchell
                    </h3>

                    <p className="text-xl text-muted-foreground mb-6">
                      Principal & Founder, Industrial Partners
                    </p>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      With over 25 years of experience in Brisbane's industrial property market, 
                      John has established Industrial Partners as the city's most trusted name in 
                      warehouse sales and leasing. His deep understanding of the local market and 
                      commitment to client success has resulted in over 500 successful transactions.
                    </p>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      John's hands-on approach and extensive network of industry relationships 
                      ensure that every client receives personalized service and exceptional results. 
                      He holds a Real Estate Institute of Queensland license and is an active member 
                      of the Brisbane business community.
                    </p>

                    {/* Achievements */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Award className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">25+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Users className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                        <div className="text-sm text-muted-foreground">Transactions</div>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="border-t border-border pt-6">
                      <h4 className="font-semibold text-foreground mb-4">Direct Contact</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-muted-foreground mr-3" />
                          <span className="text-foreground">(07) 3000 0001</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-muted-foreground mr-3" />
                          <span className="text-foreground">john@industrialpartners.com.au</span>
                        </div>
                      </div>
                      
                      <Button className="mt-6 transition-smooth">
                        Schedule a Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Credentials */}
          <div className="mt-12 text-center fade-in" style={{animationDelay: '0.3s'}}>
            <h4 className="text-xl font-bold text-foreground mb-6">Professional Credentials & Memberships</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-foreground font-semibold">REIQ Licensed</div>
                <div className="text-muted-foreground text-sm">Real Estate Professional</div>
              </div>
              <div className="text-center">
                <div className="text-foreground font-semibold">AIPI Member</div>
                <div className="text-muted-foreground text-sm">Property Institute</div>
              </div>
              <div className="text-center">
                <div className="text-foreground font-semibold">25+ Years</div>
                <div className="text-muted-foreground text-sm">Industry Experience</div>
              </div>
              <div className="text-center">
                <div className="text-foreground font-semibold">Award Winner</div>
                <div className="text-muted-foreground text-sm">Industry Recognition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;