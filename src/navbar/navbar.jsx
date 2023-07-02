import React from 'react'
import './navbar.css'
import 'material-icons/iconfont/material-icons.css';
import LinkedInIcon from './linkedin_icon.svg';
import GitHubIcon from './github.svg';
import WhatsAppIcon from './whatsapp.svg';
import StackoverflowIcon from './stack-overflow.svg';
import myResume from '../resume-pdf/Somesh_Resume_2023.pdf';
import { useState } from 'react';

export default function Navbar() {
  const [pdfdrop, setPdfdrop] = useState(false);
  return (
    <div className="navbar">
        <span className="material-icons no-link" title=""><a href="tel:+91-7974904373" style={{textdecoration: 'none'}}>call</a></span>
        {/* <span className="material-icons">mail</span>
        <span className="material-icons">facebook</span> */}
        <span><a href={'https://www.linkedin.com/in/somesh-kumar-520703165/'} target='_blank' rel="noreferrer"><img src={LinkedInIcon} alt="" /></a></span>
        <span><a href={'https://github.com/somesh3168/'} target='_blank' rel="noreferrer"><img src={GitHubIcon} alt="" style={{width: '1.7rem'}}/></a></span>
        <span><a href={'https://wa.me/919713094711'}><img src={WhatsAppIcon} alt="" style={{width: '1.7rem'}}/></a></span>
        <span><a href={'https://stackoverflow.com/users/10243868/somesh-samadder'} target='_blank' rel="noreferrer"><img src={StackoverflowIcon} alt="" style={{width: '1.7rem'}}/></a></span>

        <div className="wrap">
          <span
            className="material-icons no-link" title="Resume"
            onClick={() => { setPdfdrop(!pdfdrop) }}
          ><a href={"#ResumeView"}>
              picture_as_pdf</a></span>
          <div id={"ResumeView"} className="modal">
            <div className="modal-content">
              <a className="material-icons no-link closebutton" href={myResume} download="Somesh_Resume_2023">download</a>
              <a className="material-icons no-link closebutton" href={'/'}>cancel</a>
              <object data={myResume} type="application/pdf" width="100%" height="100%">
                <p className='only-plugin-para'>Your web browser doesn't have a PDF plugin.
                  <iframe src={myResume} title="Resume" width="100%" />
                  <br /><br /><br />Instead you can
                  click here to
                  download the PDF file.</p>
                <a
                  className="material-icons no-link closebutton bg-download"
                  href={myResume}
                  download="Somesh_Resume_2023"
                >download_for_offline</a>
              </object>
            </div>
            <a href={'/'} className="closeoverlay">_</a>
          </div>
        </div>
    </div>
  )
}
