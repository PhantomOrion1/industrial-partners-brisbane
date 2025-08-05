import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Properties />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
