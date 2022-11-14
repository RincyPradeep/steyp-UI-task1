import React from 'react'

import {Link} from 'react-router-dom';

import './Header.css'

import logo from '../../assets/images/logo-colour.svg'


function Header() {
  return (
    <section id='header' className='wrapper'>
        <div className='nav-left'>
            <h1>
                <Link to='#'>
                    <img src={logo} alt="logo" />
                </Link>
            </h1>
        </div>
        <div className='nav-middle'>
            <ul>
                <li><Link to='#'>About</Link></li>
                <li><Link to='#'>How it Work</Link></li>
                <li><Link to='#'>Pricing</Link></li>
                <li><Link to='#'>Solution</Link></li>
                <li><Link to='#'>Features</Link></li>
            </ul>
        </div>
        <div className='nav-right'>
            <ul>
                <li><Link to='#'>Login</Link></li>
                <li><Link to='#' className='button'>Register</Link></li>
            </ul>           
        </div>
    </section>
  )
}

export default Header