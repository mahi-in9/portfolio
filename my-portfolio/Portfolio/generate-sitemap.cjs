const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({
  hostname: "https://my-portfolio-blond-alpha-11.vercel.app",
});

sitemap.write({ url: "/", changefreq: "monthly", priority: 1.0 });
// Add other pages if you have:
sitemap.write({ url: "/projects", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.8 });

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream("./public/sitemap.xml").write(data.toString());
});
