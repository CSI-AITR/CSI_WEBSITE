import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdLogout, MdNotifications, MdMenu } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { logoutAdmin } from '../../services/operations/authApi'

const Header = ({ onMenuClick, isLarge }) => {
    const navigate = useNavigate()
    const handleLogout = () => logoutAdmin(navigate)

    return (
        <header className="flex-shrink-0 flex items-center justify-between px-5 h-16 z-20 gap-3" style={{ background: '#0b1630', borderBottom: '1px solid #1e2d4a' }}>

            {/* Left */}
            <div className="flex items-center gap-3">
                {!isLarge && (
                    <button
                        onClick={onMenuClick}
                        className="flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1a2d4f] transition-colors duration-200"
                        style={{ background: '#142040', border: '1px solid #1e2d4a' }}
                    >
                        <MdMenu className="w-5 h-5" />
                    </button>
                )}
                <div className="flex items-center gap-2.5">
                    <div className="w-[3px] h-5 rounded bg-blue-std-500 flex-shrink-0" />
                    <div>
                        <h1 className="text-white font-bold text-base leading-tight">Dashboard</h1>
                        {isLarge && <p className="text-gray-500 text-[11px] mt-0.5">Welcome back, Admin</p>}
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              

                {/* Admin badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: '#142040', border: '1px solid #1e2d4a' }}>
                    <div className="w-7 h-7 rounded-full bg-blue-std-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        A
                    </div>
                    {isLarge && (
                        <div>
                            <p className="text-white text-xs font-semibold leading-tight">CSI Admin</p>
                            <p className="text-gray-500 text-[10px]">Administrator</p>
                        </div>
                    )}
                </div>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-custom-500/10 text-red-custom-400 hover:bg-red-custom-500/20 border border-red-custom-500/30 hover:border-red-custom-500/60 transition-colors duration-200 text-xs font-semibold"
                >
                    <MdLogout size={15} />
                    {isLarge && 'Logout'}
                </button>
            </div>
        </header>
    )
}

export default Header