import Link from 'next/link';

export default function ChuxingbaoPage(){
  return (
    <main className="bg-[#FAFAF8] text-[#111] min-h-screen">
      <div className="container-custom py-32">
        <Link href="/" className="text-sm text-gray-500">← Back</Link>
        <section className="mt-20">
          <p className="text-sm text-gray-500">01 / Mobility UX · Service Design</p>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mt-8">Urban Mobility Experience Design</h1>
          <p className="mt-8 text-xl text-gray-600 max-w-3xl">Exploring how digital interaction and service design can improve urban commuting experiences.</p>
          <div className="aspect-[16/9] bg-[#E8E6DF] rounded-3xl mt-20 flex items-center justify-center text-gray-500">Chuxingbao Cover Image</div>
        </section>

        <section className="grid md:grid-cols-3 gap-12 py-32">
          <div><h2 className="text-2xl">Role</h2><p className="mt-4 text-gray-600">UX Designer<br/>Interaction Designer<br/>Service Designer</p></div>
          <div><h2 className="text-2xl">Methods</h2><p className="mt-4 text-gray-600">User Research<br/>Journey Mapping<br/>Information Architecture</p></div>
          <div><h2 className="text-2xl">Focus</h2><p className="mt-4 text-gray-600">Mobility Experience<br/>Travel Service<br/>Human-centered Design</p></div>
        </section>

        {[
          ['Challenge','How might we create a smoother and more intuitive urban commuting experience?'],
          ['Research','Understanding commuter behaviors, pain points and service touchpoints.'],
          ['Design Strategy','Connecting user needs, information flow and digital interaction.'],
          ['Final Solution','Designing an integrated mobility experience through interface and service design.']
        ].map(([title,text])=>(
          <section key={title} className="py-16 border-t border-black/10">
            <h2 className="text-4xl">{title}</h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">{text}</p>
          </section>
        ))}
      </div>
    </main>
  )
}