import React from 'react'

import {Link} from 'react-router-dom';

import './Footer.css'

import logo from '../../assets/images/logo.png' 


function Footer() {
  return (
    <section id='footer' className='wrapper'>
        <div className='left'>
          <Link to='#'><img src={logo} alt='logo' /></Link>
        </div>
        <div className='right'>
            <ul>
                <li><Link to='#'>How it work</Link></li>
                <li><Link to='#'>Pricing</Link></li>
                <li><Link to='#'>Solution</Link></li>
                <li><Link to='#'>Features</Link></li>
            </ul>
        </div>
    </section>
  )
}

export default Footer