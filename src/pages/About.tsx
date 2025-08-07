import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { basePath } from '@/utils/path';

const About = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [showAllSales, setShowAllSales] = useState(false);
  const [showAllLeases, setShowAllLeases] = useState(false);

  const newsArticles = [
    {
      id: 1,
      image: `${basePath}lovable-uploads/bf000c07-91ab-432a-8dd3-af325fceac16.png`,
      alt: "News article about trucks moving in on real bargain deal",
    },
    {
      id: 2,
      image: `${basePath}lovable-uploads/75350691-2885-417d-bd15-89d568415c8e.png`,
      alt: "News article about export firm's expansion plans",
    },
    {
      id: 3,
      image: `${basePath}lovable-uploads/760bdee3-24bf-4cad-a585-1093dd29fc70.png`,
      alt: "News article about fencing supplier consolidation",
    }
  ];

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
    { address: "80 Industrial Ave, Wacol", price: "$3.1M" }
  ];

  const recentLeases = [
    { address: "2-6 Leda Dr, Burleigh", rent: "$275/m²", tenant: "Harvey Norman" },
    { address: "47 Bluestone Cct, Seventeen Mile Rocks", rent: "$185/m²", tenant: "Kimberly Clark" },
    { address: "140 Delta St, Geebung", rent: "$230/m²", tenant: "Energex" },
    { address: "45 Grindle Rd, Rocklea", rent: "$175/m²", tenant: "Coca Cola" },
    { address: "33 Dunn Rd, Rocklea", rent: "$165/m²", tenant: "OTIS" },
    { address: "80 Industrial Ave, Wacol", rent: "$155/m²", tenant: "Bridgestone" },
    { address: "106 Medway St, Rocklea", rent: "$190/m²", tenant: "Nestle" },
    { address: "9 Railway Pde, Rocklea", rent: "$200/m²", tenant: "PepsiCo" },
    { address: "38 Suscatand St, Rocklea", rent: "$170/m²", tenant: "BP" },
    { address: "5 Shoebury St, Rocklea", rent: "$160/m²", tenant: "EADS" },
    { address: "35 Shettleston St, Rocklea", rent: "$150/m²", tenant: "China CITIC Bank" },
    { address: "45 Suscatand St, Rocklea", rent: "$180/m²", tenant: "Energex" },
    { address: "6 Permarig Pl, Rocklea", rent: "$165/m²", tenant: "Harvey Norman" },
    { address: "67 Noosa St, Heathwood", rent: "$155/m²", tenant: "Kimberly Clark" },
    { address: "81 Grindle Rd, Rocklea", rent: "$175/m²", tenant: "Coca Cola" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section with Video Background */}
        <section className="relative h-[60vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={`${basePath}AboutSectionVid.mp4`} type="video/mp4" />
              <img src={`${basePath}lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png`} alt="Industrial warehouse" className="w-full h-full object-cover" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              About Industrial Partners
            </h1>
            <p className="text-xl md:text-2xl fade-in-delay leading-relaxed">
              30 years of experience in Brisbane's industrial property market
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="relative z-10 bg-background py-20">
          <div className="container mx-auto px-6">
            {/* Our Story & Statistics */}
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16 items-center mb-20">
              {/* Our Story */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                  <p>
                    John Legg has been Brisbane's trusted name in industrial real estate for over three decades. Founded with a vision to provide unparalleled service in warehouse sales and leasing, we've built our reputation on deep market knowledge and personalised client relationships.
                  </p>
                  <p>
                    Our expertise spans across Brisbane's key industrial corridors, from Acacia Ridge to Yatala, helping businesses find the perfect industrial spaces for their operations. Whether you're looking to buy, sell, or lease warehouse facilities, our team provides strategic guidance backed by years of market experience.
                  </p>
                  <p>
                    Our deep knowledge of Brisbane's industrial landscape, combined with our commitment to personalised service, has made us the trusted choice for industrial property transactions across the region.
                  </p>
                </div>
              </div>

              {/* Statistics */}
              <div className="lg:col-span-1">
                <div className="grid gap-6">
                  <div className="bg-card rounded-lg p-4 text-center fade-in-delay">
                    <h3 className="text-2xl font-bold text-foreground mb-2">100+</h3>
                    <p className="text-sm font-medium text-muted-foreground">Properties Transacted</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 text-center fade-in-delay">
                    <h3 className="text-2xl font-bold text-foreground mb-2">30+</h3>
                    <p className="text-sm font-medium text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="bg-card rounded-lg p-4 text-center fade-in-delay">
                    <h3 className="text-2xl font-bold text-foreground mb-2">1M+</h3>
                    <p className="text-sm font-medium text-muted-foreground">Square Metres Managed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* News Articles */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">In the News</h2>
                <p className="text-muted-foreground">Click to view full article</p>
              </div>
              
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 cursor-pointer" onClick={() => setSelectedArticle(article.image)}>
                    <CardContent className="p-0">
                      <img 
                        src={article.image} 
                        alt={article.alt}
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Sales & Leases Sections */}
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Recent Sales */}
              <section className="lg:col-span-2">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground">Recent Sales</h2>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-medium border border-border">
                  <div className="space-y-4">
                    {(showAllSales ? recentSales : recentSales.slice(0, 10)).map((sale, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                        <span className="text-foreground font-medium">{sale.address}</span>
                        <span className="text-primary font-bold">{sale.price}</span>
                      </div>
                    ))}
                  </div>
                  {recentSales.length > 10 && (
                    <div className="mt-6 text-center">
                      <Button variant="outline" onClick={() => setShowAllSales(!showAllSales)} className="transition-smooth w-full">
                        {showAllSales ? <><ChevronUp className="w-4 h-4 mr-2" />Show Less</> : <><ChevronDown className="w-4 h-4 mr-2" />View More ({recentSales.length - 10} more)</>}
                      </Button>
                    </div>
                  )}
                </div>
              </section>

              {/* Recent Leases */}
              <section className="lg:col-span-3">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground">Recent Leases</h2>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-medium border border-border">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-2 text-foreground font-semibold">Address</th>
                          <th className="text-center py-3 px-2 text-foreground font-semibold">Rent</th>
                          <th className="text-right py-3 px-2 text-foreground font-semibold">Tenant</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(showAllLeases ? recentLeases : recentLeases.slice(0, 10)).map((lease, index) => (
                          <tr key={index} className="border-b border-border last:border-b-0">
                            <td className="py-3 px-2 text-foreground font-medium">{lease.address}</td>
                            <td className="py-3 px-2 text-center text-primary font-bold">{lease.rent}</td>
                            <td className="py-3 px-2 text-right text-muted-foreground">{lease.tenant}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {recentLeases.length > 10 && (
                    <div className="mt-6 text-center">
                      <Button variant="outline" onClick={() => setShowAllLeases(!showAllLeases)} className="transition-smooth w-full">
                        {showAllLeases ? <><ChevronUp className="w-4 h-4 mr-2" />Show Less</> : <><ChevronDown className="w-4 h-4 mr-2" />View More ({recentLeases.length - 10} more)</>}
                      </Button>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedArticle(null)}>
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
              <img 
                src={selectedArticle} 
                alt="News article" 
                className="w-full h-full object-contain"
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedArticle(null);
                }}
                className="absolute top-4 right-4 text-white text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default About; 