import { motion } from 'framer-motion';
import './ComingSoon.css';

export default function ComingSoon({ pageName }) {
    return (
        <div className="coming-soon-page">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="coming-soon-content"
            >
                <motion.span 
                    className="coming-soon-icon material-symbols-outlined"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                    construction
                </motion.span>
                <h1 className="coming-soon-title">Coming Soon</h1>
                <p className="coming-soon-subtitle">{pageName}</p>
                <p className="coming-soon-description">
                    We're working hard to bring you something amazing. Stay tuned!
                </p>
                <motion.div 
                    className="coming-soon-dots"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.span
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.span
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.span
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
