import React, { useState } from 'react'
import 'material-icons/iconfont/material-icons.css';



const fillStar = `<span class='material-icons fill'>star</span>`
const fadeStar = `<span class='material-icons fade'>star</span>`

function getStarsOutOfFive(num) {
  return fillStar.repeat(num)+fadeStar.repeat(5-num)
}


export default function TechnicalExposure() {
  const [open, setOpen] = useState(true)
  return (
    <div div className="card">
      <h3>TECHNICAL EXPOSURE</h3>
      <ul className='exp-list no-link'>
        <li>
          <a onClick={() => { setOpen(!open) }}><b>Python</b></a>
          {!!open && <div className="show-box">

            <p><small>JULY 2022 - PRESENT</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(4) }}></small>
            </p>
          </div>}
        </li>
        <li>
          <a onClick={() => { setOpen(!open) }}><b>React JS</b></a>
          {!!open && <div className="show-box">
            <p><small>JULY 2022 - PRESENT</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(3) }}></small>
            </p>
          </div>}
        </li>
        <li>
          <a onClick={() => { setOpen(!open) }}><b>Linux</b></a>
          {!!open && <div className="show-box">
            <p><small>JULY 2022 - PRESENT</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(3) }}></small>
            </p>
          </div>}
        </li>
        <li>
          <a onClick={() => { setOpen(!open) }}><b>Docker</b></a>
          {!!open && <div className="show-box">
            <p><small>JULY 2022 - PRESENT</small><br />
              <small dangerouslySetInnerHTML={{ __html: getStarsOutOfFive(2) }}></small>
            </p>
          </div>}
        </li>
      </ul>
    </div>
  )
}
