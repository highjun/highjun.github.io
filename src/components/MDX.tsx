import type { MDXComponents } from 'mdx/types'
 
export function MDX(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}