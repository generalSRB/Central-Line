import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id='information-wrapper'>
            <div className='contact'>
                <div className='contact-wrapper'>
                    <div className='contact-element'>
                        <i className="fas fa-map-marker-alt"></i>
                        <span> Adresa: Stevana Opačića broj 16, 11000 Beograd</span>
                    </div>
                    <div className='contact-element'>
                        <i className="fas fa-phone"></i>
                        <span>Telefon/faks:<a href="tel:+381117586894"> +381 11 7586 984</a></span> 
                    </div>
                    <div className='contact-element'>
                        <i className="fab fa-viber"></i>
                        <span>Mobilni telefon:<a href="tel:+381605333551"> +381 60 5333 551</a> / <a href="tel:+381601304415"> +381 60 1304 415</a></span>
                        
                    </div>
                    <div className='contact-element'>
                        <i className="fas fa-envelope-square"></i>
                        <span>E-mail: <a href="mailto:central.linedoo@gmail.com" target="_blanc"> central.linedoo@gmail.com</a> </span>
                    </div>
                </div>

                <iframe title="map" frameBorder="0" style={{ width: "100%", height: "200px", maxWidth:"1000px"}} 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1416.865562789586!2d20.45379427187645!3d44.745501998225336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a719f1db7d229%3A0xd56906ddc9e6c13e!2z0KHRgtC10LLQsNC90LAg0J7Qv9Cw0YfQuNGb0LAgMTYsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1569782684278!5m2!1ssr!2srs">
                </iframe>
            </div>
        </div>
    )
}

export {Contact};