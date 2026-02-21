import React, { useRef, useState } from 'react';
import { NavbarLinks } from "../../data/navbarLinks";
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";



export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <div className=' relative z-[1000000] bg-richblack-900 h-14 w-full border-b border-richblack-700 flex items-center justify-center '>
      <div className='px-1 w-[100%] md:w-[75%] md:max-w-maxContent mx-auto flex items-center justify-between'>
        
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="logo" height={32} width={160} />
          </Link>
        </div>
        
        <nav className='hidden md:block'>
          <ul className='flex gap-6 text-richblack-25'>
            {NavbarLinks.map((link) => (
              <li key={link.title}>
                <NavLink to={link.path} className={({ isActive }) => isActive ? "text-yellow-25" : "text-richblack-25"}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div  ref={ref} className="mr-1 md:hidden text-white relative z-[1000000]" >
              <Hamburger toggled={isOpen} size={22} toggle={setOpen} />
              <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className=" fixed  left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-4 bg-richblack-900 border-b border-b-white/20"
                    >
                      <ul className="grid gap-2">
                        {NavbarLinks.map((route, idx) => {
                          const { Icon } = route;

                          return (
                            <motion.li
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.1 + idx / 10,
                              }}
                              key={route.title}
                              className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-900 to-neutral-700"
                            >
                              <Link
                                onClick={() => setOpen((prev) => !prev)}
                                className={
                                  "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                                }
                                to={route.path}
                              >
                                <span className="flex gap-2 text-lg ">{route.title}</span>
                                <Icon className="text-xl" />
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                        </motion.div>
                      )}
              </AnimatePresence>
        </div>        
        
      </div>
    </div>
  );
};

