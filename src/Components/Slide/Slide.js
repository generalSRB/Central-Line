import React from 'react';
import './Slide.css';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100%'
  }
  return <div className="slide" style={styles}></div>
}

export {Slide};