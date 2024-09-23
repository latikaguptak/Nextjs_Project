
import React from 'react'
import styles from'./page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';


async function getdata(_id) {
  const res = await fetch(`http://localhost:3000/api/posts/${_id}`);
  
  // console.log("data",res.json());

  if(!res.ok){
    return notFound
  }

  return res.json();
  
}

export async function generateMetadata({params}){
  const post = await getdata(params._id)
  return {
    title: post.title,
    description: post.description,
  }
}

const BlogPost = async({params}) => {
  const data = await getdata(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src="/Micasa.jpg"
              alt="Author"
              className={styles.avatar}
              width={40}
              height={40}
            />
            <span className={styles.userName}>{data.username}</span>
          </div>
        </div>

        <div className={styles.imgcontainer}>
          <Image
            src={data.photo}
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