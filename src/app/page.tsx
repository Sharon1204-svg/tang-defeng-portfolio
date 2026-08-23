import Link from 'next/link';
import { motion } from 'framer-motion';

const works = [
 {number:'01',title:'Chuxingbao',cn:'出行宝',subtitle:'Urban Mobility Experience Design',tags:'Mobility UX · Interaction Design · Service Design'},
 {number:'02',title:'Caihe',cn:'菜盒',subtitle:'Smart Food Management Experience',tags:'UX Research · Smart Product · Service Design'},
 {number:'03',title:'PETA',cn:'智能宠物喂食器',subtitle:'Intelligent Pet Care Experience',tags:'IoT · Interaction Design · Smart Product'}
];

export default function Home(){
 return <main className="bg-[#FAFAF8] text-[#111]">
  <nav className="fixed top-0 w-full bg-[#FAFAF8]/80 backdrop-blur z-10">
   <div className="container-custom flex justify-between py-8 text-sm">
    <span className="font-medium">Tang Defeng</span>
    <div className="flex gap-8"><Link href="#works">Work</Link><Link href="#about">About</Link><Link href="#contact">Contact</Link><span>EN / 中文</span></div>
   </div>
  </nav>

  <section className="min-h-screen flex items-center container-custom">
   <div>
    <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-gray-500 mb-10">UX Designer · Mobility Experience Designer</motion.p>
    <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="text-7xl md:text-8xl tracking-tight leading-none font-medium max-w-6xl">
    Designing human-centered experiences for future mobility.
    </motion.h1>
    <p className="mt-12 max-w-xl text-xl text-gray-600 leading-relaxed">
    Exploring mobility experience, interaction design and intelligent products through human-centered design.
    </p>
    <p className="mt-6 text-sm text-gray-500">Based in China · International Design Experience in Poland</p>
   </div>
  </section>

  <section id="works" className="container-custom pb-32">
   <h2 className="text-5xl mb-20">Selected Works / 精选项目</h2>
   <div className="space-y-32">{works.map((work)=><article key={work.title}>
    <div className="aspect-[16/9] bg-[#E8E6DF] rounded-3xl flex items-center justify-center text-gray-400 mb-8">Project Image</div>
    <p className="text-sm">{work.number}</p>
    <h3 className="text-4xl mt-3">{work.title} <span className="text-gray-400">{work.cn}</span></h3>
    <p className="text-xl text-gray-600 mt-3">{work.subtitle}</p>
    <p className="mt-4 text-sm">{work.tags}</p>
   </article>)}</div>
  </section>

  <section id="about" className="container-custom py-32 grid md:grid-cols-2 gap-16">
   <div className="aspect-[4/5] bg-[#DDDAD1] rounded-3xl flex items-center justify-center">Portrait Placeholder</div>
   <div>
    <h2 className="text-5xl mb-8">About Me / 关于我</h2>
    <p className="text-lg leading-relaxed text-gray-700">
    I am Tang Defeng, a UX designer with a background in industrial design and experience research. My work focuses on mobility experience, intelligent products, automotive HMI and human-centered interaction.
    <br/><br/>
    我是一名关注用户体验、智能产品与未来出行体验的设计师，探索人与技术之间更自然、更有意义的交互关系。
    </p>
   </div>
  </section>

  <section id="contact" className="container-custom py-32">
   <h2 className="text-5xl">Let's create meaningful experiences.</h2>
   <p className="mt-8 text-gray-600">让设计连接人与未来。</p>
  </section>
 </main>
}
