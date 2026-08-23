export default function Works() {
    return (
      <main className="min-h-screen bg-white px-12 py-20">
  
        {/* Title */}
        <section>
  
          <p className="
          text-sm
          tracking-[0.3em]
          text-gray-500
          ">
            SELECTED WORKS
          </p>
  
  
          <h1 className="
          mt-6
          text-6xl
          font-semibold
          ">
            Works
          </h1>
  
  
          <p className="
          mt-6
          text-lg
          text-gray-500
          max-w-xl
          ">
            Automotive UX,
            interaction design,
            and product innovation.
            <br/>
            汽车体验、交互设计与产品创新。
          </p>
  
  
        </section>
  
  
  
        {/* Works Grid */}
  
        <section className="
        mt-20
        grid
        grid-cols-2
        gap-10
        ">
  
  
  
          {/* Project 1 */}
  
          <div className="
          h-96
          rounded-3xl
          bg-gray-100
          p-10
          flex
          flex-col
          justify-end
          ">
  
            <h2 className="
            text-3xl
            font-semibold
            ">
              Intelligent Cockpit
            </h2>
  
            <p className="
            mt-3
            text-gray-500
            ">
              智能座舱交互体验设计
            </p>
  
          </div>
  
  
  
  
          {/* Project 2 */}
  
          <div className="
          h-96
          rounded-3xl
          bg-gray-100
          p-10
          flex
          flex-col
          justify-end
          ">
  
            <h2 className="
            text-3xl
            font-semibold
            ">
              VR Navigation Icon
            </h2>
  
            <p className="
            mt-3
            text-gray-500
            ">
              虚拟现实导航图标设计
            </p>
  
          </div>
  
  
  
  
          {/* Project 3 */}
  
          <div className="
          h-96
          rounded-3xl
          bg-gray-100
          p-10
          flex
          flex-col
          justify-end
          ">
  
            <h2 className="
            text-3xl
            font-semibold
            ">
              Smart Pet Feeder
            </h2>
  
            <p className="
            mt-3
            text-gray-500
            ">
              PETA 智能宠物喂食器
            </p>
  
          </div>
  
  
  
  
          {/* Project 4 */}
  
          <div className="
          h-96
          rounded-3xl
          bg-gray-100
          p-10
          flex
          flex-col
          justify-end
          ">
  
            <h2 className="
            text-3xl
            font-semibold
            ">
              Interaction Design
            </h2>
  
            <p className="
            mt-3
            text-gray-500
            ">
              用户体验与交互研究
            </p>
  
          </div>
  
  
        </section>
  
  
      </main>
    );
  }