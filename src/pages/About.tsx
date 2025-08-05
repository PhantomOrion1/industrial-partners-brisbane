import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [showAllSales, setShowAllSales] = useState(false);
  const [showAllLeases, setShowAllLeases] = useState(false);

  const newsArticles = [
    {
      id: 1,
      image: "/lovable-uploads/bf000c07-91ab-432a-8dd3-af325fceac16.png",
      alt: "News article about trucks moving in on real bargain deal",
    },
    {
      id: 2,
      image: "/lovable-uploads/75350691-2885-417d-bd15-89d568415c8e.png",
      alt: "News article about export firm's expansion plans",
    },
    {
      id: 3,
      image: "/lovable-uploads/760bdee3-24bf-4cad-a585-1093dd29fc70.png",
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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section with Video Background */}
        <section className="relative h-[60vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/IPvideogreyscale.mp4" type="video/mp4" />
              <img src="/lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png" alt="Modern industrial warehouse" className="w-full h-full object-cover" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 text-center container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in">
              About Industrial Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto fade-in-delay">
              Brisbane's premier industrial real estate specialists with over 40 years of experience in warehouse sales and leasing.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <div className="relative z-10 bg-background py-20">
          <div className="container mx-auto px-6 space-y-24">

            {/* Our Story & Stats Section */}
            <section className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Our Story</h2>
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                  <p>Founded in 2022, Industrial Partners has quickly established itself as Brisbane's leading specialist industrial property consultancy. Our team brings together decades of combined experience in the industrial real estate sector.</p>
                  <p>We understand the unique challenges and opportunities that industrial property presents. From small workshops to large distribution centres, we provide expert guidance for both buyers and sellers in this specialised market.</p>
                  <p>Our deep knowledge of Brisbane's industrial landscape, combined with our commitment to personalised service, has made us the trusted choice for industrial property transactions across the region.</p>
                </div>
              </div>
              <div className="lg:col-span-1 grid grid-cols-1 gap-6 fade-in-delay">
                <div className="bg-card p-4 rounded-lg shadow-medium border border-border text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">200+</h3>
                  <p className="text-sm text-muted-foreground font-medium">Properties Transacted</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-medium border border-border text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">40+</h3>
                  <p className="text-sm text-muted-foreground font-medium">Years of Combined Experience</p>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-medium border border-border text-center">
                  <h3 className="text-2xl font-bold text-primary mb-1">1M+</h3>
                  <p className="text-sm text-muted-foreground font-medium">Square Metres Managed</p>
                </div>
              </div>
            </section>

            {/* In the News Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">In the News</h2>
              </div>
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {newsArticles.map((article, index) => (
                  <Card 
                    key={article.id} 
                    className="shadow-medium hover:shadow-strong transition-smooth cursor-pointer overflow-hidden fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedArticle(article.id)}
                  >
                    <CardContent className="p-0">
                      <img 
                        src={article.image} 
                        alt={article.alt}
                        className={`w-full h-96 object-cover ${ index === 0 ? 'object-top' : '' } transition-transform duration-300 hover:scale-105`}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
              {selectedArticle !== null && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                  onClick={() => setSelectedArticle(null)}
                >
                  <div className="relative max-w-3xl w-full flex justify-center" onClick={e => e.stopPropagation()}>
                    <button
                      className="absolute top-2 right-2 text-white text-3xl font-bold z-10 bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
                      onClick={() => setSelectedArticle(null)}
                      aria-label="Close"
                    >&times;</button>
                    <img
                      src={newsArticles.find(a => a.id === selectedArticle)?.image}
                      alt={newsArticles.find(a => a.id === selectedArticle)?.alt}
                      className="max-h-[90vh] w-auto rounded-lg shadow-strong border-4 border-white bg-white"
                    />
                  </div>
                </div>
              )}
            </section>

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
                          <th className="text-left py-3 px-2 text-foreground font-semibold">Size</th>
                          <th className="text-left py-3 px-2 text-foreground font-semibold">Tenant</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(showAllLeases ? recentLeases : recentLeases.slice(0, 10)).map((lease, index) => (
                          <tr key={index} className="border-b border-border last:border-b-0">
                            <td className="py-3 px-2 text-foreground">{lease.address}</td>
                            <td className="py-3 px-2 text-muted-foreground">{lease.size}</td>
                            <td className="py-3 px-2 text-foreground">{lease.tenant}</td>
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
      </main>
      <Footer />
    </div>
  );
};

export default About; 