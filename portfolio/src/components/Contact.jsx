import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="mb-2">
            <FaEnvelope className="inline mr-2" />
            youremail@example.com
          </p>
          <p className="mb-2">
            <FaPhone className="inline mr-2" />
            +91-XXXXXXXXXX
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border rounded"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border rounded"
            >
              GitHub
            </a>
          </div>
        </div>

        <div>
          <p>
            Or fill the form (optional) — if you include a contact form, wire it
            to EmailJS or a serverless function.
          </p>
        </div>
      </div>
    </section>
  );
}
