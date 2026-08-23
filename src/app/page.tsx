import Link from 'next/link';
import { motion } from 'framer-motion';

const works = [
 {number:'01',id:'mobility',title:'Chuxingbao',cn:'出行宝',subtitle:'Mobility Experience Design',tags:'Automotive UX · Interaction · Service Design'},
 {number:'02',id:'wheelchair',title:'Accessible Wheelchair',cn:'无障碍轮椅',subtitle:'Inclusive Mobility Design',tags:'Human-centered Design · Product Experience'},
 {number:'03',id:'peta',title:'PETA',cn:'智能宠物喂食器',subtitle:'Smart Home Interaction Experience',tags:'IoT · UX Research · Interaction Design'},
 {number:'04',id:'food',title:'CAI BOX',cn:'菜盒',subtitle:'Smart Food Management System',tags:'Service Design · Smart Product'}
];

export default function Home(){
return <main className="bg-[#F7F6F2] text-[#111]">

<nav className="fixed top-0 w-full z-50 bg-[#F7F6F2]/70 backdrop-blur-md">
<div className="container-custom flex justify-between py-8 text-sm">
<span className="font-medium">Tang Defeng</span>
<div className="flex gap-8"><Link href="#works">Works</Link><Link href="#about">About</Link><Link href="#contact">Contact</Link><span>EN / 中文</span></div>
</div>
</nav>

<section className="min-h-screen flex items-center container-custom">
<div>
<motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-gray-500 mb-10">Mobility Experience Designer · UX Designer</motion.p>
<motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="text-7xl md:text-9xl tracking-tight leading-[0.9] font-medium max-w-6xl">
Designing human-centered experiences for future mobility.
</motion.h1>
<p className="mt-12 max-w-xl text-xl text-gray-600 leading-relaxed">
Creating meaningful connections between people, intelligent systems and everyday experiences.
</p>
</div>
</section>

<section id="works" className="container-custom pb-32">
<h2 className="text-5xl mb-20">Selected Works</h2>
<div className="space-y-36">
{works.map(work=><Link href={`/works/${work.id}`} key={work.id}>
<article className="group">
<div className="aspect-[16/9] bg-[#E8E6DF] rounded-3xl mb-8 overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
<span className="text-gray-400">{work.title}</span>
</div>
<p className="text-gray-400">{work.number}</p>
<h3 className="text-4xl mt-3">{work.title} <span className="text-gray-400">{work.cn}</span></h3>
<p className="text-xl text-gray-600 mt-3">{work.subtitle}</p>
<p className="mt-4 text-sm">{work.tags}</p>
</article>
</Link>)}
</div>
</section>

<section id="about" className="container-custom py-32 grid md:grid-cols-2 gap-16">
<div className="aspect-[4/5] rounded-3xl bg-[#DDDAD1] flex items-center justify-center text-gray-500">Portrait</div>
<div>
<h2 className="text-5xl mb-8">About Me</h2>
<p className="text-lg leading-relaxed text-gray-700">
I am a UX designer focusing on mobility experience, interaction design and intelligent products. With cross-cultural design experience in Poland, I explore how technology can create more inclusive and meaningful human experiences.
</p>
</div>
</section>

<section id="contact" className="container-custom py-32">
<h2 className="text-6xl">Let's create meaningful experiences.</h2>
<p className="mt-10 text-xl">ajiji001204@gmail.com</p>
</section>

</main>
}
