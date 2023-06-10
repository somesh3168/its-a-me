import React from 'react'
import 'material-icons/iconfont/material-icons.css';



const fillStar = `<span class='material-icons fill'>star</span>`
const fadeStar = `<span class='material-icons fade'>star</span>`

function getStarsOutOfFive(num) {
  return fillStar.repeat(num)+fadeStar.repeat(5-num)
}


export default function TechnicalExposure() {
  return (
    <div div className="card">
      <h3>TECHNICAL EXPOSURE</h3>
      <ul className='exp-list no-link'>
        <li>
          <b>Python</b>
            <p><small>Backend scripting, Automation</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(4) }}></small>
            </p>
        </li>
        <li>
          <b>React JS</b>
            <p><small>Frontend components</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(3) }}></small>
            </p>
        </li>
        <li>
          <b>Linux</b>
            <p><small>Shell scripting</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(3) }}></small>
            </p>
        </li>
        <li>
          <b>Docker</b>
            <p><small>Containerization of Apps</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(2) }}></small>
            </p>
        </li>
      </ul>
    </div>
  )
}
