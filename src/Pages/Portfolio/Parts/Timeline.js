import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work blackText"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Mar 2020 - Present"
        iconStyle={{ background: '#fff', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
        <ul>
          <li>Mentored other engineers in learning code practices and helping them take on challenging projects</li>
          <li>
            Took ownership and leadership over stories and epics, and provided new tools for businesses partners to
            interact with customers through our site
          </li>
          <li>
            Coordinated with team members to optimize the site's Lighthouse scores. This included releasing packages
            that included Brotli Compression, IE support removal, and conversion of images to Webp
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work blackText"
        date="Jan 2018 - Mar 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle ">Dallas, TX</h4>
        <ul>
          <li>
            Worked on providing new features to our online storefront. Projects ranged from writing
            reusable/configurable calculators and tooltips, to providing installation options to DIY customers
          </li>
          <li>
            Reviewed GitHub pull requests to uphold code quality, while writing unit tests to help automate quality
            assurance
          </li>
          <li>
            Deployed application as DevOps. Responsibilities ranged from maintaining lower life cycle states and
            coordinating with QA, to working on and deploying hotfixes with SRE resources
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education blackText"
        date="May 2018"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Graduation with BS in Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Texas at Dallas</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work blackText"
        date="May 2017 - Aug 2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
        <ul>
          <li>Enabled Anti Cross Site Scripting capabilities to system framework</li>
          <li>Created Unit Tests for multiple modules, such as DES encryption systems</li>
          <li>Used .NET framework and C# to modernize legacy code</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work blackText"
        date="May 2016 - Aug 2016"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
        <ul>
          <li>Enabled XML capabilities in effort to modernize and streamline embedded software</li>
          <li>Collaborated with a team to maintain and peer review new aircraft software</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education blackText"
        date="May 2014"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Started in Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Texas at Dallas</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education blackText"
        date="Fall 2010"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Started Coding with Java</h3>
        <h4 className="vertical-timeline-element-subtitle">School of Science and Engineering High School</h4>
        <p>Learned the basics of programming in Java in Freshman year of Highschool</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
