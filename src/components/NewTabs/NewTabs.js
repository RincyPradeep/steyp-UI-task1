import React from 'react'

import './NewTabs.css'

import logo from '../../assets/images/icon.png'
import SearchCards from '../SearchCards/SearchCards'
import ArrowWithText from '../ArrowWithText/ArrowWithText'


function NewTabs() {
  return (
    <section id="new-tabs" className='wrapper'>
        <div className='content'>
            <h1>Open new tabs is sh*t</h1>
            <div className='card-container'>
                <div className='card-left'>
                  <ArrowWithText text="All research start from here" left />
                </div>
                <div className='card'>
                  <SearchCards img={logo} text='Findtrend - Elon musk' bg />
                </div>
                <div className='card-right'>
                  <ArrowWithText text="You just start from here" />
                </div>
            </div>
            <p className='description'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
              vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
            </p>
        </div>
    </section>
  )
}

export default NewTabs