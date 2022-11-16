import React from 'react'
import RegisterButton from '../RegisterButton/RegisterButton'

import './Register.css'


function Register() {
  return (
    <section id='register'>
        <div className='content'>
            <h1>
                Join us on email for <br/>
                <span> more trending topics</span>
            </h1>
        </div>
        <RegisterButton />
    </section>
  )
}

export default Register