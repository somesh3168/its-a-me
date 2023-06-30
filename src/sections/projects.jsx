import React from 'react'
import { useState } from 'react';

export default function Projects() {
  // const [expand, setExpand] = useState(false);
  const [click, setClick] = useState(false);
  return (
    <div className='moreAbout' 
    // onClick={setClick(!click)}
    style={{height:`${click ? "121rem":"4.5rem"}`}}
    >
      {console.log('expand::',click)}
      <p>
        <span 
        
        >
          Work Experience Description
        </span>
        <i className='material-icons'
        style={{cursor:'pointer'}}
        onClick={()=>{setClick(!click)}}
        >{!click ? 'expand_more':'expand_less'}</i>
      </p>
      <p>
        <span>
          [Organizational Projects]
        </span>
      </p>
      <ul>
        <li>
          <p>
            <span>
              Full fledged web development of features from core(backend APIs) to
              integrate to frontend UI, and partially providing second line support
              for the product all together.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Rolling out new features (backend API, frontend) in every sprint,
              along with providing bespoke UI polishing for big clients. (Theme
              customisation) Also, documenting the process.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Maintenance of test automation API serving VOIP products including
              backup, regression and documentation.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Completed filter dashboard module for a compliance-based web
              application in Django Python, which follows agile methodology. (Scrum
              Master, Product Owner, Reviewer, Admin roles).
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Completed the module for creating a GCP function in Python which
              automates and fetches the details of all resources of a GCP Account
              and creates / updates the Violation Table.
            </span>
          </p>
        </li>
      </ul>
      <p>
        <span>
          [Solo Projects]
        </span>
      </p>
      <ul>
        <li>
          <p>
            <span>
              [Pro Bono Works] Consulted and created web ends and dashboards for 2
              companies&nbsp;
            </span>
            <a
              href="https://www.satnambrothers.com/"
              style={{ textDecoration: "none" }}
            >
              <span>
                SatnamBrothers
              </span>
            </a>
            <span>
              &nbsp;&amp;&nbsp;
            </span>
            <a href="https://www.belform.com/" style={{ textDecoration: "none" }}>
              <span>
                Belform
              </span>
            </a>
            <span>
              , hosted on AWS.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              AWS Lambda Functions in Python using CI/CD functionality (Jenkins -
              Private Git Repo - automating shell scripts) for balance transfer
              batches for banking end projects, to change the status of an account
              using GraphQL Mutation.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Created a web application with Python Django (also used jQuery,
              PostgreSQL) portal for online student visa submission, for an
              educational website, with proper field validations. (Also created the
              Admin Panel for the same)
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Web Scraping Application in Python using (lxml, bs4, and Selenium) and
              scrap (more than 100 universities) course details for the same
              educational website. (using DOM structure &amp; concept of xpath.)
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              GCP Cloud Functions in Python to collect the collected university data
              from PostgreSQL tables in CSV format, and upload to AWS s3 Bucket and
              update the GCP Cloud DB tuples.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              &nbsp;[Proof of Concepts] - Created Python script for Virtual fitting
              room concept using Python Libraries (openCV, PIL) - (used Haar Cascade
              classifier for Face &amp; Torso Detection)
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              [Self-Project] – Audio Server with 4 API Endpoints to render data from
              3 different model serializers. (Used Django, Rest framework, MongoDB,
              React JS)
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              [Self-Project] - Created an API based web application in Python Django
              for Covid HelpLine using Python Request Libraries to get JSON response
              and Python Dictionary Object to showcase/render the filtered
              information of the city contacts. (also created Script based solution
              before creating the web-based solution)
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              [Self-Project] - Created Python Selenium script for fetching the
              contact details of students in csv format and sending customized
              WhatsApp messages in batches of 100. (Created this project to automate
              a freelance outreach work for 10,000 data consist of Student and
              Teacher)
            </span>
          </p>
        </li>
      </ul>
      <p>
        <span>
          [Teaching/Training Modules]
        </span>
      </p>
      <ul >
        <li>
          <p>
            <span>
              Python &amp; Java for Testers
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Selenium WebDriver Automation - Python &amp; Java
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Automation Testing with TestNG - Java (Page Object Model), Maven
              Architecture
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Automation Testing with Cucumber – Java (BDD Approach)
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Reporting with extentReports
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              CI/CD integration with Jenkins
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Webhook from GitLab to Jenkins (triggering Build by git Push).
            </span>
          </p>
        </li>
      </ul>
    </div>
  )
}
