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
            <Image className={styles.profile_img} src="/SangjunPark.jpg" width={360} height={480}/>
            <div className={styles.profile_meta}>
                <p className={styles.profile_meta_name}>Sangjun Park</p>
                <p>Master Student at ICLab, KAIST</p>
            </div>
            <div class={styles.contact}>
                <a href="mailto:sangjun@kaist.ac.kr"><EmailIcon /></a>
                <a href="https://github.com/highjun10170"><GitHubIcon /></a>
                <a href="https://scholar.google.com/citations?user=esrgGaEAAAAJ&hl=ko"><GoogleScholarIcon /></a>
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
            </section>
            <section>
                <h3>Education</h3>
                <p>
                    <div style={{marginBottom: "1rem"}}>
                        <span>2022.02 - 2024.02(expected)</span><br/>
                        <strong>M.S in School of Computing</strong><br/>
                        <span>KAIST, Korea Advanced Institute of Science and Technology</span> <br/>
                        <span>Advising by <a href = "https://scholar.google.co.kr/citations?user=Sc2pBzYAAAAJ">Uichin Lee</a></span>
                        <span> as a member of <a href = "https://ic.kaist.ac.kr">Interactive Computing Lab</a></span>
                    </div>
                    
                    <div>
                        <span>2017.02 - 2021.08</span><br/>
                        <strong>B.S in School of Electrical Engineering & Department of Mathematics</strong> <br/>
                        <span>KAIST, Korea Advanced Institute of Science and Technology</span> <br/>
                        <span style={{fontSize: ".9rem"}}>GPA 3.95/4.3 over 185 credits completed</span>
                    </div>
                    
                </p>
            </section>
            <section>
                <h3>Publications</h3>
                <p>
                    <strong>QuickRef: Should I Read Cited Papers for Understanding This Paper?</strong><br/>
                    <span><em>Sangjun Park</em>, Chanhee Lee, Uichin Lee</span><br/>
                    <span>ACM CHI 2023 LBW</span> | <a href="https://raw.githubusercontent.com/highjun/highjun.github.io/main/public/2023_CHI_LBW_QuickRef.pdf">Download Paper</a>
                </p>
            </section>
            <section>
                <h3>Teaching Experiences</h3>
                <p>
                    <span>2023 Spring, KAIST CS565 IoTDataScience</span> <br/>
                    <span>2022 Fall, KAIST CS109 Programming Practice</span> <br/>
                </p>
            </section>
        </div>
    </main>
    </>
    
    )
}
