import siteData from "@data/siteData"

import styles from "@/styles/Header.module.css"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router';

import icon from 'public/icon.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from "react";

const Header = () => {
    const url = useRouter().asPath;
    const [isMenuActive, setMenuStatus] = useState(false);

    return <header className={styles.header}>
        <div className={styles.header_container}>
            <div className={styles.header_mobile}>
                <div className={styles.header_left}>
                    <Image className={styles.header_icon} src={icon} />
                    <span>Sangjun's Blog</span>
                </div>
                <button className={styles.mobile_nav} onClick={() => setMenuStatus((val) => !val)} >
                    {isMenuActive? <CloseIcon/>:<MenuIcon/>}
                </button>    
            </div>
            
            <nav className={styles.nav}>
                {Object.keys(siteData.navRoutes).map(key =>
                    <Link className={[styles.nav_item, url === siteData.navRoutes[key]? styles.active:''].join(' ')} href={siteData.navRoutes[key]} key={key}>{key}</Link>)}
            </nav>
        </div>
    </header>
}
export default Header