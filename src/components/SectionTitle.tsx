export default function SectionTitle({title, subtitle}:{title:string; subtitle?:string}){
  return (
    <div className="mb-16">
      <h2 className="text-5xl tracking-tight font-medium">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-500 max-w-xl">{subtitle}</p>}
    </div>
  );
}
