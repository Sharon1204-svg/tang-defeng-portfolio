import Link from 'next/link';
import { motion } from 'framer-motion';

const works = [
 {title:'Chuxingbao',subtitle:'Urban Mobility Experience',tags:'Mobility UX · Interaction Design · Service Design'},
 {title:'Caihe',subtitle:'Smart Food Management Experience',tags:'UX Research · Smart Product · Service Design'},
 {title:'PETA',subtitle:'Intelligent Pet Care Experience',tags:'IoT · Interaction Design · Smart Product'}
];

export default function Home(){
 return <main className="bg-[#FAFAF8] text-[#111]">
  <nav className="fixed top-0 w-full bg-[#FAFAF8]/80 backdrop-blur z-10">
   <div className="container-custom flex justify-between py-8 text-sm">
    <span className="font-medium">Tang Defeng</span>
    <div className="flex gap-8"><Link href="#works">Work</Link><Link href="#about">About</Link><span>EN/CN</span></div>
   </div>
  </nav>

  <section className="min-h-screen flex items-center container-custom">
   <div>
    <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-gray-500 mb-10">UX Designer · Mobility Experience Designer</motion.p>
    <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="text-7xl md:text-8xl tracking-tight leading-none font-medium max-w-5xl">Designing human-centered experiences between people, products and intelligent systems.</motion.h1>
    <p className="mt-12 max-w-xl text-xl text-gray-600">Exploring mobility experience, interaction design and future intelligent products.</p>
   </div>
  </section>

  <section id="works" className="container-custom pb-32">
   <h2 className="text-5xl mb-20">Selected Works</h2>
   <div className="space-y-32">{works.map((work,index)=><article key={work.title}>
    <div className="aspect-[16/9] bg-[#E8E6DF] rounded-3xl flex items-center justify-center text-gray-500 mb-8">Project Image 0{index+1}</div>
    <p className="text-sm">0{index+1}</p>
    <h3 className="text-4xl mt-3">{work.title}</h3>
    <p className="text-xl text-gray-600 mt-2">{work.subtitle}</p>
    <p className="mt-4 text-sm">{work.tags}</p>
   </article>)}</div>
  </section>

  <section id="about" className="container-custom py-32 grid md:grid-cols-2 gap-16">
   <div className="aspect-[4/5] bg-[#DDDAD1] rounded-3xl flex items-center justify-center">Tang Defeng Portrait</div>
   <div>
    <h2 className="text-5xl mb-8">About Me</h2>
    <p className="text-lg leading-relaxed text-gray-700">I am Tang Defeng, a UX designer with a background in industrial design and user experience research. My work focuses on mobility experience, intelligent products, automotive HMI and human-centered interaction.</p>
   </div>
  </section>

  <footer className="container-custom py-20">Let's create meaningful experiences.</footer>
 </main>
}
