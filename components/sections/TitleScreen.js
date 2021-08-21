import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useViewportScroll } from 'framer-motion';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TitleScreen = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.div>
      <div className="title-screen-section bg-gradient">
        <div className="title">
          <h1>
            ¿Cómo se relaciona la nube de azure en Ingeniería de Software?
          </h1>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faArrowDown} className="icon bounce-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TitleScreen;
