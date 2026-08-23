"use client";

import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="min-h-screen flex items-center container-custom">
      <div>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-gray-500 mb-10">
          Mobility Experience Designer
        </motion.p>
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="text-[72px] md:text-[96px] leading-none font-medium tracking-tight">
          Designing
          <br/>
          Human-Centered
          <br/>
          Mobility Experiences.
        </motion.h1>
        <p className="mt-12 max-w-xl text-xl text-gray-600">
          UX Designer focusing on interaction design, automotive HMI, and future mobility.
        </p>
      </div>
    </section>
  );
}
