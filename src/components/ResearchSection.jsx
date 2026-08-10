import RevealOnScroll from './RevealOnScroll';

export default function ResearchSection() {
  return (
    <section className="section section-alt2" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="container">
        <RevealOnScroll>
          <div style={{
            background: 'var(--bg-section-darker)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Glowing Accent */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, height: '4px',
              background: 'var(--accent-gradient)'
            }}></div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <p style={{ color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '10px' }}>
                  INDEPENDENT RESEARCH
                </p>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--text-white)' }}>
                  Standalone XR Telemetry System
                </h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '24px' }}>
                  Conceptualized, designed, built, and authored an independent research paper on standalone VR telemetry. Developed a Wizard-of-Oz (WoZ) LAN architecture for real-time remote scaffolding and edge-based telemetry logging in immersive environments.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', color: 'var(--text-muted)' }}>
                  <li style={{ marginBottom: '8px' }}>✓ Deployed to N=13 pediatric participants</li>
                  <li style={{ marginBottom: '8px' }}>✓ Logged 394 discrete spatial interaction events</li>
                  <li style={{ marginBottom: '8px' }}>✓ Zero critical failures on Meta Quest hardware</li>
                </ul>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <a href="https://doi.org/10.5281/zenodo.21624128" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'var(--accent-gradient)',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Read Paper on Zenodo
                  </a>
                  <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.21624128.svg" alt="DOI Badge" style={{ height: '24px' }} />
                </div>
              </div>
              
              <div style={{ flex: '1 1 300px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                <img src="/paper_preview.png" alt="Research Paper Preview" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
