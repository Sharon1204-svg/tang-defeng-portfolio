import Link from "next/link";

export default function WorksPage(){
  return (
    <main className="min-h-screen bg-[#F7F6F2] px-8 py-12">
      <Link href="/" className="text-sm text-slate-600 underline underline-offset-8">
        ← Back Home
      </Link>
      <section className="container-custom py-24">
        <p className="text-sm tracking-[0.35em] text-slate-500">WORKS</p>
        <h1 className="mt-8 text-7xl font-medium">Selected Projects</h1>
        <p className="mt-8 text-xl text-slate-500">
          Mobility UX, interaction design and digital experience projects.
        </p>
      </section>
    </main>
  );
}
