import { useState } from "react";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import JavaScript from "../assets/javascript.svg";
import Reactjs from "../assets/reactjs.svg";
import Tailwind from "../assets/tailwind.svg";
import TypeScript from "../assets/typescript.svg";
import Nodejs from "../assets/nodejs.svg";
import Express from "../assets/express.svg";
import MongoDB from "../assets/mongodb.svg";
import GitHub from "../assets/github.svg";
import Firebase from "../assets/firebase.svg";
import VSCode from "../assets/vscode.svg";
import Postman from "../assets/postman.svg";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("technical");

  const skillCategories = {
    technical: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JavaScript },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "React", icon: Reactjs },
      { name: "TypeScript", icon: TypeScript },
      { name: "Firebase", icon: Firebase },
      { name: "Node.js", icon: Nodejs },
      { name: "Express.js", icon: Express },
      { name: "MongoDB", icon: MongoDB },
    ],
    tools: [
      { name: "GitHub", icon: GitHub },
      { name: "VS Code", icon: VSCode },
      { name: "Postman", icon: Postman },
    ],
  };

  const categories = [
    { id: "technical", label: "Technical Skills" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer flex items-center space-x-2 whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center space-x-4"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-200">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
