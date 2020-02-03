import React from 'react';
import './Card.css';
import construction from '../../img/const.jpeg';
import furniture from '../../img/furniture.jpg';
import transport from '../../img/transportation.jpeg';
import container from '../../img/containerblue.png';
import jumboBag from '../../img/jumbo-bag.jpg';


const Card = () => {
    return (
        <div id='cards'>
            <h3>DELATNOST</h3>
            <div className='card-wrapper first-card'>
                <img className='card-image' src={construction} alt='' />
                <div className='text-wrapper'>
                    <h2>VELEPRODAJA GRADJEVINSKOG MATERIJALA</h2>
                    <span>U ponudi imamo <b>pločasti materijal (OSB ploče, univer, laminat, gipsane table)</b>, razne vrste
                            <b> vodovodnog, keramičarsog i elektro materijala</b>, koji Vam po najpovoljnijim cenama obezbedjujemo
                            u saradnji sa našim partnerima. 
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
                <img className='card-image' src={container} alt='' />
                <div className='text-wrapper'>
                    <h2>PRODAJA KONTEJNERA ZA OTPAD</h2>
                    <span>Vršimo prodaju metalnih i plastičnih kontejnera i kanti raznih zapremina za odlaganje svih vrsta 
                        otpada i smeća, koje obezbedjujemo za Vas u saradnji sa našim partnerima.</span>
                </div>
            </div>

            <div className='card-wrapper'>
                <div className='text-wrapper'>
                    <h2>PRODAJA DŽAMBO VREĆA</h2>
                    <span>Vršimo prodaju standardnih džambo vreća (novih i polovnih), zatim Q-bag, provodljivih, vreća sa uloškom,
                        sa dve ili četiri tačke vešanja, kao džambo vreće izrađene prema Vašim potrebama i željama u saradnji sa našim 
                        partnerima.
                    </span>
                </div>
                <img className='card-image' src={jumboBag} alt='' />
            </div>

            <div className='card-wrapper'>
                <img className='card-image' src={transport} alt='' />
                <div className='text-wrapper'>
                    <h2>TRANSPORT ROBE U ZEMLJI</h2>
                    <span>Vršimo usluge prevoza robe u zemlji sopstvenim transportnim vozilima, u skladu sa Vašim zahtevima i potrebama. </span>
                </div>
            </div>
        </div>
        
    )
}

export{Card};