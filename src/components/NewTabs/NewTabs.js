import React from 'react'

import './NewTabs.css'

import cardleftarrow from '../../assets/images/text.svg'
import cardrightarrow from '../../assets/images/arrowwithtextblack.svg'
import arrow from '../../assets/images/arrow.png'
import logo from '../../assets/images/icon.png'
import SearchCards from '../SearchCards/SearchCards'


function NewTabs() {
  return (
    <section id="new-tabs" className='wrapper'>
        <div className='content'>
            <h1>Open new tabs is sho*t</h1>
            <div className='card-container'>
                <div className='card-left'>
                  <img src={cardleftarrow} alt="arrow" className='arrowtext'/>
                  <img src={arrow} alt='arrow' className='arrow' />
                </div>
                <div className='card'>
                  <SearchCards img={logo} text='Findtrend - Elon musk' bg />
                </div>
                <div className='card-right'>
                  <img src={cardrightarrow} alt="arrow" className='arrowtext' />
                </div>
            </div>
            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
              vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
            </p>
        </div>
    </section>
  )
}

export default NewTabs