
import React from 'react'
import styles from'./page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';


<<<<<<< HEAD
async function getdata(_id) {
  const res = await fetch(`http://localhost:3000/api/posts/${_id}`);
=======
async function getdata(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
  
  // console.log("data",res.json());

  if(!res.ok){
    return notFound
  }

  return res.json();
  
}

<<<<<<< HEAD
export async function generateMetadata({params}){
  const post = await getdata(params._id)
  return {
    title: post.title,
    description: post.description,
  }
}
=======
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1

const BlogPost = async({params}) => {
  const data = await getdata(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
<<<<<<< HEAD
            {data.desc}
=======
            {data.body}
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
          </p>
          <div className={styles.author}>
            <Image
              src="/Micasa.jpg"
              alt="Author"
              className={styles.avatar}
              width={40}
              height={40}
            />
<<<<<<< HEAD
            <span className={styles.userName}>{data.username}</span>
=======
            <span className={styles.userName}>Micasa</span>
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
          </div>
        </div>

        <div className={styles.imgcontainer}>
          <Image
<<<<<<< HEAD
            src={data.photo}
=======
            src="/Blog.png"
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
            alt="Blog Post"
            className={styles.img}
            fill={true}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.text}>
          {data.title}
        </p>
      </div>
    </div>
  );
}

export default BlogPost