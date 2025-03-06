import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <div className={styles['footer-left']}>
                    <img
                        src="/foot-logo.png"
                        alt="Oden Ewa Foundation"
                        className={styles['footer-logo']}
                    />
                    <p className={styles['footer-text']}>
                        The Oden Ewa Foundation works with visionary
                        organizations to enable young people in Africa and in
                        Indigenous communities in Canada to access dignified and
                        fulfilling work.
                    </p>
                    <p className={styles['footer-copyright']}>
                        © 2025 OdenEwa. All rights reserved.
                    </p>
                </div>
                <div className={styles['footer-links']}>
                    <div className={styles['footer-column']}>
                        <h3>About Us</h3>
                        <Link to="/about">Who We Are</Link>
                    </div>
                    <div className={styles['footer-column']}>
                        <h3>Our Programs</h3>
                        <Link to="/programs">Ugep Scholarships</Link>
                    </div>
                    <div className={styles['footer-column']}>
                        <h3>Support</h3>
                        <div className={styles['support-links']}>
                            <Link to="#">Join Our Team</Link>
                            <Link to="#">Become a Volunteer</Link>
                            <Link to="#">Donate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
