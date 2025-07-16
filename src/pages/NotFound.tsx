
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-main-bg">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-primary-custom rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-extrabold text-white">404</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-custom mb-8">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary-custom hover:bg-primary-custom/90 text-white">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white">
            <Link to="javascript:history.back()">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
