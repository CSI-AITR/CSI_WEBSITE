import React from 'react'
import { CardSpotlight } from '../ui/card-spotlight'

export const WhatWeDo = () => {
  return (
    <div className='mt-8 px-4 md:px-8 pb-12 font-jakarta'>
      {/* Enhanced Glass container for the whole section */}
      <div className="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className='text-white text-3xl md:text-5xl font-bold font-outfit tracking-tight'>
              What We <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500'>Do</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {projects.map((item, idx) => (
              <CardSpotlight key={idx} className="h-full p-8 flex flex-col group border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 font-bold text-xl">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                <p className="text-blue-100/70 font-light leading-relaxed text-base flex-grow">
                  {item.description}
                </p>
              </CardSpotlight>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className='text-white text-3xl md:text-5xl font-bold font-outfit tracking-tight'>
              Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-caribbeangreen-300 to-caribbeangreen-500'>Values</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item, idx) => (
              <CardSpotlight key={idx} className="h-full p-8 flex flex-col group border-white/5 hover:border-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbeangreen-300 to-caribbeangreen-500 font-bold text-xl">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-caribbeangreen-300 transition-colors">{item.title}</h3>
                <p className="text-blue-100/70 font-light leading-relaxed text-base flex-grow">
                  {item.description}
                </p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


export const projects = [
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

export const values = [
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