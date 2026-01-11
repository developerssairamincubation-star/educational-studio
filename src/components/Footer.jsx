import { useState } from 'react';
import AIGuidelines from './AIGuidelines';
import './Footer.css';

export default function Footer() {
    const [showAIGuidelines, setShowAIGuidelines] = useState(false);

    return (
        <>
            <footer className="footer-section">
                <div className="footer-container">

                    <div className="footer-top">
                        <div className="footer-intro">
                            <div className="footer-brand">
                                <span className="material-symbols-outlined">school</span>
                                <span className="brand-name">Learning Studio</span>
                            </div>
                            <p>Empowering the next generation of digital leaders through ethical innovation and immersive learning.</p>
                        </div>

                        <div className="footer-links-group">
                            <div className="footer-column">
                                <h4>Platform</h4>
                                <a href="#">Learning Studio</a>
                                <a href="#">Quest Hub</a>
                                <a href="#">XR Zone</a>
                            </div>
                            <div className="footer-column">
                                <h4>Resources</h4>
                                <a href="#">ISTE Standards</a>
                                <a href="#" onClick={(e) => { e.preventDefault(); setShowAIGuidelines(true); }}>AI Use Guidelines</a>
                                <a href="#">Accessibility</a>
                            </div>
                            <div className="footer-column">
                                <h4>Connect</h4>
                                <a href="#">Community Wall</a>
                                <a href="#">Twitter / X</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2026 Learning Studio. All rights reserved.</p>
                        <div className="footer-legal">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>

                </div>
            </footer>

            <AIGuidelines isOpen={showAIGuidelines} onClose={() => setShowAIGuidelines(false)} />
        </>
    );
}
