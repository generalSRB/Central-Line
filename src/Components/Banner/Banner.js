import React from 'react';
import './Banner.css';

import banner from '../../img/furnitureCover.jpg';
import { Header } from '../Header/Header';

const Banner = () => {

    return (
            <div className='image-frame' style={{backgroundImage: `url(${banner})`}}>
                <Header />
                {/* <img src={banner} alt='banner' /> */}
                <div className='hero-content'>
                     <h1><span className='orange'>B</span>rzo. <span className='orange'>T</span>ačno. <span className='orange'>P</span>ouzdano.
                    </h1>
                </div>
               
            </div>
            
    )
}
export {Banner};