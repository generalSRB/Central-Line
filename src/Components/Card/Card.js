import React from 'react';
import './Card.css';
import construction from '../../img/const.jpeg';
import furniture from '../../img/furniture.jpg';
import transport from '../../img/transportation.jpeg';
import container from '../../img/container2.jpg';
import jumboBag from '../../img/jumbo-bag.jpg';


const Card = () => {
    return (
        <div id='cards'>
            <h3 className="first-head">DELATNOST</h3>
            <div className='card-wrapper first-card image-first'>
                <img className='card-image' src={construction} alt='' />
                <div className='text-wrapper'>
                    <h1>VELEPRODAJA GRADJEVINSKOG MATERIJALA</h1>
                    <span className='card-text'>U ponudi imamo <b>pločasti materijal (OSB ploče, univer, laminat, gipsane table)</b>, razne vrste
                            <b> vodovodnog, keramičarsog i elektro materijala</b>, koji Vam po najpovoljnijim cenama obezbeđujemo
                            u saradnji sa našim partnerima. 
                    </span>
                </div>
            </div>
            <div className='card-wrapper text-first'>
                <div className='text-wrapper'>
                    <h1>IZRADA NAMEŠTAJA</h1>
                    <span className='card-text'>Vršimo izradu nameštaja od pločastog materijala i stakla prema Vašim potrebama i željama.
                          Tu smo da damo savet kako da na najbolji način uklopite želje i prostor u Vašem domu.
                          Naš tim će otkloniti sve Vaše dileme i učiniti Vaš prostor lepšim i prijatnijim.  
                    </span>
                </div>
                <img className='card-image' src={furniture} alt='' />
            </div>
            
            <div className='card-wrapper image-first'>
                <img className='card-image' src={container} alt='' />
                <div className='text-wrapper'>
                    <h1>PRODAJA KONTEJNERA ZA OTPAD</h1>
                    <span className='card-text'>Vršimo prodaju metalnih i plastičnih kontejnera i kanti raznih zapremina za odlaganje svih vrsta otpada i smeća, koje obezbedjujemo za Vas u saradnji sa našim partnerima. Vaše je samo da odaberete, ostalo je naša briga.</span>
                </div>
            </div>

            <div className='card-wrapper text-first'>
                <div className='text-wrapper'>
                    <h1>PRODAJA DŽAMBO VREĆA</h1>
                    <span className='card-text'>Vršimo prodaju standardnih džambo vreća (novih i polovnih), zatim Q-bag, provodljivih, vreća sa uloškom,
                        sa dve ili četiri tačke vešanja, kao džambo vreće izrađene prema Vašim potrebama i željama u saradnji sa našim 
                        partnerima.
                    </span>
                </div>
                <img className='card-image' src={jumboBag} alt='' />
            </div>

            <div className='card-wrapper image-first'>
                <img className='card-image' src={transport} alt='' />
                <div className='text-wrapper'>
                    <h1>TRANSPORT ROBE U ZEMLJI</h1>
                    <span className='card-text'>Vršimo usluge prevoza robe sopstvenim transportnim vozilima na teritoriji Republike Srbije, u skladu sa Vašim zahtevima i potrebama. Vaše je samo da odaberete lokaciju, a naše da Vam bezbedno i na vreme dostavimo robu.</span>
                </div>
            </div>
        </div>
        
    )
}

export{Card};