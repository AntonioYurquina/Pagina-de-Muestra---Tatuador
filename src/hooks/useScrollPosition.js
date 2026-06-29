import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setScrollPosition(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return { scrollPosition, scrollDirection };
};
