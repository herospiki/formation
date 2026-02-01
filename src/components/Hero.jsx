import React from 'react';
import logo from '../assets/images/logo.png';
import fernImage from '../assets/images/fern-dark.jpg';
import portrait from '../assets/images/portrait.jpg';

const Hero = () => {
    return (
        <section className="section hero" style={{
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(rgba(248, 250, 248, 0.95), rgba(248, 250, 248, 0.95)), url(${fernImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '4rem'
        }}>
            <div className="container" style={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                maxWidth: '800px'
            }}>
                <h1 style={{ fontSize: '3.5rem', lineHeight: 1, marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>
                    Sophie Piekarec
                </h1>

                <h2 style={{ fontSize: '3rem', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--secondary)' }}>
                    Portfolio de Formation
                </h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '2.5rem', opacity: 0.8 }}>
                    OpenClassrooms 2021-2022
                </p>

                <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.4, maxWidth: '900px', margin: '0 auto 2rem' }}>
                    Sélection de <strong>10 projets</strong> issus de mon double cursus.
                </p>

                <div style={{
                    background: 'var(--bg-accent)',
                    border: '1px solid var(--border)',
                    borderLeft: '4px solid var(--secondary)',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '3rem',
                    maxWidth: '700px',
                    margin: '0 auto 3rem'
                }}>
                    <p style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        margin: 0
                    }}>
                        💡 <strong>Note :</strong> Ces projets ont été réalisés dans un contexte pédagogique. Si je devais les refaire aujourd'hui avec mon expérience actuelle, le résultat serait parfois très différent.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center' }}>
                    <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Voir les projets</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
