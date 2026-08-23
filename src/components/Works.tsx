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
    title: "Digital Experience Design",
    subtitle: "数字产品体验设计",
    category: "Service / Interface Design",
  },
];

export default function Works(){
  return (
    <section id="works" className="container-custom py-32">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="text-sm tracking-[0.35em] text-slate-500">SELECTED WORKS</p>
          <h2 className="mt-6 text-6xl font-medium text-black">Works</h2>
          <p className="mt-6 text-lg text-slate-500">
            Automotive UX, interaction design, and product innovation.
            <br/>汽车体验、交互设计与产品创新。
          </p>
        </div>
        <Link href="/works" className="text-sm underline underline-offset-8">
          View All Works →
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((item)=>(
          <Link href="/works" key={item.title} className="group rounded-[32px] bg-[#F1F2F4] p-10 h-[520px] flex flex-col justify-end transition-transform hover:-translate-y-2">
            <h3 className="text-3xl font-medium">{item.title}</h3>
            <p className="mt-3 text-slate-500">{item.subtitle}</p>
            <p className="mt-8 text-sm text-slate-500">{item.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
