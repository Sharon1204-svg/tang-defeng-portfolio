import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

const projectContent:any = {
  mobility:{
    title:'Chuxingbao | 出行宝',
    subtitle:'Mobility Experience Design',
    intro:'Exploring urban mobility experiences through user research, journey mapping and service design.\n探索城市出行场景中的用户需求与体验优化。',
    role:'UX Research · Service Design · Interaction Design',
    sections:[
      ['01 Research / 用户研究','Understanding commuting scenarios, travel pain points and user behavior patterns.'],
      ['02 User Insight / 用户洞察','Transforming research findings into mobility experience opportunities.'],
      ['03 Design Solution / 设计方案','Creating intuitive interaction flows and future mobility service experiences.'],
      ['04 Reflection / 设计思考','Exploring how digital services can improve everyday mobility.']
    ]
  },
  wheelchair:{
    title:'Accessible Wheelchair | 无障碍轮椅',
    subtitle:'Inclusive Mobility Design',
    intro:'A human-centered mobility project focusing on accessibility and everyday movement experiences.',
    role:'User Research · Product Design · Inclusive Design',
    sections:[
      ['01 Context Study / 场景研究','Analyzing wheelchair usage scenarios and accessibility challenges.'],
      ['02 Product Design / 产品设计','Developing a portable and adaptable wheelchair concept.'],
      ['03 Experience Strategy / 体验策略','Improving independence and mobility confidence for users.'],
      ['04 Reflection / 设计思考','Exploring inclusive mobility for diverse groups.']
    ]
  },
  peta:{
    title:'PETA | Smart Pet Experience',
    subtitle:'IoT Interaction Design',
    intro:'Designing intelligent pet care experiences connecting users, pets and smart products.',
    role:'UX Design · IoT Experience · Interaction Design',
    sections:[
      ['01 User Research / 用户研究','Exploring emotional relationships between people and pets.'],
      ['02 Interaction Design / 交互设计','Building connected product and service experiences.'],
      ['03 Final Solution / 最终方案','Integrating product form, interface and interaction.'],
      ['04 Reflection / 设计思考','Creating warmer relationships between humans and intelligent devices.']
    ]
  },
  food:{
    title:'CAI BOX | 菜盒',
    subtitle:'Smart Food Management System',
    intro:'A service design project improving food management and daily decision making.',
    role:'UX Research · Service Design · Product System',
    sections:[
      ['01 Research / 用户研究','Investigating food selection and storage problems.'],
      ['02 Service System / 服务系统','Designing product, app and service connections.'],
      ['03 Experience Design / 体验设计','Creating a smarter food management experience.'],
      ['04 Reflection / 设计思考','Connecting technology with everyday lifestyle.']
    ]
  }
};

export default function WorkPage({params}:{params:{id:string}}){
 const project=projectContent[params.id];
 if(!project) return notFound();
 return <main className="bg-[#FAFAF8] min-h-screen text-[#111]">
  <section className="container-custom pt-40 pb-24">
   <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-gray-500">{project.subtitle}</motion.p>
   <h1 className="text-6xl md:text-8xl mt-8 tracking-tight whitespace-pre-line">{project.title}</h1>
   <p className="max-w-3xl text-xl text-gray-600 mt-10 leading-relaxed whitespace-pre-line">{project.intro}</p>
   <p className="mt-8 text-sm text-gray-500">Role: {project.role}</p>
  </section>
  <section className="container-custom pb-32">
   <div className="aspect-[16/9] rounded-[40px] bg-[#E7E5DE] flex items-center justify-center text-gray-400 mb-24">Project Visual / Image Placeholder</div>
   <div className="space-y-20">
   {project.sections.map((item:string[])=> <article key={item[0]} className="border-t pt-10">
    <h2 className="text-3xl md:text-5xl">{item[0]}</h2>
    <p className="mt-5 max-w-3xl text-lg text-gray-600">{item[1]}</p>
   </article>)}
   </div>
  </section>
 </main>
}
