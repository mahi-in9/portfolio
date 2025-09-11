import GitHubCalendar from "react-github-calendar";

export default function GithubStats() {
  const username = "mahi-in9";

  return (
    <section className="py-10 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-4">
          GitHub Stats & Contributions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* GitHub readme stats (dynamic image) */}
          <div className="bg-white p-4 rounded shadow">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=light`}
              alt="github-stats"
            />
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">GitHub Calendar</h3>
            <GitHubCalendar username={username} />
          </div>
        </div>
      </div>
    </section>
  );
}
