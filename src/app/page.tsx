'use client';
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="inline-block mt-10 m-20 overflow-hidden"> 
      {/* overflow-hidden prevents scroll flicker when animating from y: -100 */}
      
      <motion.h1
        initial={{ opacity: 0, x: -50 }}     // start higher and transparent
        animate={{ opacity: 1, x: 0 }}        // fade in + slide down
        transition={{ duration: 1, ease: "easeOut" }}
        className="block font-bold text-white/80 text-6xl"
      >
        You Think<br />
        We create<br />
        Transforming ideas<br />
        into online success
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-5 text-2xl font-semibold"
      >
        Build your dream website and <br /> watch your business grow online.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="bg-white/10 mt-4 text-lg w-30 ml-3 font-semibold shadow-md hover:bg-black/60 rounded-xl"
      >
        Get Started
      </motion.button>
    </div>
  );
}
