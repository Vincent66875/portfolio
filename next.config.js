module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
  async headers() {
    return [
      {
        // CHANGE THIS: source was '/sitemap.xml', change it to '/(.*)' to match ALL pages
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // This forces the server to say "Index me!"
          },
        ],
      },
    ];
  },
};