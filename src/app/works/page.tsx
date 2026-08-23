import Link from "next/link";

const projects = [
  "Intelligent Cockpit",
  "Urban Mobility Experience",
  "VR Navigation Icon"
];

export default function WorksPage(){
  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <div className="container-custom pt-12">
        <Link
          href="/"
          className="text-sm text-slate-500 underline underline-offset-8 hover:text-black"
        >
          ← Back Home
        </Link>
      </div>

      <section className="container-custom py-24">
        <p className="text-sm tracking-[0.45em] text-slate-500">
          SELECTED WORKS
        </p>

        <h1 className="mt-8 text-6xl md:text-7xl font-medium">
          Works
        </h1>

        <p className="mt-8 max-w-xl text-xl text-slate-500">
          Mobility UX, interaction design and digital experience projects.
          <br />
          探索汽车体验、交互设计与数字产品创新。
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {projects.map((project,index)=>(
            <div
              key={project}
              className="h-[520px] rounded-[36px] bg-[#ECEDEB] p-10 flex flex-col justify-end hover:-translate-y-2 transition-transform duration-500"
            >
              <span className="text-sm text-slate-400">0{index+1}</span>
              <h2 className="mt-4 text-3xl font-medium">{project}</h2>
              <p className="mt-4 text-slate-500">
                UX / Interaction Design
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
