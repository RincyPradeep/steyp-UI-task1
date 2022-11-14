import React from 'react'

import {Link} from 'react-router-dom';

import './Spotlight.css'

import fire from '../../assets/images/fire.svg'
import arrowithtext from '../../assets/images/arrowithtext.svg'
import twittersearchbar from '../../assets/images/twitter-search bar.svg'
import SearchCards from '../SearchCards/SearchCards';


function Spotlight() {
  return (
    <section id='spotlight'>
        <div className='top'>
            <h1>Minimize your tabs. Find the trends! </h1>
            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
                vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
            </p>
            <div className='start-button'>
                <div className='arrow'><img src={arrowithtext} alt='arrow' /></div>
                <Link to='#' className='button'>
                    <span>Get started </span>
                    <span><img src={fire} alt='start button' /></span>
                </Link>
            </div>          
        </div>

        <div className='bottom'>
            {/* --------------------------------change link address------------------------------------------------ */}           
            <SearchCards srcLink={twittersearchbar} />
            <SearchCards srcLink={twittersearchbar} />
            <SearchCards srcLink={twittersearchbar} />
            <SearchCards srcLink={twittersearchbar} />          
        </div>

    </section>
  )
}

export default Spotlight