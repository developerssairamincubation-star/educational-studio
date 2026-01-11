import { useState } from 'react';
import { motion } from 'framer-motion';
import './ISTEStandardsPage.css';

export default function ISTEStandardsPage() {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const standards = [
        {
            id: 1,
            title: "Empowered Learner",
            emoji: "1️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEFKX-rKzeaCzcFGoSk7XNua",
            description: "You take an active role in setting goals, managing learning, and reflecting on progress, using technology to support and improve your learning journey.",
            subsections: [
                {
                    id: "1a",
                    title: "What This Means",
                    content: "You take an active role in setting goals, managing learning, and reflecting on progress, using technology to support and improve your learning journey."
                },
                {
                    id: "1b",
                    title: "Example",
                    content: "A student selects a learning quest on Python, completes curated resources at their own pace, reflects on challenges faced, and documents learning growth using a reflection prompt."
                },
                {
                    id: "1c",
                    title: "What It Looks Like for You",
                    content: "• Choose a learning quest from this site\n• Watch a short video or read an article\n• Write a short reflection on what they learned\n• Identify one area they still want to improve"
                }
            ]
        },
        {
            id: 2,
            title: "Digital Citizen",
            emoji: "2️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEEvj0Jo1vPupd8QgoAYgkoB",
            description: "You recognize your rights and responsibilities in digital spaces and act in ways that are safe, ethical, legal, and respectful.",
            subsections: [
                {
                    id: "2a",
                    title: "What This Means",
                    content: "You recognize your rights and responsibilities in digital spaces and act in ways that are safe, ethical, legal, and respectful."
                },
                {
                    id: "2b",
                    title: "Example",
                    content: "A student engages in online discussions responsibly by communicating respectfully, protecting personal information, crediting sources properly, and considering others' perspectives—learning that digital citizenship is about ethical behavior, accountability, and respect, not just technology use."
                },
                {
                    id: "2c",
                    title: "What It Looks Like for You",
                    content: "• Understanding online privacy and data use\n• Practicing respectful communication\n• Using AI and digital tools responsibly"
                }
            ]
        },
        {
            id: 3,
            title: "Knowledge Constructor",
            emoji: "3️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEFq4c68zLLPjnkjCSSFlCjo",
            description: "You critically curate information from digital sources, evaluate credibility, and use technology to build meaningful knowledge. You don't just copy information from the internet—you evaluate it, connect ideas, and build your own understanding.",
            subsections: [
                {
                    id: "3a",
                    title: "What This Means",
                    content: "You critically curate information from digital sources, evaluate credibility, and use technology to build meaningful knowledge. You don't just copy information from the internet—you evaluate it, connect ideas, and build your own understanding."
                },
                {
                    id: "3b",
                    title: "Example",
                    content: "A student explores open resources from the Learning Studio, evaluates their credibility, and creates a short summary connecting course concepts to real-world challenges."
                },
                {
                    id: "3c",
                    title: "What It Looks Like for You",
                    content: "• Finding reliable open educational resources\n• Comparing multiple viewpoints\n• Synthesizing information into your own understanding"
                }
            ]
        },
        {
            id: 4,
            title: "Innovative Designer",
            emoji: "4️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEGNw8OUN-5Cc_dogE1Q4gqo",
            description: "Students use design thinking and technology to identify problems, explore solutions, and improve ideas through iteration and reflection. You identify real problems and think creatively about possible solutions, learning from mistakes and feedback.",
            subsections: [
                {
                    id: "4a",
                    title: "What This Means",
                    content: "Students use design thinking and technology to identify problems, explore solutions, and improve ideas through iteration and reflection. You identify real problems and think creatively about possible solutions, learning from mistakes and feedback."
                },
                {
                    id: "4b",
                    title: "Example",
                    content: "A student notices energy wastage and designs a low-cost automatic shut-off system for lights/equipment. They use design thinking, set constraints, create a basic prototype plan, test it with peers or simulation, and refine the design based on results and feedback."
                },
                {
                    id: "4c",
                    title: "What It Looks Like for You",
                    content: "• Defining a real-world problem\n• Designing solutions within real constraints (cost, safety, feasibility)\n• Building, testing, and improving prototypes through feedback"
                }
            ]
        },
        {
            id: 5,
            title: "Computational Thinker",
            emoji: "5️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEGd2tHcHi8TjRkkk6XL2W3G",
            description: "Students develop problem-solving skills by learning to break down problems into steps, recognize patterns, and think logically.",
            subsections: [
                {
                    id: "5a",
                    title: "What This Means",
                    content: "Students develop problem-solving skills by learning to break down problems into steps, recognize patterns, and think logically."
                },
                {
                    id: "5b",
                    title: "Example",
                    content: "A student uses a spreadsheet to analyze class survey or lab data, cleans the dataset, groups values, and creates simple charts to spot patterns. Based on the trends, they draw a clear, evidence-based conclusion and recommendation."
                },
                {
                    id: "5c",
                    title: "What It Looks Like for You",
                    content: "• Analyzing processes step by step\n• Using digital tools to model or organize ideas\n• Understanding how systems work"
                }
            ]
        },
        {
            id: 6,
            title: "Creative Communicator",
            emoji: "6️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEGwvJdR-0FHjCAv1dbmlMRe",
            description: "Students express ideas clearly and creatively using digital tools and media appropriate to their audience and purpose.",
            subsections: [
                {
                    id: "6a",
                    title: "What This Means",
                    content: "Students express ideas clearly and creatively using digital tools and media appropriate to their audience and purpose."
                },
                {
                    id: "6b",
                    title: "Example",
                    content: "A student creates a short digital presentation or reflection post explaining how technology can support inclusive education, using visuals and clear language."
                },
                {
                    id: "6c",
                    title: "What It Looks Like for You",
                    content: "Instead of submitting only text, a student:\n• Creates a short slide, poster, or reflection post\n• Uses visuals and simple language\n• Explains an idea like \"technology for inclusion\""
                }
            ]
        },
        {
            id: 7,
            title: "Global Collaborator",
            emoji: "7️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEEwL0CNYM-Pe_npg3DNUHMg",
            description: "Students work with others using digital tools to broaden perspectives, share ideas, and address real-world issues collaboratively. You learn with and from others, respecting different perspectives and working together using digital tools.",
            subsections: [
                {
                    id: "7a",
                    title: "What This Means",
                    content: "Students work with others using digital tools to broaden perspectives, share ideas, and address real-world issues collaboratively. You learn with and from others, respecting different perspectives and working together using digital tools."
                },
                {
                    id: "7b",
                    title: "Example",
                    content: "Students engage in a Community Wall discussion, responding to peers' ideas and collaboratively reflecting on ethical challenges in technology use."
                },
                {
                    id: "7c",
                    title: "What It Looks Like for You",
                    content: "• Learning from diverse perspectives\n• Collaborating in online discussions\n• Respecting cultural and social differences"
                }
            ]
        }
    ];

    return (
        <div className="iste-standards-page">
            <div className="iste-hero">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="iste-hero-content"
                >
                    <h1>ISTE Standards for Students</h1>
                    <p className="iste-subtitle">Learning to Thrive in a Digital World</p>
                    <p className="iste-intro">
                        Today's students must be prepared to thrive in an evolving technological landscape. 
                        The student section of the ISTE Standards is designed to empower student voice and 
                        ensure that learning is a student-driven process.
                    </p>
                </motion.div>
            </div>

            <div className="iste-content">
                {standards.map((standard, index) => (
                    <motion.div
                        key={standard.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="standard-section"
                    >
                        <div className="standard-header">
                            <div className="standard-title-wrapper">
                                <span className="standard-emoji">{standard.emoji}</span>
                                <h2 className="standard-title">{standard.title}</h2>
                            </div>
                        </div>

                        <div className="standard-body">
                            <div className="standard-video-container">
                                <iframe
                                    src={`https://www.youtube.com/embed/videoseries?list=${standard.videoUrl.split('list=')[1]}`}
                                    title={`${standard.title} Playlist`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="youtube-embed"
                                ></iframe>
                            </div>

                            <div className="standard-subsections">
                                {standard.subsections.map((subsection) => (
                                    <div key={subsection.id} className="subsection">
                                        <button
                                            className={`subsection-toggle ${expandedSections[`${standard.id}-${subsection.id}`] ? 'expanded' : ''}`}
                                            onClick={() => toggleSection(`${standard.id}-${subsection.id}`)}
                                        >
                                            <span className="material-symbols-outlined">
                                                {expandedSections[`${standard.id}-${subsection.id}`] ? 'expand_less' : 'expand_more'}
                                            </span>
                                            <span className="subsection-id">{standard.id}.{subsection.id.slice(-1)}</span>
                                            <span className="subsection-title">{subsection.title}</span>
                                        </button>
                                        
                                        {expandedSections[`${standard.id}-${subsection.id}`] && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="subsection-content"
                                            >
                                                <p style={{ whiteSpace: 'pre-line' }}>{subsection.content}</p>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="standard-description">{standard.description}</p>

                        {index < standards.length - 1 && <div className="standard-divider"></div>}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
