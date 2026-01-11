import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
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
                    Empowering students to <br />
                    <span className="gradient-text">Think Critically.</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Committed to creating learning environments that foster collaboration
                    and responsible engagement with emerging technology.
                </motion.h2>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <button className="btn-primary">
                        <span>Explore the Studio</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="btn-secondary">
                        <span>Our Philosophy</span>
                    </button>
                </motion.div>
            </div>
            
            <motion.div
                className="hero-image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <img src="/images/CEO_Sir.jpg" alt="Educational Leader" />
            </motion.div>
        </section>
    );
}
