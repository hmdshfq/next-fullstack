import React from 'react';
import Link from 'next/link';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './Navbar.module.scss';

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
];

function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href='/' className={styles.logo}>WebDev Blogs</Link>
            <div className={styles.links}>
                {links.map(({ id, title, url }) => {
                    return (
                        <Link className={styles.link} key={id} href={url}>
                            {title}
                        </Link>
                    );
                })}
              <LogoutButton />
            </div>
        </nav>
    );
}

export default Navbar;
