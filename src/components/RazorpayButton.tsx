import { useEffect, useRef } from "react";

// Monthly Subscription Button
export const RazorpayMonthlyButton = () => {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const scriptId = `razorpay-script-monthly`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) existingScript.remove();
    if (formRef.current) formRef.current.innerHTML = '';
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js";
    script.setAttribute("data-subscription_button_id", "pl_QticDJhCCSYmai");
    script.setAttribute("data-button_theme", "rzp-outline-standard");
    if (formRef.current) formRef.current.appendChild(script);
  }, []);
  return <form ref={formRef}></form>;
};

// Yearly Subscription Button
export const RazorpayYearlyButton = () => {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const scriptId = `razorpay-script-yearly`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) existingScript.remove();
    if (formRef.current) formRef.current.innerHTML = '';
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = "https://cdn.razorpay.com/static/widget/subscription-button.js";
    script.setAttribute("data-subscription_button_id", "pl_Qtideo8ZUygoYM");
    script.setAttribute("data-button_theme", "rzp-outline-standard");
    if (formRef.current) formRef.current.appendChild(script);
  }, []);
  return <form ref={formRef}></form>;
};

// One-time Payment Button
export const RazorpayPaymentButton = () => {
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const scriptId = `razorpay-script-payment`;
    const existingScript = document.getElementById(scriptId);
    if (existingScript) existingScript.remove();
    if (formRef.current) formRef.current.innerHTML = '';
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_QrhRqK9f7BNU4h");
    if (formRef.current) formRef.current.appendChild(script);
  }, []);
  return <form ref={formRef}></form>;
};