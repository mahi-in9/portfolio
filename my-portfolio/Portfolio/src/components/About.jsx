import myphoto from "../assets/mahendra.jpg";
import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";

// Clamp helper — prevents extreme tilt angles
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

// Calculate rotation relative to the element's own center (not window center)
const calcRotation = (x, y, rect) => [
  clamp(-(y - rect.top - rect.height / 2) / 20, -15, 15),
  clamp((x - rect.left - rect.width / 2) / 20, -15, 15),
];

export default function About() {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);
    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      // ✅ Fix 1: lighter mass, balanced tension — iOS-like smoothness
      config: { mass: 1, tension: 180, friction: 18 },
    }),
  );

  useGesture(
    {
      // ✅ Fix 2: scale only slightly on drag, reset cleanly on release
      onDrag: ({ active, offset: [ox, oy] }) =>
        api({
          x: ox,
          y: oy,
          rotateX: 0,
          rotateY: 0,
          scale: active ? 1.05 : 1,
        }),

      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),

      // ✅ Fix 3: rotation relative to element center, not window center
      onMove: ({ xy: [px, py], dragging }) => {
        if (dragging || !domTarget.current) return;
        const rect = domTarget.current.getBoundingClientRect();
        const [rX, rY] = calcRotation(px, py, rect);
        api({ rotateX: rX, rotateY: rY, scale: 1.05 });
      },

      // ✅ Fix 4: smooth reset on hover leave (not a hard snap)
      onHover: ({ hovering }) =>
        api({
          rotateX: hovering ? rotateX.get() : 0,
          rotateY: hovering ? rotateY.get() : 0,
          scale: hovering ? 1.05 : 1,
        }),
    },
    { domTarget, eventOptions: { passive: false } },
  );

  const stats = [
    { number: "3+", label: "Projects Built" },
    { number: "1+", label: "Years of Learning" },
    { number: "3+", label: "Hackathons Participated" },
    { number: "5+", label: "Technologies Used" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Aspiring Full Stack Developer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate and curious software developer specializing in
              the MERN stack, with hands-on experience in building real-world
              web and mobile applications. Though I'm a fresher, I've worked on
              multiple projects that showcase my ability to design, develop, and
              deploy scalable and responsive applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My strengths lie in JavaScript, React.js and Firebase. I've also
              participated in multiple hackathons and take pride in continuously
              improving my skills, collaborating with teams, and embracing new
              challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  📍 Ranchi, India
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  💼 Open to Opportunities
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  🌐 Remote Friendly
                </span>
              </div>
            </div>
          </div>

          {/* Spring Image */}
          <div className="flex justify-center items-center">
            <animated.div
              ref={domTarget}
              style={{
                // ✅ Fix 5: full perspective + Z-axis in one transform string
                transform: to(
                  [x, y, rotateX, rotateY, rotateZ, scale, zoom],
                  (tx, ty, rx, ry, rz, s, z) =>
                    `perspective(800px) translateX(${tx}px) translateY(${ty}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s + z})`,
                ),
                // ✅ Fix 6: shadow reacts to tilt — premium Apple-style feel
                boxShadow: to(
                  [rotateX, rotateY],
                  (rx, ry) =>
                    `${-ry * 2}px ${rx * 2}px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)`,
                ),
                willChange: "transform",
                cursor: "grab",
                borderRadius: "1rem",
                overflow: "hidden",
                width: "clamp(192px, 30vw, 384px)",
                height: "clamp(192px, 30vw, 384px)",
              }}
            >
              {/* ✅ Blur/glass backdrop layer */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)",
                  zIndex: 1,
                  pointerEvents: "none",
                  borderRadius: "1rem",
                }}
              />
              <img
                src={myphoto}
                alt="Mahendra"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                draggable={false}
              />
            </animated.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
