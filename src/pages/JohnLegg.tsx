import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Phone, Mail, MapPin } from 'lucide-react';

const JohnLegg = () => {
  const recentSales = [
    { address: "2365 Ipswich Rd Oxley", price: "$4.9M" },
    { address: "81 Grindle Rd Rocklea", price: "$3.0M" },
    { address: "33 Dunn Rd, Rocklea", price: "$3.2M" },
    { address: "9 Railway Pde, Rocklea", price: "$7.8M" },
    { address: "13 Murdoch Crt, Acacia Ridge", price: "$4.2M" },
    { address: "100 Grindle Rd, Rocklea", price: "$3.2M" },
    { address: "106 Medway St, Rocklea", price: "$5.8M" },
    { address: "38 Suscatand St, Rocklea", price: "$4.5M" },
    { address: "5 Shoebury St, Rocklea", price: "$2.0M" },
    { address: "35 Shettleston St, Rocklea", price: "$1.2M" },
    { address: "2 Jaybel St, Salisbury", price: "$1.2M" },
    { address: "45 Suscatand St, Rocklea", price: "$3.8M" },
    { address: "6 Permarig Pl, Rocklea", price: "$2.3M" },
    { address: "67 Noosa St, Heathwood", price: "$1.3M" },
    { address: "10 Shoebury St, Rocklea", price: "$1.2M" },
    { address: "10 Shoebury St, Rocklea", price: "$1.4M" },
    { address: "14 Counihan St, SM Rocks", price: "$2.5M" },
    { address: "80 Industrial Ave, Wacol", price: "$3.1M" },
    { address: "86 Antimony St Carole Park", price: "$2.5M" },
    { address: "27 Suscatand Street Rocklea", price: "$1.25M" },
    { address: "27 Suscatand Street Rocklea", price: "$1.10M" }
  ];

  const recentLeases = [
    { address: "53 Suscatand Street, Rocklea", size: "11,000 m²", tenant: "Aust Temporary Fencing" },
    { address: "1 Burnside Rd, Yatala", size: "10,000 m²", tenant: "Opal Packaging (Coca-Cola Contract)" },
    { address: "40 Suscatand Street, Rocklea", size: "4,000 m²", tenant: "GMAC (Harvey Norman Contract)" },
    { address: "56 Peterkin St, Acacia Ridge", size: "5,500 m²", tenant: "AEG Logistics (PepsiCo Contract)" },
    { address: "52 Cobalt St, Carole Park", size: "6,000 m²", tenant: "Boylan Distribution Services (Nestle Contract)" },
    { address: "106 Medway St, Rocklea", size: "3,422 m²", tenant: "CITIC (Peoples Republic of China)" },
    { address: "116 Grindle Rd, Rocklea", size: "3,000 m²", tenant: "AEG Transport (Kimberly Clark Contract)" },
    { address: "837 Beaudesert Rd, C/Plains", size: "3,000 m²", tenant: "Airstep (Bridgestone)" },
    { address: "9 Railway Pde, Rocklea", size: "4,400 m²", tenant: "Electro Group Training (Electrical Trades Union)" },
    { address: "22 Shettleston St, Rocklea", size: "1,200 m²", tenant: "Pac Materials Handling (BP Australia Contract)" },
    { address: "44 Shettleston St, Rocklea", size: "4,000 m²", tenant: "Hawkins Transport (Minmetals Contract)" },
    { address: "1885 Ipswich Rd, Rocklea", size: "3,800 m²", tenant: "Silk Logistics" },
    { address: "28 Shettleston St, Rocklea", size: "1,000 m²", tenant: "Remondis Australia" },
    { address: "79 Bradman Street, Acacia Ridge", size: "3,000 m²", tenant: "Access Service (Energex Contract)" },
    { address: "13 Murdoch Crt, Acacia Ridge", size: "5,000 m²", tenant: "Trio Brothers Trading House" },
    { address: "44 Shettleston St, Rocklea", size: "2,000 m²", tenant: "Pearsons Transport (Nestle Contract)" },
    { address: "719 Boundary Rd, C/Plains", size: "3,000 m²", tenant: "Simon Transport (Otis Elevator Contract)" },
    { address: "123 Marshall Rd, Rocklea", size: "6,000 m²", tenant: "K Transport/FR8 West (Tata Steel, EADS Contract)" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-strong">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Small Image Section */}
                    <div className="flex-shrink-0">
                      <img 
                        src="/lovable-uploads/2f527cab-acf8-4d29-8c28-64f3c64d035e.png" 
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Sales Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Recent Sales
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A selection of recent successful sales transactions handled by John Legg
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentSales.map((sale, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                        <span className="text-foreground font-medium">{sale.address}</span>
                        <span className="text-primary font-bold">{sale.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Leases Section */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Recent Leases
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Recent leasing transactions with major corporate tenants
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-2 text-foreground font-semibold">Address</th>
                          <th className="text-left py-3 px-2 text-foreground font-semibold">Size</th>
                          <th className="text-left py-3 px-2 text-foreground font-semibold">Tenant</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentLeases.map((lease, index) => (
                          <tr key={index} className="border-b border-border last:border-b-0">
                            <td className="py-3 px-2 text-foreground">{lease.address}</td>
                            <td className="py-3 px-2 text-muted-foreground">{lease.size}</td>
                            <td className="py-3 px-2 text-foreground">{lease.tenant}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News Articles Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                In the News
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Media coverage of John Legg's successful industrial property transactions
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardContent className="p-4">
                    <img 
                      src="/lovable-uploads/bf000c07-91ab-432a-8dd3-af325fceac16.png" 
                      alt="News article about trucks moving in on real bargain deal"
                      className="w-full h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>

                <Card className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardContent className="p-4">
                    <img 
                      src="/lovable-uploads/75350691-2885-417d-bd15-89d568415c8e.png" 
                      alt="News article about export firm's expansion plans"
                      className="w-full h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>

                <Card className="shadow-medium hover:shadow-strong transition-smooth">
                  <CardContent className="p-4">
                    <img 
                      src="/lovable-uploads/760bdee3-24bf-4cad-a585-1093dd29fc70.png" 
                      alt="News article about fencing supplier consolidation"
                      className="w-full h-auto rounded-lg"
                    />
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