import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <Gallery />

      </main>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
        <div className="container">
          &copy; 2026 Portfolio Data Science. Conçu avec passion.
        </div>
      </footer>
    </div>
  );
}

export default App;
