import React from 'react';
import AnimationWhenVisible from '../animations/AnimationWhenVisible';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const WordWorks = () => {
  return (
    <div className="word-works-section">
      <div className="wrapper">
        <div className="logo">
          <FadeInWhenVisible>
            <img
              src="assets/persons/human-phone.svg"
              alt="human phone digital"
              className="floating-2"
            />
          </FadeInWhenVisible>
        </div>
        <div className="content">
          <AnimationWhenVisible
            transition={{ duration: 0.6 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 400 },
            }}
          >
            <h3 className="title">Un hogar para tus aplicaciones</h3>
          </AnimationWhenVisible>
          <AnimationWhenVisible
            transition={{ duration: 0.4 }}
            variants={{
              visible: { y: 0 },
              hidden: { y: 500 },
            }}
          >
            <p>
              Como desarrollador de software, es fundamental contar con un
              espacio en la web para hacer crecer tu aplicación, con azure y sus
              servicios en la nube nunca fué tan fácil darle ese espacio que
              tanto se merece a tu aplicación.
            </p>
          </AnimationWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default WordWorks;
