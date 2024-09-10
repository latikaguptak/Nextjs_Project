// 'use client'
import React from 'react'
import style from './page.module.css'

const Footer = () => {

    // console.log('hello world') 'use client ' if you want to print in client mode(console side). not in terminal(server side)
  return (
    <div>
      <div className={style.container}> © 2024 Amal. All rights reserved.</div>
      <div></div>

    </div>
  )
}

export default Footer