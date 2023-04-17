import { getFiles } from '@/lib/util'
import { MDX } from '@/components/Basics'
import { getBlogDataByID } from '@/lib/fetch'
import PostLayout from '@/components/PostLayout'
import SEO from '@/components/SEO'

const dir_name = 'data/blogs'

export async function getStaticPaths() {
    const posts = getFiles(dir_name)
    return {
        paths: posts.map((post) => ({
            params: {
                slug: [post.replace(/\.md/, '')],
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const post = await getBlogDataByID(params.slug);
    return { props: { post } }
}

export default function Projects({ post }) {
    const { mdxSource, toc, frontMatter } = post

    return (
        <>
            <SEO title={["Post:", frontMatter.title].join(' ')} />
            <PostLayout frontMatter={frontMatter}>
                <MDX mdxSource={mdxSource} />
            </PostLayout>
        </>
    )
}
