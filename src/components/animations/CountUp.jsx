import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

export const CountUp = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default CountUp;
