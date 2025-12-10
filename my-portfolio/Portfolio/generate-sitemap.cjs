const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({
  hostname: "https://my-portfolio-blond-alpha-11.vercel.app",
});

// Only one URL because it's a single-page app
sitemap.write({ url: "/", changefreq: "monthly", priority: 1.0 });

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data.toString());
});
