import React from 'react';
import EasyImplement from '../components/sections/EasyImplement';
import ServiceProvider from '../components/sections/ServiceProvider';
import TitleScreen from '../components/sections/TitleScreen';
import WordWorks from '../components/sections/WordWorks';

const Home = () => (
  <div className="home">
    <TitleScreen />
    <WordWorks />
    <EasyImplement />
    <ServiceProvider />
  </div>
);

export default Home;
