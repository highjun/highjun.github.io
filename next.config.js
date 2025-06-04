const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  // 기존 설정 유지
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}); 