
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
};
