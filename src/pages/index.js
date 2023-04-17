import { getSortedBlogsData } from '@/lib/fetch'
import PostCard from '@/components/PostCard'
import styles from '@/styles/Home.module.css'
import SEO from '@/components/SEO'


export async function getStaticProps() {
  const blogPosts = await getSortedBlogsData()
  return { props: { blogPosts } }
}


export default function Home({ blogPosts }) {
  return (
    <>
      <SEO title={"Sangjun's Blog: Home"}/>
      <main className={styles.home}>
        {
          blogPosts.length > 0 ?
            blogPosts.map(post =>
              <PostCard post={post} key={post["id"]} />
            )
            :
            <h3>
              Blog has no content yet...
            </h3>
        }
      </main>
    </>

  )
}
