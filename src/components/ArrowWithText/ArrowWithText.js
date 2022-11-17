import React from 'react'

import './ArrowWithText.css'

import arrow from '../../assets/images/arrow.png'


function ArrowWithText({text,left,white}) {
  return (
    <>
      <p className={white ? 'arrow-text white' : 'arrow-text'}>{text}</p>
      <img src={arrow} alt='arrow' className={left && 'left-arrow' || white && 'white'}/>
    </>
  )
}

export default ArrowWithText