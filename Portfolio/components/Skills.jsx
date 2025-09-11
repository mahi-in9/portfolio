export default function Skills() {
  const frontend = ["HTML", "CSS", "TailwindCSS", "JavaScript", "React"];
  const backend = ["Node.js", "Express", "MongoDB", "REST APIs"];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontend.map((s) => (
                <span key={s} className="px-3 py-1 border rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backend.map((s) => (
                <span key={s} className="px-3 py-1 border rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
