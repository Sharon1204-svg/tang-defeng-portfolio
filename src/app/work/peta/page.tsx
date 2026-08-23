import Link from 'next/link';

export default function PetaPage(){
 return <main className="bg-[#FAFAF8] text-[#111] min-h-screen"><div className="container-custom py-32">
 <Link href="/" className="text-sm text-gray-500">← Back</Link>
 <h1 className="text-6xl md:text-8xl font-medium mt-20">PETA<br/>Smart Pet Experience</h1>
 <p className="mt-8 text-xl text-gray-600 max-w-3xl">Exploring emotional interaction between users, pets and intelligent products.</p>
 <div className="aspect-[16/9] bg-[#E8E6DF] rounded-3xl mt-20 flex items-center justify-center text-gray-500">PETA Cover Image</div>
 <div className="py-24 grid gap-16">{['Research','Interaction Design','Smart Product Experience','Reflection'].map(item=><section key={item} className="border-t border-black/10 pt-10"><h2 className="text-4xl">{item}</h2></section>)}</div>
 </div></main>
}
