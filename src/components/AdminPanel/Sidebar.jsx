import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { RiTeamLine } from "react-icons/ri";
import { FaChevronLeft } from 'react-icons/fa'
import Logo from '../../assets/logo/logo.png'

const navItems = [
    { name: 'Event Management', icon: MdDashboard },
    { name: 'Team Management',        icon:RiTeamLine },
]

const Sidebar = ({ isLarge, onClose }) => {
    const [expanded, setExpanded] = useState(true)
    const [activeNavIndex, setActiveNavIndex] = useState(0)

    const showLabels = !isLarge || expanded

    return (
        <aside
            className="flex flex-col justify-between h-screen flex-shrink-0 overflow-hidden py-5 transition-all duration-300"
            style={{ width: isLarge ? (expanded ? 220 : 68) : 220, background: '#0b1630', borderRight: '1px solid #1e2d4a' }}
        >
            {/* Top section */}
            <div className="flex flex-col gap-5">
                {/* Logo + close */}
                <div className="px-4 flex items-center justify-between">
                    {showLabels
                        ? <img src={Logo} alt="CSI" className="h-7 object-contain" />
                        : <span className="w-full text-center font-black text-blue-std-400 text-base">CS</span>
                    }
                    {!isLarge && (
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1a2d4f] transition-colors duration-200"
                        style={{ background: '#142040', border: '1px solid #1e2d4a' }}
                        >
                            <FaChevronLeft size={13} />
                        </button>
                    )}
                </div>

                <hr className="border-[#1e2d4a] mx-3" />

                {/* Nav */}
                <nav className="flex flex-col gap-1 px-2">
                    {navItems.map((item, i) => {
                        const active = activeNavIndex === i
                        return (
                            <button
                                key={item.name}
                                onClick={() => setActiveNavIndex(i)}
                                className={`flex items-center w-full rounded-xl transition-colors duration-200 ${
                                    showLabels ? 'px-3 py-2.5 gap-3' : 'p-2.5 justify-center'
                                } ${ active
                                    ? 'bg-blue-std-700 text-white'
                                    : 'text-slate-400 hover:bg-[#142040] hover:text-white'
                                }`}
                            >
                                <div className={`flex items-center justify-center flex-shrink-0 p-1.5 rounded-lg ${
                                    active ? 'bg-blue-std-600' : 'bg-[#142040]'
                                }`}>
                                    <item.icon className="w-4 h-4" />
                                </div>
                                {showLabels && (
                                    <span className={`text-[13px] whitespace-nowrap ${active ? 'font-semibold' : 'font-normal'}`}>
                                        {item.name}
                                    </span>
                                )}
                            </button>
                        )
                    })}
                </nav>
            </div>

            {/* Bottom: collapse toggle */}
            <div className="flex flex-col gap-2 px-2">
                <hr className="border-[#1e2d4a] mb-1" />
                {isLarge && (
                    <button
                        onClick={() => setExpanded(p => !p)}
                        className={`flex items-center w-full rounded-xl px-3 py-2.5 text-slate-400 hover:bg-[#142040] hover:text-white transition-colors duration-200 ${
                            showLabels ? 'gap-3' : 'justify-center'
                        }`}
                    >
                        <FaChevronLeft
                            size={13}
                            className="text-blue-std-400 flex-shrink-0 transition-transform duration-300"
                            style={{ transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)' }}
                        />
                        {expanded && <span className="text-xs font-medium">Collapse</span>}
                    </button>
                )}
            </div>
        </aside>
    )
}

export default Sidebar
