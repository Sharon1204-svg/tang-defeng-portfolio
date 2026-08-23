export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Navigation */}

      <header
        className="
        flex
        justify-between
        items-center
        px-12
        py-8
        "
      >

        <div
          className="
          text-lg
          font-semibold
          tracking-[0.25em]
          "
        >
          TANG DEFENG
        </div>


        <nav
          className="
          flex
          gap-8
          text-sm
          text-gray-600
          "
        >

          <a>
            Home
          </a>

          <a>
            Works
          </a>

          <a>
            About
          </a>

          <a>
            Research
          </a>

          <a>
            Resume
          </a>


          <button>
            中文 / EN
          </button>

        </nav>


      </header>



      {/* Hero */}

      <section
        className="
        grid
        grid-cols-2
        gap-12
        px-12
        pt-32
        "
      >


        {/* Left */}

        <div>


          <p
            className="
            text-sm
            tracking-[0.35em]
            text-gray-400
            "
          >
            MOBILITY UX DESIGNER
          </p>



          <h1
            className="
            mt-8
            text-7xl
            font-semibold
            leading-[1.05]
            "
          >

            Designing
            <br />

            intelligent
            <br />

            mobility.

          </h1>




          <p
            className="
            mt-10
            max-w-lg
            text-lg
            leading-relaxed
            text-gray-500
            "
          >

            I focus on automotive UX,
            intelligent cockpit,
            and interaction design.

            <br />
            <br />

            专注汽车智能座舱、
            用户体验与交互设计。

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

            Explore Works →

          </button>


        </div>



        {/* Right Visual Placeholder */}

        <div
          className="
          flex
          items-center
          justify-center
          "
        >

          <div
            className="
            h-[520px]
            w-full
            rounded-3xl
            bg-gray-100
            flex
            items-center
            justify-center
            text-gray-400
            "
          >

            Automotive UX Visual

          </div>


        </div>


      </section>




      {/* Intro */}

      <section
        className="
        px-12
        py-32
        "
      >

        <p
        className="
        text-sm
        tracking-[0.3em]
        text-gray-400
        "
        >
          ABOUT
        </p>


        <h2
        className="
        mt-6
        text-4xl
        font-medium
        "
        >

        Industrial Designer exploring
        future mobility experiences.

        </h2>


      </section>




      <footer
      className="
      px-12
      py-8
      text-sm
      text-gray-400
      "
      >

        © 2026 Tang Defeng

      </footer>


    </main>
  );
}
