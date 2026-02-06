import React, { useState } from 'react';
import PdfViewerModal from './PdfViewerModal';

const getAssetUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${import.meta.env.BASE_URL}${cleanUrl}`;
};

const ProjectModal = ({ project, onClose }) => {
    const [previewPdf, setPreviewPdf] = useState(null);

    if (!project) return null;

    const handlePdfClick = (e, url, title) => {
        if (url && url.endsWith('.pdf')) {
            e.preventDefault();
            setPreviewPdf({ url, title });
        }
    };

    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(10, 12, 16, 0.85)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '2rem'
            }} onClick={onClose}>
                <div
                    style={{
                        backgroundColor: 'var(--bg-white)',
                        maxWidth: '900px',
                        width: '100%',
                        maxHeight: '90vh',
                        borderRadius: '24px',
                        overflowY: 'auto',
                        position: 'relative',
                        padding: '2.5rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1.5rem',
                            right: '1.5rem',
                            background: 'var(--bg-accent)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)'
                        }}
                    >
                        &times;
                    </button>

                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                            {project.category.map(cat => (
                                <span key={cat} style={{
                                    color: 'var(--secondary)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.1em',
                                    border: '1px solid rgba(45, 90, 39, 0.2)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '4px',
                                    background: 'rgba(45, 90, 39, 0.05)'
                                }}>
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginTop: '0.5rem' }}>{project.title}</h2>
                    </div>

                    {/* Description du Projet */}
                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem', color: 'var(--primary)', marginBottom: '1rem' }}>Description du Projet</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>{project.description}</p>
                    </section>

                    {/* Compétences Cibles (gauche) + Aperçu Technique (droite) */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                        {/* Compétences Cibles */}
                        {project.skills && project.skills.length > 0 && (
                            <section style={{
                                background: 'var(--bg-accent)',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                border: '1px solid var(--border)'
                            }}>
                                <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1rem', color: 'var(--primary)', marginBottom: '1rem' }}>Compétences Cibles</h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.8rem'
                                }}>
                                    {project.skills.map((skill, index) => (
                                        <li key={index} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            color: 'var(--text-muted)',
                                            fontSize: '0.95rem'
                                        }}>
                                            <span style={{
                                                color: 'var(--secondary)',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                lineHeight: 1,
                                                flexShrink: 0
                                            }}>✓</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Aperçu Technique */}
                        <section style={{
                            background: 'var(--bg-accent)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid var(--border)'
                        }}>
                            <h3 style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1rem', color: 'var(--primary)', marginBottom: '1rem' }}>Aperçu Technique</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {project.tools.map(tool => (
                                    <span key={tool} style={{
                                        fontSize: '0.75rem',
                                        background: 'white',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '6px',
                                        border: '1px solid var(--border)',
                                        color: 'var(--primary)',
                                        fontWeight: 500
                                    }}>
                                        {tool}
                                    </span>
                                ))}
                            </div>

                            {project.data && (
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Source des données :</h4>
                                    <p style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--primary)', lineHeight: 1.5 }}>{project.data}</p>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Ressources (sur deux colonnes) */}
                    <section style={{
                        marginBottom: '2.5rem',
                        background: 'var(--bg-accent)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border)'
                    }}>
                        <h3 style={{ borderLeft: '4px solid var(--secondary)', paddingLeft: '1rem', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'center', borderLeft: 'none' }}>Ressources</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '0.75rem',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}>
                            {project.pdf && project.pdf !== "#" && (
                                <a
                                    href={getAssetUrl(project.pdf)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ justifyContent: 'center', width: '100%', background: 'white' }}
                                    onClick={(e) => handlePdfClick(e, getAssetUrl(project.pdf), "Présentation PDF")}
                                >
                                    📄 Présentation PDF
                                </a>
                            )}

                            {project.tableau && (
                                <a href={project.tableau} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ justifyContent: 'center', width: '100%', borderColor: '#E97627', color: '#E97627', background: 'white' }}>
                                    📊 Tableau Dashboard
                                </a>
                            )}
                            {project.additionalLinks && project.additionalLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={getAssetUrl(link.url)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{
                                        justifyContent: 'center',
                                        width: '100%',
                                        borderColor: 'var(--primary)',
                                        color: 'var(--primary)',
                                        background: 'white'
                                    }}
                                    onClick={(e) => handlePdfClick(e, getAssetUrl(link.url), link.label)}
                                >
                                    🔗 {link.label}
                                </a>
                            ))}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                                    <span style={{ color: 'white' }}>📁 GitHub Repository</span>
                                </a>
                            )}
                        </div>
                    </section>

                    {project.personalOpinion && (
                        <section style={{ marginBottom: '2rem', background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--primary)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Opinion Personnelle & Approche</h3>
                            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                {project.personalOpinion}
                            </p>
                        </section>
                    )}
                </div>
            </div>

            {previewPdf && (
                <PdfViewerModal
                    url={previewPdf.url}
                    title={previewPdf.title}
                    onClose={() => setPreviewPdf(null)}
                />
            )}
        </>
    );
};

export default ProjectModal;
