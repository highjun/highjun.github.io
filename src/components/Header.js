import siteData from "@data/siteData"

import styles from "@/styles/Header.module.css"
import Link from "next/link"

const Header = () => {
    return <header className={styles.header}>
        <div className={styles.headerCenter}>
        <nav className={styles.navMenus}>
            {siteData.navPages.map(key => <Link className={styles.navItem} href={`/${key}`} key={key}>{key}</   Link>)}
        </nav>
        </div>
        
    </header>
}
export default Header