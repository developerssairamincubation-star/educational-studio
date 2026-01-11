import { motion } from 'framer-motion';
import './Why.css';

const features = [
    {
        icon: 'school',
        title: 'ISTE Learning Modules',
        desc: 'Real-world examples aligned with ISTE Standards'
    },
    {
        icon: 'sports_esports',
        title: 'Learning Quests',
        desc: 'Gamified challenges and reflections'
    },
    {
        icon: 'groups',
        title: 'Social Learning',
        desc: 'Collaborate and share with peers'
    },
    {
        icon: 'view_in_ar',
        title: 'XR Explorations',
        desc: 'Introductory AR/VR experiences'
    },
    {
        icon: 'smart_toy',
        title: 'AI Chatbot',
        desc: 'Ethical and transparent AI assistance'
    },
    {
        icon: 'menu_book',
        title: 'Learning Studio',
        desc: 'Free, openly licensed materials'
    }
];

export default function Why() {
    return (
        <section className="why-section">
            <div className="why-container">
                <motion.div
                    className="why-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="why-badge">Why This Space Exists</div>
                    <h2>
                        A Guided Learning Environment<br />
                        <span className="gradient-text">Aligned with ISTE Standards</span>
                    </h2>
                    <p className="why-description">
                        This platform provides students with accessible, supportive resources 
                        for digital learning and responsible technology engagement.
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="feature-icon">
                                <span className="material-symbols-outlined">{feature.icon}</span>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
