import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../utils/constants';

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < BREAKPOINTS.mobile);
      setIsTablet(width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet);
      setIsDesktop(width >= BREAKPOINTS.tablet);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};
