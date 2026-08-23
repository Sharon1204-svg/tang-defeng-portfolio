export default function ProjectCard({project}:{project:any}){
  return (
    <article className="group">
      <div className="aspect-[16/9] rounded-sm bg-[#E8E6DF] flex items-center justify-center text-gray-400 transition-transform duration-500 group-hover:scale-[1.02]">
        Project Image
      </div>
      <div className="mt-8">
        <p className="text-sm text-gray-500">{project.number}</p>
        <h3 className="mt-3 text-4xl font-medium">{project.title}</h3>
        <p className="mt-3 text-xl text-gray-600">{project.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag:string)=>(
            <span key={tag} className="text-sm text-gray-500">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
