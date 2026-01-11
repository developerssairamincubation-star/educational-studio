import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ setPage }) {
    const scrollToPhilosophy = () => {
        const philosophySection = document.getElementById('philosophy-section');
        if (philosophySection) {
            philosophySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.div
                    className="semester-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span>Educational Leader & Institution Builder</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Designing Future-Ready <br />
                    <span className="gradient-text">Learning Environments.</span>
                </motion.h1>

                <motion.p
                    className="hero-intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    An educational leader working at the intersection of <strong>education, innovation ecosystems, and inclusive leadership</strong>—committed 
                    to creating learning environments that empower students to think critically, collaborate meaningfully, 
                    and <strong>discover their potential to contribute to society</strong>.
                </motion.p>

                <motion.div
                    className="hero-focus-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="focus-title">My work focuses on:</p>
                    <ul>
                        <li>Designing <strong>future-ready learning environments</strong></li>
                        <li>Integrating <strong>technology with ethics and equity</strong></li>
                        <li>Supporting <strong>first-generation and diverse learners</strong></li>
                        <li>Building systems that connect <strong>learning, innovation, and social impact</strong></li>
                    </ul>
                </motion.div>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <button className="btn-primary" onClick={() => setPage && setPage('learning-studio')}>
                        <span>Explore the Studio</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="btn-secondary" onClick={scrollToPhilosophy}>
                        <span>Our Philosophy</span>
                    </button>
                </motion.div>
            </div>
            
            <motion.div
                className="hero-image-container"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="hero-image">
                    <img src="/images/CEO_Sir.jpg" alt="Dr. SaiPrakash LeoMuthu" />
                </div>
                <div className="hero-person-info">
                    <h3>Dr. SaiPrakash LeoMuthu</h3>
                    <p>Chairman & CEO</p>
                    <p className="institution">Sairam Institutions</p>
                </div>
            </motion.div>
        </section>
    );
}
