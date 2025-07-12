import { useEffect, useRef } from "react";

interface RazorpayButtonProps {
  type: 'payment' | 'subscription';
  buttonId: string;
}

const RazorpayButton = ({ type, buttonId }: RazorpayButtonProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const scriptId = `razorpay-script-${buttonId}`;
    
    // Clean up previous script if it exists
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
    
    // Clear the form to prevent duplicate buttons
    if (formRef.current) {
      formRef.current.innerHTML = '';
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;

    if (type === 'payment') {
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", buttonId);
    } else { // subscription
      script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js";
      script.setAttribute("data-subscription_button_id", buttonId);
      script.setAttribute("data-button_theme", "rzp-outline-standard");
    }

    if (formRef.current) {
      formRef.current.appendChild(script);
    }
    
  }, [type, buttonId]);

  return <form ref={formRef}></form>;
};

export default RazorpayButton;