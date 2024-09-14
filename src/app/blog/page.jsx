import React from 'react'
import styles from'./page.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={styles.maincontainer}> 
    <Link href ='/blog/testId' className={styles.Container}>
    <div className={styles.imgContainer}>
      <Image 
      src="/Blog.png"
      alt=''
      width={500}
      height={300}
      className={styles.image}
      /
      >

    </div>
    <div className={styles.content}>
      <h1 className={styles.heading}>text</h1>
      <p className={styles.desc}>Desc</p>
    </div>
  </Link>
  <Link href ='/blog/testId' className={styles.Container}>

    <div className={styles.imgContainer}>
      <Image 
      src="/Blog.png"
      alt=''
      width={500}
      height={300}
      className={styles.image}
      /
      >

    </div>
    <div className={styles.content}>
      <h1 className={styles.heading}>text</h1>
      <p className={styles.desc}>Desc</p>
    </div>
    </Link>
    <Link href ='/blog/testId' className={styles.Container}>

    <div className={styles.imgContainer}>
      <Image 
      src="/Blog.png"
      alt=''
      width={500}
      height={300}
      className={styles.image}
      /
      >

    </div>
    <div className={styles.content}>
      <h1 className={styles.heading}>text</h1>
      <p className={styles.desc}>Desc</p>
    </div>
    </Link>
    </div>

  )
}

export default Blog