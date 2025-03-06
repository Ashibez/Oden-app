import styles from './About.module.css';
import footerStyles from '../pages/Home.module.css'; // Import footer styles
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.hero}>
                <h1>About Us</h1>
                <p>Building a Future of Opportunity and Innovation</p>
            </div>

            <section className={styles.mission}>
                <div className={styles.container}>
                    <h2>Our Mission</h2>
                    <p className={styles.missionText}>
                        The Oden Ewa Foundation is committed to transforming
                        lives through education and opportunity. We focus on
                        creating sustainable pathways for young people in Africa
                        and Indigenous communities in Canada, enabling them to
                        access quality education and build fulfilling careers.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <h3>1000+</h3>
                            <p>Students Supported</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>25+</h3>
                            <p>Partner Institutions</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>50+</h3>
                            <p>Community Programs</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.impact}>
                <div className={styles.container}>
                    <h2>Our Impact</h2>
                    <div className={styles.impactGrid}>
                        <div className={styles.impactCard}>
                            <h3>Education Access</h3>
                            <p>
                                Providing scholarships and educational support
                                to talented students who face financial
                                barriers, enabling them to pursue their academic
                                dreams.
                            </p>
                        </div>
                        <div className={styles.impactCard}>
                            <h3>Skills Development</h3>
                            <p>
                                Offering practical training and mentorship
                                programs that equip young people with the skills
                                needed in today's dynamic job market.
                            </p>
                        </div>
                        <div className={styles.impactCard}>
                            <h3>Community Building</h3>
                            <p>
                                Creating networks and partnerships that
                                strengthen communities and create sustainable
                                opportunities for growth and development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.approach}>
                <div className={styles.container}>
                    <h2>Our Approach</h2>
                    <div className={styles.approachContent}>
                        <div className={styles.approachText}>
                            <h3>Holistic Support</h3>
                            <p>
                                We believe in providing comprehensive support
                                that goes beyond financial assistance. Our
                                programs include mentorship, career guidance,
                                and personal development opportunities.
                            </p>
                            <h3>Sustainable Impact</h3>
                            <p>
                                Our initiatives are designed to create lasting
                                change by empowering individuals and communities
                                to build their own pathways to success.
                            </p>
                            <h3>Collaborative Partnerships</h3>
                            <p>
                                We work closely with educational institutions,
                                businesses, and community organizations to
                                create effective and sustainable programs.
                            </p>
                        </div>
                        <div className={styles.approachImage}>
                            <img
                                src="/boy g.png"
                                alt="Students collaborating in a learning environment"
                                className={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.join}>
                <div className={styles.container}>
                    <h2>Join Our Mission</h2>
                    <p>
                        Together, we can create meaningful change and build a
                        future where every young person has the opportunity to
                        reach their full potential.
                    </p>
                    <div className={styles.cta}>
                        <Link to="/volunteer" className={styles.ctaButton}>
                            Become a Volunteer
                        </Link>
                        <Link to="/donate" className={styles.ctaButton}>
                            Support Our Cause
                        </Link>
                    </div>
                </div>
            </section>

            <footer className={footerStyles.footer}>
                <div className={footerStyles['footer-content']}>
                    <div className={footerStyles['footer-left']}>
                        <img
                            src="/favi2.png"
                            alt="Oden Ewa Foundation"
                            className={footerStyles['footer-logo']}
                        />
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

export default About;
