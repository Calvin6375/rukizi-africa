import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import HelpSection from "@/components/HelpSection";
import BlogsSection from "@/components/BlogsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Dark Background */}
      <div className="bg-dark-bg text-text-primary">
        <Navigation />
        <HeroSection />
        <StatsSection />
      </div>
      
      {/* Main Content Sections */}
      <ServicesSection />
      <HelpSection />
      <BlogsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;