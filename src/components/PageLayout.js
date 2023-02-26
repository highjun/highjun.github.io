import Header from "./Header"
import Footer from "./Footer"

import styles from "@/styles/PageLayout.module.css"

const PageLayout = ({ children })=>{
    return <div className={styles.page}>
        <Header/>
        <div className={styles.main}>
        {children}
        </div>
        <Footer/>
    </div>
}

export default PageLayout