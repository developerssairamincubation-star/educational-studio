import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { ScrollControls } from '@react-three/drei';
import Experience from './components/Experience';
import Navigation from './components/Navigation';
import Fab from './components/Fab';
// import SignIn from './components/SignIn';
import CommunityWall from './components/CommunityWall';
import ISTEStandardsPage from './components/ISTEStandardsPage';
import ComingSoon from './components/ComingSoon';
import LearningStudio from './components/LearningStudio';
import DomainPathway from './components/DomainPathway';
// import { auth } from './firebase';
// import { onAuthStateChanged } from 'firebase/auth';
import './index.css';

function App() {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedDomain(null); // Reset domain selection when changing pages
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // if (loading) {
  //   return <div style={{ color: '#1a1a1a', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#FAF0E6' }}>Loading...</div>;
  // }

  // if (!user) {
  //   return <SignIn />;
  // }

  // const handleSignOut = () => {
  //   auth.signOut();
  // };

  return (
    <>
      <div className="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }} gl={{ antialias: true, alpha: false }}>
          <color attach="background" args={['#FAF0E6']} />
          <Suspense fallback={null}>
            {currentPage === 'home' && (
              <ScrollControls pages={7} damping={0.3}>
                <Experience />
              </ScrollControls>
            )}
            {currentPage === 'community' && (
              // Simple background stars or something could go here if we wanted to keep the 3D vibe,
              // but for now let's just keep the dark background
              null
            )}
          </Suspense>
        </Canvas>
      </div>

      <div className="ui-overlay" style={{ position: 'relative', zIndex: 10 }}>
        <Navigation setPage={handlePageChange} currentPage={currentPage} />
        {currentPage === 'home' && <Fab />}
        {currentPage === 'community' && <CommunityWall />}
        {currentPage === 'iste-standards' && <ISTEStandardsPage />}
        {currentPage === 'learning-studio' && !selectedDomain && (
          <LearningStudio onSelectDomain={(domain) => setSelectedDomain(domain)} />
        )}
        {currentPage === 'learning-studio' && selectedDomain && (
          <DomainPathway domain={selectedDomain} onBack={() => setSelectedDomain(null)} />
        )}
        {currentPage === 'quest-hub' && <ComingSoon pageName="Quest Hub" />}
        {currentPage === 'xr-zone' && <ComingSoon pageName="XR Zone" />}
      </div>
    </>
  );
}

export default App;
