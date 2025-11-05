export default function About() {
  return (
    <section id="about" className="pt-28 max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border p-1">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">Your Full Name</h1>
          <p className="mt-2 text-gray-700">
            I am a [role] who builds [what you build]. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://drive.google.com/file/d/1DDAc-ndVtSDq-t8TBzGxfCOxJsLqdLIr/view?usp=drive_link"
              download
              className="px-4 py-2 bg-blue-600 text-white rounded shadow"
            >
              Download Resume
            </a>
            <a
              href="https://drive.google.com/file/d/1DDAc-ndVtSDq-t8TBzGxfCOxJsLqdLIr/view?usp=drive_link"
              className="px-4 py-2 border rounded"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
