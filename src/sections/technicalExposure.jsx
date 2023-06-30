import React from 'react'
import 'material-icons/iconfont/material-icons.css';



const fillStar = `<i class='material-icons fill'>star</i>`
const fillStarHalf = `<i class='material-icons fill'>star_half</i>`
const fadeStar = `<i class='material-icons fade'>star</i>`

function getStarsOutOfFive(fill,half,fade) {
  return fillStar.repeat(fill) + fillStarHalf.repeat(half) + fadeStar.repeat(fade)
}


export default function TechnicalExposure() {
  return (
    <div div className="card">
      <h3>TECHNICAL EXPOSURE</h3>
      <ul className='exp-list no-link'>
        <li>
          <b>Python</b>
            <p><small>Backend scripting, Automation</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(3,1,1) }}></small>
            </p>
        </li>
        <li>
          <b>React JS</b>
            <p><small>Frontend components</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(3,0,2) }}></small>
            </p>
        </li>
        <li>
          <b>Linux</b>
            <p><small>Shell scripting</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(2,1,2) }}></small>
            </p>
        </li>
        <li>
          <b>CSS</b>
            <p><small>Responsive Frontend UI</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(3,0,2) }}></small>
            </p>
        </li>
        <li>
          <b>Docker</b>
            <p><small>Containerization of Apps</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(1,1,3) }}></small>
            </p>
        </li>
      </ul>
    </div>
  )
}
