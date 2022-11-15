import React from 'react'


function PlatformCard({imgSrc, bg}) {
  return (
    <div className='card' style={{backgroundColor:bg}}>
        <img src={imgSrc} alt="card" />
    </div>
  )
}

export default PlatformCard