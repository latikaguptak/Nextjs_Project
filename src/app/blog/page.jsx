
// import React from 'react'
// import styles from'./page.module.css'
// import Link from 'next/link'
// import Image from 'next/image'
// import Button from '../../../components/button/button';
// import Error from 'next/error';
// async function getdata() {
//   const res = await fetch('http://localhost:3000/api/posts', {cache: 'no-cache'});
  
//   if(!res.ok){
//     throw new Error(`HTTP error! status: ${res.status}`);
//   }

//   return res.json();
  
// }
// const Blog = async() => {
//   const data = await getdata();
//   return (
//     <div className={styles.maincontainer}> 
    
//     {data.map((item)=>(

//       <Link href ={`/blog/${item._id}`} className={styles.Container} key = {item._id}>
//     <div className={styles.imgContainer}>
//       <Image 
//       src={item.photo}
//       alt=''
//       width={500}
//       height={300}
//       className={styles.image}
//       /
//       >

//     </div>
//     <div className={styles.content}>
//       <h1 className={styles.heading}>{item.title}</h1>
//       <p className={styles.desc}>{item.desc}</p>
//     </div>
//   </Link>
//       ))}
//       <Button url='/newpost' text='Create'/>
// </div>

//   )
// }

// export default Blog

import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../../components/button/button';

async function getdata() {
  try {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-cache' });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json(); // Make sure to parse JSON data correctly
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array in case of an error to prevent crashes
  }
}

const Blog = async () => {
  const data = await getdata();

  return (
    <div className={styles.maincontainer}>
      {data.length > 0 ? (
        data.map((item) => (
          <Link href={`/blog/${item._id}`} className={styles.Container} key={item._id}>
            <div className={styles.imgContainer}>
              {item.photo && (
                <Image
                  src={item.photo}
                  alt={item.title || 'Blog image'}
                  width={500}
                  height={300}
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.content}>
              <h1 className={styles.heading}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No posts available.</p>
      )}
      <Button url='/newpost' text='Create' />
    </div>
  );
};

export default Blog;
