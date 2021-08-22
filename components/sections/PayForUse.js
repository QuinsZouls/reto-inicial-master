import React from 'react';
import AnimationWhenVisible from '../animations/AnimationWhenVisible';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const PayForUse = () => {
  return (
    <div className="pay-for-use-section">
      <div className="wrapper">
        <div className="content">
          <FadeInWhenVisible>
            <h3 className="title">
              Sin inversión inicial, pagas por lo que usas
            </h3>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p>
              Gracias a la administración de recursos de azure, pagas por lo que
              tu aplicación consuma, sin necesidad de contar con grandes y
              costos servidores.
            </p>
          </FadeInWhenVisible>
        </div>
        <div className="logo">
          <AnimationWhenVisible
            transition={{ duration: 0.4 }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 500 },
            }}
          >
            <img
              src="assets/persons/resources.svg"
              alt="human phone digital"
              className="floating-3"
            />
          </AnimationWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default PayForUse;
