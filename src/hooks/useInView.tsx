import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return [ref, inView] as const;
}