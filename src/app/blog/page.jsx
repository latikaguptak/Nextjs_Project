import React from 'react'
import styles from'./page.module.css'
import Link from 'next/link'
import Image from 'next/image'
async function getdata() {
<<<<<<< HEAD
  const res = await fetch('http://localhost:3000/api/posts', {cache: 'no-cache'});
=======
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-cache'});
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
  
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

<<<<<<< HEAD
      <Link href ={`/blog/${item._id}`} className={styles.Container} key = {item._id}>
    <div className={styles.imgContainer}>
      <Image 
      src={item.photo}
=======
      <Link href ='/blog/testId' className={styles.Container} key = {item.id}>
    <div className={styles.imgContainer}>
      <Image 
      src="/Blog.png"
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
      alt=''
      width={500}
      height={300}
      className={styles.image}
      /
      >

    </div>
    <div className={styles.content}>
      <h1 className={styles.heading}>{item.title}</h1>
<<<<<<< HEAD
      <p className={styles.desc}>{item.desc}</p>
=======
      <p className={styles.desc}>Desc</p>
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
    </div>
  </Link>
      ))}
</div>

  )
}

export default Blog