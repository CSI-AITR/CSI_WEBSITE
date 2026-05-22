import React, { useRef, useState } from 'react';
import { NavbarLinks } from "../../data/navbarLinks";
import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useClickAway } from "react-use";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <>
      {/* Placeholder to prevent layout shift since navbar is fixed */}
      <div className="h-14 w-full bg-richblack-900"></div>

      <div className="fixed top-0 left-0 right-0 z-[1000000] flex justify-center pointer-events-none">
        <motion.div
          layout
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`pointer-events-auto flex items-center justify-center ${
            isScrolled 
              ? "mt-4 w-[95%] md:w-[65%] lg:w-[50%] h-16 rounded-full bg-richblack-900/80 backdrop-blur-lg border border-richblack-700 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" 
              : "mt-0 w-full h-14 bg-richblack-900 border-b border-richblack-700 rounded-none"
          }`}
        >
          <motion.div 
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`flex items-center justify-between w-full h-full ${
              isScrolled ? "px-6 md:px-8" : "px-4 md:px-0 md:w-[75%] md:max-w-maxContent mx-auto"
            }`}
          >
            
            <motion.div layout transition={{ duration: 0.3, ease: "easeInOut" }}>
              <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <motion.img 
                  layout
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  src={Logo} 
                  alt="logo" 
                  className={`object-contain ${
                    isScrolled ? "h-[28px] md:h-[32px]" : "h-[32px] w-[160px]"
                  }`} 
                />
              </Link>
            </motion.div>
            
            <motion.nav layout transition={{ duration: 0.3, ease: "easeInOut" }} className='hidden md:block'>
              <ul className='flex gap-6 text-richblack-25'>
                {NavbarLinks.map((link) => (
                  <motion.li layout transition={{ duration: 0.3, ease: "easeInOut" }} key={link.title}>
                    <NavLink to={link.path} className={({ isActive }) => `transition-colors duration-200 text-sm font-medium ${isActive ? "text-yellow-25" : "text-richblack-25 hover:text-white"}`}>
                      {link.title}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
            
            <motion.div layout transition={{ duration: 0.3, ease: "easeInOut" }} ref={ref} className={`md:hidden text-white relative z-[1000000] ${isScrolled ? "-mr-2" : "mr-1"}`}>
              <Hamburger toggled={isOpen} size={22} toggle={setOpen} />
              <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={
                        isScrolled
                          ? "fixed left-[5%] right-[5%] top-[5.5rem] p-5 pt-4 bg-richblack-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
                          : "fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-4 bg-richblack-900 border-b border-b-white/20"
                      }
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
                                onClick={() => setOpen(false)}
                                className={
                                  "flex items-center justify-between w-full p-4 rounded-xl bg-neutral-950"
                                }
                                to={route.path}
                              >
                                <span className="flex gap-2 text-lg ">{route.title}</span>
                                {Icon && <Icon className="text-xl" />}
                              </Link>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
              </AnimatePresence>
            </motion.div>        
            
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

