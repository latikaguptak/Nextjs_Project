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
          <h1 className={ styles.title}>Who are we</h1>
          <p className={styles.desc}>
            lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam non pro id el metus et justo vit euismod. Except   id liber tempor null a ante dict    sit aliquet consequ velit sed diam non pro id el metus et just o tempor null a ante dict sit aliquet consequ velit sed diam non pro id el metus et just o tempor null a ante dict sit aliquet consequ velit sed diam non pro.<br/>
            Lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam non pro id el metus et justo vit euismod. Except   id liber tempor null a ante dict    sit aliquet consequ velit sed diam non pro id el metus et just o tempor null a ante dict sit aliquet consequ velit sed diam non pro id el metus et just o tempor null a ante dict sit aliquet consequ velit sed diam non pro.
          </p>
         </div>
         <div className={styles.item}>
            <h1 className={ styles.title}>What we Do?</h1>
            <p className={styles.desc}>
            lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam non pro id el metus et justo vit euismod.
            <br/>
            <br/>
            -illution Science<br/>
            <br/>
            -fast and handling site<br/>
            <br></br>
            -learnings
            </p>
          <Button url='contact' text='Contact'/>
         </div>
        

      </div>
    </div>
  )
}

export default About