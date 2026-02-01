import { motion } from 'framer-motion';
import './LearningStudio.css';

const domains = [
    {
        id: 'app-dev-flutter',
        title: 'App Development with Flutter',
        icon: 'phone_android',
        color: '#02569B',
        description: 'Build beautiful cross-platform mobile apps',
        courses: [
            { name: 'Python for Beginners', url: 'https://www.youtube.com/playlist?list=PLzqzXq9nHy6RtapfHMogW_Y50Ls7Djp7T' },
            { name: 'Object Oriented Programming with Python', url: 'https://youtu.be/Ej_02ICOIgs?si=lxDqzBLdsxanexRc' },
            { name: 'Flutter Course for Beginners', url: 'https://youtu.be/VPvVD8t02U8?si=OgrDZU1gmxcvvQaF' }
        ]
    },
    {
        id: 'machine-learning',
        title: 'Machine Learning',
        icon: 'psychology',
        color: '#FF6F00',
        description: 'Master AI and machine learning fundamentals',
        courses: [
            { name: 'Python for Beginners', url: 'https://youtu.be/ix9cRaBkVe0?si=gssnytsDzs3oKs8c' },
            { name: 'Object Oriented Programming with Python', url: 'https://youtu.be/Ej_02ICOIgs?si=lxDqzBLdsxanexRc' },
            { name: 'AI Fundamentals', url: 'https://youtube.com/playlist?list=PLOspHqNVtKADfxkuDuHduUkDExBpEt3DF&si=6SC9i92S3ZJ9rFga' },
            { name: 'Neural Networks', url: 'https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&si=YZovJpTl74lwFX8_' }
        ]
    },
    {
        id: 'app-dev-swift',
        title: 'App Development with Swift',
        icon: 'apple',
        color: '#FA7343',
        description: 'Create iOS and macOS applications',
        courses: [
            { name: 'Python for Beginners', url: 'https://www.youtube.com/playlist?list=PLzqzXq9nHy6RtapfHMogW_Y50Ls7Djp7T' },
            { name: 'Object Oriented Programming with Python', url: 'https://youtu.be/Ej_02ICOIgs?si=lxDqzBLdsxanexRc' },
            { name: 'Swift', url: 'https://www.youtube.com/watch?v=8Xg7E9shq0U&ab_channel=freeCodeCamp.org' }
        ]
    },
    {
        id: 'web-development',
        title: 'Web Development with JavaScript',
        icon: 'code',
        color: '#F7DF1E',
        description: 'Build modern websites and web applications',
        courses: [
            { name: 'HTML & CSS Full Course', url: 'https://youtu.be/G3e-cpL7ofc?si=VWHz-PnSmNX35-gD' },
            { name: 'CSS Projects', url: 'https://youtu.be/TzuWIHGFKCQ?si=BTy3XWed3eaqz6ir' },
            { name: 'JavaScript Tutorial', url: 'https://www.youtube.com/watch?v=EerdGm-ehJQ' },
            { name: 'Object-Oriented Programming in JavaScript', url: 'https://youtu.be/JEmHMZ2Q4oU?si=Ieq9kEve_LdDTVIn' }
        ]
    },
    {
        id: 'electronics',
        title: 'Electronics',
        icon: 'memory',
        color: '#00897B',
        description: 'Learn electronics and embedded systems',
        courses: [
            { name: 'Basic Electronics', url: 'https://youtube.com/playlist?list=PLWv9VM947MKi_7yJ0_FCfzTBXpQU-Qd3K&si=iT9V9_aK6ReI4WaC' },
            { name: 'How to Use Multimeter Properly?', url: 'https://youtu.be/MRm7--DwOPU?si=1IHWMtBpXNDBmy78' },
            { name: 'Arduino Course', url: 'https://youtu.be/DPqiIzK97K0?si=2g5bk-iNRdWFegU9' },
            { name: 'MATLAB Onramp Learning', url: 'https://docs.google.com/document/d/1P5lj-sk0vViQcOQhuq8XbDgR6UragAfe2UgE9ISY47U/edit?usp=sharing' }
        ]
    },
    {
        id: 'mechanical-design',
        title: 'Mechanical Design',
        icon: 'precision_manufacturing',
        color: '#1565C0',
        description: 'Master CAD and mechanical engineering principles',
        courses: [
            { name: 'Engineering Basics', url: 'https://youtube.com/playlist?list=PLvgvBzfbOtFsBS3xELO8dAnYn9s35zFGz&si=to8fzmMKclifgCkK' },
            { name: 'Creo Tutorial', url: 'https://youtu.be/hhJPfN_0qiI?si=TyJB3OynvMReulf_' },
            { name: 'Learn GD&T through Tamil Full Course', url: 'https://youtu.be/d3f50gqJRxY?si=c0etQ9h7L9Ja4LPU' },
            { name: 'GD&T Explained (English Full Lessons)', url: 'https://youtube.com/playlist?list=PLKaojPU8IOnHU75NcH7Muq7K92rTNekXI&si=jhrjP4gY4tiozjxq' }
        ]
    },
    {
        id: 'civil-design',
        title: 'Civil Design',
        icon: 'architecture',
        color: '#6D4C41',
        description: 'Learn architectural design and drafting tools',
        courses: [
            { name: 'AutoCAD - Complete Tutorial for Beginners', url: 'https://youtu.be/pvKVy-eMDYc?si=LlCsfLScZdlF79no' },
            { name: 'AutoCAD - Complete Tutorial for Intermediates', url: 'https://youtu.be/Ra3pPzGxKHI?si=X7O6ZQ435bMO_GZn' },
            { name: 'Learn SketchUp', url: 'https://youtube.com/playlist?list=PLEQT0qjXe6zgCl0ITWmUg5OuG7Zjzf38F&si=MCGH6fpszasTXk3y' }
        ]
    }
];

export default function LearningStudio({ onSelectDomain }) {
    return (
        <div className="learning-studio-page">
            <div className="learning-studio-hero">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="learning-studio-hero-content"
                >
                    <h1>Learning Studio</h1>
                    <p className="learning-studio-subtitle">Open Educational Resources for Self-Learning</p>
                    <p className="learning-studio-intro">
                        Explore curated learning pathways across 7 domains. Each pathway is designed to take you 
                        from beginner to proficient with carefully selected open educational resources.
                    </p>
                </motion.div>
            </div>

            <div className="learning-studio-content">
                <div className="domains-grid">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={domain.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="domain-card"
                            onClick={() => onSelectDomain(domain)}
                            style={{ '--domain-color': domain.color }}
                        >
                            <div className="domain-icon-wrapper">
                                <span className="material-symbols-outlined domain-icon">{domain.icon}</span>
                            </div>
                            <h3 className="domain-title">{domain.title}</h3>
                            <p className="domain-description">{domain.description}</p>
                            <div className="domain-courses-count">
                                <span className="material-symbols-outlined">menu_book</span>
                                {domain.courses.length} courses
                            </div>
                            <div className="domain-arrow">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { domains };
