import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project One",
    description:
      "Short description of the project that is visible at first glance.",
    tech: ["React", "Node", "MongoDB"],
    image: "/assets/project1.png",
    github: "https://github.com/yourusername/project1",
    demo: "https://project1.vercel.app",
  },
  // Add 4-5 projects
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
