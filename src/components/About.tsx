import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, MapPin, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, label: "Industry Awards", value: "15+" },
    { icon: Users, label: "Expert Agents", value: "25+" },
    { icon: MapPin, label: "Brisbane Locations", value: "50+" },
    { icon: TrendingUp, label: "Client Satisfaction", value: "98%" }
  ];

  const values = [
    {
      title: "Professional Excellence",
      description: "Delivering the highest standards of service with deep market knowledge and expertise."
    },
    {
      title: "Client-Focused Approach",
      description: "Your success is our priority. We tailor our services to meet your unique requirements."
    },
    {
      title: "Local Market Expertise",
      description: "Unparalleled knowledge of Brisbane's industrial property market and emerging opportunities."
    },
    {
      title: "Trusted Partnerships",
      description: "Building long-term relationships based on trust, transparency, and exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Industrial Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Brisbane's most trusted name in industrial real estate. 
            Combining decades of experience with innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Leading Brisbane's Industrial Property Market
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 25 years of experience in Brisbane's industrial property market, 
              Industrial Partners has established itself as the premier choice for warehouse 
              sales and leasing solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our deep understanding of local market dynamics, combined with our extensive 
              network of industry connections, enables us to deliver exceptional outcomes 
              for our clients across every transaction.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={achievement.label} className={`text-center fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Badge variant="secondary" className="mr-3">EST. 1998</Badge>
                  <span className="text-muted-foreground">Brisbane, Australia</span>
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Our Commitment
                </h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We are committed to providing unparalleled service in Brisbane's 
                  industrial property sector, ensuring our clients achieve their 
                  strategic objectives through expert guidance and market-leading solutions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">REIQ Licensed Professionals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Local Market Specialists</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-foreground">Award-Winning Service</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">Our Values</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={value.title} className={`text-center shadow-soft transition-smooth hover:shadow-medium fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;