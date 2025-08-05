import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { basePath } from '@/utils/path';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'Warehouse Purchase',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS (you'll need to replace these with your actual EmailJS credentials)
      emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your EmailJS public key

      const templateParams = {
        to_email: 'john@industrialpartners.com.au',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: 'Warehouse Purchase',
        message: ''
      });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+61 414 727 052",
      description: "Speak with our experts"
    },
    {
      icon: Mail,
      title: "Email",
      details: "john@industrialpartners.com.au",
      description: "Send us a message"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "12 Hazelmere Parade, SHERWOOD, QLD 4075",
      description: "Visit our office"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri 8:30AM - 5:30PM",
      description: "Available for consultations"
    }
  ];

  return (
    <section id="contact" className="py-20 relative z-10 pt-safe">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src={`${basePath}IPvideogreyscale.mp4`} type="video/mp4" />
          <img src={`${basePath}lovable-uploads/6fd82ffa-4b90-4b33-a02f-78fc01f5d5e9.png`} alt="Modern industrial warehouse" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="text-center mb-16 slide-up">
          <div className="bg-white/85 backdrop-blur-sm p-8 rounded-lg shadow-medium">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your industrial property needs? 
              Get in touch with Brisbane's leading warehouse specialists.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="slide-up">
            <div className="bg-white/85 backdrop-blur-sm p-8 rounded-lg shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
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
          </div>

          {/* Contact Form */}
          <div className="slide-up">
            <div className="bg-white/85 backdrop-blur-sm p-8 rounded-lg shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Us A Message
              </h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      className="transition-smooth" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Smith" 
                      className="transition-smooth" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com" 
                    className="transition-smooth" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(07) 0000 0000" 
                    className="transition-smooth" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Enquiry Type
                  </label>
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground transition-smooth focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option>Warehouse Purchase</option>
                    <option>Warehouse Lease</option>
                    <option>Property Valuation</option>
                    <option>Market Analysis</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your industrial property requirements..."
                    className="min-h-[120px] transition-smooth"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full transition-smooth"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;