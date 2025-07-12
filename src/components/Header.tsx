
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Header = ({ onLoginClick, onSignupClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-light-outline">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <img 
              src="/lovable-uploads/c0b20459-77f5-436c-a4c2-5abc339a3735.png" 
              alt="2care.ai Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-all duration-200 hover:text-primary-custom hover:scale-105 relative ${
                  isActive(item.path) 
                    ? "text-primary-custom after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary-custom" 
                    : "text-secondary-custom hover:text-primary-custom"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <Button
              variant="outline"
              onClick={onLoginClick}
              className="border-2 border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white hover:scale-105 transition-all duration-300 font-semibold shadow-sm hover:shadow-md px-6 py-2"
            >
              Login
            </Button> */}
            <Button
              // onClick={onSignupClick}
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0",
                  "_blank"
                );
              }}
              className="bg-gradient-to-r from-primary-custom to-tertiary-custom hover:from-primary-custom/90 hover:to-tertiary-custom/90 text-white hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl px-6 py-2"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary-custom/10 text-primary-custom"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-light-outline animate-fade-in">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold transition-colors hover:text-primary-custom py-2 ${
                    isActive(item.path) ? "text-primary-custom" : "text-secondary-custom"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-light-outline">
                {/* <Button
                  variant="outline"
                  onClick={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="border-2 border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white transition-all duration-300 font-semibold"
                >
                  Login
                </Button> */}
                <Button
                  onClick={() => {
                    // onSignupClick();
                    window.open(
                      "https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0",
                      "_blank"
                    );
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-primary-custom to-tertiary-custom hover:from-primary-custom/90 hover:to-tertiary-custom/90 text-white font-semibold shadow-lg"
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
