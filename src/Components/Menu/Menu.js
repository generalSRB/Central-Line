import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    render () {
       return (
        <div className={("navbar", {"navbar--hidden": !this.state.visible})}>
            <ul>
                <li><a href="/"><span>P</span>OČETNA</a></li>
                <li><a href='#cards'><span>D</span>ELATNOST</a></li>
                <li><a href='#slider'><span>G</span>ALERIJA</a></li>
                <li><a href='#aboutUs'><span>O</span> NAMA</a></li>
                <li><a href='#information-wrapper'><span>K</span>ONTAKT</a></li>
            </ul>
        </div> 
     
        );
    }
}    

export{Menu};