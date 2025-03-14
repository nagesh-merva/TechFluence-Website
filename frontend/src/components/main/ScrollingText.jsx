import { motion } from "framer-motion";

export default function ScrollingText() {
  return (
    <div className="bg-creamy bottom-0 absolute w-full h-13 flex items-center overflow-hidden whitespace-nowrap">
      <motion.div
        className="text-lg font-bold text-black flex gap-8"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
      >
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
        <span className="flex">
          INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA • INTENSA
        </span>
      </motion.div>
    </div>
  );
}
