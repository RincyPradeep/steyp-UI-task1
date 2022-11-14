import React from 'react'

import './SearchCards.css'


function SearchCards({srcLink}) {
  return (
    <div>
        <img src={srcLink} alt="card" />
    </div>
  )
}

export default SearchCards