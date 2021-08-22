import React from 'react';
import AnimationWhenVisible from '../animations/AnimationWhenVisible';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const EasyImplement = () => {
  return (
    <div className="easy-implement-section">
      <div className="wrapper">
        <div className="content">
          <FadeInWhenVisible>
            <h3 className="title">
              Tú preocupate por el contenido, azure hace el resto
            </h3>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p>
              La nube de azure te brinda las herramientas necesaria para lanzar
              tu aplicación, desde alojamiento de sitios hasta base de datos y
              otros sistemas de almacenamiento, para que tú como desarrollador,
              te preocupes de que el software funcione.
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
              src="assets/persons/content-delivery.svg"
              alt="human phone digital"
              className="floating-3"
            />
          </AnimationWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default EasyImplement;
