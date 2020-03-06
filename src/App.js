import React, {Fragment} from 'react';
import './App.css';
import {Card} from './Components/Card/Card';
import {Banner} from './Components/Banner/Banner';
import {Slider} from './Components/Slider/Slider';
import {Contact} from './Components/Contact/Contact';
import {Partners} from './Components/Partners/Partners';
import {AboutUs} from './Components/AboutUs/AboutUs';
import { Footer } from './Components/Footer/Footer';



const App = () => {
  
  return (
    <Fragment>
      
      <Banner />
      <Card />
      <Slider />
      <AboutUs />
     
      <Contact />
      <Partners />
      <Footer />
    </Fragment>
    
  );
}

export default App;
