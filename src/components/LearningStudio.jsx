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
            { name: 'Python for Beginners', url: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3' },
            { name: 'Object Oriented Programming with Python', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc' },
            { name: 'Flutter Course for Beginners', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ' }
        ]
    },
    {
        id: 'machine-learning',
        title: 'Machine Learning',
        icon: 'psychology',
        color: '#FF6F00',
        description: 'Master AI and machine learning fundamentals',
        courses: [
            { name: 'Python for Beginners', url: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3' },
            { name: 'Object Oriented Programming with Python', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc' },
            { name: 'Neural Networks', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi' },
            { name: 'AI Fundamentals', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF' }
        ]
    },
    {
        id: 'app-dev-swift',
        title: 'App Development with Swift',
        icon: 'apple',
        color: '#FA7343',
        description: 'Create iOS and macOS applications',
        courses: [
            { name: 'Python for Beginners', url: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3' },
            { name: 'Object Oriented Programming with Python', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc' },
            { name: 'Swift Programming', url: 'https://www.youtube.com/playlist?list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW' }
        ]
    },
    {
        id: 'web-development',
        title: 'Web Development with JavaScript',
        icon: 'code',
        color: '#F7DF1E',
        description: 'Build modern websites and web applications',
        courses: [
            { name: 'HTML & CSS Full Course', url: 'https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB' },
            { name: 'CSS Projects', url: 'https://www.youtube.com/playlist?list=PLjwm_8O3suyOgDS_Z8AWbbq3zpCmR-WE9' },
            { name: 'JavaScript Tutorial', url: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4' },
            { name: 'Object-Oriented Programming in JavaScript', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7' }
        ]
    },
    {
        id: 'electronics',
        title: 'Electronics',
        icon: 'memory',
        color: '#00897B',
        description: 'Learn electronics and embedded systems',
        courses: [
            { name: 'Basic Electronics', url: 'https://www.youtube.com/playlist?list=PLwjK_iyK4LLCAN2tagNsLVXsyfg3gJsqZ' },
            { name: 'How to Use Multimeter Properly', url: 'https://www.youtube.com/watch?v=TdUK6RPdIrA' },
            { name: 'Arduino Course', url: 'https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP' },
            { name: 'MATLAB Onramp Learning', url: 'https://matlabacademy.mathworks.com/details/matlab-onramp/gettingstarted' }
        ]
    },
    {
        id: 'spatial-computing',
        title: 'Spatial Computing with Unity',
        icon: 'view_in_ar',
        color: '#000000',
        description: 'Create immersive AR/VR experiences',
        courses: [
            { name: 'C# Free Tutorial Course (Beginner to Advanced)', url: 'https://www.youtube.com/playlist?list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN' },
            { name: 'Unity Beginner Tutorials', url: 'https://www.youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6' }
        ]
    },
    {
        id: 'game-dev-unreal',
        title: 'Game Development with Unreal Engine',
        icon: 'sports_esports',
        color: '#313131',
        description: 'Build professional games with Unreal Engine 5',
        courses: [
            { name: 'Unreal Engine 5 Beginner Tutorial', url: 'https://www.youtube.com/playlist?list=PLncmXJdh4q89l3xk0w-xA97L_w7ZCvgF9' },
            { name: 'Blueprint for Beginners', url: 'https://www.youtube.com/playlist?list=PLZlv_N0_O1gY35ezlSQn1sWOGfh4C7ewO' },
            { name: 'Blueprint for Intermediate', url: 'https://www.youtube.com/playlist?list=PLZlv_N0_O1gbggHiwNP2JBXGeD2h12tbB' }
        ]
    },
    {
        id: 'mechanical-design',
        title: 'Mechanical Design',
        icon: 'precision_manufacturing',
        color: '#1565C0',
        description: 'Master CAD and mechanical engineering principles',
        courses: [
            { name: 'Engineering Basics', url: 'https://www.youtube.com/playlist?list=PLOahOE6DpL4r91oheXMj9qGJfsKTQHorj' },
            { name: 'Creo Tutorial', url: 'https://www.youtube.com/playlist?list=PLkMYhICFMsGajeARsY7N1t-YpHdKPF6m0' },
            { name: 'GD&T Explained (English Full Lessons)', url: 'https://www.youtube.com/playlist?list=PLqnl_qKVVb9Fq_MTlmH0vPd4bOBZ2-nPp' },
            { name: 'Learn GD&T through Tamil Full Course', url: 'https://www.youtube.com/playlist?list=PLqnl_qKVVb9Hj-1LcFk9lKs1X8o5oF0QM' }
        ]
    },
    {
        id: 'civil-design',
        title: 'Civil Design',
        icon: 'architecture',
        color: '#6D4C41',
        description: 'Learn architectural design and drafting tools',
        courses: [
            { name: 'AutoCAD - Complete Tutorial for Beginners', url: 'https://www.youtube.com/playlist?list=PLW8lH4tfQP-mbJnSswFV7iYXwV2qLJCmB' },
            { name: 'AutoCAD - Complete Tutorial for Intermediates', url: 'https://www.youtube.com/playlist?list=PLW8lH4tfQP-lZkFH7bQCMcT8YGzLLbI-K' },
            { name: 'Learn SketchUp', url: 'https://www.youtube.com/playlist?list=PLsE8sC4wp2My-w8eDTzdbEcxmX3HcmJPJ' }
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
                        Explore curated learning pathways across 9 domains. Each pathway is designed to take you 
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
