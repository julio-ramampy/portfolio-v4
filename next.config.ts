import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // important ! pour générer un site statique
  basePath: '/portfolio-v3', // le nom de ton dépôt GitHub
  assetPrefix: '/portfolio-v3/',
};

export default nextConfig;
