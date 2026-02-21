import { BiHomeAlt2 } from "react-icons/bi";
import { PiChatCircleBold } from "react-icons/pi";
import { BsCalendar4Event } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";


export const NavbarLinks = [
  {
    title: "Home",
    path: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "About Us",
    path: "/about",
    Icon: PiChatCircleBold,
  },
  {
    title: "Events",
    path: "/event",
    Icon: BsCalendar4Event,
  },
  {
    title: "Team",
    path: "/team",
    Icon: AiOutlineTeam,
  },
  {
    title: "Contact Us",
    path: "/contactUs",
    Icon: IoIosCall,
  },
];
