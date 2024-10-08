
import Link from 'next/link'
import styles from'./page.module.css'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.sTitle}>Choose from gallery</h1>
      <div className={styles.items}>
        <Link href='https://myportfolio-gamma-eight.vercel.app/' className={styles.item}>
          <spam className={styles.title}>My Portfolio</spam>
        </Link>
        <Link href='/portfolio/websites' className={styles.item}>
          <spam className={styles.title}>My work</spam>
        </Link>
        {/* <Link href='/portfolio/applications' className={styles.item}>
          <spam className={styles.title}>Applications</spam>
        </Link> */}
      </div>

    </div>
  )
}

export default Portfolio