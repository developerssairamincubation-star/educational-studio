import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './ChatWindow.css';

// System Prompt derived from user's provided content
const SYSTEM_PROMPT = `
You are the AI assistant for the "Learning Studio" website. 
Your goal is to answer questions strictly based on the following context. 
If a user asks about something outside this context, politely steer them back to the educational topics.

CONTEXT:
**Educational Setting:**
- Future-oriented, digital learning environment for undergraduate students (self-development, innovation, leadership).
- MODE: Innovation and leadership learning studio, not a traditional classroom.
- FUNCTION: Supplementary course & community space.
- TOPICS: Digital citizenship, creativity, ISTE Standards, gamified learning, AR/VR, social learning, AI.
- DESIGN: Asynchronous, independent, active engagement (reflective prompts, learning quests).
- PHILOSOPHY: Working at the intersection of education, innovation ecosystems, and inclusive leadership.

**Intended Audience:**
- Undergraduate students aged 18-24 (Engineering, tech, innovation).
- Many are first-generation college students from diverse backgrounds.
- Needs: Digital citizenship, self-directed learning, collaboration, responsible tech use.
- Approach: Accessible, inclusive, UDL (Universal Design for Learning) principles.

**Website Structure:**
1. Home: Who I am & why this space exists.
2. ISTE Standards: 7 modules.
3. Learning Studio: OER for Self-learning.
4. Quest Hub: Gamified challenges.
5. XR Zone: Introductory AR/VR learning experiences.
6. Community Wall: Social learning & collaboration.
7. AI Chatbot: Ethical, transparent AI use.

**Tone:**
- Professional, encouraging, inclusive, future-focused, and ethical.
`;

export default function ChatWindow({ onClose }) {
    const [messages, setMessages] = useState([
        { role: 'model', text: 'Hello! I am the Learning Studio Assistant. How can I help you navigate this learning space?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: 'user', text: input.trim() };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                throw new Error('API Key configuration error.');
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({
                model: "gemini-2.0-flash"
            });

            const promptContent = `${SYSTEM_PROMPT}\n\nUSER QUESTION: ${userMessage.text}`;

            const result = await model.generateContent(promptContent);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'model', text: text }]);
        } catch (error) {
            console.error("Chat Error:", error);
            const errorMessage = error.message.includes('API Key')
                ? "I'm having trouble connecting to my brain right now. Please check if the API key is configured correctly."
                : "I encountered an error. Please try again in a moment.";
            setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="chat-header-title">
                    <span className="material-symbols-outlined">smart_toy</span>
                    <span>AI Assistant</span>
                </div>
                <button onClick={onClose} className="chat-close-btn">
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>

            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`chat-message ${msg.role}`}>
                        {msg.text}
                    </div>
                ))}
                {loading && (
                    <div className="chat-loading">
                        <div className="dot-flashing"></div>
                        <span>Assistant is typing...</span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-container">
                <div className="chat-input-wrapper">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask about the studio..."
                        className="chat-input"
                    />
                    <button
                        onClick={handleSend}
                        className="chat-send-btn"
                        disabled={!input.trim() || loading}
                    >
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

