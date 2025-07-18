import { useEffect, useRef } from "react";

interface RazorpayStaticButtonProps {
  buttonId: string;
  className?: string;
}

const RazorpayStaticButton = ({ buttonId, className = "" }: RazorpayStaticButtonProps) => {
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js";
    script.async = true;
    script.setAttribute("data-subscription_button_id", buttonId);
    script.setAttribute("data-button_theme", "rzp-outline-standard");
    ref.current.appendChild(script);
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [buttonId]);

  return <form ref={ref} className={className}></form>;
};

export default RazorpayStaticButton; 