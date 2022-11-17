import React from 'react'
import PriceCard from '../PriceCard/PriceCard'

import './Price.css'

import ArrowWithText from '../ArrowWithText/ArrowWithText'


function Price() {
  return (
    <section id='price'>
        <div className='content'>
            <div className='top'>
                <h3>Get your best deal</h3>
                <div className='option'>
                    <p className='active'>Maecenasi</p>
                    <div className='option-button'>
                        <div></div>
                    </div>
                    <p>Maecenasi</p>
                    <div className='card'>
                        <ArrowWithText text='You just start from here' white />
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <PriceCard price={8} />
                <PriceCard price={20} active />
                <PriceCard price={48} />
            </div>
        </div>
    </section>
  )
}

export default Price