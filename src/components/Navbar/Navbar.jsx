'use client'
import react from 'react'
import Link from 'next/link'
import style from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const Navbar = () => {
    const links = [
        {
            id:1,
            name: 'Home',
            path: '/'
        },
        {
            id:2,
            name: 'Portfolio',
            path: '/portfolio'
        },
        {
            id:3,
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            id:4,
            name: 'Blog',
            path: '/blog'
        },
        {
            id:5,
            name: 'About',
            path: '/about'
        },
        {
            id:6,
            name: 'Contact',
            path: '/contact'
        }
    ]
  return (
    <div className={style.container}>
        <Link href='/' className={style.logo}>
            Amal
        </Link>
        <div className={style.links}>
            <DarkModeToggle/>
            {links.map(link =>(
                <Link className={style.link} key = {link.id} href={link.path}>{link.name} </Link>
            ))}
        <button className={style.logout} onClick={()=>{console.log("logout")}}>
            Logout
        </button>
        </div>
    </div>
  )
}

export default Navbar