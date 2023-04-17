import Image from "next/image";
import styles from "@/styles/About.module.css"

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleScholarIcon from '@data/icons/google_scholar.svg';
import SEO from "@/components/SEO";

export default function About() {
    return (
    <>
    <SEO title={"Sangjun's Blog: About Me"}/>
    <main className={styles.main}>
        <div className={styles.profile}>
            <Image className={styles.profile_img} src="https://via.placeholder.com/360x480" width={360} height={480} />
            <div class={styles.profile_meta}>
                <p class={styles.profile_meta_name}>Sangjun Park</p>
                <p>Master Student at ICLab, Kaist</p>
            </div>
            <div class={styles.contact}>
                <a href="mailto:highjun10170@gmail.com"><EmailIcon /></a>
                <a href="https://github.com/highjun10170"><GitHubIcon /></a>
                <a href="https://github.com/highjun10170"><GoogleScholarIcon /></a>
            </div>
        </div>
        <div>
            <section>
                <h3>I am:</h3>
                <ul>
                    <li>a master student in School of Computing at KAIST </li>
                    <li>a member of <a href="https://iclab.kaist.ac.kr">Interactive Computing Lab</a></li>
                    <li>interested in <em>improving productivity or performance</em> by making human-centered applications.</li>
                </ul>
                <p>For more details, please check my <a href="https://github.com">C.V.</a></p>
            </section>
            <section>
                <h3>Publications</h3>
            </section>
            <section>
                <h3>Teaching Experiences</h3>
            </section>
        </div>
    </main>
    </>
    
    )
}
