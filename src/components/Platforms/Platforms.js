import React from 'react'
import PlatformCard from '../PlatformCard/PlatformCard'

import './Platforms.css'

import { platform_data } from '../../assets/js/PlatformData'
import post_one from '../../assets/images/linkedin-page1.jpg'
import post_two from '../../assets/images/linkedin-page2.jpg'
import RegisterButton from '../RegisterButton/RegisterButton'


function Platforms() {
  return (
    <section id='platform'>
        <div className='wrapper' >
            <h1>All platform connect to Findtrend</h1>
            <div className='cards'>
                {
                    platform_data.map((item)=>{
                        return(
                            <PlatformCard imgSrc={item.img} bg={item.bg} key={item.id} />
                        )
                    })
                }
            </div>
            <div className='linkedin-posts' >
                <div>
                    <img src={post_one} alt="post" />
                </div>
                <div>
                    <img src={post_two} alt="post" />
                </div>
                <div>
                    <img src={post_one} alt="post" />
                </div>
            </div>
            <RegisterButton />
        </div>
    </section>
  )
}

export default Platforms