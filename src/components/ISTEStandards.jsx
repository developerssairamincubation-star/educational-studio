import './ISTEStandards.css';

export default function ISTEStandards() {
    return (
        <section className="iste-section">
            <div className="iste-container">

                <div className="iste-text">
                    <div className="badge">
                        <span className="material-symbols-outlined">verified</span>
                        <span>Standards Aligned</span>
                    </div>
                    <h2>Master the ISTE Standards</h2>
                    <p>Our curriculum is rigorously aligned with the International Society for Technology in Education standards for students and educators.</p>
                    <a href="#" className="link-button">View detailed breakdown</a>
                </div>

                <div className="iste-cards">
                    <div className="iste-card">
                        <span className="material-symbols-outlined">psychology</span>
                        <span>Learner</span>
                    </div>
                    <div className="iste-card">
                        <span className="material-symbols-outlined">groups</span>
                        <span>Leader</span>
                    </div>
                    <div className="iste-card">
                        <span className="material-symbols-outlined">public</span>
                        <span>Citizen</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
