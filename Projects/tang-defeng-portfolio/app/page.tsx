export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="
        flex 
        justify-between 
        items-center 
        px-12 
        py-8
      ">

        <div className="
          text-xl 
          font-semibold 
          tracking-widest
        ">
          TANG DEFENG
        </div>


        <nav className="
          flex 
          gap-8 
          text-sm 
          text-gray-600
        ">

          <a>Home</a>
          <a>Works</a>
          <a>About</a>
          <a>Resume</a>

          <button>
            中文 / EN
          </button>

        </nav>

      </header>



      {/* Hero */}

      <section className="
        px-12 
        pt-36
      ">


        <p className="
          text-sm 
          tracking-[0.3em]
          text-gray-500
        ">
          AUTOMOTIVE UX DESIGNER
        </p>



        <h1 className="
          mt-8
          text-7xl
          font-semibold
          leading-tight
        ">

          Designing
          <br/>
          better mobility
          <br/>
          experiences.

        </h1>



        <p className="
          mt-10
          max-w-xl
          text-lg
          text-gray-500
          leading-relaxed
        ">

          I focus on automotive UX,
          intelligent cockpit,
          and interaction design.

          <br/>

          专注于汽车体验、
          智能座舱与交互设计。

        </p>



        <button
        className="
        mt-12
        rounded-full
        bg-black
        px-8
        py-4
        text-white
        "
        >

          View Works →

        </button>


      </section>



      {/* Footer */}

      <footer
      className="
      fixed
      bottom-8
      left-12
      text-sm
      text-gray-400
      "
      >

        © 2026 Tang Defeng

      </footer>


    </main>
  );
}