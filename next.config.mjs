/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  redirects: async () => {
    return [
      {
        source: "/settings",
        destination: "/settings/color-theme",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
