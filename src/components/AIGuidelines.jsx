import { motion, AnimatePresence } from 'framer-motion';
import './AIGuidelines.css';

export default function AIGuidelines({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="ai-guidelines-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="ai-guidelines-modal"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="ai-guidelines-close" onClick={onClose}>
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <div className="ai-guidelines-header">
                        <span className="material-symbols-outlined ai-icon">smart_toy</span>
                        <h2>AI Use Guidelines</h2>
                    </div>

                    <p className="ai-guidelines-intro">
                        This learning space encourages thoughtful AI use that enhances understanding, 
                        creativity, and critical thinking without replacing human effort or academic integrity.
                    </p>

                    <div className="ai-guidelines-section acceptable">
                        <h3>
                            <span className="section-icon">✅</span>
                            Acceptable Uses of AI
                        </h3>
                        <p>Students may use AI tools to:</p>
                        <ul>
                            <li>Brainstorm ideas or explore multiple perspectives</li>
                            <li>Clarify concepts they find confusing</li>
                            <li>Improve grammar, structure, or readability of their own writing</li>
                            <li>Generate practice questions or study aids</li>
                            <li>Support reflection and learning planning</li>
                        </ul>
                        <p className="section-note">
                            AI should be used as a learning assistant, not as a substitute for thinking, creativity, or effort.
                        </p>
                    </div>

                    <div className="ai-guidelines-section unacceptable">
                        <h3>
                            <span className="section-icon">❌</span>
                            Unacceptable Uses of AI
                        </h3>
                        <p>Students should not use AI to:</p>
                        <ul>
                            <li>Copy AI outputs directly without understanding or revision</li>
                            <li>Bypass learning objectives</li>
                            <li>Generate misleading, biased, or harmful content</li>
                        </ul>
                        <p className="section-note">
                            Using AI in these ways undermines both learning and academic integrity.
                        </p>
                    </div>

                    <p className="ai-guidelines-footer">
                        Students are encouraged to view AI as a tool for learning growth, not shortcut-taking.
                    </p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
