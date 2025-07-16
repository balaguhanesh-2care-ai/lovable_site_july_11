import React, { useRef, useEffect } from "react";
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
  monthly: "pl_QticDJhCCSYmai",
  yearly: "pl_Qtideo8ZUygoYM",
  free: "pl_QrhRqK9f7BNU4h"
};

export const RazorpayModal: React.FC<RazorpayModalProps> = ({ open, onClose, planType }) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!open) return;
    // Remove any previous Razorpay scripts
    document.querySelectorAll('script[id^="razorpay-script-"]').forEach(s => s.remove());
    if (formRef.current) formRef.current.innerHTML = '';
    // Delay script injection to ensure modal and form are rendered
    setTimeout(() => {
      if (!formRef.current) {
        console.log("[RazorpayModal] formRef.current is null, cannot append script");
        return;
      }
      const script = document.createElement("script");
      script.async = true;
      let scriptId = '';
      if (planType === "monthly") {
        scriptId = "razorpay-script-monthly";
        script.id = scriptId;
        script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js";
        script.setAttribute("data-subscription_button_id", RAZORPAY_BUTTON_IDS.monthly);
        script.setAttribute("data-button_theme", "rzp-outline-standard");
      } else if (planType === "yearly") {
        scriptId = "razorpay-script-yearly";
        script.id = scriptId;
        script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js";
        script.setAttribute("data-subscription_button_id", RAZORPAY_BUTTON_IDS.yearly);
        script.setAttribute("data-button_theme", "rzp-outline-standard");
      } else {
        scriptId = "razorpay-script-free";
        script.id = scriptId;
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute("data-payment_button_id", RAZORPAY_BUTTON_IDS.free);
      }
      formRef.current.appendChild(script);
      console.log(`[RazorpayModal] Appended script for planType: ${planType}, scriptId: ${scriptId}`);
    }, 0);
  }, [open, planType]);

  const details = PLAN_DETAILS[planType];

  return (
    <Dialog open={open} onOpenChange={v => { if (!v) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Your Payment</DialogTitle>
          <DialogDescription>
            {details.name}
          </DialogDescription>
        </DialogHeader>
        <div className="my-4 text-center">
          <div className="text-2xl font-bold mb-2">{details.price}</div>
          <div className="text-sub mb-4">{details.description}</div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <form ref={formRef}></form>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}; 