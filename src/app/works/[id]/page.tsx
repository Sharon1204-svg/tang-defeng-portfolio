import { notFound } from 'next/navigation';

const projectContent:any = {
  mobility:{
    title:'Chuxingbao | 出行宝',
    subtitle:'Mobility Experience Design',
    intro:'Exploring urban mobility experiences through user research, journey mapping and service design.',
    sections:[
      ['01 Research','Understanding commuting scenarios, user needs and mobility pain points.'],
      ['02 User Insight','Transforming research findings into experience opportunities.'],
      ['03 Design Solution','Creating intuitive interaction flows and mobility service experiences.']
    ]
  },
  wheelchair:{
    title:'Accessible Wheelchair | 无障碍轮椅',
    subtitle:'Inclusive Mobility Design',
    intro:'A human-centered mobility project focusing on accessibility and everyday movement experiences.',
    sections:[
      ['01 Context Study','Analyzing wheelchair usage scenarios and accessibility challenges.'],
      ['02 Product Design','Developing a portable and adaptable wheelchair concept.'],
      ['03 Reflection','Exploring inclusive design principles for diverse users.']
    ]
  },
  peta:{
    title:'PETA | Smart Pet Experience',
    subtitle:'IoT Interaction Design',
    intro:'Designing intelligent pet care experiences connecting users, pets and smart products.',
    sections:[
      ['01 User Research','Exploring emotional relationships between people and pets.'],
      ['02 Interaction Design','Building connected product and service experiences.'],
      ['03 Final Solution','Integrating product form, interface and interaction.']
    ]
  },
  food:{
    title:'CAI BOX | 菜盒',
    subtitle:'Smart Food Management System',
    intro:'A service design project improving food management and daily decision making.',
    sections:[
      ['01 Research','Investigating users daily food selection problems.'],
      ['02 Service System','Designing product, app and service connections.'],
      ['03 Experience Design','Creating a smarter food management experience.']
    ]
  }
};

export default function WorkPage({params}:{params:{id:string}}){
 const project=projectContent[params.id];
 if(!project) return notFound();
 return <main className="bg-[#FAFAF8] min-h-screen text-[#111]">
  <section className="container-custom pt-40 pb-24">
   <p className="text-gray-500">{project.subtitle}</p>
   <h1 className="text-6xl md:text-8xl mt-8 tracking-tight">{project.title}</h1>
   <p className="max-w-2xl text-xl text-gray-600 mt-10 leading-relaxed">{project.intro}</p>
  </section>
  <section className="container-custom pb-32 space-y-20">
   {project.sections.map((item:string[])=> <article key={item[0]} className="border-t pt-10">
    <h2 className="text-4xl">{item[0]}</h2>
    <p className="mt-5 text-lg text-gray-600">{item[1]}</p>
   </article>)}
  </section>
 </main>
}
