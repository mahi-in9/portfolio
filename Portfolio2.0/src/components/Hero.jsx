import { useState, useEffect } from "react";
import photo1 from "../assets/mahendra.jpg";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="relative mb-8">
          {/* <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl relative">
            <img
              src={photo1}
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
            
            <div className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div> */}
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
            Hello,
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            I'm{" "}
            <span className="text-purple-500 dark:text-blue-400">
              Mahendra Kumar Sahu
            </span>
          </h2>
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 transition-all duration-500">
              {roles[currentRole]}
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I craft digital experiences that blend creativity with functionality.
          I bring ideas to life through clean code and thoughtful design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          {/* Download CV */}
          <a
            href="https://drive.google.com/uc?export=download&id=1th8toYA2xhOVFLssHTc79yGLPzIr953Z"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/d/1th8toYA2xhOVFLssHTc79yGLPzIr953Z/view?usp=drive_link",
                "_blank"
              );
              const link = document.createElement("a");
              link.href =
                "https://drive.google.com/uc?export=download&id=1th8toYA2xhOVFLssHTc79yGLPzIr953Z";
              link.setAttribute("download", "Mahendra_Kumar_Sahu_Resume.pdf");
              document.body.appendChild(link);
              link.click();
              link.remove();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3
          rounded-full text-lg font-medium transition-colors cursor-pointer flex
          items-center space-x-2 whitespace-nowrap"
          >
            <span>Resume</span>
            <i className="ri-download-line text-sm"></i>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-6">
          {[
            {
              icon: "linkedin",
              href: "https://www.linkedin.com/in/mahendra-kumar-0a821b215/",
              color: "text-blue-700 hover:text-blue-800",
            },
            {
              icon: "github",
              href: "https://github.com/mahi-in9",
              color:
                "text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-gray-300",
            },
          ].map((social) => (
            <a
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer ${social.color}`}
            >
              <i
                className={`ri-${social.icon}-${
                  social.icon === "github" ? "fill" : "line"
                } text-xl`}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
