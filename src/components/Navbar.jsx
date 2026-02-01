import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 100,
            padding: '0.75rem 0',
        }} className="glass">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <span style={{
                        border: '1px solid var(--primary)',
                        padding: '0.2rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        Diplômée Data Analyst & Scientist
                    </span>

                    <a
                        href="https://www.linkedin.com/in/sophie-piekarec"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: '#ffffff',
                            backgroundColor: '#0077b5',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#005582'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0077b5'}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
                <ul style={{ display: 'flex', gap: '2rem' }}>
                    <li><a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>Accueil</a></li>
                    <li><a href="#projects" style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Projets</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
