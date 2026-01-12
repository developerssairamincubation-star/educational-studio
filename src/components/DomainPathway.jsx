import { motion } from 'framer-motion';
import './DomainPathway.css';

// Function to extract YouTube video/playlist ID and generate thumbnail
const getYouTubeThumbnail = (url) => {
    // Handle playlist URLs
    const playlistMatch = url.match(/[?&]list=([^&]+)/);
    if (playlistMatch) {
        // For playlists, try to get video ID as well, or use a default playlist thumbnail
        const videoMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^?&]+)/);
        if (videoMatch) {
            return `https://img.youtube.com/vi/${videoMatch[1]}/mqdefault.jpg`;
        }
        // If no video ID, return a generic thumbnail placeholder
        return null;
    }
    
    // Handle regular video URLs
    let videoId = null;
    
    // youtu.be/VIDEO_ID
    const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
    if (shortMatch) {
        videoId = shortMatch[1];
    }
    
    // youtube.com/watch?v=VIDEO_ID
    const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
    if (watchMatch) {
        videoId = watchMatch[1];
    }
    
    if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    }
    
    return null;
};

export default function DomainPathway({ domain, onBack }) {
    return (
        <div className="domain-pathway-page">
            <div className="domain-pathway-hero" style={{ '--domain-color': domain.color }}>
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="back-button"
                    onClick={onBack}
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                    Back to Learning Studio
                </motion.button>
                
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="domain-pathway-hero-content"
                >
                    <div className="domain-pathway-icon-wrapper">
                        <span className="material-symbols-outlined">{domain.icon}</span>
                    </div>
                    <h1>{domain.title}</h1>
                    <p className="domain-pathway-description">{domain.description}</p>
                </motion.div>
            </div>

            <div className="domain-pathway-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="pathway-intro"
                >
                    <h2>
                        <span className="material-symbols-outlined">route</span>
                        Learning Pathway
                    </h2>
                    <p>Follow this curated sequence of courses to build your skills from the ground up. Each course builds upon the previous one.</p>
                </motion.div>

                <div className="pathway-timeline">
                    {domain.courses.map((course, index) => {
                        const thumbnail = getYouTubeThumbnail(course.url);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="pathway-item"
                            >
                                <div className="pathway-connector">
                                    <div className="pathway-number" style={{ background: domain.color }}>{index + 1}</div>
                                    {index < domain.courses.length - 1 && <div className="pathway-line" style={{ background: domain.color }}></div>}
                                </div>
                                <div className="pathway-card">
                                    <a 
                                        href={course.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="pathway-thumbnail-link"
                                    >
                                        {thumbnail ? (
                                            <div className="pathway-thumbnail">
                                                <img src={thumbnail} alt={course.name} />
                                                <div className="thumbnail-play-overlay">
                                                    <span className="material-symbols-outlined">play_circle</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="pathway-thumbnail pathway-thumbnail-placeholder" style={{ background: domain.color }}>
                                                <span className="material-symbols-outlined">play_circle</span>
                                            </div>
                                        )}
                                    </a>
                                    <div className="pathway-card-content">
                                        <span className="course-step">Step {index + 1}</span>
                                        <h3>{course.name}</h3>
                                        <p className="course-instruction">
                                            {index === 0 
                                                ? "Start your journey here. This course covers the fundamentals you'll need." 
                                                : index === domain.courses.length - 1 
                                                    ? "Complete your pathway with this advanced course."
                                                    : "Continue building your skills with this course."}
                                        </p>
                                        <a 
                                            href={course.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="start-course-btn"
                                            style={{ '--btn-color': domain.color }}
                                        >
                                            <span className="material-symbols-outlined">play_circle</span>
                                            Start Learning
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="pathway-completion"
                >
                    <div className="completion-badge" style={{ background: domain.color }}>
                        <span className="material-symbols-outlined">emoji_events</span>
                    </div>
                    <h3>Pathway Complete!</h3>
                    <p>After completing all courses, you'll have a solid foundation in {domain.title.toLowerCase()}.</p>
                </motion.div>
            </div>
        </div>
    );
}
