import { useInView as useInViewObserver } from 'react-intersection-observer';

export const useInView = (options = {}) => {
  const { ref, inView } = useInViewObserver({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  return { ref, inView };
};
