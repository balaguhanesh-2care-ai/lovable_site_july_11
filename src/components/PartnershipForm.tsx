import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Textarea } from "@/components/ui/textarea";

interface PartnershipFormProps {
  onSuccess?: () => void;
}

const PartnershipForm = ({ onSuccess }: PartnershipFormProps) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
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
      const response = await fetch('/api/partnership-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, "cf-turnstile-response": turnstileToken }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: "", email: "", phone: "", message: ""});
        if (onSuccess) setTimeout(() => onSuccess(), 2000);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionStatus === 'success') {
    return (
      <div className="text-center p-4">
        <h3 className="text-xl font-semibold text-secondary-custom mb-2">Application Sent!</h3>
        <p className="text-green-600">Thank you for your interest. We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-secondary-custom mb-1">Your Name</label>
          <Input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-custom mb-1">Email</label>
          <Input type="email" name="email" placeholder="name@company.com" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-custom mb-1">Phone Number</label>
        <Input type="tel" name="phone" placeholder="+91 12345 67890" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-custom mb-1">Your Message</label>
        <Textarea name="message" placeholder="Tell us about your organization and how you'd like to partner." value={formData.message} onChange={handleChange} className="min-h-24" required />
      </div>
      <Turnstile
        siteKey={import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY}
        onSuccess={(token) => { setTurnstileToken(token); setCaptchaError(null); }}
        onError={() => setCaptchaError("Verification failed. Please refresh.")}
        options={{ theme: "light" }}
      />
      {captchaError && <p className="text-red-600 text-center text-sm">{captchaError}</p>}
      <Button type="submit" className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : <><Send className="w-4 h-4 mr-2" />Submit Application</>}
      </Button>
      {submissionStatus === 'error' && <p className="text-red-600 text-center text-sm">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default PartnershipForm;