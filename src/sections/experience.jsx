import React from 'react';
import './sections.css';
// import tenToEightImg from './img/10to8.jpeg';
import sisImg from './img/sis.jpeg';
import mbImg from './img/mb.png';
import dhiyoImg from './img/dhiyo.png';
import infyImg from './img/infy.png';
import sbiImg from './img/sbi.png';

export default function Experience() {
  return (
    <div div className="card">
        <h3>EXPERIENCE</h3>
          <ul className='exp-list exp'>
            <li title='Sign In Scheduling'>
              <div className="compGlass">
                <img className="companyImg" src={sisImg} alt="" />
                <b>SiSc (Formerly 10to8) </b>
              </div>
              <div className="nameGlass">
                <p>
                  <cite>Full Stack Developer </cite>
                </p>
                <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>JULY 2022 - JUNE 2023</small>
              </div>
            </li>
            <li>
            <div className="compGlass">
              <img className="companyImg" src={infyImg} alt="" />
              <b>Infosys</b>
              </div>
              <div className="nameGlass">
              <p>
                <cite>Senior System Engineer </cite>
              </p>
              <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>MAY 2021 - JULY 2022</small>
              </div>
            </li>
             <li>
             <div className="compGlass">
              <img className="companyImg" src={dhiyoImg} alt="" />
              <b>Dhiyotech Pvt Ltd</b>
              </div>
              <div className="nameGlass">
              <p>
                <cite>Python Developer </cite>
              </p>
              <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>NOV 2019 - MARCH 2021</small>
              </div>
            </li>
            <li>
            <div className="compGlass">
              <img className="companyImg" src={mbImg} alt="" />
              <b>Magnet Brains</b>
              </div>
              <div className="nameGlass">
              <p>
                <cite>Associate </cite>
              </p>
              <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>MARCH 2019 - OCT 2019</small>
              </div>
            </li>
            <li>
            <div className="compGlass">
              <img className="companyImg" src={sbiImg} alt="" />
              <b>State Bank of India</b>
              </div>
              <div className="nameGlass">
              <p>
                <cite>Customer Assistant </cite>
              </p>
              <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>FEB 2017 - FEB 2019</small>
              </div>
            </li>
          </ul>
    </div>
  )
}
