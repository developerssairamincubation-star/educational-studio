import { useState } from 'react';
import { motion } from 'framer-motion';
import './XRZone.css';

const xrContent = [
    {
        id: 'unity',
        title: 'Spatial Computing with Unity',
        icon: 'view_in_ar',
        color: '#000000',
        description: 'Create immersive AR/VR experiences with Unity engine',
        videos: [
            { name: 'C# Free Tutorial Course (Beginner to Advanced)', url: 'https://youtu.be/qZpMX8Re_2Q?si=tmxiobsWZOzPlqfz' },
            { name: 'Unity Beginner Tutorials', url: 'https://www.youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6' }
        ]
    },
    {
        id: 'unreal',
        title: 'Game Development with Unreal Engine',
        icon: 'sports_esports',
        color: '#0E1128',
        description: 'Build professional games with Unreal Engine 5',
        videos: [
            { name: 'Unreal Engine 5 Beginner Tutorial', url: 'https://www.youtube.com/watch?v=L9qixi858Ag&list=PLIn-yd4vnXbjWeYqU7epakdnVzoysMToy' },
            { name: 'Blueprint for Beginners', url: 'https://youtu.be/Xw9QEMFInYU?list=PLncmXJdh4q88DFCEVuGpOY3AGQwBvoQnh' },
            { name: 'Blueprint for Intermediate', url: 'https://youtu.be/cFm4tZqgYvQ?list=PLncmXJdh4q88DFCEVuGpOY3AGQwBvoQnh' }
        ]
    }
];

const getYouTubeThumbnail = (url) => {
    let videoId = null;

    if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        videoId = urlParams.get('v');
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/playlist')) {
        const urlParams = new URLSearchParams(new URL(url).search);
        const playlistId = urlParams.get('list');
        if (playlistId) {
            return `https://i.ytimg.com/vi/${playlistId}/mqdefault.jpg`;
        }
    }

    if (videoId) {
        return `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
    }
    return 'https://via.placeholder.com/280x158?text=Video';
};

export default function XRZone() {
    const [selectedSection, setSelectedSection] = useState(null);

    const handleVideoClick = (url) => {
        window.open(url, '_blank');
    };

    const handleBack = () => {
        setSelectedSection(null);
    };

    if (selectedSection) {
        return (
            <motion.div 
                className="xr-zone-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="xr-detail-header">
                    <button onClick={handleBack} className="xr-back-btn">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Back to XR Zone
                    </button>
                    <div className="xr-detail-title-section">
                        <span 
                            className="material-symbols-outlined xr-detail-icon"
                            style={{ color: selectedSection.color }}
                        >
                            {selectedSection.icon}
                        </span>
                        <div>
                            <h2>{selectedSection.title}</h2>
                            <p>{selectedSection.description}</p>
                        </div>
                    </div>
                </div>

                <div className="xr-videos-grid">
                    {selectedSection.videos.map((video, index) => (
                        <motion.div
                            key={index}
                            className="xr-video-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleVideoClick(video.url)}
                        >
                            <div className="xr-video-thumbnail">
                                <img src={getYouTubeThumbnail(video.url)} alt={video.name} />
                                <div className="xr-play-overlay">
                                    <span className="material-symbols-outlined">play_circle</span>
                                </div>
                            </div>
                            <div className="xr-video-info">
                                <h4>{video.name}</h4>
                                <span className="xr-watch-badge">
                                    <span className="material-symbols-outlined">open_in_new</span>
                                    Watch on YouTube
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        );
    }

    return (
        <div className="xr-zone-page">
            <motion.div 
                className="xr-zone-hero"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="xr-hero-badge">
                    <span className="material-symbols-outlined">vr_glass</span>
                    Extended Reality
                </div>
                <h1>XR Zone</h1>
                <p className="xr-subtitle">
                    Dive into the world of Extended Reality - Unity AR/VR Development & Unreal Engine Game Creation
                </p>
            </motion.div>

            <div className="xr-sections-container">
                {xrContent.map((section, index) => (
                    <motion.div
                        key={section.id}
                        className="xr-section-card"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        onClick={() => setSelectedSection(section)}
                        style={{ '--section-color': section.color }}
                    >
                        <div className="xr-section-visual">
                            <span className="material-symbols-outlined xr-section-icon">
                                {section.icon}
                            </span>
                            <div className="xr-video-count">
                                {section.videos.length} Videos
                            </div>
                        </div>
                        <div className="xr-section-content">
                            <h3>{section.title}</h3>
                            <p>{section.description}</p>
                            <button className="xr-explore-btn">
                                Explore Course
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                className="xr-info-banner"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <span className="material-symbols-outlined">info</span>
                <p>
                    These courses will guide you from fundamental programming concepts to creating 
                    immersive 3D experiences and professional games.
                </p>
            </motion.div>
        </div>
    );
}
