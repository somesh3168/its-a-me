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
            <li>
              <img className="companyImg" src={sisImg} alt="" />
              <b>SiSc (Formerly 10to8) </b>
              <p>
                <cite>Full Stack Developer </cite>
                <small className='timeTag'><span className='material-icons hourglass'>hourglass_top</span>JULY 2022 - PRESENT</small>
              </p>
            </li>
            <li>
              <img className="companyImg" src={infyImg} alt="" />
              <b>Infosys</b>
              <p>
                <cite>Senior System Engineer </cite>
                <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>MAY 2021 - JULY 2022</small>
              </p>
            </li>
             <li>
              <img className="companyImg" src={dhiyoImg} alt="" />
              <b>Dhiyotech Pvt Ltd</b>
              <p>
                <cite>Python Developer </cite>
                <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>NOV 2019 - MARCH 2021</small>
              </p>
            </li>
            <li>
              <img className="companyImg" src={mbImg} alt="" />
              <b>Magnet Brains</b>
              <p>
                <cite>Associate </cite>
                <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>MARCH 2019 - OCT 2019</small>
              </p>
            </li>
            <li>
              <img className="companyImg" src={sbiImg} alt="" />
              <b>State Bank of India</b>
              <p>
                <cite>Customer Assistant </cite>
                <small className='timeTag'><span className='material-icons hourglass'>hourglass_bottom</span>FEB 2017 - FEB 2019</small>
              </p>
            </li>
          </ul>
    </div>
  )
}
