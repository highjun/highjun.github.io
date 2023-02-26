import Image from 'next/image'
import styles from '@/styles/PostCard.module.css'
import Link from 'next/link'


const PostCard = ({post}) => {
    return <Link href={`posts/${post.pathname}`}>
    <article className={styles.postCard}>
        <Image src={"https://via.placeholder.com/360x200"}  width= {360} height={200}/>
        <div className={styles.explain}>
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.info}>
                <span>{`2022년 12월 31일`}</span>
                <span>&sdot;</span>
                <span>{`3 min read`}</span>
            </div>
            <div className={styles.tags}>
                <span>{`Hello`}</span>
                <span>&sdot;</span>
                <span>{`World!`}</span>
                <span>&sdot;</span>
                <span>{`World!`}</span>
            </div>
            <div className={styles.content}>{post.content}</div>
        </div>
    </article>
    </Link> 
    
}

export default PostCard