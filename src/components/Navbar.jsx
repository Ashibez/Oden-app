import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const isPrograms = location.pathname === '/programs';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link to="/" aria-label="Home">
                        <img src="/favi1.png" alt="" aria-hidden="true" />
                    </Link>
                </div>
                <Link
                    to="/"
                    className={`${styles.homeLink} ${
                        isHome ? styles.active : ''
                    }`}
                >
                    Home
                </Link>
                <button
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul
                    className={`${styles.navLinks} ${
                        isMenuOpen ? styles.open : ''
                    }`}
                >
                    <li>
                        <Link
                            to="/programs"
                            className={isPrograms ? styles.active : ''}
                            onClick={handleNavClick}
                        >
                            Our Programs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={isAbout ? styles.active : ''}
                            onClick={handleNavClick}
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
