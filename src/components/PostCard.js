import Image from 'next/image'
import styles from '@/styles/PostCard.module.css'
import Link from 'next/link'

// const post = {
//     image_path: "https://via.placeholder.com/300x200",
//     link: "/post/1.html",
//     title: "Sample Post",
//     date: "2023년 03월 26일",
//     length: "10 Min Read",
//     keywords: [
//         "키워드 1",
//         "키워드 2",
//         "키워드 3"
//     ],
//     summary: "Beakjoon에서 PASS된 코드만 업데이트합니다.\n알고리즘을 먼저 풀이하는 언어(Java)가 정해져있어, 풀이 언어(Python, C++, Java)가 모두 업데이트될 때까지는 시간이 걸릴 수 있습니다."
// }

const PostCard = ({ post }) => {
    return <section className={styles.post}>
        <Link href={post.link}>
            <Image src={post.image_path} alt={post.title} className={styles.post_image} width={300} height = {200}/>
        </Link>
        <div className={styles.post_content}>
            <h2 className={styles.post_title}>
                <Link href={post.link}>{post.title}</Link>
            </h2>
            <p className={styles.post_summary}>
                {post.summary}
            </p>
            <div className={styles.post_keywords}>
                {post.keywords.map(keyword => <span key={keyword}>{keyword}</span>)}
            </div>
            <div className={styles.post_etc}>
                <span className={styles.post_date}>{post.date}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.post_length}>{post.length}</span>
            </div>
        </div>
    </section>
}

export default PostCard