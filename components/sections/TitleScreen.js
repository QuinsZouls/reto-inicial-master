import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useViewportScroll } from 'framer-motion';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TitleScreen = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.div>
      <div className="title-screen-section">
        <div className="title">
          <h1>
            La nube de azure en Ingeniería de Software
          </h1>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faArrowDown} className="icon bounce-1" />
          </div>
        </div>
        <div className="float-img">
          <img src="assets/persons/sitting-1.png" className="floating-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default TitleScreen;
