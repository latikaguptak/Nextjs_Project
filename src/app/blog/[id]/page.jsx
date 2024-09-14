import React from 'react'
import styles from'./page.module.css'
import Image from 'next/image'
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem select</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy
            mi, tincidunt ut tempus ut, tincidunt at lectus. Maecenas ipsum
            metus, imperdiet non ullamcorper vitae, consectetur et neque. Sed
            vel lectus auctor, placerat tortor ac, congue nisi. Aliquam erat
            volutpat. Quisque eget arcu orci. Nulla facilisi.
          </p>
          <div className={styles.author}>
            <Image
              src="/Micasa.jpg"
              alt="Author"
              className={styles.avatar}
              width={40}
              height={40}
            />
            <span className={styles.userName}>Micasa</span>
          </div>
        </div>

        <div className={styles.imgcontainer}>
          <Image
            src="/Blog.png"
            alt="Blog Post"
            className={styles.img}
            fill={true}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy
          mi, tincidunt ut tempus ut, tincidunt at lectus. Maecenas ipsum metus,
          imperdiet non ullamcorper vitae, consectetur et neque. Sed vel lectus
          auctor, placerat tortor ac, congue nisi. Aliquam erat volutpat.
          Quisque eget arcu orci. Nulla facilisi. Proin viverra, enim et
          ullamcorper tincidunt, arcu turpis bibendum velit, a pellentesque eros
          risus at velit. Donec egestas, dolor vel convallis consectetur, dui
          arcu lacinia est, ut molestie neque nisl id lectus. Donec vel diam in
          arcu sagittis interdum. Sed et ipsum metus. Nulla facilisi. Donec
          vitae neque in justo cursus semper. Sed vel velit ac mauris congue
          scelerisque. Donec at neque vel neque semper semper. Sed et ipsum
          metus. Nulla facilisi. Donec vitae neque in justo cursus semper semper
          sem sagittis just sollicitudin lore m nibh. Donec at neque vel neque
          semper sem sagittis just sollicitudin lore m nibh. Donec at neque vel
          neque semper sem sagittis just.
        </p>
      </div>
    </div>
  );
}

export default BlogPost