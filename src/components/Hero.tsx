"use client";

import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="min-h-screen flex items-center container-custom">
      <div className="max-w-6xl">
        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="text-sm tracking-[0.4em] text-gray-500 mb-10"
        >
          UX DESIGNER · MOBILITY EXPERIENCE
        </motion.p>

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="text-[64px] md:text-[96px] leading-[0.95] font-medium tracking-tight"
        >
          Designing
          <br/>
          Human-Centered
          <br/>
          Digital Experiences.
        </motion.h1>

        <p className="mt-12 max-w-2xl text-xl text-gray-600 leading-relaxed">
          I am a UX Designer focusing on mobility experience, intelligent products,
          and interaction design. I explore how people connect with technology
          through meaningful and intuitive experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-sm text-gray-500">
          <span>Mobility UX</span>
          <span>Interaction Design</span>
          <span>Automotive HMI</span>
          <span>User Research</span>
        </div>
      </div>
    </section>
  );
}
