import Link from "next/link";

const projects = [
  {
    title: "Intelligent Cockpit",
    subtitle: "智能座舱交互体验设计",
    category: "Automotive UX / HMI",
  },
  {
    title: "Urban Mobility Experience",
    subtitle: "城市出行体验设计",
    category: "UX / Interaction Design",
  },
  {
    title: "VR Navigation Icon",
    subtitle: "虚拟现实导航图标设计",
    category: "Visual / Interface Design",
  },
];

export default function Works(){
  return (
    <section id="works" className="container-custom py-32">
      <div className="mb-20 flex items-end justify-between">
        <div>
          <p className="text-sm tracking-[0.45em] text-slate-500">SELECTED WORKS</p>
          <h2 className="mt-5 text-5xl md:text-6xl font-medium">Selected Projects</h2>
          <p className="mt-6 max-w-xl text-lg text-slate-500">
            Automotive UX, interaction design, and product innovation.
            <br />
            汽车体验、交互设计与产品创新。
          </p>
        </div>
        <Link href="/works" className="hidden md:block text-sm underline underline-offset-8">
          View All Works →
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((item,index)=>(
          <Link
            href="/works"
            key={item.title}
            className="group relative overflow-hidden rounded-[36px] bg-[#ECEDEB] h-[560px] p-10 flex flex-col justify-end transition-all duration-500 hover:-translate-y-3"
          >
            <div className="absolute top-8 left-10 text-sm text-slate-400">
              0{index+1}
            </div>
            <div>
              <h3 className="text-3xl font-medium transition-transform duration-500 group-hover:-translate-y-2">
                {item.title}
              </h3>
              <p className="mt-4 text-slate-500">{item.subtitle}</p>
              <p className="mt-8 text-sm text-slate-400">{item.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
