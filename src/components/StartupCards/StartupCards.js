import React from 'react'

import './StartupCards.css'


function StartupCards({imgSrc}) {
  return (
    <div className='card'>
        <img src={imgSrc} alt="card" />
    </div>
  )
}

export default StartupCards