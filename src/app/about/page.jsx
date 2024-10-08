import React from 'react'
import styles from'./page.module.css'
import Image from 'next/image'
import Button from '../../../components/button/button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/About.png" 
        fill={true}
        alt=''
        className={styles.img}/>

        <div className={styles.imgText} >
          <h1> Digital Storytellers</h1>
          <h2>handcrafting award winning digital experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
         <div className={styles.item}>
          <h1 className={ styles.title}>Who am I </h1>
          <p className={styles.desc}>
          I am a Front End Developer with a fervor for crafting interactive and responsive web applications. Possessing proficiency in JavaScript, React, Redux, Next.js, HTML, CSS, and Git, I bring a comprehensive skill set to the development landscape.
            <br/>
            My commitment to continual learning is evidenced by my quick adaptability and eagerness to broaden my knowledge base. Recognized as a dedicated team player, I am enthusiastic about collaborative efforts to conceive and deliver exceptional applications. My professional approach and passion for web development fuel my commitment to contributing meaningfully to collaborative projects.
          </p>
         </div>
         <div className={styles.item}>
            <h1 className={ styles.title}>What my work?</h1>
            <p className={styles.desc}>
          My work spans across various domains, including web development, Frontend development and Reactjs and Nextjs Developer. I am skilled at designing engaging and user-centric digital experiences that resonate with my target audience.
            <br/>
            <br/>
            - Web Developer<br/>
            <br/>
            - Frontend Developer<br/>
            <br/>
            - Reactjs and Nextjs Developer
            <br/>
            </p>
          <Button url='/portfolio' text='see more' />
         </div>
        

      </div>
    </div>
  )
}

export default About