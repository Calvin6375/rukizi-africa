import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#" },
    { name: "Services", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact me", href: "#" }
  ];

  return (
    <footer className="bg-dark-bg text-text-primary py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-xl font-bold tracking-tight">RUKIZI AFRICA</h3>
            <p className="text-sm text-text-secondary">consultancy</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navigationLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-text-secondary hover:text-white transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10 rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10 rounded-full">
              <Youtube className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10 rounded-full">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white hover:bg-white/10 rounded-full">
              <Facebook className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © 2024 RUKIZI AFRICA consultancy. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-text-secondary text-sm">Back to the Top</p>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-text-secondary hover:text-white hover:bg-white/10 rounded-full"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;