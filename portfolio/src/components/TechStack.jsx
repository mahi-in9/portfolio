import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

export default function TechStack() {
  const stacks = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    // Add tools like VSCode, Git & GitHub (use images or icons)
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Tech Stack & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stacks.map((s) => (
          <div
            key={s.name}
            className="flex flex-col items-center gap-2 p-3 border rounded"
          >
            <div className="text-3xl">{s.icon}</div>
            <div className="text-sm">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
