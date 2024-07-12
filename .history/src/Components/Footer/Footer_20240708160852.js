import React from 'react'
import './Footer.cssS'
import footer_logo from "../Assets/logo_big.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo}></img>
        </div>
      
    </div>
  )
}

export default Footer
