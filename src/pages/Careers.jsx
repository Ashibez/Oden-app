import { Link } from 'react-router-dom';
import styles from './Careers.module.css';

function Careers() {
    return (
        <div className={styles.careers}>
            <div className={styles.hero}>
                <h1>Join Our Team</h1>
                <p>Build a Career with Purpose</p>
            </div>
            <div className={styles.container}>
                {/* Careers content */}
                <Link to="/" className={styles.homeButton}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Careers;
