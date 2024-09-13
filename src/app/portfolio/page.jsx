
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
        <Link href='/portfolio/website' className={styles.item}>
          <spam className={styles.title}>Website</spam>
        </Link>
        <Link href='/portfolio/applictaions' className={styles.item}>
          <spam className={styles.title}>Applictaions</spam>
        </Link>
      </div>

    </div>
  )
}

export default Portfolio