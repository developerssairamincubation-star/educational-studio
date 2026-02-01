import { useState } from 'react';
import AIGuidelines from './AIGuidelines';
import './Footer.css';

export default function Footer({ setPage }) {
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
                                <a href="#" onClick={(e) => { e.preventDefault(); setPage('community'); }}>Community Wall</a>
                                <a href="https://x.com/SairamInstitute" target="_blank" rel="noopener noreferrer">Twitter / X</a>
                                <a href="https://www.linkedin.com/company/sairaminstitutions/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </div>
                            <div className="footer-column">
                                <h4>Contact Us</h4>
                                <p className="contact-name">Dr. Sai Prakash Leo Muthu</p>
                                <a href="tel:7845127111">
                                    <span className="material-symbols-outlined">phone</span>
                                    7845127111
                                </a>
                                <a href="mailto:ceo@sairam.edu.in">
                                    <span className="material-symbols-outlined">email</span>
                                    ceo@sairam.edu.in
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2026 Learning Studio. All rights reserved to Sairam EOMS.</p>
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
