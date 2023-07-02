import React from 'react';
import Link from 'next/link';

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
        <nav>
            <Link href='/'>WebDev Blogs</Link>
            <div>
                {links.map(({ id, title, url }) => {
                    return (
                        <Link key={id} href={url}>
                            {title}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

export default Navbar;
