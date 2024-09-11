'use client'
import Link from 'next/link'
import style from './page.module.css'

const Navbar = () => {
    const links = [
        {
            id:1,
            name: 'Home',
            path: '/'
        },
        {
            id:4,
            name: 'Portfolio',
            path: '/portfolio'
        },
        {
            id:3,
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            id:2,
            name: 'About',
            path: '/about'
        },
        {
            id:5,
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