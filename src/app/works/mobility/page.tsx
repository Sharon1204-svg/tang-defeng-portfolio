import Link from "next/link";

export default function MobilityPage(){
return <main className="min-h-screen bg-[#F7F6F2]">
<div className="container-custom py-12"><Link href="/works" className="text-sm text-slate-500 underline">← Back to Case Studies</Link></div>
<section className="container-custom py-20">
<p className="tracking-[0.4em] text-sm text-slate-500">UX CASE STUDY · 01</p>
<h1 className="mt-8 text-6xl font-medium">Urban Mobility<br/>Experience Design</h1>
<p className="mt-8 max-w-2xl text-xl text-slate-600">Improving urban commuting experiences through user research, journey mapping and service design.</p>
<div className="mt-20 space-y-12"><h2 className="text-3xl">01 Context</h2><p className="text-slate-600">Understanding passenger experience problems in peak-hour mobility scenarios.</p><h2 className="text-3xl">02 User Research</h2><p className="text-slate-600">Analyzing user behavior, pain points and service opportunities.</p><h2 className="text-3xl">03 Experience Strategy</h2><p className="text-slate-600">Designing more intuitive and efficient mobility experiences.</p></div>
</section></main>;
}