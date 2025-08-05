import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { basePath } from '@/utils/path';

const About = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [showAllSales, setShowAllSales] = useState(false);
  const [showAllLeases, setShowAllLeases] = useState(false);

  const newsArticles = [
    {
      id: 1,
      title: "Industrial Partners Celebrates Record Breaking Year",
      image: `${basePath}lovable-uploads/bf000c07-91ab-432a-8dd3-af325fceac16.png`,
    },
    {
      id: 2,
      title: "Major Warehouse Development Announced",
      image: `${basePath}lovable-uploads/75350691-2885-417d-bd15-89d568415c8e.png`,
    },
    {
      id: 3,
      title: "Queensland Industrial Market Outlook",
      image: `${basePath}lovable-uploads/760bdee3-24bf-4cad-a585-1093dd29fc70.png`,
    }
  ];

  const recentSales = [
    { address: "25 Industrial Drive, Acacia Ridge", price: "$2.8M", size: "4,500m²" },
    { address: "142 Main Street, Rocklea", price: "$1.6M", size: "2,800m²" },
    { address: "88 Transport Road, Carole Park", price: "$3.2M", size: "5,200m²" },
    { address: "15 Logistics Lane, Brendale", price: "$2.1M", size: "3,400m²" },
    { address: "67 Warehouse Way, Yatala", price: "$4.5M", size: "7,100m²" },
    { address: "203 Commerce Court, Stapylton", price: "$1.9M", size: "3,100m²" },
    { address: "156 Distribution Drive, Heathwood", price: "$2.7M", size: "4,200m²" },
    { address: "89 Factory Street, Darra", price: "$1.4M", size: "2,200m²" },
    { address: "345 Trade Circuit, Wacol", price: "$3.8M", size: "6,000m²" },
    { address: "78 Business Boulevard, Tingalpa", price: "$2.3M", size: "3,700m²" },
    { address: "234 Enterprise Way, Pinkenba", price: "$5.1M", size: "8,200m²" },
    { address: "91 Industry Road, Eagle Farm", price: "$1.8M", size: "2,900m²" },
    { address: "167 Cargo Close, Hemmant", price: "$2.6M", size: "4,100m²" },
    { address: "112 Supply Street, Murarrie", price: "$3.4M", size: "5,500m²" },
    { address: "298 Freight Avenue, Lytton", price: "$2.0M", size: "3,200m²" }
  ];

  const recentLeases = [
    { address: "45 Progress Road, Richlands", rent: "$180/m²", size: "2,200m²" },
    { address: "78 Manufacturing Drive, Oxley", rent: "$165/m²", size: "3,100m²" },
    { address: "123 Production Place, Inala", rent: "$155/m²", size: "1,800m²" },
    { address: "267 Assembly Avenue, Archerfield", rent: "$190/m²", size: "4,500m²" },
    { address: "89 Processing Street, Larapinta", rent: "$170/m²", size: "2,700m²" },
    { address: "156 Operations Way, Durack", rent: "$175/m²", size: "3,300m²" },
    { address: "334 Facility Road, Seventeen Mile Rocks", rent: "$160/m²", size: "2,100m²" },
    { address: "201 Workshop Circuit, Sumner", rent: "$185/m²", size: "3,800m²" },
    { address: "112 Storage Street, Willawong", rent: "$150/m²", size: "1,500m²" },
    { address: "78 Handling Road, Berrinba", rent: "$195/m²", size: "5,200m²" },
    { address: "245 Logistics Loop, Coopers Plains", rent: "$165/m²", size: "2,900m²" },
    { address: "189 Terminal Drive, Mooroka", rent: "$180/m²", size: "3,600m²" },
    { address: "90 Dispatch Drive, Nathan", rent: "$170/m²", size: "2,400m²" },
    { address: "167 Fulfilment Way, Mount Gravatt East", rent: "$175/m²", size: "3,200m²" },
    { address: "134 Depot Street, Calamvale", rent: "$160/m²", size: "2,000m²" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-safe">
        {/* Hero Section with Video Background */}
        <section className="relative h-[60vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={`${basePath}IPvideogreyscale.mp4`} type="video/mp4" />
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
                    Industrial Partners has been Brisbane's trusted name in industrial real estate for over three decades. Founded with a vision to provide unparalleled service in warehouse sales and leasing, we've built our reputation on deep market knowledge and personalised client relationships.
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">200+</h3>
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
              </div>
              
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 cursor-pointer" onClick={() => setSelectedArticle(article.image)}>
                    <CardContent className="p-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className={`w-full object-cover ${article.id === 1 ? 'h-80 object-contain bg-gray-50' : 'h-64 object-cover'}`}
                      />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground">{article.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Sales and Leases */}
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Recent Sales */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-foreground mb-6">Recent Sales</h3>
                <div className="space-y-4">
                  {(showAllSales ? recentSales : recentSales.slice(0, 10)).map((sale, index) => (
                    <div key={index} className="border-b border-border pb-3">
                      <div className="font-medium text-foreground">{sale.address}</div>
                      <div className="text-sm text-muted-foreground flex justify-between">
                        <span>{sale.price}</span>
                        <span>{sale.size}</span>
                      </div>
                    </div>
                  ))}
                  {recentSales.length > 10 && (
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={() => setShowAllSales(!showAllSales)}
                    >
                      {showAllSales ? 'Show Less' : 'View More'}
                    </Button>
                  )}
                </div>
              </div>

              {/* Recent Leases */}
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-foreground mb-6">Recent Leases</h3>
                <div className="space-y-4">
                  {(showAllLeases ? recentLeases : recentLeases.slice(0, 10)).map((lease, index) => (
                    <div key={index} className="border-b border-border pb-3">
                      <div className="font-medium text-foreground">{lease.address}</div>
                      <div className="text-sm text-muted-foreground flex justify-between">
                        <span>{lease.rent}</span>
                        <span>{lease.size}</span>
                      </div>
                    </div>
                  ))}
                  {recentLeases.length > 10 && (
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={() => setShowAllLeases(!showAllLeases)}
                    >
                      {showAllLeases ? 'Show Less' : 'View More'}
                    </Button>
                  )}
                </div>
              </div>
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