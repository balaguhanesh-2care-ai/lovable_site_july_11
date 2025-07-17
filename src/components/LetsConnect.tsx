import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { FloatingBlobsBackground } from "@/components/ui/FloatingBlobsBackground";
import { FaWhatsapp } from "react-icons/fa";

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, "cf-turnstile-response": turnstileToken }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="relative rounded-2xl overflow-hidden bg-main-bg">
        <FloatingBlobsBackground />
        <div className="relative z-10 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-custom mb-6">
                Let's Connect
              </h2>
              <p className="text-xl text-primary-custom-bold max-w-3xl mx-auto">
                Have questions about our healthcare solutions? We're here to help you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <Card className="feature-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-custom mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-custom mb-2">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-custom mb-2">
                        WhatsApp Number
                      </label>
                      <div className="flex">
                        <div className="flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">
                          <span className="text-sm">🇮🇳 +91</span>
                        </div>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="81234 56789"
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 rounded-l-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-custom mb-2">
                        Your Message
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Type here..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-32 resize-none"
                        required
                      />
                    </div>

                    <Turnstile 
                      siteKey={import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY}
                      onSuccess={(token) => {
                        setTurnstileToken(token);
                        setCaptchaError(null); // Clear error on success
                      }}
                      onError={() => setCaptchaError("CAPTCHA failed to load. Please refresh or check your ad-blocker.")}
                      onExpire={() => setTurnstileToken(null)}
                      options={{ theme: 'light' }}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-secondary-custom hover:bg-secondary-custom/90 text-white py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    {submissionStatus === 'success' && (
                      <p className="text-green-600 text-center font-medium mt-4">
                        Thank you! Your message has been sent. We will reach out to you.
                      </p>
                    )}
                    {submissionStatus === 'error' && (
                      <p className="text-red-600 text-center font-medium mt-4">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-secondary-custom mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-secondary-custom mb-8">
                    Our team is ready to assist you with any questions about our AI-powered healthcare solutions.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="feature-card">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-custom rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-custom">Phone Support</h4>
                        <p className="text-primary-custom font-medium">+91 78999 53477</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="feature-card">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-tertiary-custom rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <a href="mailto:support@2care.ai" className="block">
                      <div className="cursor-pointer">
                        <h4 className="font-semibold text-secondary-custom">Email Support</h4>
                        <p className="text-primary-custom font-medium">support@2care.ai</p>
                      </div>
                    </a>
                    </CardContent>
                  </Card>

                  <Card className="feature-card">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary-custom rounded-full flex items-center justify-center">
                        <FaWhatsapp className="w-6 h-6 text-white" />
                      </div>
                        <a
                          href="https://api.whatsapp.com/send/?phone=917899953477&text=Hi&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="cursor-pointer">
                            <h4 className="font-semibold text-secondary-custom">Whatsapp Support</h4>
                            <p className="text-primary-custom font-medium">+91 63648 72188</p>
                          </div>
                        </a>

                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;