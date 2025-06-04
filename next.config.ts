import type { NextConfig } from "next";
import withMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  distDir: 'out',
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
