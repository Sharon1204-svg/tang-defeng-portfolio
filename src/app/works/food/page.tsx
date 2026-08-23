import Link from "next/link";

export default function FoodPage(){
  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <div className="container-custom pt-12">
        <Link href="/works" className="text-sm text-slate-500 underline underline-offset-8">
          ← Back to Case Studies
        </Link>
      </div>

      <article className="container-custom py-24 max-w-5xl">
        <p className="tracking-[0.35em] text-sm text-slate-500">UX CASE STUDY · 03</p>
        <h1 className="mt-8 text-6xl font-medium leading-tight">Food Choice Experience System</h1>
        <p className="mt-8 text-xl text-slate-500">
          Designing a decision-making experience for young professionals through user research and interaction design.
        </p>

        <section className="mt-24 space-y-16 text-lg leading-relaxed">
          <div><h2 className="text-3xl font-medium">Design Challenge</h2><p className="mt-4 text-slate-600">Explore how digital services can reduce friction in everyday food selection scenarios.</p></div>
          <div><h2 className="text-3xl font-medium">User Research</h2><p className="mt-4 text-slate-600">Analyze user behaviors, decision factors and interaction requirements.</p></div>
          <div><h2 className="text-3xl font-medium">Interaction Solution</h2><p className="mt-4 text-slate-600">Build clearer information structures and intuitive interaction flows.</p></div>
        </section>
      </article>
    </main>
  );
}
