import React, { Component } from 'react';
import {Slide} from '../Slide/Slide';
import {RightArrow} from '../RightArrow/RightArrow';
import {LeftArrow} from '../LeftArrow/LeftArrow';
import './Slider.css';


class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
              "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=835&q=80",
              "https://images.unsplash.com/photo-1574621974239-00deab554d60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80",
              "https://images.unsplash.com/photo-1560562125-ab512e4d9d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80",
              "https://images.unsplash.com/photo-1574739782594-db4ead022697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
              "https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg",
              "https://images.unsplash.com/photo-1562008088-e8fe0711f7e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
              "https://image.freepik.com/free-photo/3d-rendering-minimal-scandinavian-wood-walk-closet-with-wardrobe_105762-167.jpg",
              "https://image.freepik.com/free-photo/3d-rendering-minimal-scandinavian-wood-walk-closet-with-wardrobe_105762-313.jpg",
              "https://image.freepik.com/free-photo/3d-rendering-beautiful-wood-horizontal-wardrobe-walk-closet_105762-18.jpg",
              "https://cdn.pixabay.com/photo/2016/01/13/14/01/dressing-room-1137941_960_720.jpg",
              "https://image.freepik.com/free-photo/wardrobe-wooden-design-cabinet-tv-wooden-japanese-design-room-minimal-interior_43151-2166.jpg",
              "https://image.freepik.com/free-photo/wardrobe-wooden-design-cabinet-tv-wooden-japanese-design-room-minimal-interior_43151-2164.jpg"
              ],
              currentIndex: 0,
              translateValue: 0
        }
    }
      
    goToPrevSlide = () => {

        if (this.state.currentIndex === 0) {
            return this.setState ({
              currentIndex: this.state.images.length - 1,
              translateValue: -(this.slideWidth())*(this.state.images.length-1) 
            }) 
          }

        this.setState (prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
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
          translateValue: prevState.translateValue - (this.slideWidth())
        }));
      }
    
      slideWidth = () => {
         return document.querySelector('.slider-wrapper').clientWidth
      }

    render() {
        return (
            <div id="slider" className="slider">
              <h3 className="galery">GALERIJA</h3>
                               
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