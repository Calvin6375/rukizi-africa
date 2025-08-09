import { Button } from "@/components/ui/button";
import { Linkedin, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full px-6 py-6 relative">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="text-text-primary z-20 relative">
          <h1 className="text-xl font-bold tracking-tight">RUKIZI AFRICA</h1>
          <p className="text-sm text-text-secondary">consultancy</p>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-3">
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-text-primary hover:text-white transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors font-medium">
              About me
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors font-medium">
              Services
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors font-medium">
              Blogs
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors font-medium">
              Contact me
            </a>
          </nav>
        </div>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center space-x-4 z-20 relative">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>

          {/* Book Appointment Button */}
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 font-medium">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-20 relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-text-primary hover:text-white hover:bg-white/10"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 bg-dark-bg/95 backdrop-blur-md z-10 pt-20 pb-8 px-6">
          <nav className="flex flex-col space-y-6 text-center">
            <a href="#" className="text-text-primary hover:text-white transition-colors font-medium text-lg">
              Home
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors font-medium text-lg">
              About me
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors font-medium text-lg">
              Services
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors font-medium text-lg">
              Blogs
            </a>
            <a href="#" className="text-text-secondary hover:text-white transition-colors font-medium text-lg">
              Contact me
            </a>
            
            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Book Appointment Button */}
            <div className="pt-4">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 py-2 font-medium">
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navigation;