import HeaderText from "../components/main/Headertext";
import GlitchText from "../components/GlitchText";
import { motion } from "framer-motion";
import { WarpBackground } from "@/components/magicui/warp-background";

const coins = [
  {
    id: 1,
    src: "/main/coins/1.png",
    style: { top: "10vh", left: "5vw", width: "clamp(60px, 10vw, 140px)" },
  },
  {
    id: 2,
    src: "/main/coins/2.png",
    style: { top: "8vh", left: "80vw", width: "clamp(70px, 10vw, 150px)" },
  },
  {
    id: 3,
    src: "/main/coins/3.png",
    style: { top: "30vh", left: "15vw", width: "clamp(40px, 6vw, 75px)" },
  },
  {
    id: 4,
    src: "/main/coins/4.png",
    style: { top: "40vh", left: "75vw", width: "clamp(80px, 11vw, 142px)" },
  },
  {
    id: 5,
    src: "/main/coins/5.png",
    style: { top: "50vh", left: "10vw", width: "clamp(35px, 5vw, 68px)" },
  },
  {
    id: 6,
    src: "/main/coins/6.png",
    style: { top: "60vh", left: "85vw", width: "clamp(50px, 7vw, 90px)" },
  },
  {
    id: 7,
    src: "/main/coins/7.png",
    style: { top: "70vh", left: "20vw", width: "clamp(100px, 14vw, 227px)" },
  },
  {
    id: 8,
    src: "/main/coins/8.png",
    style: { top: "80vh", left: "70vw", width: "clamp(45px, 6vw, 84px)" },
  },
  {
    id: 9,
    src: "/main/coins/8.png",
    style: { top: "80vh", left: "8vw", width: "clamp(40px, 5vw, 74px)" },
  },
  {
    id: 10,
    src: "/main/coins/8.png",
    style: { top: "75vh", left: "50vw", width: "clamp(30px, 4vw, 44px)" },
  },
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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* WarpBackground positioned absolutely to cover the entire component */}
      <div className="absolute inset-0 z-0">
        <WarpBackground className="w-full h-full" />
      </div>

      {/* Content container with proper z-index to appear above background */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-16">
        <div className="rotate-180 w-full md:w-10/12">
          {/* <HeaderText heading={""} /> */}
        </div>

        {/* Floating coins with animation */}
        {coins.map((coin) => (
          <motion.img
            key={coin.id}
            src={coin.src}
            className="absolute z-20"
            style={coin.style}
            variants={popAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover="whileHover"
            alt={`Prize coin ${coin.id}`}
          />
        ))}

        {/* Prize containers with glow effect */}
        <div className="px-4 py-8 sm:py-16 md:py-20 flex flex-col items-center w-full sm:w-9/12 space-y-10 sm:space-y-12 md:space-y-20">
          <div className="border-rotate w-4/5 bg-white/15 backdrop-blur-sm px-5 py-3 md:py-6 md:px-8 shadow-lg sm:shadow-xl shadow-[#E5A445] rounded-2xl">
            <p className="text-center text-white text-7xl font-bold font-big-noodle  my-2">
              PRIZE POOL of Rs 1.7 Lakhs
            </p>
          </div>

          <div className="border-rotate w-3/4 bg-white/15 backdrop-blur-sm px-5 py-3 md:py-6 md:px-8 shadow-lg sm:shadow-xl shadow-[#E5A445] rounded-2xl">
            <p className="text-center text-white text-5xl font-bold font-big-noodle  my-2">
              Across 18 Events!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
