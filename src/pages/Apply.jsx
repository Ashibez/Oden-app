import styles from './Apply.module.css';
import footerStyles from './Home.module.css';
import { Link } from 'react-router-dom';

function Apply() {
    return (
        <div className={styles.apply}>
            <div className={styles.hero}>
                <h1>Apply for Scholarship</h1>
                <p>Take the First Step Towards Your Future</p>
            </div>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>Application Process</h2>
                    <p>Coming Soon...</p>
                    <Link to="/programs" className={styles.backButton}>
                        Back to Programs
                    </Link>
                </div>
            </section>

            <footer className={footerStyles.footer}>
                {/* Same footer content as other pages */}
            </footer>
        </div>
    );
}

export default Apply;
