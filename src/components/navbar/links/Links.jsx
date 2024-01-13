'use client';

import { useState } from 'react';
import Image from 'next/image';
import NavLink from './navLink/navLink';

import styles from './links.module.css';

const links = [
    {
        title: 'Homepage',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Blog',
        path: '/blog'
    }
];

const Links = () => {
    const [open, setOpen] = useState(false);

    const user = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink key={link.title} item={link} />
                ))}
                {user
                    ? (
                        <>
                            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                            <form>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <NavLink item={{ title: 'Login', path: '/login' }} />
                    )
                }
            </div>
            <Image
                src='/menu.png'
                alt=''
                width={30}
                height={30}
                onClick={() => setOpen(prev => !prev)}
                className={styles.menuButton}
            />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLink key={link.title} item={link} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;