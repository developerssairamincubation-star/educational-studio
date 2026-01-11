import { useState } from 'react';
import ChatWindow from './ChatWindow';
import AIGuidelines from './AIGuidelines';
import './Fab.css';

export default function Fab() {
    const [isOpen, setIsOpen] = useState(false);
    const [showGuidelines, setShowGuidelines] = useState(false);

    return (
        <>
            {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}

            <div className="fab-container">
                <button
                    className="fab-button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle AI Assistant"
                >
                    {isOpen ? (
                        <span className="material-symbols-outlined fab-icon">close</span>
                    ) : (
                        <span className="material-symbols-outlined fab-icon animate-pulse">smart_toy</span>
                    )}

                    {/* Tooltip only if closed */}
                    {!isOpen && (
                        <div className="fab-tooltip">
                            Ask AI Assistant
                        </div>
                    )}
                </button>
                <button
                    className="fab-guidelines-link"
                    onClick={() => setShowGuidelines(true)}
                >
                    AI Guidelines
                </button>
            </div>

            <AIGuidelines isOpen={showGuidelines} onClose={() => setShowGuidelines(false)} />
        </>
    );
}
