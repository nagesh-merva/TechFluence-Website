import { motion } from "framer-motion"

const CRTOverlay = () => {
    return (
        <div className="mt-5 absolute w-full h-full overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-overlay opacity-20"
                animate={{ y: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(235,204,169,0.15)_1px,transparent_2px)] bg-[length:100%_4px] opacity-60"></div>
            </motion.div>
            <motion.div
                className="absolute inset-0 bg-black opacity-5 pointer-events-none"
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ repeat: Infinity, duration: 0.2, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,228,181,0.03)_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
        </div>
    )
}

export default CRTOverlay;
