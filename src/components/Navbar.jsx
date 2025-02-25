import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="Logo" />
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/" className={styles.active}>
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
                        <img src="/image2.png" alt="Image 2" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
