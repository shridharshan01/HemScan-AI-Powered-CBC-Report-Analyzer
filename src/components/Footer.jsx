import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (e, id) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '4rem 0 2rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    <div>
                        <Link
                            to="/"
                            onClick={(e) => {
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                            style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'white' }}
                        >
                            <span style={{ height: '24px', width: '24px', backgroundColor: 'var(--accent-color)', borderRadius: '50%', display: 'inline-block' }}></span>
                            HemScan
                        </Link>
                        <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                            Making your health data accessible, understandable, and actionable.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Product</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/dashboard" style={{ color: '#aaa', textDecoration: 'none' }}>Upload Report</Link></li>
                            <li><Link to="/faq" style={{ color: '#aaa', textDecoration: 'none' }}>FAQ</Link></li>
                            <li><a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} style={{ color: '#aaa', textDecoration: 'none', cursor: 'pointer' }}>Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} style={{ color: '#aaa', textDecoration: 'none', cursor: 'pointer' }}>About Us</a></li>
                            <li><Link to="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy Policy</Link></li>
                            <li><Link to="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>Terms of Service</Link></li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} HemScan. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
