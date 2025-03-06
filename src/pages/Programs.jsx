import styles from './Programs.module.css';
import { Link } from 'react-router-dom';

function Programs() {
    return (
        <div className={styles.programs}>
            <div className={styles.hero}>
                <h1>Our Programs</h1>
                <p>Empowering Through Education and Skills Development</p>
            </div>

            <section className={styles.scholarships}>
                <div className={styles.container}>
                    <h2>Scholarship Programs</h2>
                    <div className={styles.programGrid}>
                        <div className={styles.programCard}>
                            <h3>Ugep Scholarships</h3>
                            <p>
                                Supporting talented students at Federal
                                Polytechnic Ugep with comprehensive
                                scholarships.
                            </p>
                            <Link to="/apply" className={styles.learnMore}>
                                Learn More
                            </Link>
                        </div>
                        {/* Add more program cards as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Programs;
