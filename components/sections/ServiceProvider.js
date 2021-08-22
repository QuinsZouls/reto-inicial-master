import React from 'react';
import AnimationWhenVisible from '../animations/AnimationWhenVisible';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const ServiceProvider = () => {
  return (
    <div className="service-provider-section">
      <div className="wrapper">
        <div className="logo">
          <FadeInWhenVisible>
            <img
              src="assets/persons/multi-services.svg"
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
            <h3 className="title">¡Que tu aplicación destaque del resto!</h3>
          </AnimationWhenVisible>
          <AnimationWhenVisible
            transition={{ duration: 0.4 }}
            variants={{
              visible: { y: 0 },
              hidden: { y: 500 },
            }}
          >
            <p>
              Azure te brinda una gran variedad de servicios para que tú, como
              desarrollador, implementes las mejores soluciones para tu
              aplicación, dándole así una ventaja considerable respecto a las
              otras aplicaciones.
            </p>
          </AnimationWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
