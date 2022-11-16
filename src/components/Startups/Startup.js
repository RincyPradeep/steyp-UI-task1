import React from 'react'

import './Startup.css'

import StartupCards from '../StartupCards/StartupCards'
import {data} from '../../assets/js/StartupsData'


function Startup() {
  return (
    <section id='startup' className='wrapper'>
        <h1>Findtrend make +1000 Startup grow</h1>
        <div className='card-container'>
            {
                data.map((item)=>{
                    return(
                        <StartupCards imgSrc={item.logo} alt="card" key={item.id}/>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Startup