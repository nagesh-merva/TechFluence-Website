import React, { useState } from 'react'
import WinnerCard from './WinnerCard'

const WinnerAnnouncement = ({ eventData }) => {
    const [activeId, setActiveId] = useState(eventData.winners[0].id)

    const handleIntersection = (id) => {
        setActiveId(id)
    }

    return (
        <div className="relative w-full max-w-6xl mx-auto my-24 px-4 z-0">
            <div className="flex flex-col gap-24">
                <div className="bg-black/80 backdrop-blur-md rounded-lg border border-cyan-500/30 p-6">
                    <div className="flex items-center text-xs text-gray-400 font-mono mb-2">
                        [EVENT NAME] {'{'}
                    </div>
                    <div className="flex items-center gap-2 ml-4 mb-4">
                        <div className="w-1 h-6 bg-cyan-500"></div>
                        <h1 className="text-cyan-500 text-3xl font-bold tracking-widest font-mono">
                            {eventData.name}
                        </h1>
                    </div>
                    <div className="ml-4 text-xs text-gray-400 font-mono">{'{'}</div>

                    <div className="mt-4 mb-6">
                        <div className="flex items-center text-xs text-gray-400 font-mono mb-2 ml-4">
                            [DESCRIPTION] {'{'}
                        </div>
                        <p className="text-white font-mono leading-relaxed tracking-wide ml-8 text-sm">
                            {eventData.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-400 font-mono mt-2 ml-4">
                            {'}'}
                        </div>
                    </div>
                </div>

                {eventData.winners.map((winner, index) => (
                    <WinnerCard
                        key={winner.id}
                        winner={winner}
                        position={index + 1}
                        isActive={activeId === winner.id}
                        onVisible={() => handleIntersection(winner.id)}
                    />
                ))}
            </div>
        </div>
    )
}


export default WinnerAnnouncement