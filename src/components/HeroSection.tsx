import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 m -30 -60 l 0 60 m -30 -60 l 0 60 m -30 -60 l 0 60 m 60 -30 l -60 0 m 60 -30 l -60 0' stroke='%23ffffff' stroke-width='0.8' opacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
          }}
        />
      </div>

      {/* Geometric Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white/10 rotate-45 rounded-lg" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-white/5 rotate-12 rounded-lg" />
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 border border-white/10 -rotate-45 rounded-lg" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="space-y-2">
            <p className="text-text-secondary text-sm tracking-wider uppercase font-medium">
              Entrepreneur building business
            </p>
            <h1 className="text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
              Discover. Design.{" "}
              <span className="block">Transform</span>
            </h1>
          </div>

          <p className="text-text-secondary text-lg leading-relaxed max-w-md">
            We help conscious brands, mentors, and therapists build a powerful identity through creative design and strategy.
          </p>

          <div className="pt-4">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg font-medium group">
              Book a call
              <div className="ml-3 w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </Button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src="/assets/Professional.png"
              alt="Professional consultant" 
              className="w-full h-auto max-w-md rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;