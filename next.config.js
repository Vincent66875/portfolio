module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
  async headers() {
    return [
      {
        // Target your sitemap file
        source: '/sitemap.xml',
        headers: [
          {
            // Explicitly set the X-Robots-Tag to allow indexing and following
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};