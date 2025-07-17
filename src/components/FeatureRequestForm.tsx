import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import PhoneInput from 'react-phone-input-2';

interface FeatureRequestFormProps {
  onSuccess?: () => void;
}

const FeatureRequestForm = ({ onSuccess }: FeatureRequestFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCaptchaError(null);

    if (!turnstileToken) {
      setCaptchaError("Please complete the human verification.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/request-feature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, "cf-turnstile-response": turnstileToken }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: "", email: "", phone: "", message: "" });
        if (onSuccess) {
            // Wait 2 seconds before closing to allow user to read the message
            setTimeout(() => onSuccess(), 2000);
        }
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
  
  if (submissionStatus === 'success') {
    return (
        <div className="text-center p-4">
            <h3 className="text-xl font-semibold text-secondary-custom mb-2">Thank You!</h3>
            <p className="text-green-600">Your feature request has been sent successfully.</p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-secondary-custom mb-1">Your Name</label>
        <Input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-custom mb-1">Your Email</label>
        <Input type="email" name="email" placeholder="yourname@gmail.com" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-custom mb-1">Phone Number</label>
        <PhoneInput
          country={'in'}
          value={formData.phone}
          onChange={(phone) => setFormData({ ...formData, phone })}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
          }}
          placeholder="98765 43210"
          inputClass="!w-full !bg-[#f1f7fd] !text-[#607399] !text-base !rounded-md !border !border-[#d1dce5] !py-3 !pl-16 !pr-4 focus:!outline-none focus:!ring-2 focus:!ring-[#3fb7dd]"
          containerClass="!w-full !bg-[#f1f7fd] !rounded-md !border !border-[#d1dce5]"
          buttonClass="!bg-[#f1f7fd] !border-r !border-[#d1dce5] !rounded-l-md"
          dropdownClass="!z-[1000]"
          enableSearch
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-custom mb-1">Your Feature Idea</label>
        <Textarea name="message" placeholder="Describe your idea..." value={formData.message} onChange={handleChange} className="min-h-24" required />
      </div>

      <Turnstile
        siteKey={import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY}
        onSuccess={(token) => { setTurnstileToken(token); setCaptchaError(null); }}
        onError={() => setCaptchaError("Verification failed. Please refresh.")}
        options={{ theme: 'light' }}
      />
      
      {captchaError && <p className="text-red-600 text-center text-sm">{captchaError}</p>}
      
      <Button type="submit" className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : <><Send className="w-4 h-4 mr-2" />Submit Request</>}
      </Button>

      {submissionStatus === 'error' && <p className="text-red-600 text-center text-sm">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default FeatureRequestForm;