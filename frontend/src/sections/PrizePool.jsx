import HeaderText from "../components/main/Headertext"
import GlitchText from "../components/GlitchText"
import { motion } from "framer-motion"

const coins = [
    { id: 1, src: "/main/coins/1.png", style: { top: "10vh", left: "5vw", width: "clamp(60px, 10vw, 140px)" } },
    { id: 2, src: "/main/coins/2.png", style: { top: "8vh", left: "80vw", width: "clamp(70px, 10vw, 150px)" } },
    { id: 3, src: "/main/coins/3.png", style: { top: "30vh", left: "15vw", width: "clamp(40px, 6vw, 75px)" } },
    { id: 4, src: "/main/coins/4.png", style: { top: "40vh", left: "75vw", width: "clamp(80px, 11vw, 142px)" } },
    { id: 5, src: "/main/coins/5.png", style: { top: "50vh", left: "10vw", width: "clamp(35px, 5vw, 68px)" } },
    { id: 6, src: "/main/coins/6.png", style: { top: "60vh", left: "85vw", width: "clamp(50px, 7vw, 90px)" } },
    { id: 7, src: "/main/coins/7.png", style: { top: "70vh", left: "20vw", width: "clamp(100px, 14vw, 227px)" } },
    { id: 8, src: "/main/coins/8.png", style: { top: "80vh", left: "70vw", width: "clamp(45px, 6vw, 84px)" } },
    { id: 9, src: "/main/coins/8.png", style: { top: "80vh", left: "8vw", width: "clamp(40px, 5vw, 74px)" } },
    { id: 10, src: "/main/coins/8.png", style: { top: "75vh", left: "50vw", width: "clamp(30px, 4vw, 44px)" } },
];


const popAnimation = {
    initial: { scale: 0, opacity: 0 },
    animate: {
        scale: 1.2,
        y: -10,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
            duration: 0.3,
        },
    },
    whileHover: {
        scale: 1.3,
        transition: { type: "spring", stiffness: 250 },
    },
};


export default function PrizePool() {
    return (
        <div className="relative w-full h-auto flex flex-col items-center justify-center overflow-hidden">
            <div className="rotate-180 w-full md:w-10/12">
                <HeaderText heading={""} />
            </div>

            {coins.map((coin) => (
                <motion.img
                    key={coin.id}
                    src={coin.src}
                    className="absolute z-50 "
                    style={coin.style}
                    variants={popAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                />
            ))}

            <div className="px-4 py-8 sm:py-16 md:py-20 flex flex-col items-center w-full sm:w-9/12 space-y-10 sm:space-y-12 md:space-y-20">
                <div className="border-rotate w-4/5 bg-white/15 px-5 py-3 md:py-6 md:px-8 shadow-lg sm:shadow-xl shadow-[#E5A445] rounded-2xl">
                    <h1 className="font-['Press_Start_2P'] text-center leading-8 sm:leading-14 text-[#E5A445] font-outline sm:font-outline-1 text-2xl sm:text-3xl md:text-4xl">
                        <GlitchText text={"A Grand Prize Pool Of 70K"} />
                    </h1>
                </div>
                <div className="border-rotate w-4/5 bg-white/15 px-5 py-3 md:py-6 md:px-8 shadow-lg sm:shadow-xl shadow-[#E5A445] rounded-2xl">
                    <h1 className="font-['Press_Start_2P'] text-center leading-8 sm:leading-14 text-[#E5A445] font-outline sm:font-outline-1 text-2xl sm:text-3xl md:text-4xl">
                        <GlitchText text={"Featuring over 16 events"} />
                    </h1>
                </div>
            </div>

            <div className="w-full md:w-10/12">
                <HeaderText heading={""} />
            </div>
        </div>
    );
}
