import Link from "next/link";

export default function PetaPage(){
return <main className="min-h-screen bg-[#F7F6F2]">
<div className="container-custom py-12"><Link href="/works" className="text-sm text-slate-500 underline">← Back to Case Studies</Link></div>
<section className="container-custom py-20">
<p className="tracking-[0.4em] text-sm text-slate-500">UX CASE STUDY · 02</p>
<h1 className="mt-8 text-6xl font-medium">PETA<br/>Smart Pet Experience</h1>
<p className="mt-8 max-w-2xl text-xl text-slate-600">Designing a connected pet care experience through user needs, smart interaction and human-centered product strategy.</p>
<div className="mt-20 space-y-12">
<h2 className="text-3xl">01 Background</h2><p className="text-slate-600">Exploring how intelligent products can improve daily pet care experiences.</p>
<h2 className="text-3xl">02 Research & Insights</h2><p className="text-slate-600">Identifying user pain points and opportunities through user-centered research.</p>
<h2 className="text-3xl">03 Design Solution</h2><p className="text-slate-600">Building an integrated interaction experience between users, pets and smart devices.</p>
</div>
</section></main>;
}