import React from 'react'
import  {HoverEffect}  from '../ui/card-hover-effect'

export const WhatWeDo = () => {
  return (
    <div className='mt-4 px-4 md:px-8'>
      {/* Glass container for the whole section */}
      <div style={{
        background: 'rgba(10, 10, 10, 0.55)',
        backdropFilter: 'blur(16px) saturate(160%)',
        WebkitBackdropFilter: 'blur(16px) saturate(160%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '1.5rem',
        padding: '2.5rem 1.5rem',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.5)',
      }}>
        <h2 className='text-white text-center text-4xl font-bold'>What We <span className='text-blue-100'>Do</span></h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>

        <h2 className='text-white text-center text-4xl font-bold mt-8'>Our <span className='text-blue-100'>Values</span></h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={values} />
        </div>
      </div>
    </div>
  )
}


export const projects =[
    {
      "title": "Coding Competitions",
      "description": "Engage in coding competitions regularly to enhance members' problem-solving skills and foster healthy competition within the club."
    },
    {
      "title": "Workshops & Seminars",
      "description": "Conduct workshops and seminars on trending technologies and industry-relevant topics to keep members updated with the latest advancements in the field of computer science."
    },
    {
      "title": "Hackathons",
      "description": "Organize hackathons to provide a platform for members to collaborate, innovate, and showcase their creativity by developing solutions to real-world problems within a limited timeframe."
    },
    {
      "title": "Community Outreach Programs",
      "description": "Collaborate with local schools and organizations to organize coding camps, mentorship programs, and outreach events aimed at promoting computer science education and literacy in the community."
    },
    {
      "title": "Project Development",
      "description": "Facilitate project development groups where members can collaborate on meaningful projects, gaining practical experience and applying theoretical knowledge to real-world scenarios."
    },
    {
      "title": "Tech Talks & Webinars",
      "description": "Host tech talks and webinars featuring industry experts and alumni to provide insights into various career paths, emerging technologies, and industry trends, helping members make informed decisions about their future careers in technology."
    }
  ]

  export const values =[
    {
      "title": "Innovation",
      "description": "Encourage innovative thinking and problem-solving among members, fostering a culture of creativity and exploration."
    },
    {
      "title": "Collaboration",
      "description": "Promote collaboration and teamwork, recognizing the importance of collective efforts in achieving common goals and objectives."
    },
    {
      "title": "Learning",
      "description": "Emphasize continuous learning and skill development, providing opportunities for members to expand their knowledge and expertise in various areas of computer science."
    },
    {
      "title": "Inclusivity",
      "description": "Cultivate an inclusive and supportive environment where everyone feels valued, respected, and empowered to contribute regardless of their background or experience."
    },
    {
      "title": "Ethical Conduct",
      "description": "Uphold high ethical standards and integrity in all activities and interactions, promoting responsible and ethical use of technology for the betterment of society."
    },
    {
      "title": "Community Engagement",
      "description": "Engage with the local and global community through outreach programs, initiatives, and collaborations, leveraging technology for social impact and positive change."
    }
  ]
  