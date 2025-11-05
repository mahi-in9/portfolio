export default function GitHubStats({ username = "your-github-username" }) {
  return (
    <section id="github" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">GitHub Stats</h2>
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default`}
          alt="github stats"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact`}
          alt="top langs"
        />
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-2">Contribution Calendar</h3>
        {/* Option 1: Use a static image or GitHub Profile's calendar screenshot */}
        <img src={`/assets/github-calendar-placeholder.png`} alt="calendar" />
      </div>
    </section>
  );
}
