import React from "react"
import { motion } from "framer-motion"

const GlitchText = ({ text }) => {
    const glitchVariants = {
        glitch1: {
            x: [0, -1, 1, -3, 3, 0],
            y: [0, 2, -2, 1, -1, 0],
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.4,
                ease: "easeInOut",
                repeatDelay: 2
            }
        },
        glitch2: {
            x: [0, 2, -2, 1, -1, 0],
            y: [0, -1, 1, -1, 1, 0],
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.4,
                ease: "easeInOut",
                repeatDelay: 2.1
            }
        }
    }

    return (
        <div className="relative">
            <div className="relative">{text}</div>
            <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-75"
                variants={glitchVariants}
                animate="glitch1"
            >
                {text}
            </motion.div>
            <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-75"
                variants={glitchVariants}
                animate="glitch2"
            >
                {text}
            </motion.div>
        </div>
    )
}

export default GlitchText
