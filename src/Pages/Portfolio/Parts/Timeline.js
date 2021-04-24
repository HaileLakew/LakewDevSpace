import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import HDLogo from '../../../Assets/Icons/HomeDepot.png'
import UTDallasLogo from '../../../Assets/Icons/UTDallas.png'
import NGLogo from '../../../Assets/Icons/NorthropGrumman.png'
import SEMLogo from '../../../Assets/Icons/SEM.png'

export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work yeetText"
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Mar 2020 - Present"
        icon={<img className="timeline__logo" src={HDLogo} alt="" />}>
        <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Home Depot - Dallas, TX</h4>
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
        className="vertical-timeline-element--work yeetText"
        date="Jan 2018 - Mar 2020"
        icon={<img className="timeline__logo" src={HDLogo} alt="" />}>
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle ">Home Depot - Dallas, TX</h4>
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
        className="vertical-timeline-element--education yeetText"
        date="May 2018"
        icon={<img className="timeline__logo" src={UTDallasLogo} alt="" />}>
        <h3 className="vertical-timeline-element-title">Graduation with BS in Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Texas at Dallas</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work yeetText"
        date="May 2017 - Aug 2017"
        iconStyle={{ background: '#800020 ', color: '#fff' }}>
        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Argo - Dallas, TX</h4>
        <ul>
          <li>Enabled Anti Cross Site Scripting capabilities to system framework</li>
          <li>Created Unit Tests for multiple modules, such as DES encryption systems</li>
          <li>Used .NET framework and C# to modernize legacy code</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work yeetText"
        date="May 2016 - Aug 2016"
        iconStyle={{ background: 'white', color: '#fff' }}
        icon={<img className="timeline__logo" src={NGLogo} alt="" />}>
        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Northrop Gruman - Oklahoma City, OK</h4>
        <ul>
          <li>Enabled XML capabilities in effort to modernize and streamline embedded software</li>
          <li>Collaborated with a team to maintain and peer review new aircraft software</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education yeetText"
        date="May 2014"
        icon={<img className="timeline__logo" src={UTDallasLogo} alt="" />}>
        <h3 className="vertical-timeline-element-title">Started in Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Texas at Dallas</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education yeetText"
        date="Fall 2010"
        icon={<img className="timeline__logo" src={SEMLogo} alt="" />}>
        <h3 className="vertical-timeline-element-title">Started Coding with Java</h3>
        <h4 className="vertical-timeline-element-subtitle">School of Science and Engineering High School</h4>
        <p>Learned the basics of programming in Java in Freshman year of Highschool</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}
