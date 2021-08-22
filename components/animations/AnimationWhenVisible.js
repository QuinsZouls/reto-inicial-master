import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useAnimation, motion } from 'framer-motion';

function AnimationWhenVisible({ children, transition = {}, variants = {} }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default AnimationWhenVisible;
