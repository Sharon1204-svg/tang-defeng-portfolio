import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Urban Mobility Experience Design",
    subtitle: "高峰城市出行体验与服务优化设计",
    tags: "Mobility UX · Service Design · User Research",
    description:
      "Exploring commuter pain points and redesigning urban travel experiences through user research and service thinking."
  },
  {
    number: "02",
    title: "PETA Smart Pet Experience",
    subtitle: "智能宠物生活体验设计",
    tags: "UX Design · IoT Experience · Interaction Design",
    description:
      "Designing meaningful interactions between users, pets and connected products through human-centered approaches."
  },
  {
    number: "03",
    title: "Food Choice Experience System",
    subtitle: "年轻上班族饮食决策交互体验设计",
    tags: "UX Research · Interaction · Information Architecture",
    description:
      "Improving everyday decision-making experiences with research-driven interaction design."
  },
  {
    number: "04",
    title: "Accessible Living Experience Design",
    subtitle: "无障碍生活产品体验设计",
    tags: "Inclusive Design · Human-centered Design",
    description:
      "Exploring inclusive experiences for daily living through accessible product solutions."
  }
];

export default function WorksPage(){
  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <div className="container-custom pt-12">
        <Link href="/" className="text-sm text-slate-500 underline underline-offset-8 hover:text-black">
          ← Back Home
        </Link>
      </div>

      <section className="container-custom py-24">
        <p className="text-sm tracking-[0.45em] text-slate-500">
          SELECTED UX PROJECTS
        </p>

        <h1 className="mt-8 text-6xl md:text-7xl font-medium">
          Case Studies
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-slate-500 leading-relaxed">
          UX design projects exploring mobility, intelligent products,
          and human-centered experiences.
          <br />
          聚焦用户研究、交互设计与未来体验创新。
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {projects.map((project)=>(
            <article
              key={project.number}
              className="group min-h-[560px] rounded-[36px] bg-[#ECEDEB] p-10 flex flex-col justify-end transition-all duration-500 hover:-translate-y-3"
            >
              <span className="text-sm text-slate-400">{project.number}</span>
              <h2 className="mt-5 text-3xl font-medium leading-tight group-hover:translate-x-2 transition-transform">
                {project.title}
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {project.subtitle}
              </p>
              <p className="mt-6 text-sm text-slate-400">
                {project.tags}
              </p>
              <p className="mt-8 text-slate-500 leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
