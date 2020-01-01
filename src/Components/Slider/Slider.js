import React, { Component } from 'react';
import {Slide} from '../Slide/Slide';
import {RightArrow} from '../RightArrow/RightArrow';
import {LeftArrow} from '../LeftArrow/LeftArrow';
import {transport} from '../../img/transport.jpg';



import './Slider.css';


class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                `{transport}`,
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
              ],
              currentIndex: 0,
              translateValue: 0
        }
    }
    
// ovo je problematicna funkcija
    goToPrevSlide = () => {

        if(this.state.currentIndex === 0) {
            return this.setState({
              currentIndex: this.state.images.length - 1,
              translateValue: (this.slideWidth())*this.state.images.length-1 
            })
          }

        this.setState(prevState => ({
            currentIndex: prevState.curentIndex -1,
            translateValue: prevState.translateValue +(this.slideWidth())
        }))    
    }
    
    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
          return this.setState({
            currentIndex: 0,
            translateValue: 0
          })
        }
        
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue -(this.slideWidth())
        }));
      }
    
      slideWidth = () => {
         return document.querySelector('.slider-wrapper').clientWidth
      }

    render() {
        return (
            <div className="slider">
                               
                <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
                
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 1s'
                    }}>
                        {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                        }
                </div>

                
                <RightArrow goToNextSlide={this.goToNextSlide}/>

            </div>
        )
    }
    
}

export {Slider};