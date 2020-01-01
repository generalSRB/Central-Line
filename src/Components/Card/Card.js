import React from 'react';
import './Card.css';
import construction from '../../img/const.jpeg';
import furniture from '../../img/furniture1.jpg';
import transport from '../../img/transport.jpg';
import container from '../../img/container.jpg'


const Card = () => {
    return (
        <div id='cards'>
            <div className='card-wrapper first-card'>
                <img className='card-image' src={construction} alt='' />
                <div className='text-wrapper'>
                    <h2>VELEPRODAJA GRADJEVINSKOG MATERIJALA</h2>
                    <span>
                        <ul className='materials'>
                            <li>Pločasti materijal
                                <ul>
                                    <li>OSB ploče</li>
                                    <li>Univer</li>
                                    <li>Laminat</li>
                                    <li>Gipsane table</li>
                                </ul>
                            </li>
                            <li>Vodovodni materijal</li>
                            <li>Keramičarski materijal</li>
                            <li>Elektro materijal</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='text-wrapper'>
                    <h2>IZRADA NAMEŠTAJA</h2>
                    <span>Vršimo izradu nameštaja od pločastog materijala i stakla prema Vašim potrebama i željama.
                          Tu smo da damo savet kako da na najbolji način uklopite Vaše želje i prostor u Vašem domu.
                          Naš tim će otkloniti svaku Vašu dilemu, sa ciljem da Vaš životni prostor učini lepšim i prijatnijim mestom.  
                        </span>
                </div>
                <img className='card-image' src={furniture} alt='' />
            </div>
            <div className='card-wrapper'>
                <img className='card-image' src={transport} alt='' />
                <div className='text-wrapper'>
                    <h2>TRANSPORT ROBE U ZEMLJI</h2>
                    <span>Vršimo usluge prevoza robe u zemlji sopstvenim transportnim vozilima, u skladu sa Vašim zahtevima i potrebama. 
                        </span>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='text-wrapper'>
                    <h2>PRODAJA KONTEJNERA ZA OTPAD</h2>
                    <span>Vršimo prodaju kontejnera od metala za odlaganje raznih vrsta otpada i smeća.
                        </span>
                </div>
                <img className='card-image' src={container} alt='' />
            </div>
        </div>
        
    )
}

export{Card};