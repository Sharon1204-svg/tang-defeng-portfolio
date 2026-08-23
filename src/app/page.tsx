import Link from 'next/link';
import { motion } from 'framer-motion';

const works = [
 {number:'01',title:'Chuxingbao',cn:'出行宝',subtitle:'Mobility Experience Design',tags:'Automotive UX · Interaction · Service Design'},
 {number:'02',title:'Accessible Wheelchair',cn:'无障碍轮椅',subtitle:'Inclusive Mobility Design',tags:'Human-centered Design · Product Experience'},
 {number:'03',title:'PETA',cn:'智能宠物喂食器',subtitle:'Smart Home Interaction Experience',tags:'IoT · UX Research · Interaction Design'},
 {number:'04',title:'Caihe',cn:'菜盒',subtitle:'Smart Food Management System',tags:'Service Design · Smart Product'}
];

export default function Home(){
 return <main className="bg-[#FAFAF8] text-[#111]">
  <nav className="fixed top-0 w-full bg-[#FAFAF8]/80 backdrop-blur z-10">
   <div className="container-custom flex justify-between py-8 text-sm">
    <span className="font-medium">Tang Defeng</span>
    <div className="flex gap-8"><Link href="#works">Works</Link><Link href="#about">About</Link><Link href="#contact">Contact</Link><span>EN / 中文</span></div>
   </div>
  </nav>

  <section className="min-h-screen flex items-center container-custom">
   <div>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-gray-500 mb-10">Mobility Experience Designer · UX Designer</motion.p>
    <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="text-7xl md:text-8xl tracking-tight leading-none font-medium max-w-6xl">
    Designing human-centered experiences for future mobility.
    </motion.h1>
    <p className="mt-12 max-w-xl text-xl text-gray-600 leading-relaxed">Creating meaningful connections between people, intelligent systems and everyday experiences.</p>
  </div>
  </section>

  <section id="works" className="container-custom pb-32">
   <h2 className="text-5xl mb-20">Selected Works / 精选项目</h2>
   <div className="space-y-32">{works.map(work=><article key={work.title}><div className="aspect-[16/9] bg-[#E8E6DF] rounded-3xl flex items-center justify-center text-gray-400 mb-8">Project Visual</div><p>{work.number}</p><h3 className="text-4xl mt-3">{work.title} <span className="text-gray-400">{work.cn}</span></h3><p className="text-xl text-gray-600 mt-3">{work.subtitle}</p><p className="mt-4 text-sm">{work.tags}</p></article>)}</div>
  </section>

  <section id="about" className="container-custom py-32 grid md:grid-cols-2 gap-16">
   <div className="aspect-[4/5] bg-[#DDDAD1] rounded-3xl flex items-center justify-center">Tang Defeng</div>
   <div><h2 className="text-5xl mb-8">About Me</h2><p className="text-lg leading-relaxed text-gray-700">I am a UX designer focusing on mobility experience, interaction design and intelligent products. With cross-cultural design experience in Poland, I explore how technology can create more inclusive and meaningful human experiences.</p></div>
  </section>

  <section id="contact" className="container-custom py-32"><h2 className="text-5xl">Let's create meaningful experiences.</h2><p className="mt-8">ajiji001204@gmail.com</p></section>
 </main>
}
