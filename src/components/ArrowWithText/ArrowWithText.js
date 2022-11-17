import React from 'react'

import './ArrowWithText.css'

import arrow from '../../assets/images/arrow.png'


function ArrowWithText({text,left,white}) {
  return (
    <>
    {white ?
        <>
            <p className='arrow-text white'>{text} </p>
            <img src={arrow} alt='arrow' className='white' />
        </>
    :
        <>
            <p className='arrow-text'>{text}</p>
            <img src={arrow} alt='arrow' className={left && 'left-arrow'}/>
        </>
    }
    </>
  )
}

export default ArrowWithText