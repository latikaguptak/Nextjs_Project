
import Link from 'next/link'
import styles from'./page.module.css'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.sTitle}>Choose from gallery</h1>
      <div className={styles.items}>
        <Link href='/portfolio/illustration' className={styles.item}>
          <spam className={styles.title}>Illustrations</spam>
        </Link>
        <Link href='/portfolio/websites' className={styles.item}>
          <spam className={styles.title}>Websites</spam>
        </Link>
        <Link href='/portfolio/applications' className={styles.item}>
          <spam className={styles.title}>Applications</spam>
        </Link>
      </div>

    </div>
  )
}

export default Portfolio