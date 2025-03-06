import styles from './Volunteer.module.css';
import footerStyles from './Home.module.css';
import { Link } from 'react-router-dom';

function Volunteer() {
    return (
        <div className={styles.volunteer}>
            <div className={styles.hero}>
                <h1>Volunteer With Us</h1>
                <p>Make a Difference in Your Community</p>
            </div>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>Volunteer Opportunities</h2>
                    <p>Coming Soon...</p>
                </div>
            </section>

            <footer className={footerStyles.footer}>
                {/* Same footer content as other pages */}
            </footer>
        </div>
    );
}

export default Volunteer;
