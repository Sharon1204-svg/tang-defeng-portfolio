import Link from "next/link";

export default function AccessibilityPage(){
  return (
    <main className="min-h-screen bg-[#F7F6F2]">
      <div className="container-custom pt-12">
        <Link href="/works" className="text-sm text-slate-500 underline underline-offset-8">
          ← Back to Case Studies
        </Link>
      </div>

      <article className="container-custom py-24 max-w-5xl">
        <p className="tracking-[0.35em] text-sm text-slate-500">UX CASE STUDY · 04</p>
        <h1 className="mt-8 text-6xl font-medium leading-tight">Accessible Living Experience Design</h1>
        <p className="mt-8 text-xl text-slate-500">
          Human-centered design exploration focusing on accessibility, mobility and everyday living experiences.
        </p>

        <section className="mt-24 space-y-16 text-lg leading-relaxed">
          <div><h2 className="text-3xl font-medium">Context</h2><p className="mt-4 text-slate-600">Understand accessibility challenges in daily living environments.</p></div>
          <div><h2 className="text-3xl font-medium">Human-centered Research</h2><p className="mt-4 text-slate-600">Identify user needs and translate insights into design opportunities.</p></div>
          <div><h2 className="text-3xl font-medium">Design Outcome</h2><p className="mt-4 text-slate-600">Create inclusive product experiences that improve independence and usability.</p></div>
        </section>
      </article>
    </main>
  );
}
