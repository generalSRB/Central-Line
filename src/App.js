import React, {Fragment} from 'react';
import './App.css';
import {Card} from './Components/Card/Card';
import {Banner} from './Components/Banner/Banner';
import {Slider} from './Components/Slider/Slider';
import {Contact} from './Components/Contact/Contact';
import {AboutUs} from './Components/AboutUs/AboutUs';


const App = () => {
  return (
    <Fragment>

      <Banner />
      <Card />
      <Slider />
      <AboutUs />
      <Contact />
    </Fragment>
    
  );
}

export default App;
