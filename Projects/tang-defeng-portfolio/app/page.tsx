export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111]">

      {/* Navigation */}
      <header className="flex justify-between items-center px-8 md:px-16 py-8">

        <div className="text-sm tracking-[0.25em] font-medium">
          TANG DEFENG
        </div>


        <nav className="flex gap-8 text-sm text-gray-600">

          <a href="/works" className="hover:text-black transition">
            Works
          </a>

          <a href="/about" className="hover:text-black transition">
            About
          </a>

          <button className="hover:text-black transition">
            中文 / EN
          </button>

        </nav>

      </header>



      {/* Hero */}

      <section className="px-8 md:px-16 pt-20 pb-32">

        <div className="grid md:grid-cols-2 gap-16 items-center">


          {/* Left */}

          <div>


            <p className="text-sm tracking-[0.35em] text-gray-500 mb-10">
              DESIGNER
            </p>


            <h1 className="text-6xl md:text-8xl leading-[0.95] font-medium">

              Designing
              <br />

              meaningful
              <br />

              experiences.

            </h1>


            <p className="mt-10 text-lg leading-relaxed text-gray-500 max-w-xl">

              I explore the relationship between people,
              technology and everyday experiences.

              <br /><br />

              My journey started from industrial design,
              expanded into digital experience,
              and continues toward intelligent mobility.

            </p>


          </div>



          {/* Visual */}

          <div className="aspect-[4/5] rounded-3xl bg-neutral-200 flex items-center justify-center">

            <p className="text-gray-400 text-sm tracking-widest">
              PROJECT VISUAL
            </p>

          </div>


        </div>


      </section>



      {/* Journey Intro */}

      <section className="px-8 md:px-16 py-32 border-t border-gray-200">


        <p className="text-sm tracking-[0.35em] text-gray-500 mb-10">
          MY JOURNEY
        </p>


        <h2 className="text-4xl md:text-6xl leading-tight max-w-4xl">


          From industrial design
          <br />

          to digital experiences
          <br />

          and intelligent mobility.

        </h2>


        <a
          href="/about"
          className="inline-block mt-12 text-sm border-b border-black pb-2"
        >

          Explore my story →

        </a>


      </section>



      {/* Selected Works */}

      <section className="px-8 md:px-16 py-32">


        <p className="text-sm tracking-[0.35em] text-gray-500 mb-10">
          SELECTED WORKS
        </p>


        <div className="grid md:grid-cols-2 gap-8">


          <div className="aspect-[4/3] bg-neutral-100 rounded-3xl p-8 flex items-end">

            <div>

              <h3 className="text-3xl">
                Urban Mobility Experience
              </h3>


              <p className="mt-3 text-gray-500">
                UX / Interaction Design
              </p>

            </div>

          </div>



          <div className="aspect-[4/3] bg-neutral-100 rounded-3xl p-8 flex items-end">


            <div>

              <h3 className="text-3xl">
                Digital Experience Design
              </h3>


              <p className="mt-3 text-gray-500">
                Service / Interface Design
              </p>


            </div>


          </div>



        </div>


      </section>



      {/* Footer */}

      <footer className="px-8 md:px-16 py-16 border-t border-gray-200">

        <p className="text-gray-500">
          Designing meaningful experiences between people and technology.
        </p>


      </footer>


    </main>
  );
}
