import React from 'react'
import styles from'./page.module.css'
import Link from 'next/link'
import Image from 'next/image'
async function getdata() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-cache'});
  
  if(!res.ok){
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
  
}
const Blog = async() => {
  const data = await getdata();
  return (
    <div className={styles.maincontainer}> 
    {data.map((item)=>(

      <Link href ='/blog/testId' className={styles.Container} key = {item.id}>
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
      <h1 className={styles.heading}>{item.title}</h1>
      <p className={styles.desc}>Desc</p>
    </div>
  </Link>
      ))}
</div>

  )
}

export default Blog