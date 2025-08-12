import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="bg-muted/30">
        <VideoSection />
      </div>
      <div>
        <ServicesSection />
      </div>
      <div className="bg-muted/50">
        <ProcessSection />
      </div>
      <div className="bg-primary/5">
        <ContactForm />
      </div>
      <div className="bg-primary/1">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
