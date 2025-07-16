import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
  minimal?: boolean;
  logoSize?: string; // Add logoSize prop
}

const Header = ({ onLoginClick, onSignupClick, minimal = false, logoSize = "h-12" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  if (minimal) {
    return (
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-light-outline">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center md:justify-start">
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <img 
              src="/lovable-uploads/c0b20459-77f5-436c-a4c2-5abc339a3735.png" 
              alt="2care.ai Logo"
              className={logoSize}
            />
          </Link>
        </div>
      </header>
    );
  }

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Solutions", path: "/solutions" },
    { label: "Report Analysis", path: "/report-analysis" },
    { label: "Product Updates", path: "/product-updates" },
    { label: "Our Story", path: "/our-story" },
    { label: "Pricing", path: "/pricing" },
    { label: "Partners", path: "/partners" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <img 
              src="/lovable-uploads/c0b20459-77f5-436c-a4c2-5abc339a3735.png" 
              alt="2care.ai Logo"
              className={`h-9 sm:h-10 md:${logoSize} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm md:text-base font-medium transition-all duration-200 transform hover:scale-105 relative px-1 md:px-2 ${
                  isActive(item.path) 
                    ? "text-primary-custom" 
                    : "text-secondary-custom hover:text-primary-custom"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <Button
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0",
                  "_blank"
                );
              }}
              className="bg-gradient-to-r from-primary-custom to-tertiary-custom text-white font-semibold rounded-full px-4 py-2 md:px-6 transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex flex-col lg:hidden">
          <div className="bg-white w-full shadow-lg border-b border-light-outline animate-fade-in px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src="/lovable-uploads/c0b20459-77f5-436c-a4c2-5abc339a3735.png" 
                  alt="2care.ai Logo"
                  className="h-9 w-auto"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-custom"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-semibold transition-colors hover:text-primary-custom py-2 px-2 rounded-lg ${
                    isActive(item.path) ? "text-primary-custom bg-primary-custom/10" : "text-secondary-custom"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0",
                    "_blank"
                  );
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-primary-custom to-tertiary-custom hover:from-primary-custom/90 hover:to-tertiary-custom/90 text-white font-semibold shadow-lg mt-4 py-3"
              >
                Sign Up
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
