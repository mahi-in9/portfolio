export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm border px-3 py-1 rounded"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm border px-3 py-1 rounded"
          >
            Live / Video
          </a>
        </div>
      </div>
    </div>
  );
}
