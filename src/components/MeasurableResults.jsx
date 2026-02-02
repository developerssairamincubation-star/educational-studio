import { motion } from 'framer-motion';
import './MeasurableResults.css';

export default function MeasurableResults() {
    const resultsData = [
        {
            category: 'LEADERSHIP',
            color: '#DC3545',
            gradient: 'linear-gradient(135deg, #DC3545 0%, #C82333 100%)',
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
            gradient: 'linear-gradient(135deg, #28A745 0%, #218838 100%)',
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
            color: '#4A90E2',
            gradient: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
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

    return (
        <div className="measurable-results-page">
            <div className="results-hero">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="results-hero-content"
                >
                    <h1 className="results-main-title">Measurable Results Targeted by Leader in Me</h1>
                    <p className="results-subtitle">Building comprehensive student development across leadership, culture, and academics</p>
                </motion.div>
            </div>

            <div className="results-content">
                {resultsData.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        viewport={{ once: true }}
                        className="category-section"
                    >
                        <div className="category-badge" style={{ background: category.gradient }}>
                            <h2>{category.category}</h2>
                        </div>

                        <div className="cards-grid">
                            {category.items.map((item, itemIndex) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                                    viewport={{ once: true }}
                                    className="result-flip-card"
                                >
                                    <div className="result-card-inner">
                                        <div 
                                            className="result-card-front" 
                                            style={{ background: category.gradient }}
                                        >
                                            <div className="card-icon">
                                                <span className="material-symbols-outlined">
                                                    {category.category === 'LEADERSHIP' ? 'military_tech' : 
                                                     category.category === 'CULTURE' ? 'groups' : 'school'}
                                                </span>
                                            </div>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div 
                                            className="result-card-back"
                                            style={{ borderColor: category.color }}
                                        >
                                            <div className="card-back-header" style={{ color: category.color }}>
                                                {item.title}
                                            </div>
                                            <p>{item.description}</p>
                                            <div className="card-footer" style={{ color: category.color }}>
                                                <span className="material-symbols-outlined">arrow_forward</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
