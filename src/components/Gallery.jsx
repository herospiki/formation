import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const categories = ['All', ...new Set(projects.flatMap(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category.includes(filter));

    return (
        <section className="section" id="projects">
            <div className="container">
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Mes Projets</h2>

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredProjects.map(project => (
                        <div key={project.id} className="glow-card">
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                    {project.category.map(cat => (
                                        <span key={cat} style={{
                                            color: 'var(--primary)',
                                            fontSize: '0.65rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            border: '1px solid rgba(135, 163, 131, 0.3)',
                                            padding: '0.1rem 0.4rem',
                                            borderRadius: '100px',
                                            background: 'rgba(135, 163, 131, 0.05)'
                                        }}>
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                                <h3 style={{ margin: '0.5rem 0', fontSize: '1.25rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', height: '3.6em', overflow: 'hidden' }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {project.tools.map(tool => (
                                        <span key={tool} style={{
                                            fontSize: '0.7rem',
                                            background: 'var(--bg-accent)',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '4px',
                                            border: '1px solid var(--border)',
                                            color: 'var(--primary)'
                                        }}>
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    className="btn btn-outline"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    Détails du projet
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Gallery;
