import { useState, useMemo } from "react";
import Project_1 from "../assets/habitLeaf.png";
import Project_2 from "../assets/destinations.png";
import Project_3 from "../assets/medium.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "HabitLeaf",
      description: "A productivity app to manage your habits efficiently.",
      technologies: ["React + Vite", "TailwindCSS", "MongoDB", "Express"],
      image: Project_1,
      liveUrl: "https://habit-leaf-one.vercel.app/",
      githubUrl: "https://github.com/mahi-in9/HabitLeaf",
      category: "web",
      featured: true,
    },
    {
      id: 2,
      title: "Destination Recommendation Platform",
      description:
        "A platform that recommends travel destinations based on user preferences.",
      technologies: ["React + Vite", "TailwindCSS", "Firebase"],
      image: Project_2,
      liveUrl: "https://destinationrecommendationplatform.netlify.app/",
      githubUrl:
        "https://github.com/mahi-in9/B46-RCT-12_DestinationRecommendationPlatform_Travel",
      category: "web",
      featured: true,
    },
    {
      id: 3,
      title: "Medium Clone",
      description:
        "A medium-style blog application with clean UI and secure login system.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      image: Project_3,
      liveUrl: "https://fabulous-begonia-c98fec.netlify.app/",
      githubUrl: "https://prajakta811.github.io/WEB_017-Code-Surgeons/",
      category: "web",
      featured: true,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated selection of the web applications and interfaces I've
            built.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay Buttons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <a
                      aria-label="Open Live Demo"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line text-gray-800 text-xl" />
                    </a>
                  )}

                  <a
                    aria-label="Open GitHub Repository"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <i className="ri-github-line text-gray-800 text-xl" />
                  </a>
                </div>

                {project.featured && (
                  <span className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* FIX: Equal title height */}
                <div className="min-h-[56px] flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons pinned bottom */}
                <div className="mt-auto flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center cursor-pointer"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors text-center cursor-pointer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to explore more of my work?
          </p>
          <a
            href="https://github.com/mahi-in9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <i className="ri-github-line text-xl" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}
