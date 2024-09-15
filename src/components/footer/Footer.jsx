
import style from './footer.module.css'
import Image from 'next/image'
import react from 'react'

const Footer = () => {

    // console.log('hello world') 'use client ' if you want to print in client mode(console side). not in terminal(server side)
  return (
    <div className={style.container}>
      <div > © 2024 Amal. All rights reserved.</div>
      <div className={style.social}>
        <Image className={style.icon} width={15} height={15} src='/5.png' alt='Amal dev'/>
        <Image className={style.icon} width={15} height={15} src='/4.png' alt='Amal dev'/>
        <Image className={style.icon} width={15} height={15} src='/3.png' alt='Amal dev'/>
      </div>

    </div>
  )
}

export default Footer