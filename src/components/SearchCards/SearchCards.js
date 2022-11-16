import React from 'react'

import './SearchCards.css'

import close_btn from '../../assets/images/cross.svg'


function SearchCards({img, text, bg}) {
  return (
    <div className='search-card'>
      {bg ? 
      <div className='bg-green'>
        <img src={img} alt='logo' className='logo'/>
      </div>
      :
      <img src={img} alt='logo' className='logo'/>
      }
      <span>{text}</span>
      <img src={close_btn} alt='close' className='close-btn'/>
    </div>
  )
}

export default SearchCards