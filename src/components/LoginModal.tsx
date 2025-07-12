
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Handle login logic here
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-secondary-custom">
            Welcome Back
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/c0b20459-77f5-436c-a4c2-5abc339a3735.png" 
                alt="2care.ai Logo"
                className="h-12"
              />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-main">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-light-outline focus:border-primary-custom"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-main">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="border-light-outline focus:border-primary-custom"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-icon hover:text-primary-custom"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white hover:shadow-lg transition-all duration-300">
              Sign In
            </Button>
          </form>
          
          <div className="text-center">
            <p className="text-sm text-sub">
              Don't have an account?{" "}
              <Button variant="link" className="p-0 h-auto text-primary-custom hover:text-tertiary-custom">
                Sign up here
              </Button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
