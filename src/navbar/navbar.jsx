import React from 'react'
import './navbar.css'
import 'material-icons/iconfont/material-icons.css';
import LinkedInIcon from './linkedin_icon.svg';
import GitHubIcon from './github.svg';
import WhatsAppIcon from './whatsapp.svg';
import StackoverflowIcon from './stack-overflow.svg'

export default function Navbar() {
  return (
    <div className="navbar">
        <span className="material-icons no-link" title=""><a href="tel:+91-7974904373" style={{textdecoration: 'none'}}>call</a></span>
        {/* <span className="material-icons">mail</span>
        <span className="material-icons">facebook</span> */}
        <span><a href={'https://www.linkedin.com/in/somesh-kumar-520703165/'} target='_blank' rel="noreferrer"><img src={LinkedInIcon} alt="" /></a></span>
        <span><a href={'https://github.com/somesh3168/'} target='_blank' rel="noreferrer"><img src={GitHubIcon} alt="" style={{width: '1.7rem'}}/></a></span>
        <span><a href={'https://wa.me/919713094711'}><img src={WhatsAppIcon} alt="" style={{width: '1.7rem'}}/></a></span>
        <span><a href={'https://stackoverflow.com/users/10243868/somesh-samadder'} target='_blank' rel="noreferrer"><img src={StackoverflowIcon} alt="" style={{width: '1.7rem'}}/></a></span>
        <span className="material-icons no-link" title="Download Resume">download</span>
    </div>
  )
}
