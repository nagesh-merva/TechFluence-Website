import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { ShineBorder } from "@/components/magicui/shine-border"

export default function OfflineEvents() {
    const events = [
        {
            id: 1,
            title: "RETROTHON",
            image: "/events/hackathon.jpg",
            description: "Where Past Meets Future in Code! A 24-hour hackathon.",
            prizes: ["₹25,00", "₹15,000"],
            link: 'https://lu.ma/tekhk5ld'
        },
        {
            id: 2,
            title: "cyberturf",
            image: "/events/robosoccer.jpg",
            description: "Robots clash in a retro-futuristic soccer showdown!",
            prizes: ["₹7,000", "₹5,000"],
            link: 'https://lu.ma/4al3cihp'
        },
        {
            id: 3,
            title: "Neocode Arcade",
            image: "/events/codefun.jpg",
            description: "Code your way through a nostalgic arcade experience!",
            prizes: ["₹6,000", "₹4,000"],
            link: 'https://lu.ma/9h5r41v3'
        },
        {
            id: 4,
            title: "BYTECODE BATTLE",
            image: "/events/competativeP.jpg",
            description: "A Competitive Coding Challenge to test your coding skills.",
            prizes: ["₹5,000", "₹3,000"],
            link: 'https://lu.ma/ofo6o1en'
        },
        {
            id: 5,
            title: "CHRONOVERSE",
            image: "/events/uiux.jpg",
            description: "Step into the Chronoverse, where past meets future in an electrifying UI/UX challenge!",
            prizes: ["₹7,000", "₹4,000"],
            link: 'https://lu.ma/rm45fabf'
        },
        {
            id: 6,
            title: "Neo Corp",
            image: "/events/sharktank.jpg",
            description: "Pitch your startup ideas to a panel of investors in a Shark Tank-style event.",
            prizes: ["₹5,000", "₹3,000"],
            link: 'https://lu.ma/108q8gao'
        },
        {
            id: 7,
            title: "Postmodern Parleys",
            image: "/events/debate.jpg",
            description: "Engage in thought-provoking debates. Can you win the argument with the power of your words?",
            prizes: ["₹3,750", "₹2,750"],
            link: 'https://lu.ma/vyo5knj6a'
        },
        {
            id: 8,
            title: "Mind Matrix",
            image: "/events/quiz.jpg",
            description: "Quiz competition featuring mind-bending questions and puzzles.",
            prizes: ["₹3,500", "₹2,500", "₹1,500"],
            link: 'https://lu.ma/r0k9mysl'
        }
    ]

    const containerRef = useRef(null)
    const [isScrollingAllowed, setIsScrollingAllowed] = useState(true)
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const calculateEndTransform = () => {
        if (windowWidth < 640) {
            return "-105%"
        } else if (windowWidth >= 1280) {
            return "-125%"
        } else if (windowWidth >= 1024) {
            return "-135%"
        } else {
            return "-175%"
        }
    }

    const x = useTransform(scrollYProgress, [0, 1], ["0%", calculateEndTransform()])
    const smoothX = useSpring(x, { stiffness: 50, damping: 30 })

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleWheel = (event) => {
            if (!containerRef.current || !isScrollingAllowed) return
            const container = containerRef.current
            const atTop = window.scrollY <= container.offsetTop
            const atBottom = window.scrollY + window.innerHeight >= container.offsetTop + container.offsetHeight

            if (!atTop && !atBottom) {
                event.preventDefault()
                window.scrollBy(0, event.deltaY > 0 ? 50 : -50)
            }

            if (atBottom || atTop) {
                setIsScrollingAllowed(false)
            } else {
                setIsScrollingAllowed(true)
            }
        }

        window.addEventListener("wheel", handleWheel, { passive: false })
        return () => window.removeEventListener("wheel", handleWheel)
    }, [isScrollingAllowed])

    return (
        <section ref={containerRef} className="relative h-[800vh] bg-black mt-32">
            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="absolute inset-0 -z-0">
                    <AnimatedGridPattern
                        numSquares={300}
                        maxOpacity={0.6}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "w-full h-full",
                            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                            "skew-y-12"
                        )}
                    />
                </div>
                <motion.div
                    style={{ x: smoothX }}
                    className="flex items-center h-full gap-6 md:gap-32 w-[600vw] sm:w-[350vw] md:w-[290vw]"
                >
                    <div className="flex flex-col items-center justify-center min-w-screen h-full px-6">
                        <h4 className="text-sm md:text-md text-creamy font-semibold font-space-mono tracking-wider text-center">// Offline Events </h4>
                        <h1 className="text-5xl uppercase md:text-9xl text-creamy font-normal font-big-noodle tracking-tighter text-center">
                            EXPLORE<br />ON FIELD WONDERS
                        </h1>
                    </div>

                    {events.map((event, index) => (
                        <div key={event.id} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            <a href={event.link} target="_blank" className="relative">
                                <div className="absolute top-2 left-2 z-30 bg-black/70 px-2 py-1 text-xs text-creamy font-mono">
                                    [{index.toString().padStart(3, '0')}]
                                </div>

                                <ShineBorder
                                    borderWidth={4}
                                    shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                                    className="w-[250px] sm:w-[250px] md:w-[280px] h-[350px] sm:h-[350px] md:h-[380px] relative overflow-hidden"
                                >
                                    <div className="group relative z-20 w-full h-full overflow-hidden p-3">
                                        <div className="w-full h-full relative">
                                            <img
                                                src={event.image}
                                                alt={`offline-${event.title}`}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 mix-blend-overlay"></div>
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-purple-900/30"></div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <p className="bg-gradient-to-br uppercase from-black/80 to-black/60 p-4 md:p-6 text-xl md:text-3xl font-bold text-white backdrop-blur-sm border border-white/20">
                                                    {event.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </ShineBorder>
                                <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-between py-4">
                                    <div className="h-12 w-full bg-gradient-to-b from-cyan-400 to-blue-600 opacity-70"></div>
                                    <div className="h-12 w-full bg-gradient-to-t from-purple-400 to-pink-600 opacity-70"></div>
                                </div>
                            </a>
                            <a href={event.link} target="_blank" className="w-[250px] sm:w-[250px] md:w-[220px] h-[350px] sm:h-[350px] md:h-[380px] bg-black/80 border border-gray-800 p-4 flex flex-col backdrop-blur-md">
                                <div className="border-b border-gray-700 pb-2 mb-3">
                                    <div className="text-xs text-gray-500 font-mono">[COLLECTION NAME] {"{"}</div>
                                    <div className="flex items-center gap-2 ml-4">
                                        <span className="text-gray-500">/</span>
                                        <h3 className="text-lg uppercase text-cyan-400 font-mono font-bold tracking-wider">{event.title}</h3>
                                    </div>
                                    <div className="text-xs text-gray-500 font-mono">{"{"}</div>
                                </div>

                                <div className="mb-3">
                                    <div className="text-xs text-gray-500 font-mono">[DESCRIPTION] {"{"}</div>
                                    <p className="text-sm text-gray-300 ml-4 my-2 font-mono uppercase leading-tight">
                                        {event.description}
                                    </p>
                                    <div className="text-xs text-gray-500 font-mono">{"}"}</div>
                                </div>

                                <div className="mt-auto">
                                    <div className="text-xs text-gray-500 font-mono">[PRIZES] {"{"}</div>
                                    <div className="flex flex-col gap-1 ml-4 my-2">
                                        {event.prizes.map((prize, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <span className={`text-sm font-mono ${i === 0 ? 'text-yellow-400' : i === 1 ? 'text-gray-400' : 'text-amber-700'}`}>
                                                    {i + 1}
                                                </span>
                                                <span className="text-sm text-white font-mono">{prize}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-xs text-gray-500 font-mono">{"}"}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}