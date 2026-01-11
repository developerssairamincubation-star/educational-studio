import { motion } from 'framer-motion';
import './About.css';

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const focuses = [
    {
        icon: 'architecture',
        title: 'Future-Ready Environments',
        desc: 'Designing learning spaces that anticipate and adapt to the rapid evolution of digital tools and pedagogy.'
    },
    {
        icon: 'balance',
        title: 'Technology, Ethics & Equity',
        desc: 'Integrating advanced technology with a deep commitment to ethical frameworks and equitable access for all learners.'
    },
    {
        icon: 'diversity_3',
        title: 'Supporting Diverse Learners',
        desc: 'Advocating for first-generation and diverse students by providing inclusive systems and tailored mentorship.'
    },
    {
        icon: 'hub',
        title: 'Systems for Social Impact',
        desc: 'Building institutional architectures that connect learning and innovation directly to social progress and community impact.'
    }
];

export default function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    variants={variants}
                >
                    <div className="badge">Professional Philosophy</div>
                    <h2>Bridging Education & <br /><span className="gradient-text">Innovation Ecosystems</span></h2>
                    <p className="main-desc">
                        My professional journey has been shaped by a belief that education should do more than transmit knowledge—it should enable learners to discover their potential and contribute meaningfully to society.
                    </p>
                </motion.div>

                <div className="about-content-grid">
                    <motion.div
                        className="philosophy-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        variants={variants}
                    >
                        <h3>Inclusive Leadership</h3>
                        <p>
                            I work at the intersection of education, innovation ecosystems, and inclusive leadership. As an institution builder, I am committed to creating learning environments that empower students to think critically, collaborate meaningfully, and engage responsibly with technology.
                        </p>
                    </motion.div>

                    <div className="focus-grid">
                        {focuses.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="focus-card"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * idx }}
                                variants={variants}
                            >
                                <div className="focus-icon">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div className="focus-info">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
