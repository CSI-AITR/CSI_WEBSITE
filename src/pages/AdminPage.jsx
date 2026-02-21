import React, { useState, useEffect } from 'react';
import Sidebar from '../components/AdminPanel/Sidebar';
import Header from '../components/AdminPanel/Header';
import Main from '../components/AdminPanel/Main';

export default function AdminPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const onResize = () => {
            const large = window.innerWidth >= 1024;
            setIsLarge(large);
            if (!large) setSidebarOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <div className="flex h-screen overflow-hidden" style={{ background: '#060d1f' }}>

            {/* Mobile overlay */}
            {!isLarge && sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/60 z-40"
                />
            )}

            {/* Sidebar */}
            <div
                className="h-screen z-50 transition-transform duration-300 ease-in-out"
                style={{
                    position: isLarge ? 'relative' : 'fixed',
                    left: 0, top: 0,
                    transform: isLarge ? 'none' : sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                }}
            >
                <Sidebar isLarge={isLarge} onClose={() => setSidebarOpen(false)} />
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1 overflow-hidden min-w-0">
                <Header onMenuClick={() => setSidebarOpen(prev => !prev)} isLarge={isLarge} />
                <Main />
            </div>
        </div>
    );
}
