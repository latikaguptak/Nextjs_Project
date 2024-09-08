import Link from 'next/link'
import React from 'react'

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
    <div>
        <div>
            {links.map(link =>(
                <Link key = {link.id} href={link.path}>{link.name}</Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar