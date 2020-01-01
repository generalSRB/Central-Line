import React from 'react';
import './RightArrow.css';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
        <i className="fas fa-chevron-circle-right" aria-hidden="true"></i>
    </div>
  );
}

export {RightArrow};