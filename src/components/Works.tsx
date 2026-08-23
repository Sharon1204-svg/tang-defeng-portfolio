import Link from "next/link";
import { projects } from "@/data/projects";

export default function Works(){
  return (
    <section id="works" className="container-custom py-32">
      <div className="mb-20">
        <p className="text-sm tracking-[0.45em] text-slate-500">SELECTED WORKS</p>
        <h2 className="mt-5 text-5xl md:text-7xl font-medium">Selected Projects</h2>
        <p className="mt-6 max-w-xl text-lg text-slate-500">
          Exploring mobility, intelligent products and human-centered experiences.
          <br />
          探索出行体验、智能产品与以人为中心的设计创新。
        </p>
      </div>

      <div className="space-y-20">
        {projects.map((item)=>(
          <Link href={`/works/${item.id}`} key={item.id} className="group block">
            <article className="overflow-hidden rounded-[36px] bg-[#ECEDEB] transition duration-700 hover:-translate-y-2">
              <div className="aspect-[16/9] flex items-end p-10">
                <div>
                  <p className="text-sm text-slate-400">{item.number}</p>
                  <h3 className="mt-4 text-4xl md:text-5xl font-medium">{item.title}</h3>
                  <p className="mt-4 text-xl text-slate-500">{item.subtitle}</p>
                </div>
              </div>
              <div className="px-10 pb-10 flex flex-wrap gap-3">
               {item.tags.map(tag=>(
                <span key={tag} className="text-xs border border-slate-300 rounded-full px-3 py-1 text-slate-500">{tag}</span>
               ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
