import React from 'react'

import './NewTabs.css'

import cardleftarrow from '../../assets/images/arrowithtext.svg'


function NewTabs() {
  return (
    <section id="new-tabs" className='wrapper'>
        <div className='content'>
            <h1>Open new tabs is sho*t</h1>
            <div className='card-container'>
              <div className='card'>
                {/* add card image link-------------------------------------------------- */}

                <div className='card-left'>
                  <img src={cardleftarrow} alt="arrow" />
                </div>
                <div className='card-right'>
                  {/* ----change arrow link---------------------------------------------- */}
                  <img src={cardleftarrow} alt="arrow" />
                </div>
              </div>
            </div>
            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, 
                vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.</p>
        </div>
    </section>
  )
}

export default NewTabs