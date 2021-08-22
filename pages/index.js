import React from 'react';
import EasyImplement from '../components/sections/EasyImplement';
import PayForUse from '../components/sections/PayForUse';
import ServiceProvider from '../components/sections/ServiceProvider';
import TitleScreen from '../components/sections/TitleScreen';
import WordWorks from '../components/sections/WordWorks';

const Home = () => {
  return (
    <div className="home">
      <div className="info">Dispositivo no compatible</div>
      <div className="content">
        <TitleScreen />
        <WordWorks />
        <EasyImplement />
        <ServiceProvider />
        <PayForUse />
      </div>
    </div>
  );
};

export default Home;
