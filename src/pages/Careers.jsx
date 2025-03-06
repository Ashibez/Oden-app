import styles from './Careers.module.css';
import footerStyles from './Home.module.css';
import { Link } from 'react-router-dom';

function Careers() {
    return (
        <div className={styles.careers}>
            <div className={styles.hero}>
                <h1>Join Our Team</h1>
                <p>Build a Career with Purpose</p>
            </div>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>Career Opportunities</h2>
                    <p>Coming Soon...</p>
                </div>
            </section>

            <footer className={footerStyles.footer}>
                {/* Same footer content as other pages */}
            </footer>
        </div>
    );
}

export default Careers;
