import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src="/logo.png" alt="Oden Ewa Foundation Logo" />
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/" className={isHome ? styles.active : ''}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/programs">Our Programs</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className={styles.navImage}>
                        <img
                            src="/image2.png"
                            alt="Decorative background"
                            aria-hidden="true"
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
