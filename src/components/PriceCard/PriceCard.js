import React from 'react'

import './PriceCard.css'

import tickIcon from '../../assets/images/tick.png'


function PriceCard({price,active}) {
  return (
    <div className={ active ? 'price-card active': 'price-card' }>

        <h3>Personal</h3>
        <p>Vivamus sed libero ornare</p>
        <hr></hr>
        <h2><span>$ {price} </span>  /month</h2>
        <div className='bottom'>
            <div>
                <p>
                    <img src={tickIcon} alt='tick' />
                    <span>Vivamus sed libero ornare</span>
                </p>
                <p>
                    <img src={tickIcon} alt='tick' />
                    <span>Rivamus sed libero</span>
                </p>
                <p>
                    <img src={tickIcon} alt='tick' />
                    <span>Tivamus sed libero ornare</span>
                </p>
            </div>
            <button className={active? 'black-btn' : 'green-btn'}>For free</button>
        </div>
    </div>
  )
}

export default PriceCard