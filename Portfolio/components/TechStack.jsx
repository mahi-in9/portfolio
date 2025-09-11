export default function TechStack() {
  const techs = [
    { name: "React", img: "../public/tech/react.png" },
    { name: "Node.js", img: "../public/tech/node.png" },
    { name: "MongoDB", img: "../public/tech/mongo.png" },
    { name: "Tailwind", img: "../public/tech/tailwind.png" },
    { name: "Git", img: "../public/tech/git.png" },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Tech Stack & Tools</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {techs.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center p-3 bg-white rounded shadow"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 object-contain"
              />
              <span className="mt-2 text-sm">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
