import { useEffect, useRef } from "react";

interface RazorpayEmbedProps {
  src: string;
  scriptProps?: Record<string, string>;
  className?: string;
}

const RazorpayEmbed = ({ src, scriptProps = {}, className = "" }: RazorpayEmbedProps) => {
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    Object.entries(scriptProps).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    if (ref.current) ref.current.appendChild(script);
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [src, JSON.stringify(scriptProps)]);

  return <form ref={ref} className={className}></form>;
};

export default RazorpayEmbed; 