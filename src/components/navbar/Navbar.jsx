import Link from 'next/link';

import styles from './navbar.module.css';

const Navbar = async () => {
    return (
        <div className={styles.container}>
            <Link href='/' className={styles.logo}>eRa</Link>
            <div>
                <Links />
            </div>
        </div>
    );
};

export default Navbar;