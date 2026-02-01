import { motion } from 'framer-motion';
import './ISTEStandardsPage.css';

export default function ISTEStandardsPage() {
    const leaderInMeResults = [
        {
            category: 'LEADERSHIP',
            color: '#DC3545',
            items: [
                {
                    title: 'STUDENT LEADERSHIP',
                    description: 'Students develop the mindsets, behaviors and skills to be effective, lifelong leaders.'
                },
                {
                    title: 'STAFF LEADERSHIP',
                    description: 'Staff are provided with support to build their personal and professional capacity so they can confidently live, model, and teach life-ready leadership skills.'
                },
                {
                    title: 'FAMILY & COMMUNITY ENGAGEMENT',
                    description: 'Families and community organizations are valued school partners who support student development.'
                }
            ]
        },
        {
            category: 'CULTURE',
            color: '#28A745',
            items: [
                {
                    title: 'SUPPORTIVE ENVIRONMENT FOR STUDENTS',
                    description: 'School is a welcoming and supportive environment where students feel valued and actively engaged in leadership and decision making.'
                },
                {
                    title: 'SUPPORTIVE ENVIRONMENT FOR STAFF',
                    description: 'School is a supportive work environment, where staff members feel fulfilled, empowered, and confident in their ability to make a difference by working together.'
                }
            ]
        },
        {
            category: 'ACADEMICS',
            color: '#007BFF',
            items: [
                {
                    title: 'GOAL ACHIEVEMENT',
                    description: 'Students have the knowledge, opportunity, and support to set and achieve meaningful individual goals that are connected to larger schoolwide goals.'
                },
                {
                    title: 'EMPOWERED LEARNERS',
                    description: 'Students have the mindsets, skills, and supportive relationships they need to take ownership of their learning.'
                },
                {
                    title: 'EMPOWERING TEACHERS',
                    description: 'Teachers positively impact students\' academic growth by using evidence-based instructional practices that empower students to lead their own learning.'
                },
                {
                    title: 'LIFE-READINESS (SECONDARY)',
                    description: 'Students develop the skills and mindsets needed to succeed in college, career, and life.'
                }
            ]
        }
    ];

    const transformationalPrinciples = [
        {
            title: 'Nurture',
            icon: '🌱',
            color: '#E8A657',
            items: [
                {
                    subtitle: 'Cultivate Belonging',
                    description: 'Create learning cultures that ensure safety, belonging, and foster empathy, creativity, and collaboration.'
                },
                {
                    subtitle: 'Connect Learning to the Learner',
                    description: 'Hold high expectations and tailor instruction to meet individual needs through differentiation strategies.'
                },
                {
                    subtitle: 'Ensure Opportunity',
                    description: 'Celebrate unique experiences, strengths, and voices while reducing barriers to meaningful learning.'
                }
            ]
        },
        {
            title: 'Guide',
            icon: '🧭',
            color: '#7DC7C5',
            items: [
                {
                    subtitle: 'Spark Curiosity',
                    description: 'Connect content to prior knowledge, experiences, and passions to inspire engagement and expression.'
                },
                {
                    subtitle: 'Develop Expertise',
                    description: 'Use evidence-based practices around key concepts, multiple modes of inquiry, and intentional practice.'
                },
                {
                    subtitle: 'Elevate Reflection',
                    description: 'Provide timely feedback that encourages critical thinking and helps students monitor their own progress.'
                }
            ]
        },
        {
            title: 'Empower',
            icon: '🏛️',
            color: '#5BB2D9',
            items: [
                {
                    subtitle: 'Prioritize Authentic Experiences',
                    description: 'Create opportunities for real-world learning through performance-based projects and assessments.'
                },
                {
                    subtitle: 'Ignite Agency',
                    description: 'Encourage student agency through learner-led approaches and flexible learning formats for exploration.'
                }
            ]
        }
    ];

    const standards = [
        {
            id: 1,
            title: "Empowered Learner",
            emoji: "1️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEFKX-rKzeaCzcFGoSk7XNua",
            description: "Students leverage technology to take an active role in choosing, achieving and demonstrating competency in their learning goals, informed by the learning sciences.",
            learningContent: {
                whatThisMeans: "You take an active role in setting goals, managing learning, and reflecting on progress, using technology to support and improve your learning journey.",
                example: "A student selects a learning quest on Python, completes curated resources at their own pace, reflects on challenges faced, and documents learning growth using a reflection prompt.",
                whatItLooksLike: "• Choose a learning quest from this site\n• Watch a short video or read an article\n• Write a short reflection on what they learned\n• Identify one area they still want to improve"
            },
            subsections: [
                {
                    id: "1a",
                    title: "Learning Goals",
                    content: "Students connect their learning needs, strengths and interests to their goals and use technology to help achieve them and reflect on their progress.",
                    videoLink: true
                },
                {
                    id: "1b",
                    title: "Customized Learning Environments",
                    content: "Students build networks and customize their learning environments in ways that support the learning process.",
                    videoLink: true
                },
                {
                    id: "1c",
                    title: "Feedback to Improve Practice",
                    content: "Students use technology to seek feedback that informs and improves their practice and to demonstrate their learning in a variety of ways.",
                    videoLink: true
                },
                {
                    id: "1d",
                    title: "Technology Fundamentals",
                    content: "Students understand fundamental concepts of how technology works, demonstrate the ability to choose and use current technologies effectively, and are adept at thoughtfully exploring emerging technologies.",
                    videoLink: true
                }
            ]
        },
        {
            id: 2,
            title: "Digital Citizen",
            emoji: "2️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEEvj0Jo1vPupd8QgoAYgkoB",
            description: "Students recognize the responsibilities and opportunities for positively contributing to their digital communities.",
            learningContent: {
                whatThisMeans: "You recognize your rights and responsibilities in digital spaces and act in ways that are safe, ethical, legal, and respectful.",
                example: "A student engages in online discussions responsibly by communicating respectfully, protecting personal information, crediting sources properly, and considering others' perspectives—learning that digital citizenship is about ethical behavior, accountability, and respect, not just technology use.",
                whatItLooksLike: "• Understanding online privacy and data use\n• Practicing respectful communication\n• Using AI and digital tools responsibly"
            },
            subsections: [
                {
                    id: "2a",
                    title: "Digital Footprint",
                    content: "Students manage their digital identity and understand the lasting impact of their online behaviors on themselves and others and make safe, legal and ethical decisions in the digital world.",
                    videoLink: true
                },
                {
                    id: "2b",
                    title: "Online Interactions",
                    content: "Students demonstrate empathetic, inclusive interactions online and use technology to responsibly contribute to their communities.",
                    videoLink: true
                },
                {
                    id: "2c",
                    title: "Safeguard Well-being",
                    content: "Students safeguard their well-being by being intentional about what they do online and how much time they spend online.",
                    videoLink: true
                },
                {
                    id: "2d",
                    title: "Digital Privacy",
                    content: "Students take action to protect their digital privacy on devices and manage their personal data and security while online.",
                    videoLink: true
                }
            ]
        },
        {
            id: 3,
            title: "Knowledge Constructor",
            emoji: "3️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEFq4c68zLLPjnkjCSSFlCjo",
            description: "You critically curate information from digital sources, evaluate credibility, and use technology to build meaningful knowledge.",
            learningContent: {
                whatThisMeans: "You critically curate information from digital sources, evaluate credibility, and use technology to build meaningful knowledge. You don't just copy information from the internet—you evaluate it, connect ideas, and build your own understanding.",
                example: "A student explores open resources from the Learning Studio, evaluates their credibility, and creates a short summary connecting course concepts to real-world challenges.",
                whatItLooksLike: "• Finding reliable open educational resources\n• Comparing multiple viewpoints\n• Synthesizing information into your own understanding"
            },
            subsections: [
                {
                    id: "3a",
                    title: "Planning",
                    content: "Students plan and employ effective research strategies to locate information and other resources for their intellectual or creative pursuits.",
                    videoLink: true
                },
                {
                    id: "3b",
                    title: "Evaluating",
                    content: "Students evaluate the accuracy, perspective, credibility and relevance of information, media, data or other resources.",
                    videoLink: true
                },
                {
                    id: "3c",
                    title: "Curating",
                    content: "Students curate information from digital resources using a variety of tools and methods to create collections of artifacts that demonstrate meaningful connections or conclusions.",
                    videoLink: true
                },
                {
                    id: "3d",
                    title: "Building Knowledge",
                    content: "Students build knowledge by actively exploring real-world issues and problems, developing ideas and theories and pursuing answers and solutions.",
                    videoLink: true
                }
            ]
        },
        {
            id: 4,
            title: "Innovative Designer",
            emoji: "4️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEGNw8OUN-5Cc_dogE1Q4gqo",
            description: "Students use a variety of technologies within a design process to identify and solve problems by creating new, useful or imaginative solutions.",
            learningContent: {
                whatThisMeans: "Students use design thinking and technology to identify problems, explore solutions, and improve ideas through iteration and reflection. You identify real problems and think creatively about possible solutions, learning from mistakes and feedback.",
                example: "A student notices energy wastage and designs a low-cost automatic shut-off system for lights/equipment. They use design thinking, set constraints, create a basic prototype plan, test it with peers or simulation, and refine the design based on results and feedback.",
                whatItLooksLike: "• Defining a real-world problem\n• Designing solutions within real constraints (cost, safety, feasibility)\n• Building, testing, and improving prototypes through feedback"
            },
            subsections: [
                {
                    id: "4a",
                    title: "Problem Identification",
                    content: "Students know and use a deliberate design process for generating ideas, testing theories, creating innovative artifacts or solving authentic problems.",
                    videoLink: true
                },
                {
                    id: "4b",
                    title: "Constraints",
                    content: "Students select and use digital tools to plan and manage a design process that considers design constraints and calculated risks.",
                    videoLink: true
                },
                {
                    id: "4c",
                    title: "Prototyping",
                    content: "Students develop, test and refine prototypes as part of a cyclical design process.",
                    videoLink: true
                },
                {
                    id: "4d",
                    title: "Open-Ended Problems",
                    content: "Students exhibit a tolerance for ambiguity, perseverance and the capacity to work with open-ended problems.",
                    videoLink: true
                }
            ]
        },
        {
            id: 5,
            title: "Computational Thinker",
            emoji: "5️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEGd2tHcHi8TjRkkk6XL2W3G",
            description: "Students develop and employ strategies for understanding and solving problems in ways that leverage the power of technological methods.",
            learningContent: {
                whatThisMeans: "Students develop problem-solving skills by learning to break down problems into steps, recognize patterns, and think logically.",
                example: "A student uses a spreadsheet to analyze class survey or lab data, cleans the dataset, groups values, and creates simple charts to spot patterns. Based on the trends, they draw a clear, evidence-based conclusion and recommendation.",
                whatItLooksLike: "• Analyzing processes step by step\n• Using digital tools to model or organize ideas\n• Understanding how systems work"
            },
            subsections: [
                {
                    id: "5a",
                    title: "Problem Formulation",
                    content: "Students formulate problem definitions suited for technology-assisted methods such as data analysis, abstract models and algorithmic thinking.",
                    videoLink: true
                },
                {
                    id: "5b",
                    title: "Data Collection",
                    content: "Students collect data or identify relevant data sets, use digital tools to analyze them, and represent data in various ways.",
                    videoLink: true
                },
                {
                    id: "5c",
                    title: "Decomposition",
                    content: "Students break problems into component parts, extract key information, and develop descriptive models to understand complex systems.",
                    videoLink: true
                },
                {
                    id: "5d",
                    title: "Algorithms",
                    content: "Students understand how automation works and use algorithmic thinking to develop a sequence of steps to create and test automated solutions.",
                    videoLink: true
                }
            ]
        },
        {
            id: 6,
            title: "Creative Communicator",
            emoji: "6️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEGwvJdR-0FHjCAv1dbmlMRe",
            description: "Students communicate clearly and express themselves creatively for a variety of purposes using platforms, tools, styles, formats and digital media.",
            learningContent: {
                whatThisMeans: "Students express ideas clearly and creatively using digital tools and media appropriate to their audience and purpose.",
                example: "A student creates a short digital presentation or reflection post explaining how technology can support inclusive education, using visuals and clear language.",
                whatItLooksLike: "Instead of submitting only text, a student:\n• Creates a short slide, poster, or reflection post\n• Uses visuals and simple language\n• Explains an idea like \"technology for inclusion\""
            },
            subsections: [
                {
                    id: "6a",
                    title: "Platform Selection",
                    content: "Students choose the appropriate platforms and tools for meeting the desired objectives of their creation or communication.",
                    videoLink: true
                },
                {
                    id: "6b",
                    title: "Original Works",
                    content: "Students create original works or responsibly repurpose or remix digital resources into new creations.",
                    videoLink: true
                },
                {
                    id: "6c",
                    title: "Visual Communication",
                    content: "Students communicate complex ideas clearly and effectively by creating or using a variety of digital objects such as visualizations, models or simulations.",
                    videoLink: true
                },
                {
                    id: "6d",
                    title: "Audience Awareness",
                    content: "Students publish or present content that customizes the message and medium for their intended audiences.",
                    videoLink: true
                }
            ]
        },
        {
            id: 7,
            title: "Global Collaborator",
            emoji: "7️⃣",
            videoUrl: "https://www.youtube.com/playlist?list=PL6aVN_9hcQEEwL0CNYM-Pe_npg3DNUHMg",
            description: "Students use digital tools to broaden their perspectives and enrich their learning by collaborating with others locally and globally.",
            learningContent: {
                whatThisMeans: "Students work with others using digital tools to broaden perspectives, share ideas, and address real-world issues collaboratively. You learn with and from others, respecting different perspectives and working together using digital tools.",
                example: "Students engage in a Community Wall discussion, responding to peers' ideas and collaboratively reflecting on ethical challenges in technology use.",
                whatItLooksLike: "• Learning from diverse perspectives\n• Collaborating in online discussions\n• Respecting cultural and social differences"
            },
            subsections: [
                {
                    id: "7a",
                    title: "Global Connections",
                    content: "Students use digital tools to connect with learners from a variety of backgrounds and cultures, engaging with them in ways that broaden mutual understanding.",
                    videoLink: true
                },
                {
                    id: "7b",
                    title: "Collaboration",
                    content: "Students use collaborative technologies to work with others, including peers, experts or community members, to examine issues and problems from multiple viewpoints.",
                    videoLink: true
                },
                {
                    id: "7c",
                    title: "Local & Global Impact",
                    content: "Students contribute constructively to project teams, assuming various roles and responsibilities to work effectively toward a common goal.",
                    videoLink: true
                },
                {
                    id: "7d",
                    title: "Problem Solving",
                    content: "Students explore local and global issues and use collaborative technologies to work with others to investigate solutions.",
                    videoLink: true
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

            {/* Leader in Me Results Section */}
            <div className="leader-results-section">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="leader-results-header"
                >
                    <h2>Measurable Results Targeted by Leader in Me</h2>
                    <p>Building comprehensive student development across leadership, culture, and academics</p>
                </motion.div>

                <div className="leader-results-grid">
                    {leaderInMeResults.map((section, sectionIndex) => (
                        <div key={section.category} className="leader-category-section">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="category-header"
                                style={{ '--category-color': section.color }}
                            >
                                <h3>{section.category}</h3>
                            </motion.div>

                            <div className="leader-cards-container">
                                {section.items.map((item, itemIndex) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (itemIndex * 0.1) }}
                                        viewport={{ once: true }}
                                        className="flip-card"
                                    >
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front" style={{ '--card-color': section.color }}>
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="flip-card-back" style={{ '--card-color': section.color }}>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Transformational Learning Section */}
            <div className="transformational-learning-section">
                <div className="transformational-content">
                    <div className="transformational-cards">
                        {transformationalPrinciples.map((principle, index) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="transformational-flip-card"
                            >
                                <div className="transformational-flip-inner">
                                    <div className="transformational-flip-front" style={{ '--principle-color': principle.color }}>
                                        <span className="principle-icon-large">{principle.icon}</span>
                                        <h3>{principle.title}</h3>
                                    </div>
                                    <div className="transformational-flip-back" style={{ '--principle-color': principle.color }}>
                                        <div className="flip-back-content">
                                            {principle.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="principle-item-flip">
                                                    <strong>{item.subtitle}</strong> {item.description}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="transformational-image"
                    >
                        <img 
                            src="/images/tranforming_learning.png" 
                            alt="Transformational Learning Principles" 
                        />
                        <p className="image-caption">Transformational Learning Framework</p>
                    </motion.div>
                </div>
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
                                <span className="standard-number-badge">{standard.id}</span>
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

                            {standard.learningContent && (
                                <div className="learning-content">
                                    <div className="learning-section">
                                        <h4 className="learning-section-title">
                                            <span className="material-symbols-outlined">lightbulb</span>
                                            What This Means
                                        </h4>
                                        <p>{standard.learningContent.whatThisMeans}</p>
                                    </div>
                                    <div className="learning-section">
                                        <h4 className="learning-section-title">
                                            <span className="material-symbols-outlined">school</span>
                                            Example
                                        </h4>
                                        <p>{standard.learningContent.example}</p>
                                    </div>
                                    <div className="learning-section">
                                        <h4 className="learning-section-title">
                                            <span className="material-symbols-outlined">checklist</span>
                                            What It Looks Like for You
                                        </h4>
                                        <p style={{ whiteSpace: 'pre-line' }}>{standard.learningContent.whatItLooksLike}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <p className="standard-description">{standard.description}</p>

                        <a 
                            href="https://iste.org/standards/students" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="learn-more-link"
                        >
                            <span className="material-symbols-outlined">open_in_new</span>
                            Learn more on this topic
                        </a>

                        {index < standards.length - 1 && <div className="standard-divider"></div>}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
