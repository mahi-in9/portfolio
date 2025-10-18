/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Mahendra</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Full Stack Web Developer. Completed 12th in 2023 and Full Stack
            program at Masai (2024-25). I build responsive and scalable web
            applications using React, Node.js and MongoDB.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="../public/zMahendra-Kumar-Sahu.resume.pdf"
              download
              className="px-5 py-2 bg-blue-600 text-white rounded"
            >
              Download Resume
            </a>
            <a
              href="https://drive.google.com/file/d/16xNbpob2p_7iziGAk7E8m3PwdW9x1f9c/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 border rounded"
            >
              View on Drive
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/profile.jpg"
            alt="Mahendra"
            className="w-56 h-56 object-cover rounded-full border-4 border-blue-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
