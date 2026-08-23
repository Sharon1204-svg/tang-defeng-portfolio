import Link from 'next/link';
import { motion } from 'framer-motion';

const works = [
  { id:'mobility', no:'01', title:'Chuxingbao', cn:'出行宝', type:'Mobility Experience Design' },
  { id:'wheelchair', no:'02', title:'Accessible Wheelchair', cn:'无障碍轮椅', type:'Inclusive Product Experience' },
  { id:'peta', no:'03', title:'PETA', cn:'智能宠物喂食器', type:'Smart Home Interaction' },
  { id:'food', no:'04', title:'CAI BOX', cn:'菜盒', type:'Service Design' }
];

export default function Home(){
 return <main className="bg-[#f7f5f0] text-[#111]">
  <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#f7f5f0]/80">
   <div className="mx-auto max-w-7xl px-8 py-8 flex justify-between">
    <span className="font-medium">Tang Defeng</span>
    <nav className="flex gap-8 text-sm"><a href="#works">Works</a><a href="#about">About</a><a href="#contact">Contact</a><span>EN / 中文</span></nav>
   </div>
  </header>

  <section className="min-h-screen flex items-center px-8 max-w-7xl mx-auto">
   <div>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-gray-500 mb-8">Mobility Experience Designer · UX Designer</motion.p>
    <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="text-6xl md:text-9xl leading-[0.9] tracking-tight max-w-6xl">
      Designing human-centered experiences for future mobility.
    </motion.h1>
    <p className="mt-10 max-w-xl text-xl text-gray-600">I explore the relationship between people, intelligent systems and everyday mobility through UX, interaction and service design.</p>
   </div>
  </section>

  <section id="works" className="max-w-7xl mx-auto px-8 pb-32">
   <h2 className="text-5xl mb-20">Selected Works</h2>
   <div className="space-y-20">
    {works.map(w=><Link key={w.id} href={`/works/${w.id}`}>
     <article className="group">
      <div className="aspect-[16/9] rounded-3xl bg-[#e8e3d8] flex items-center justify-center group-hover:scale-[1.02] transition-transform">
       <span className="text-gray-400 text-xl">{w.title}</span>
      </div>
      <p className="mt-6 text-sm text-gray-400">{w.no}</p>
      <h3 className="text-4xl mt-2">{w.title} <span className="text-gray-400">{w.cn}</span></h3>
      <p className="mt-2 text-gray-600">{w.type}</p>
     </article>
    </Link>)}
   </div>
  </section>

  <section id="about" className="max-w-7xl mx-auto px-8 py-32 grid md:grid-cols-2 gap-16">
   <div className="rounded-3xl aspect-[4/5] bg-[#ddd8cd] flex items-center justify-center">Portrait</div>
   <div><h2 className="text-5xl mb-8">About Me</h2><p className="text-lg leading-relaxed text-gray-700">A UX designer focusing on mobility experience, intelligent products and inclusive design. My background combines design research, interaction design and cross-cultural experience.</p></div>
  </section>

  <section id="contact" className="max-w-7xl mx-auto px-8 py-32"><h2 className="text-6xl">Let's design the future of mobility.</h2><p className="mt-8">ajiji001204@gmail.com</p></section>
 </main>
}
