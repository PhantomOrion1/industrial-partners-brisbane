import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;