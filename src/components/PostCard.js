import Image from 'next/image'
import styles from '@/styles/PostCard.module.css'
import Link from 'next/link'


const PostCard = ({post}) => {
    return <Link href={`blogs/${post.id}`}>
    <article className={styles.postCard}>
        <Image src={"https://via.placeholder.com/360x200"}  width= {360} height={200}/>
        <div className={styles.explain}>
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.info}>
                <span>{post.date}</span>
                <span>&sdot;</span>
                <span>{`3 min read`}</span>
            </div>
            <div className={styles.tags}>
                {post.tags.map( (tag, idx) => <>
                    <span>{tag } </span>
                    {idx !== post.tags.length -1 ?<span>&sdot;</span>: ""}
                </>)}
            </div>
            <div className={styles.content}>{post.content}</div>
        </div>
    </article>
    </Link> 
}

export default PostCard