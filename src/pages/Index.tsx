
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JourneySteps from "@/components/JourneySteps";
import BridgeBot from "@/components/BridgeBot";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <JourneySteps />
      <BridgeBot />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
