import { Link } from 'react-router-dom';
import styles from './Apply.module.css';

function Apply() {
    return (
        <div className={styles.apply}>
            <div className={styles.hero}>
                <h1>Apply for Scholarship</h1>
                <p>Take the First Step Towards Your Future</p>
            </div>
            <div className={styles.container}>
                {/* Application form will go here */}
                <Link to="/programs" className={styles.backButton}>
                    Back to Programs
                </Link>
            </div>
        </div>
    );
}

export default Apply;
