import { BorderBeam } from '../magicui/border-beam'

const WinnerCard = ({ winner, position, isActive, onVisible }) => {
    return (
        <div className="gap-4 transition-all duration-500">
            <div className="bg-black/80 backdrop-blur-md rounded-md border border-cyan-500/30 p-4 flex flex-col justify-between hover:scale-[1.02]">
                <BorderBeam
                    containerClassName="rounded-md overflow-hidden"
                    className="h-full w-full"
                    beamClassName="bg-cyan-500"
                    beamOpacity={0.6}
                    beamIntensity={0.4}
                    beams={8}
                    animationSpeed={10}
                />
                <div className="flex items-center text-[10px] text-gray-400 font-mono mb-1">
                    [WINNER {position}] {'{'}
                </div>
                <div className="ml-3 p-3 rounded-md bg-gradient-to-r from-black to-cyan-950/30 border border-cyan-500/20">
                    <h2 className="text-xl font-bold text-white mb-1 font-mono tracking-wide">
                        {winner.name}
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500 rounded text-cyan-400 font-mono text-xs">
                            POSITION #{position}
                        </div>
                        <div className="px-2 py-0.5 bg-amber-500/20 border border-amber-500 rounded text-amber-400 font-mono text-xs">
                            {winner.prize}
                        </div>
                    </div>
                </div>
                <div className="flex items-center text-[10px] text-gray-400 font-mono mt-1">
                    {'}'}
                </div>
            </div>
        </div>
    )
}

export default WinnerCard
