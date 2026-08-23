import Link from "next/link";
import { projects } from "@/data/projects";

export default function Works(){
  return (
    <section id="works" className="container-custom py-32">
      <div className="mb-20 flex items-end justify-between">
        <div>
          <p className="text-sm tracking-[0.45em] text-slate-500">SELECTED WORKS</p>
          <h2 className="mt-5 text-5xl md:text-7xl font-medium">Selected Projects</h2>
          <p className="mt-6 max-w-xl text-lg text-slate-500">
            Exploring mobility, intelligent products and human-centered experiences.
            <br />
            探索出行体验、智能产品与以人为中心的设计创新。
          </p>
        </div>
        <Link href="/works" className="hidden md:block text-sm underline underline-offset-8">
          View All Works →
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((item)=>(
          <Link href={`/works/${item.id}`} key={item.id}
            className="group relative overflow-hidden rounded-[36px] bg-[#ECEDEB] h-[560px] p-10 flex flex-col justify-end transition-all duration-500 hover:-translate-y-3">
            <div className="absolute top-8 left-10 text-sm text-slate-400">{item.number}</div>
            <h3 className="text-3xl font-medium">{item.title}</h3>
            <p className="mt-4 text-slate-500">{item.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {item.tags.map(tag=>(
                <span key={tag} className="text-xs border border-slate-300 rounded-full px-3 py-1 text-slate-500">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
