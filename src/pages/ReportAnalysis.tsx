import { MessageCircle, Upload, FileText } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";  
import { Card, CardContent } from "@/components/ui/card";


interface ReportAnalysisProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const chatDemo = [
  {
    sender: "maya",
    text: `Hi Ashna! Welcome to 2care.ai😊 I am Maya, your personal AI Health Assistant.\nI am here 24/7 to manage health of you and your loved ones.\nJust send a "hi" or "hello" anytime to get started!`,
  },
  {
    sender: "user",
    text: "Hi",
  },
  {
    sender: "maya",
    text: "What would you like to do today?",
  },
  {
    sender: "user",
    text: "❓ Ask a Question",
  },
  {
    sender: "maya",
    text: "Please go ahead with your question, I will try my best to help you.",
  },
  {
    sender: "user",
    text: "Can you summarize the Food allergy panel results report?",
  },
  {
    sender: "maya",
    text: `Here's a summary of your report:\n\n*   Report Type: Blood Test (Common Food Allergen Panel - IgE)\n\n*   Key Findings:\n    *   Peanut: 0.53 kUA/I (Class 1)\n    *   Shrimp: 0.47 kUA/I (Class 1)\n    *   Soybean: 0.77 kUA/I (Class 2)\n    *   (Normal range for Class 0/1 is <0.35 kUA/I)\n\n*   Doctor's Notes:\n    *   Results should be interpreted in context of your clinical history.\n    *   Review dietary adjustments with your doctor.`,
  },
];

const FADE_DURATION = 800; // ms, should match CSS
const CHAT_DISPLAY_TIME = 7000; // ms
const CTA_DISPLAY_TIME = 3500; // ms
const TYPING_DELAY = 1200; // ms between messages

const ReportAnalysis = ({ onLoginClick, onSignupClick }: ReportAnalysisProps) => {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Visit_ReportAnalysis_Page");
  }, []);
  const [showUpload, setShowUpload] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [fade, setFade] = useState(true); // true: fade in, false: fade out
  const [currentMsgIdx, setCurrentMsgIdx] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showChat) {
      setFade(true);
      setCurrentMsgIdx(0);
      // Animate messages one by one
      const revealNext = (idx: number) => {
        if (idx < chatDemo.length) {
          timeoutRef.current = setTimeout(() => {
            setCurrentMsgIdx(idx + 1);
            revealNext(idx + 1);
          }, TYPING_DELAY);
        } else {
          // After all messages, fade out and show CTA
          timeoutRef.current = setTimeout(() => {
            setFade(false);
            setTimeout(() => setShowChat(false), FADE_DURATION);
          }, 1800);
        }
      };
      revealNext(0);
    } else {
      setFade(true);
      timeoutRef.current = setTimeout(() => {
        setFade(false);
        setTimeout(() => setShowChat(true), FADE_DURATION);
      }, CTA_DISPLAY_TIME);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [showChat]);

  // Auto-scroll to bottom when a new message appears

  const handleStartChat = () => {
    window.open('https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-custom mb-5 mt-10">
              Medical Report Analysis
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Get instant AI-powered analysis of your medical reports
            </p>
          </div>

          {/* WhatsApp-style Chat Interface */}
          <Card className="bg-white border-2 border-light-outline shadow-lg overflow-hidden max-w-2xl mx-auto w-full sm:w-[90%] md:w-[80%]">
            <CardContent className="p-0 relative">
              {/* Chat Header */}
              <div className="bg-[#128C7E] text-white p-4 flex items-center space-x-3 z-10 relative rounded-t-xl">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-white shadow overflow-hidden">
                  <img src="/logo/2care.png" alt="2care.ai logo" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xl font-semibold text-green leading-tight">2care.ai</span>
                  <span className="text-sm text-white/90 leading-tight">Online</span>
                </div>
              </div>

              {/* Chat Area with Demo Conversation or CTA */}
              <div
                className={`flex flex-col justify-end items-center relative transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'} w-full`}
                style={{
                  minHeight: '320px',
                  maxHeight: '60vh',
                  height: 'min(420px,60vh)',
                  overflowY: 'auto',
                  background: 'linear-gradient(135deg, #ece5dd 0%, #fff 100%)'
                }}
              >
                {showChat ? (
                  <div className="w-full flex flex-col justify-end px-2 sm:px-4 py-4 sm:py-8">
                    <div className="flex flex-col gap-3 sm:gap-4 max-w-full sm:max-w-lg mx-auto w-full">
                      {chatDemo.slice(0, currentMsgIdx).map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex ${msg.sender === 'maya' ? 'justify-start' : 'justify-end'}`}
                        >
                          <div
                            className={
                              `px-4 py-2 rounded-2xl shadow max-w-[80vw] sm:max-w-[60%] mb-2 text-sm sm:text-base whitespace-pre-line break-words ` +
                              (msg.sender === 'maya'
                                ? 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                                : 'bg-[#dcf8c6] text-gray-900 rounded-br-none border border-[#b2e59e]')
                            }
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-2 sm:px-0">
                    <div className="flex justify-center mb-6">
                      <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-lg" style={{ color: '#25D366' }} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center drop-shadow-lg" style={{ color: '#25D366' }}>
                      You Have Not Started Any Conversations Yet
                    </h3>
                    <Button
                      asChild
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg shadow-lg rounded transition-colors duration-200"
                    >
                      <a
                        href="https://api.whatsapp.com/send/?phone=916364872188&text=Hi&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Click here to start a chat!
                      </a>
                    </Button>
                  </div>
                )}
              </div>
              {/* Hide chat input and upload area for this state */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportAnalysis;
