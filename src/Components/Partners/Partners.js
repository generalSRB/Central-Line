import React from 'react';
import './Partners.css';
import knauf from '../../img/knauf.png';
import kronospan from '../../img/kronospan.png';
import egger from '../../img/egger.jpg';
import kastamonu from '../../img/kastamonu.jpg';
import falco from '../../img/falco.png';

const Partners = () => {
    return (
        <div className='partners'>
            <h3>NAŠI PARTNERI</h3>
            <div className='partners-pull'>
                <a className='partner-link' href='https://www.egger.com/shop/sr_RS/' target='_blanc'><img className='partner-logo' src={egger} alt='egger-logo' /></a>
                <a className='partner-link' href='https://rs.kronospan-express.com/sr' target='_blanc'><img className='partner-logo' src={kronospan} alt='kronospan-logo' /></a>
                <a className='partner-link' href='https://www.knauf.rs' target='_blanc'><img className='partner-logo' src={knauf} alt='knauf-logo' /></a>
                <a className='partner-link' href='https://www.kastamonuentegre.com.tr/en/keas-products' target='_blanc'><img className='partner-logo' src={kastamonu} alt='kastamonu-logo' /></a>
                <a className='partner-link' href='https://www.falco-woodindustry.com/' target='_blanc'><img className='partner-logo' src={falco} alt='falco-logo' /></a>
            </div>
        </div>
    )
}

export {Partners};