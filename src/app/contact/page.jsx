import styles from'./page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

const Contact = () => {
  return (
    <div className = {styles.container}>
      <h1 className={styles.title}>Lets Keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
          src="/Contact.gif"
          alt="Contact"
          fill={true}
          
          className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" name="name" placeholder="Name"  className={styles.input}/>
          <input type="email" name="email" placeholder="Email"  className={styles.input}/>
          <textarea name="message" placeholder="Message" cols='30' rows='10' className={styles.textArea}></textarea>
          <Button url='#' text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact