
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Upload, FileText } from "lucide-react";
import { usePostHog } from "posthog-js/react";

interface ReportAnalysisProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const ReportAnalysis = ({ onLoginClick, onSignupClick }: ReportAnalysisProps) => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Visit_ReportAnalysis_Page");
  }, []);
  const [showUpload, setShowUpload] = useState(false);

  const handleStartChat = () => {
    window.open('https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0', '_blank');
  };

  const handleFileUpload = () => {
    // Simulate file upload and redirect to login/signup
    setTimeout(() => {
      onSignupClick(); // or onLoginClick() based on user's status
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-custom mb-6">
              Medical Report Analysis
            </h1>
            <p className="text-xl text-gray-600">
              Get instant AI-powered analysis of your medical reports
            </p>
          </div>

          {/* WhatsApp-style Chat Interface */}
          <Card className="bg-white border-2 border-light-outline shadow-lg">
            <CardContent className="p-0">
              {/* Chat Header */}
              <div className="bg-[#128C7E] text-white p-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#128C7E] font-bold">M</span>
                </div>
                <div>
                  <h3 className="font-semibold">Maya AI Assistant</h3>
                  <p className="text-sm opacity-90">Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div 
                className="min-h-96 p-4 flex flex-col justify-center"
                style={{
                  backgroundImage: `url('/lovable-uploads/a9a37f13-7949-49eb-b51c-42a7632f5ab2.png')`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: 'auto'
                }}
              >
                {!showUpload ? (
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <MessageCircle className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-secondary-custom">
                        You Have Not Started Any Conversations Yet
                      </h3>
                      <Button
                        onClick={handleStartChat}
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 text-lg"
                      >
                        Click Here to Start a Chat
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* AI Message */}
                    <div className="flex justify-start">
                      <div className="bg-white p-4 rounded-lg shadow-sm max-w-md">
                        <p className="text-gray-700">
                          Hello! I'm Maya, your AI health assistant. Please upload your medical report and I'll analyze it for you.
                        </p>
                      </div>
                    </div>

                    {/* File Upload Area */}
                    <div className="flex justify-center">
                      <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-dashed border-[#25D366] w-full max-w-md text-center">
                        <Upload className="w-12 h-12 text-[#25D366] mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-secondary-custom mb-2">
                          Upload Your Medical Report
                        </h4>
                        <p className="text-gray-600 mb-4">
                          Drag and drop your file here or click to browse
                        </p>
                        <Button
                          onClick={handleFileUpload}
                          className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Choose File
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                    disabled={!showUpload}
                  />
                  <Button
                    disabled={!showUpload}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportAnalysis;
