import React from 'react';
import './LeftArrow.css';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="fas fa-chevron-circle-left" aria-hidden="true"></i>
    </div>
  );
}

export {LeftArrow};