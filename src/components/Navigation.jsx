import './Navigation.css';

export default function Navigation({ setPage, currentPage }) {
    return (
        <header className="nav-header">
            <div className="nav-container">
                <div className="nav-brand" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
                    <img src="/images/sairamlogo.jpeg" alt="Sairam Logo" className="brand-logo" />
                    <span className="brand-text">Learning Studio</span>
                </div>

                <nav className="nav-links">
                    <a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('home'); }}>Home</a>
                    <a href="#" className={currentPage === 'iste-standards' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('iste-standards'); }}>ISTE Standards</a>
                    <a href="#" className={currentPage === 'learning-studio' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('learning-studio'); }}>Learning Studio</a>
                    <a href="#" className={currentPage === 'quest-hub' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('quest-hub'); }}>Quest Hub</a>
                    <a href="#" className={currentPage === 'xr-zone' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('xr-zone'); }}>XR Zone</a>
                    <a href="#" className={currentPage === 'community' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('community'); }}>Community Wall</a>
                </nav>

                {/* User profile section - commented out, re-enable when sign-in is added back
                <div className="nav-actions">
                    <div className="user-profile">
                        <span className="user-name">{user?.displayName || user?.email}</span>
                        <div className="user-avatar" style={{ backgroundImage: `url("${user?.photoURL || 'https://via.placeholder.com/40'}")` }}></div>
                        <button onClick={handleSignOut} className="sign-out-btn">Log Out</button>
                    </div>
                </div>
                */}

                <button className="mobile-menu-btn">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}
