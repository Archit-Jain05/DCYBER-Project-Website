import React from 'react'
import '../style/service.css'

import 'aos/dist/aos.css'
function Service() {
  return (
    <div className='service-main'>
      <h1>Services</h1>
      <div className='cards'>

        <div data-aos='fade-in' className='card1'>
        <p className='t1'>Data Center</p>
          <p className='c1'>Application Delivery Infrastructure, Hardware for SAP, AD, Email, Telecom, Enterprise Servers, Virtual Storage, Backup and Network appliances.<br /><br /> Data Centre Design & Built (Building up of Tier 3 Data Centre) plus Data Centre Audit.</p>
        </div>

        <div data-aos='fade-in' className='card2'>
        <p className='t1'>Network</p>
        <p className='c2'>NOC and SOC Management, Structured Network Cabling System, Audio Visual Systems, Board Room, Enclosures & Cool Racks, VoIP Solutions, IP Camera Surveillance, Intelligent Lighting & Controls, Firewall, Switch Router, IDS and IPS solution.</p>
        </div>

        <div data-aos='fade-in' className='card3'>
        <p className='t1'>Cloud</p>
        <p className='c3'>Private Cloud: the business critical and non critical application. Moving Services from Standalone environment to Cloud, Web Based Cloud Computing, Managed Services like applications used by the cloud service providers, such as anti-spam service.</p>
        </div>

        <div data-aos='fade-in' className='card4'>
        <p className='t1'>IRM</p>
        <p className='c4'>Managed Security Services, Threat Intelligence:<br /><br /> •Malware Code Analysis, Cloud Security, Security & Risk Consulting, Incident & Emergency Response: Incident Management Retention, Response plan review & Development, Incident Management Risk Assessment.</p>
        </div>

        <div data-aos='fade-in' className='card5'>
        <p className='t1'>Cyber Security</p>
        <p className='c5'>Data Security covers Advanced Threat Protection. Identity & Access offers Two Factor Authentication and Privilege Identity Management. Advance Security covers Network Immune System, ICS Security, Enterprise Security, IOT Security, Cloud Security and much more.</p>
        </div>

        <div data-aos='fade-in' className='card6'>
        <p className='t1'>Cyber Exposure Assesment</p>
        <p className='c6'>Our data shows that 80% of organizations´ exposure comes from external sources such as supply chain, vendors, cloud service providers and social media.<br /> Exposure assessment helps you to understand your current cyber exposure and unidentified liabilities.</p>
        </div>

        <div data-aos='fade-in' className='card7'>
        <p className='t1'>Facility Management Service</p>
        <p className='c7'>Help Desk Management & Support like Call Management, Onsite Support & Residence Engineer Support, Remote Infrastructure Management, Project Management, Vendor Management, Application Support & License Management.</p>
        </div>

      </div>
    </div>
  )
}

export default Service
