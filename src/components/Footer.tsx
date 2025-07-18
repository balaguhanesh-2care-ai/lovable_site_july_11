
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/f817bac9-04d5-41db-b315-3108913f1148.png" 
                alt="2care.ai Logo"
                className="h-8"
              />
            </div>
            {/* <p className="text-gray-300 mb-4">
              Email: support@2care.ai
            </p>
            <p className="text-gray-300 mb-4">
              Phone: For Support: +91 6364872888 / 7899953477
            </p>
            <p className="text-gray-300 mb-4">
              Office Address: #17, 7th Main Road, 2nd floor, 
              II stage Indiranagar Bangalore - 560038
            </p> */}
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-custom" />
                <span className="text-gray-300">support@2care.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-custom" />
                <div className="text-gray-300">
                  <p>For Support: +91 6364872188</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-custom mt-1" />
                <span className="text-gray-300">
                  Office Address: #17, 7th Main Road, 2nd floor, 
                  II Stage Indiranagar Bangalore - 560038
                </span>
              </div>
              {/* Social Media Links with cyan blue icons and gray text */}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link to="/cancellation-refunds" className="text-gray-300 hover:text-primary-custom transition-colors">Cancellation and Refunds</Link></li>
              <li><Link to="/shipping-delivery" className="text-gray-300 hover:text-primary-custom transition-colors">Shipping and Delivery</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms-conditions" className="text-gray-300 hover:text-primary-custom transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-primary-custom transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        {/* Centered Social Media Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mt-8 w-full">
          <a
            href="https://instagram.com/2care.ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center space-x-2 group text-gray-300 hover:text-primary-custom transition-colors"
          >
            <FaInstagram className="text-xl text-primary-custom" />
            <span className="group-hover:text-primary-custom transition-colors">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/2careai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center space-x-2 group text-gray-300 hover:text-primary-custom transition-colors"
          >
            <FaLinkedin className="text-xl text-primary-custom" />
            <span className="group-hover:text-primary-custom transition-colors">LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/people/2Careai/61577776422384/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex items-center space-x-2 group text-gray-300 hover:text-primary-custom transition-colors"
          >
            <FaFacebook className="text-xl text-primary-custom" />
            <span className="group-hover:text-primary-custom transition-colors">Facebook</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Community"
            className="flex items-center space-x-2 group text-gray-300 hover:text-primary-custom transition-colors"
          >
            <FaWhatsapp className="text-xl text-primary-custom" />
            <span className="whitespace-nowrap group-hover:text-primary-custom transition-colors">WhatsApp Community</span>
          </a>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 2Care.ai • All Rights Reserved • Billion AGI Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
