import styles from '@/styles/Footer.module.css'

const Footer= () => {
    return <footer className={styles.footer}>
        <div className={styles.footerCenter}>
        <div>Sangjun's Blog  &copy; 2023</div>
        <div>&sdot;</div>
        <div>Powered by Next.js</div>
        </div>
    </footer>
}
export default Footer