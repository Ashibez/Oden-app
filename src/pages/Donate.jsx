import { Link } from 'react-router-dom';
import styles from './Donate.module.css';

function Donate() {
    return (
        <div className={styles.donate}>
            <div className={styles.hero}>
                <h1>Support Our Cause</h1>
                <p>Help Us Make Education Accessible</p>
            </div>
            <div className={styles.container}>
                {/* Donation content */}
                <Link to="/" className={styles.homeButton}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Donate;
