import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const isPrograms = location.pathname === '/programs';

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to="/" aria-label="Home">
                        <img src="/logo.png" alt="" aria-hidden="true" />
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/" className={isHome ? styles.active : ''}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/programs"
                            className={isPrograms ? styles.active : ''}
                        >
                            Our Programs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={isAbout ? styles.active : ''}
                        >
                            About Us
                        </Link>
                    </li>
                    {isHome && (
                        <li className={styles.navImage}>
                            <img src="/image2.png" alt="" aria-hidden="true" />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
