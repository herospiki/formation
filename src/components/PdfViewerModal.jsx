import React from 'react';

const PdfViewerModal = ({ url, title, onClose }) => {
    if (!url) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000, // Higher than ProjectModal
            padding: '1rem'
        }} onClick={onClose}>

            <div style={{
                width: '100%',
                maxWidth: '1200px',
                height: '90vh',
                backgroundColor: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{
                    padding: '1rem 1.5rem',
                    background: 'var(--bg-white)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary)' }}>{title || 'Visualisation PDF'}</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a
                            href={url}
                            download
                            className="btn btn-outline"
                            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                        >
                            Télécharger
                        </a>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'var(--bg-accent)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '32px',
                                height: '32px',
                                cursor: 'pointer',
                                fontSize: '1.2rem',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            &times;
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, backgroundColor: '#525659' }}>
                    <iframe
                        src={`${url}#view=FitH`}
                        title={title}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PdfViewerModal;
