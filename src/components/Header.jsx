import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Header() {
  return (
<header className="header-container">
    <div className="header-content">
    <h2 className="title" >
       <a href="/">Where is in the World?</a>  
        </h2>
    <p className="theme-changer">
    <FontAwesomeIcon icon={faMoon} />
    &nbsp;&nbsp;Dark Mode
        </p>

    </div>

</header>
  )
}

export default Header