import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RazorpayEmbed from "@/components/RazorpayEmbed";

interface RazorpayModalProps {
  open: boolean;
  onClose: () => void;
  planType: "monthly" | "yearly" | "free";
}

const PLAN_DETAILS = {
  monthly: {
    name: "Premium (Monthly)",
    price: "₹3999 for 3 months",
    razorpayType: "monthly",
    description: "You will be charged ₹3999 for 3 months of Premium access."
  },
  yearly: {
    name: "Premium (Yearly)",
    price: "₹44,000 for 1 year",
    razorpayType: "yearly",
    description: "You will be charged ₹44,000 for 1 year of Premium access."
  },
  free: {
    name: "Doctor Appointment (One-time)",
    price: "₹499 per appointment",
    razorpayType: "free",
    description: "You will be charged ₹499 for a one-time doctor appointment."
  }
};

const RAZORPAY_BUTTON_IDS = {
  monthly: "pl_QtlVoG1Mok8SDy",
  yearly: "pl_QtlYcHqTWghLIW",
  free: "pl_QrhHVafuNAbQLC"
};

export const RazorpayModal: React.FC<RazorpayModalProps> = ({ open, onClose, planType }) => {
  const details = PLAN_DETAILS[planType];

  return (
    <Dialog open={open} onOpenChange={v => { if (!v) onClose(); }}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto px-6 py-6">
        <DialogHeader>
          <DialogTitle>Confirm Your Payment</DialogTitle>
          <DialogDescription>
            {details.name}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 text-center">
          <div className="text-2xl font-bold">{details.price}</div>
          <div className="text-sub">{details.description}</div>
        </div>
        {/* --- BEGIN: Special Info for ₹499 Doctor Appointment --- */}
        {planType === "free" && (
          <div className="mb-4 text-left bg-cyan-100 rounded-lg px-6 pt-6 border border-cyan-100">
            <p className="mb-2 text-center text-cyan-900">Get expert medical advice without the wait. Book a private consultation with a certified 2care.ai doctor from the comfort of your home.</p>
            <Separator className="my-3" style={{ backgroundColor: "black" }} />
            <ul className="pl-2 mb-2 text-sm text-cyan-900 font-bold space-y-2">
              {[
                "One-on-one video consult (15–20 minutes)",
                "Share your medical reports in advance",
                "Get advice on medications, treatment options, and next steps",
                "Ask anything — symptoms, lab results, diet, second opinion",
                "Summary and recommendations sent to your WhatsApp"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 text-cyan-600 font-semibold">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle w-5 h-5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2l4-4" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-3" style={{ backgroundColor: "black" }} />
            <div className="mb-4 text-xs text-cyan-800 text-center">
              <b>🤝 Trusted. Private. Simple.</b><br />
              Our doctors are handpicked for experience, empathy, and patient care.<br />
              We support your family with reliable guidance — no long queues, no confusion.
            </div>
            <div className="text-center font-bold text-base text-cyan-900">Ready to Book?</div>
            <div className="text-center mb-2 text-cyan-900">👇 Click below to confirm your consultation for ₹499.</div>
          </div>
        )}
        {/* --- END: Special Info for ₹499 Doctor Appointment --- */}
        {/* Razorpay Payment Button for Each Plan */}
        {planType === "free" && (
          <div className="w-full flex justify-center mt-6">
            <RazorpayEmbed
              src="https://checkout.razorpay.com/v1/payment-button.js"
              scriptProps={{ "data-payment_button_id": RAZORPAY_BUTTON_IDS.free }}
              className="w-full flex justify-center"
            />
          </div>
        )}
        {planType === "monthly" && (
          <div className="w-full flex justify-center mt-6">
            <RazorpayEmbed
              src="https://cdn.razorpay.com/static/widget/subscription-button.js"
              scriptProps={{
                "data-subscription_button_id": RAZORPAY_BUTTON_IDS.monthly,
                "data-button_theme": "rzp-outline-standard"
              }}
              className="w-full flex justify-center"
            />
          </div>
        )}
        {planType === "yearly" && (
          <div className="w-full flex justify-center mt-6">
            <RazorpayEmbed
              src="https://cdn.razorpay.com/static/widget/subscription-button.js"
              scriptProps={{
                "data-subscription_button_id": RAZORPAY_BUTTON_IDS.yearly,
                "data-button_theme": "rzp-outline-standard"
              }}
              className="w-full flex justify-center"
            />
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};