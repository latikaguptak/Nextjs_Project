<<<<<<< HEAD
// 'use client'
// import React from 'react'
// import style from'./page.module.css'
// import { signIn } from 'next-auth/react'
// const Login = () => {
//   return (
//     <div className={style.container}>
//       <button onClick={()=>signIn('google')}> Login with google</button>  
//     </div>
//   )
// }

// export default Login


"use client"
import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return <button onClick={() => signIn("google")}>

    click to go on google
  </button>
}
=======
import React from 'react'
import style from'./page.module.css'
const Login = () => {
  return (
    <div> className={style.container}Login</div>
  )
}

export default Login
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
