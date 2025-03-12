import { BorderBeam } from '../magicui/border-beam'
import { useRef, useEffect } from 'react'

const WinnerCard = ({ winner, position, isActive, onVisible }) => {
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onVisible()
                }
            },
            { threshold: 0.6 }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [onVisible])

    return (
        <div
            ref={cardRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                }`}
        >
            <div className="relative">
                <BorderBeam
                    containerClassName="rounded-lg overflow-hidden"
                    className="h-full w-full"
                    beamClassName="bg-cyan-500"
                    beamOpacity={0.6}
                    beamIntensity={0.4}
                    beams={8}
                    animationSpeed={10}
                />
                <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 backdrop-blur-sm rounded-md font-mono z-10">
                    [{winner.id}]
                </div>
                <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-full h-full object-cover aspect-[3/1] border-3 border-black rounded-md"
                />
            </div>

            <div className="bg-black/80 backdrop-blur-md rounded-lg border border-cyan-500/30 p-6 flex flex-col justify-between">
                <div className="flex items-center text-xs text-gray-400 font-mono mb-2">
                    [WINNER {position}] {'{'}
                </div>
                <div className="ml-4 p-4 rounded-md bg-gradient-to-r from-black to-cyan-950/30 border border-cyan-500/20">
                    <h2 className="text-2xl font-bold text-white mb-2 font-mono tracking-wider">
                        {winner.name}
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-400 font-mono text-sm">
                            POSITION #{position}
                        </div>
                        <div className="px-3 py-1 bg-amber-500/20 border border-amber-500 rounded text-amber-400 font-mono text-sm">
                            {winner.prize}
                        </div>
                    </div>
                </div>
                <div className="flex items-center text-xs text-gray-400 font-mono mt-2">
                    {'}'}
                </div>
            </div>
        </div>
    )
}

export default WinnerCard