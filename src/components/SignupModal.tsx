
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react";

interface SignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignupModal = ({ open, onOpenChange }: SignupModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    name: "",
    email: "",
    // Step 2 - Profile Details
    userType: "NRIs",
    whatsappNumber: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      console.log("Complete signup:", formData);
      // Handle complete signup logic here
      onOpenChange(false);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const userTypes = [
    { value: "NRIs", label: "NRIs", icon: "🏥" },
    { value: "Parent", label: "Parent", icon: "👨‍👩‍👧‍👦" },
    { value: "Doctor", label: "Doctor", icon: "👨‍⚕️" },
    { value: "Care Giver", label: "Care Giver", icon: "❤️" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            {currentStep === 2 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <div className="flex items-center space-x-4 mx-auto">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-primary-custom text-white' : 'bg-gray-200 text-gray-500'}`}>
                {currentStep >= 1 ? '✓' : '1'}
              </div>
              <div className={`w-16 h-0.5 ${currentStep >= 2 ? 'bg-primary-custom' : 'bg-gray-200'}`} />
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-primary-custom text-white' : 'bg-gray-200 text-gray-500'}`}>
                2
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              ✕
            </Button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Step {currentStep}</p>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <>
                <div className="text-center mb-6">
                  <img 
                    src="/lovable-uploads/c0b20459-77f5-436c-a4c2-5abc339a3735.png" 
                    alt="2care.ai Logo"
                    className="h-12 mx-auto mb-4"
                  />
                  <DialogTitle className="text-2xl font-bold text-secondary-custom">
                    Create Account
                  </DialogTitle>
                </div>
                
                <div>
                  <Label htmlFor="name" className="text-main font-medium">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-light-outline focus:border-primary-custom mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-main font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-light-outline focus:border-primary-custom mt-1"
                    required
                  />
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Just one last step</h2>
                  
                  <div className="mb-6">
                    <Label className="text-gray-700 font-medium mb-3 block">What describes you best?</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {userTypes.map((type) => (
                        <div key={type.value} className="relative">
                          <input
                            type="radio"
                            id={type.value}
                            name="userType"
                            value={type.value}
                            checked={formData.userType === type.value}
                            onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                            className="sr-only"
                          />
                          <label
                            htmlFor={type.value}
                            className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.userType === type.value
                                ? 'border-primary-custom bg-primary-custom/10'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="text-2xl mb-2">{type.icon}</div>
                            <span className="text-sm font-medium text-gray-700">{type.label}</span>
                            {formData.userType === type.value && (
                              <div className="absolute top-2 right-2 w-5 h-5 bg-primary-custom rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="whatsapp" className="text-gray-700 font-medium">Your WhatsApp Number</Label>
                    <div className="flex mt-1">
                      <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                        <span className="text-xl mr-2">🇮🇳</span>
                        <span className="text-gray-600">+91</span>
                      </div>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="123 456 78910"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className="border-l-0 rounded-l-none border-light-outline focus:border-primary-custom"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="password" className="text-gray-700 font-medium">Your Password</Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="border-light-outline focus:border-primary-custom pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Use 8+ characters with a mix of uppercase, lowercase, numbers, and special symbols (e.g., !@#$).
                    </p>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</Label>
                    <div className="relative mt-1">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="border-light-outline focus:border-primary-custom pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white py-3 rounded-full font-medium flex items-center justify-center space-x-2"
              >
                <span>{currentStep === 1 ? 'Continue' : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
          
          {currentStep === 1 && (
            <div className="text-center">
              <p className="text-sm text-sub">
                Already have an account?{" "}
                <Button variant="link" className="p-0 h-auto text-primary-custom hover:text-tertiary-custom">
                  Sign in here
                </Button>
              </p>
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center">
              <p className="text-xs text-gray-500">
                By clicking on "Create Account" you agree to{" "}
                <span className="text-primary-custom">terms</span> and{" "}
                <span className="text-primary-custom">privacy policy</span> of 2care.ai
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
