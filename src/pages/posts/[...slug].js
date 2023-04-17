import { MDX } from '@/components/Basics'
import { getAllPosts, getBlogDataByID } from '@/lib/fetch'
import PostLayout from '@/components/PostLayout'
import SEO from '@/components/SEO'

const dir_name = 'data/posts'

export async function getStaticPaths() {
    const posts = getAllPosts()
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
