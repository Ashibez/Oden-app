import styles from './Programs.module.css';
import footerStyles from '../pages/Home.module.css'; // Import footer styles
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
                            <Link to="#" className={styles.learnMore}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Health Insurance Scheme Section */}
            <div className={styles['health-insurance-section']}>
                <p className={styles['health-insurance-subtitle']}>
                    <span className={styles['thin-bold']}>The</span>{' '}
                    <span className={styles.highlight}>
                        Oden Ewa Foundation Health Insurance Scheme
                    </span>
                </p>

                <div className={styles['health-insurance-content']}>
                    <div className={styles['health-insurance-text']}>
                        <div
                            className={styles['health-insurance-text-content']}
                        >
                            <p>
                                <span className={styles.highlight}>
                                    Affordable Healthcare for All!
                                </span>
                            </p>
                            <p>
                                Join the Oden Ewa Foundation Health Insurance
                                Scheme and enjoy quality medical care at low
                                costs!
                            </p>
                            <p>
                                ✅ Hospital coverage <br />
                                ✅ Medications <br />✅ Emergency care – all
                                tailored to keep you and your loved ones
                                healthy.
                            </p>
                            <p>
                                Oden Ewa Foundation –{' '}
                                <span className={styles.highlight}>
                                    Your Health, Our Priority!
                                </span>
                            </p>
                        </div>
                        <div className={styles['button-container']}>
                            <Link
                                to="https://www.odenewafoundation.org/userRegistration"
                                className={styles['apply-button']}
                                aria-label="Apply for Health Insurance"
                            >
                                Apply Now
                                <img
                                    src="/arrow.png"
                                    alt=""
                                    className={styles['button-arrow']}
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={styles['health-insurance-image']}>
                        <img src="/newsec1.JPG" alt="Health Insurance Scheme" />
                    </div>
                </div>
            </div>

            <footer className={footerStyles.footer}>
                <div className={footerStyles['footer-content']}>
                    <div className={footerStyles['footer-left']}>
                        <Link to="/" aria-label="Home">
                            <img
                                src="/favi2.png"
                                alt="Oden Ewa Foundation"
                                className={styles['footer-logo']}
                                aria-hidden="true"
                            />
                        </Link>
                        <p className={footerStyles['footer-text']}>
                            The Oden Ewa Foundation works with visionary
                            organizations to enable young people in Africa and
                            in Indigenous communities in Canada to access
                            dignified and fulfilling work.
                        </p>
                        <p className={footerStyles['footer-copyright']}>
                            © 2025 OdenEwa. All rights reserved.
                        </p>
                    </div>
                    <div className={footerStyles['footer-links']}>
                        <div className={footerStyles['footer-column']}>
                            <h3>About Us</h3>
                            <Link
                                to="/about"
                                aria-label="Learn more about who we are"
                            >
                                Who We Are
                            </Link>
                        </div>
                        <div className={footerStyles['footer-column']}>
                            <h3>Our Programs</h3>
                            <Link
                                to="/programs"
                                aria-label="Learn about Ugep Scholarships"
                            >
                                Ugep Scholarships
                            </Link>
                        </div>
                        <div className={footerStyles['footer-column']}>
                            <h3>Support</h3>
                            <div className={footerStyles['support-links']}>
                                <Link
                                    to="/careers"
                                    aria-label="View career opportunities"
                                >
                                    Join Our Team
                                </Link>
                                <Link
                                    to="/volunteer"
                                    aria-label="Learn about volunteer opportunities"
                                >
                                    Become a Volunteer
                                </Link>
                                <Link to="/donate" aria-label="Make a donation">
                                    Donate
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Programs;
