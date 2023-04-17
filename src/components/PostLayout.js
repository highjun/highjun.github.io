import styles from "@/styles/PostLayout.module.css"

// const data = {
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

const PostLayout = ({children, frontMatter}) => {
    return <main className={styles.post}>
        <div className={styles.post_header}>
            <h1>{frontMatter.title}</h1>
            <div className={styles.post_etc}>
                <span className={styles.post_date}>{frontMatter.date}</span>
                <span className={styles.separator}>•</span>
                <span className={styles.post_length}>{frontMatter.length}</span>
            </div>
            <div className={styles.post_keywords}>
                {
                    frontMatter.keywords.map(keyword => <span key={keyword}>{keyword}</span>)
                }
            </div>
            <div className={styles.post_summary}>
                <svg width="32" height="48" fill="currentColor" viewBox="0 0 32 48" className={styles.bookmark}>
                    <path fill="currentColor" d="M32 0H0v48h.163l16-16L32 47.836V0z"></path>
                </svg>
                <svg width="30" height="30" className={[styles.postit, styles.bottom].join(' ')} viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="currentColor" x="15" y="15" width="15" height="15" />
                    <rect fill="currentColor" x="0" y="15" width="18" height="15" />
                    <rect fill="currentColor" x="15" y="0" width="15" height="18" />
                </svg>
                <svg width="30" height="30" className={[styles.postit, styles.top].join(' ')} viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="currentColor" x="0" y="0" width="15" height="15" />
                    <rect fill="currentColor" x="12" y="0" width="18" height="15" />
                    <rect fill="currentColor" x="0" y="12" width="15" height="18" />
                </svg>

                <p>
                    {frontMatter.summary}
                </p>
            </div>
        </div>
        <div className={styles.post_main}>
            {children}
        </div>
    </main>
}

export default PostLayout