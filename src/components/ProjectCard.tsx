import Image from 'next/image';

interface ProjectCardProps {
  project: {
    number:string;
    title:string;
    cn?:string;
    subtitle:string;
    description:string;
    tags:string[];
    cover?:string;
  }
}

export default function ProjectCard({project}:ProjectCardProps){
  return (
    <article className="group">
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-[#E8E6DF]">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Project Image
          </div>
        )}
      </div>
      <div className="mt-8">
        <p className="text-sm text-gray-500">{project.number}</p>
        <h3 className="mt-3 text-4xl font-medium">
          {project.title} <span className="text-gray-400">{project.cn}</span>
        </h3>
        <p className="mt-3 text-xl text-gray-600">{project.subtitle}</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-gray-600">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.tags.map((tag:string)=>(
            <span key={tag} className="rounded-full border px-4 py-2 text-sm text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
