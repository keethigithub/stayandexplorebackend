// import React from 'react';
// import { Link } from 'react-router-dom';
// import './sidebar.css'; // Assuming you have a CSS file for styling the sidebar

// const GuideDashboard = () => {
//     return (
//       <div className="dashboard-container">
//       <nav className="navbar">
//         <h2>Guide Dashboard</h2>
        
//                 <ul>
//                     <li>
//                         <Link to="/guide/insights">Tourism Insights</Link>
//                     </li>
//                     <li>
//                         <Link to="/guide/selectguide">Guide Details</Link>
//                     </li>
                    
                   
//                     <li>
//                         <Link to="/logout">Logout</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <main className="dashboard-content">
//                 <h1>Welcome, Local Guide!</h1>
//                 <p>Select an option from the sidebar to get started.</p>
//                 {/* Additional content or components can be rendered here based on the selected route */}
//             </main>
//         </div>
//     );
// };

// export default GuideDashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/GuideDashboard.css'; // Updated path
import './sidebar.css'; // Assuming sidebar.css is in the same directory

const GuideDashboard = () => {
    return (
        <div className="guide-dashboard-container">
            <nav className="navbar">
                <h2 className="dashboard-title">Guide Dashboard</h2>
                <ul className="navbar-menu">
                    <li><Link to="/guide/insights">Tourism Insights</Link></li>
                    <li><Link to="/guide/selectguide">Guide Details</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
            <main className="dashboard-content">
                <h1>Welcome, Local Guide!</h1>
                <p>Select an option from the sidebar to get started.</p>

                <section className="promo-section">
                    <h3>Empower Your Passion for Guiding</h3>
                    <p>
                        Share your knowledge of hidden gems and local culture with eager travelers. 
                        Join a thriving community and make a lasting impact on their journeys!
                    </p>
                </section>

                <section className="benefits-section">
                    <h3>Why Join Us?</h3>
                    <ul>
                        <li>🌍 Connect with a global audience of travelers</li>
                        <li>📅 Effortlessly manage your schedule and bookings</li>
                        <li>🌟 Showcase your unique expertise and skills</li>
                        <li>💰 Earn competitive rates while sharing your passion</li>
                    </ul>
                </section>

                <section className="stories-section">
                    <h3>Success Stories</h3>
                    <p className="testimonial">
                        "This platform has transformed my guiding career! I’ve met amazing people and expanded my reach." 
                        <br />- Priya, Historical Guide
                    </p>
                    <p className="testimonial">
                        "I love sharing nature trails with travelers. The support provided is fantastic!" 
                        <br />- Arjun, Adventure Guide
                    </p>
                </section>

                <section className="cta-section">
                    <button className="cta-button" onClick={() => alert('Redirecting to registration page...')}>
                        Register as a Guide
                    </button>
                </section>
            </main>
        </div>
    );
};

export default GuideDashboard;



