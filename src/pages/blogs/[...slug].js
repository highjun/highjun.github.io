import customBundleMDX from '@/lib/mdx'
import { getFiles } from '@/lib/util'
import { MDX } from '@/components/Basics'

import styles from '@/styles/Blog.module.css'

const dir_name = 'data/blogs'

export async function getStaticPaths() {
    const posts = getFiles(dir_name)
    return {
        paths: posts.map((post) => ({
            params: {
                slug: [post.replace(/\.(mdx|md)/, '')],
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = await customBundleMDX(`data/blogs/${params.slug}.md`)
    return { props: { post } }
}

export default function Projects({ post }) {
    const { mdxSource, toc, frontMatter } = post

    return (
        <div className={styles.container}>
            <MDX mdxSource={mdxSource}/>
        </div>
    )
}
