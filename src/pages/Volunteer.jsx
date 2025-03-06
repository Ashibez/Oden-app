import { Link } from 'react-router-dom';
import styles from './Volunteer.module.css';

function Volunteer() {
    return (
        <div className={styles.volunteer}>
            <div className={styles.hero}>
                <h1>Volunteer With Us</h1>
                <p>Make a Difference in Your Community</p>
            </div>
            <div className={styles.container}>
                {/* Volunteer content */}
                <Link to="/" className={styles.homeButton}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default Volunteer;
