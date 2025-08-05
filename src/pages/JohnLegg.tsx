import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { basePath } from '@/utils/path';

const JohnLegg = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 pt-safe relative">
        {/* Background Video - Only covers main content */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={`${basePath}IPvideogreyscale.mp4`} type="video/mp4" />
            <img src={`${basePath}lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png`} alt="Modern industrial warehouse" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Section */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-medium">
                <Card className="overflow-hidden shadow-strong">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Small Image Section */}
                      <div className="flex-shrink-0">
                        <img 
                          src={`${basePath}lovable-uploads/2f527cab-acf8-4d29-8c28-64f3c64d035e.png`} 
                          alt="John Legg Industrial Partners Principal"
                          className="w-32 h-32 lg:w-40 lg:h-40 object-cover object-center rounded-lg shadow-medium"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex-1">
                        <div className="fade-in">
                          <div className="flex items-center mb-6">
                            <Badge variant="secondary" className="mr-3">Principal & Founder</Badge>
                            <Badge variant="outline">REIQ Licensed</Badge>
                          </div>

                          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            John Legg
                          </h1>

                          <p className="text-xl text-muted-foreground mb-6">
                            Principal, Industrial Partners Property Consultants
                          </p>

                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            With over 30 years of experience in Brisbane's industrial property market, 
                            John Legg has established Industrial Partners as the city's most trusted name in 
                            warehouse sales and leasing. His deep understanding of the local market and 
                            commitment to client success has resulted in over $300M+ in transactions.
                          </p>

                          {/* Achievements */}
                          <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Award className="w-6 h-6 text-primary-foreground" />
                              </div>
                              <div className="text-2xl font-bold text-foreground mb-1">30+</div>
                              <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Users className="w-6 h-6 text-primary-foreground" />
                              </div>
                              <div className="text-2xl font-bold text-foreground mb-1">$300M+</div>
                              <div className="text-sm text-muted-foreground">Transactions</div>
                            </div>
                          </div>

                          {/* Contact */}
                          <div className="border-t border-border pt-6">
                            <h4 className="font-semibold text-foreground mb-4">Direct Contact</h4>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <Phone className="w-4 h-4 text-muted-foreground mr-3" />
                                <span className="text-foreground">M: +61 414 727 052</span>
                              </div>
                              <div className="flex items-center">
                                <Mail className="w-4 h-4 text-muted-foreground mr-3" />
                                <span className="text-foreground">john@industrialpartners.com.au</span>
                              </div>
                              <div className="flex items-center">
                                <Linkedin className="w-4 h-4 text-muted-foreground mr-3" />
                                <a 
                                  href="https://www.linkedin.com/in/john-legg-3891a824/?originalSubdomain=au" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-foreground hover:text-primary transition-colors"
                                >
                                  LinkedIn Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JohnLegg;