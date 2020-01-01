import React from 'react';
import './Header.css';
import {Menu} from '../Menu/Menu';
import logo from '../../img/logo1.png';
import Headroom from 'react-headroom';

const Header = () => {
    return (
        <Headroom>
            <header>
            <div className="header-wrapper">
                <div>
                    <a href='/'><img className='logo' src={logo} alt='CentralLine' /></a>
                </div>
                <Menu />
            </div>
        </header>
        </Headroom>
        
    )
};

export {Header};