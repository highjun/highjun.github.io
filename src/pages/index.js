import { getSortedBlogsData } from '@/lib/fetch'
import PostCard from '@/components/PostCard'


export async function getStaticProps() {
  const blogPosts = await getSortedBlogsData()
  return { props: { blogPosts } }
}


export default function Home({ blogPosts }) {
  return (
    <main>
      {
        blogPosts.map(post => {
          return <PostCard post={post} key={post["id"]} />
        })
      }
    </main>
  )
}
