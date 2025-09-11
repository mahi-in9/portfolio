export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="mt-2">
              Email:{" "}
              <a href="mahendrakrsahu9@gmail.com" className="text-blue-600">
                mahendrakrsahu9@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919304156030" className="text-blue-600">
                +91 9304156030
              </a>
            </p>
            <p className="mt-2">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mahendra-kumar-0a821b215/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                https://www.linkedin.com/in/mahendra-kumar-0a821b215/
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/mahi-in9"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                https://github.com/mahi-in9
              </a>
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Message Me</h3>
            <form
              action="https://formspree.io/f/xrbadzpz"
              method="POST"
              className="mt-3 flex flex-col gap-3"
            >
              <input
                name="name"
                placeholder="Your name"
                className="p-2 border rounded"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="p-2 border rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="p-2 border rounded"
                rows="4"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
