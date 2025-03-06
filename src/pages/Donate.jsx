import styles from './Donate.module.css';
import footerStyles from './Home.module.css';
import { Link } from 'react-router-dom';

function Donate() {
    return (
        <div className={styles.donate}>
            <div className={styles.hero}>
                <h1>Support Our Cause</h1>
                <p>Help Us Make Education Accessible</p>
            </div>

            <section className={styles.content}>
                <div className={styles.container}>
                    <h2>Donation Options</h2>
                    <p>Coming Soon...</p>
                </div>
            </section>

            <footer className={footerStyles.footer}>
                {/* Same footer content as other pages */}
            </footer>
        </div>
    );
}

export default Donate;
