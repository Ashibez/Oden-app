import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.heroSection}>
                <h1 className={styles.mainTitle}>
                    <span className={styles.thin}>THE</span> ODEN EWA
                    <br />
                    FOUNDATION
                </h1>
                <div className={styles.heroText}>
                    <p>
                        The Oden Ewa Foundation works with visionary
                        organizations to enable young people in Africa and in
                        Indigenous communities in Canada to access dignified and
                        fulfilling work.
                    </p>
                    <p>
                        We want a world where young people are included and are
                        thriving and their leadership and contributions matter.
                    </p>
                    <p>
                        A future where young people are driving transformative
                        change and achieving their full potential.
                    </p>
                    <p>
                        We bring together the private sector, donors, young
                        people, and civil society – to create effective systems
                        and infrastructures, supportive policies, and an
                        environment where young people can find work and
                        entrepreneurs and small enterprises can succeed and
                        grow.
                    </p>
                </div>
            </div>

            <div className={styles['who-we-are-section']}>
                <img
                    src="/frame-28.png"
                    alt="Decorative frame"
                    className={styles['decorative-frame']}
                    aria-hidden="true"
                />
                <h2 className={styles['section-title']}>Who We Are</h2>
                <div className={styles['who-we-are-content']}>
                    <div className={styles['image-container']}>
                        <img
                            src="/group-female.png"
                            alt="Group of females"
                            className={styles['section-image']}
                        />
                    </div>
                    <div className={styles['section-text']}>
                        <p>
                            Bringing{' '}
                            <span className={styles.highlight}>
                                Hope, Faith and Passion
                            </span>{' '}
                            back to the Community
                        </p>
                        <p>
                            We bring together the{' '}
                            <span className={styles.highlight}>
                                private sector, donors, young people, and civil
                                society
                            </span>{' '}
                            – to create effective systems and infrastructures,
                            supportive policies, and an environment where young
                            people can find work and entrepreneurs and small
                            enterprises can succeed and grow.
                        </p>
                    </div>
                </div>
            </div>

            <h2
                className={`${styles['section-title']} ${styles['initiative-title']}`}
            >
                Our Initiative
            </h2>
            <div className={styles['initiative-section']}>
                <p className={styles['initiative-subtitle']}>
                    <span className={styles['thin-bold']}>The</span>{' '}
                    <span className={styles.highlight}>
                        ODEN EWA Foundation Scholarship
                    </span>{' '}
                    <span className={styles['thin-bold']}>
                        Program for Undergraduates
                    </span>
                </p>

                <div className={styles['initiative-content']}>
                    <div className={styles['initiative-text']}>
                        <div className={styles['initiative-text-content']}>
                            <p>
                                <span className={styles.highlight}>
                                    150 Scholarship Slots
                                </span>{' '}
                                Available at{' '}
                                <span className={styles.highlight}>
                                    Federal Polytechnic Ugep.
                                </span>
                            </p>
                            <p>
                                We bring together the{' '}
                                <span className={styles.highlight}>
                                    private sector, donors, young people, and
                                    civil society
                                </span>{' '}
                                – to create effective systems and
                                infrastructures, supportive policies, and an
                                environment where young people can find work and
                                entrepreneurs and small enterprises can succeed
                                and grow.
                            </p>
                            <p className={styles.deadline}>
                                <span className={styles.highlight}>
                                    Deadline: February 28th, 2025
                                </span>
                            </p>
                        </div>
                        <div className={styles['button-container']}>
                            <Link
                                to="/apply"
                                className={styles['apply-button']}
                                aria-label="Apply for scholarship"
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
                    <div className={styles['initiative-image']}>
                        <img src="/schola.png" alt="Scholarship Program" />
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles['footer-content']}>
                    <div className={styles['footer-left']}>
                        <img
                            src="/foot-logo.png"
                            alt="Oden Ewa Foundation"
                            className={styles['footer-logo']}
                        />
                        <p className={styles['footer-text']}>
                            The Oden Ewa Foundation works with visionary
                            organizations to enable young people in Africa and
                            in Indigenous communities in Canada to access
                            dignified and fulfilling work.
                        </p>
                        <p className={styles['footer-copyright']}>
                            © 2025 OdenEwa. All rights reserved.
                        </p>
                    </div>
                    <div className={styles['footer-links']}>
                        <div className={styles['footer-column']}>
                            <h3>About Us</h3>
                            <Link
                                to="/about"
                                aria-label="Learn more about who we are"
                            >
                                Who We Are
                            </Link>
                        </div>
                        <div className={styles['footer-column']}>
                            <h3>Our Programs</h3>
                            <Link
                                to="/programs"
                                aria-label="Learn about Ugep Scholarships"
                            >
                                Ugep Scholarships
                            </Link>
                        </div>
                        <div className={styles['footer-column']}>
                            <h3>Support</h3>
                            <div className={styles['support-links']}>
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

export default Home;
