import React from 'react'
import EventForm from './OurChart'

const Main = () => {
    return (
        <main className="flex-1 overflow-y-auto scroll-smooth flex flex-col gap-6 p-4 md:p-6" style={{ background: '#060d1f' }}>

            {/* Event Management Panel */}
            <div className="rounded-xl border border-[#1e2d4a] p-5 md:p-6" style={{ background: '#0c1730' }}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-5 rounded bg-blue-std-500 flex-shrink-0" />
                    <h2 className="text-white font-bold text-base">Event Management</h2>
                </div>
                <EventForm />
            </div>
        </main>
    )
}

export default Main