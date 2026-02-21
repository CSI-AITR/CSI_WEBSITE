import React from 'react'
import Logo from "../../assets/logo/logo.png"
import AcropolisLogo from "../../assets/logo/acropolisLogo.png"
import {NavbarLinks} from "../../data/navbarLinks";
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='text-gray-400'>
      <footer className="bg-richblack-800 text-pure-greys-300 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <img src={Logo} alt="logo" className='w-[220px] '/>
          <img src={AcropolisLogo} alt="logo" className='w-[220px] mt-2'/>
          {/* <h2 className="text-white text-lg font-semibold mb-4">About Us</h2> */}
          <p className="mb-4 mt-2">
            Code. Script. Innovate.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            {
              NavbarLinks.map((link,index)=>(
                <li key={index} className="hover:text-white transition-colors duration-300">
                  <Link to={link.path}>
                      {link.title}
                  </Link>
                </li>
              ))
            }           
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/computer-society-of-india-aitr/"
              className="text-2xl hover:text-white transition-colors duration-300"
              target='blank'
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/csi_aitr?igsh=MTJjM3c4c290ODFlYg=="
              className="hover:text-white transition-colors duration-300 text-2xl"
              target='blank'
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Acropolis Institute of Technology and Research,</p>
          <p>Bypass Road,</p>
          <p>Manglia Square,</p>
          <p>Manglia,Indore</p>
          <p>Madhya Pradesh-453771,</p>
          <p>India</p>
          <p>Email: <a href="mailto:csiaitr@acropolis.in">csiaitr@acropolis.in</a></p>
          <p>Phone: <a href="tel:9827023745">9827023745</a></p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 CSI AITR. All rights reserved.</p>
    </footer>
    </div>
  )
}
