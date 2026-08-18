import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import ProjectSection from '../components/ProjectSection';
import YouTubeEmbed from '../components/YouTubeEmbed';
import ImageGallery from '../components/ImageGallery';
import LazyImage from '../components/LazyImage';

const WEEBLY_BASE = 'https://harish-portfolio.weebly.com';

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="hero"
        style={{
          backgroundImage: `url('${WEEBLY_BASE}/uploads/1/4/8/4/148408434/background-images/1995618105.png')`,
        }}
      >
        <div className="hero-content">
          <h1>HARISH KUMAR</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">VR DESIGNER | XR PRODUCTION LEAD</p>
          
          <div className="hero-tags">
            <span>XR</span>
            <span>•</span>
            <span>UNITY</span>
            <span>•</span>
            <span>UNREAL ENGINE 5</span>
          </div>

          <div className="hero-actions">
            <a href="#featured-projects" className="hero-btn-primary">
              View Work
            </a>
            <Link to="/about#social-impact" className="hero-btn-secondary">
              Social Impact
            </Link>
            <Link to="/contact" className="hero-btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <a href="#about-me" className="hero-scroll-indicator" aria-label="Scroll to about me section">
          <span>Scroll</span>
          <div className="scroll-arrow">↓</div>
        </a>
      </section>

      {/* ===== ABOUT ME ===== */}
      <section className="about-me-section" id="about-me">
        <div className="container">
          <RevealOnScroll>
            <h2>ABOUT&nbsp;ME</h2>
            <p className="about-text">
              Versatile XR Designer and Developer with 4+ years of experience crafting immersive experiences, digital twins, and spatial computing solutions. Specializing in end-to-end XR production—from 3D environment design and spatial UI/UX to C# scripting and real-time networking. Proven ability to architect highly optimized, standalone VR simulations for enterprise applications and behavioral research. Passionate about leveraging cutting-edge pipelines to build intuitive, engaging, and deeply immersive spatial interfaces.
            </p>
          </RevealOnScroll>
        </div>
      </section>
      {/* ===== PROJECTS HEADER ===== */}
      <section className="section section-dark" id="featured-projects" style={{ paddingBottom: 0 }}>
        <div className="container">
          <RevealOnScroll>
            <h2 className="project-section-title">
              Featured Projects
            </h2>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== AUTISM VR + RESEARCH ===== */}
      <section className="section section-darker project-section">
        <div className="container">
          <RevealOnScroll>
            <div className="project-block">
              <div className="project-info">
                <h3>Autism VR</h3>
                <p className="project-subtitle">Autism VR ADL Simulation — UmayAssist (India, 2026)</p>
                <ul>
                  <li>Utilized Unity's URP, adaptive light probes, and rigorous Level of Detail (LOD) management to maintain stutter-free realism with dynamic crowd simulations.</li>
                  <li>Scripted custom edge-based JSON telemetry to monitor memory allocation and stabilize framerates under heavy computational loads.</li>
                  <li>Modeled and textured custom 3D assets from scratch—including regional FMCG products and transit interfaces—utilizing strict poly-count optimization, efficient UV packing, and custom materials tailored for standalone VR performance.</li>
                </ul>
              </div>
              <div className="project-image">
                <LazyImage src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/published/d.png?1780599927`} alt="Autism VR" />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="media-row">
              <div>
                <YouTubeEmbed videoId="l_hPLftcF4k" />
              </div>
              <div>
                <ImageGallery images={[
                  { thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184708.png`, full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184708_orig.png` },
                  { thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-191537.png`, full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-191537_orig.png` },
                  { thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184723.png`, full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184723_orig.png` },
                  { thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184737.png`, full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184737_orig.png` },
                ]} cols={2} />
              </div>
            </div>
          </RevealOnScroll>

          {/* Research Paper — seamless continuation */}
          <RevealOnScroll>
            <div className="research-container">
              <h3 className="research-section-title">
                Published Research & Telemetry Architecture
              </h3>

              <div className="research-grid">
                {/* Left: Real Live System Demonstration Photograph */}
                <div className="research-image-wrapper">
                  <LazyImage src="/autism_vr_demo.jpg" alt="Live VR Hardware & Telemetry Demonstration" />
                </div>

                {/* Right: Dark Academic Citation Card */}
                <div className="research-card">
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '8px', fontWeight: 500 }}>
                      Harish Kumar Senthilkumar (Submitted August 2026)
                    </p>
                    <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', lineHeight: 1.4, marginBottom: '8px', fontWeight: 700 }}>
                      "Standalone VR for Behavioral Observation of Neurodivergent Children in Stress-Inducing Civic Environments: A Wizard-of-Oz LAN Architecture with Edge Telemetry"
                    </h4>
                    <p style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '14px' }}>
                      Under Peer Review — Virtual Reality Journal (Springer Nature) | Zenodo Preprint
                    </p>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '18px' }}>
                      Conceptualized, designed, built, and authored an independent research paper on standalone VR telemetry. Developed a Wizard-of-Oz (WoZ) LAN architecture for real-time remote scaffolding and edge telemetry logging. Deployed to N=13 pediatric participants; logged 394 discrete interaction events with zero critical failures. Currently undergoing formal peer review at Virtual Reality (Springer Nature).
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {['Standalone VR', 'Edge Telemetry', 'LAN Architecture', 'Spatial Audio', 'Neurodivergent Research', 'Wizard-of-Oz'].map(tag => (
                        <span key={tag} style={{
                          padding: '4px 10px', fontSize: '0.7rem', fontWeight: 500,
                          border: '1px solid var(--border-subtle)', borderRadius: '4px', color: 'var(--text-light)', background: 'rgba(255, 255, 255, 0.04)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                      <a href="https://doi.org/10.5281/zenodo.21624128" target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
                        DOI: 10.5281/zenodo.21624128 →
                      </a>
                      <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.21624128.svg" alt="Zenodo DOI Badge" style={{ height: '20px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== DENSO PEDESTRIAN SIM ===== */}
      <ProjectSection
        bgClass="section-dark"
        title="DENSO (PEDESTRIAN)"
        subtitle="VR Pedestrian Safety Simulation – Denso (Standalone)"
        bullets={[
          'Led end-to-end design and development of a standalone VR pedestrian simulation for Denso, covering 8 distinct scenario scenes.',
          'Engineered a true room-scale experience where users must physically walk 40-feet in the real world to navigate the virtual simulation, maximizing immersion.',
          'Built cloud-connected authentication (employee ID login via internet) and real-time data upload pipeline, pushing session telemetry to a web dashboard.',
          'Sole designer and developer — managed the complete pipeline from 3D environment creation to C# scripting, networking, and Meta Quest deployment.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-191652_orig.png`}
        youtubeId="Qs8EYUKYsRM"
        galleryCols={2}
        galleryImages={[
          {
            thumb: '/ped_vr/ped_vr_5.png',
            full: '/ped_vr/ped_vr_5.png',
          },
          {
            thumb: '/ped_vr/ped_vr_6.png',
            full: '/ped_vr/ped_vr_6.png',
          },
          {
            thumb: '/ped_vr/ped_vr_3.jpg',
            full: '/ped_vr/ped_vr_3.jpg',
          },
          {
            thumb: '/ped_vr/ped_vr_4.jpg',
            full: '/ped_vr/ped_vr_4.jpg',
          },
        ]}
      />

      {/* ===== DENSO VEHICLE SIM ===== */}
      <ProjectSection
        bgClass="section-darker"
        title="DENSO: VEHICLE SIM"
        subtitle="Large-Scale Traffic Simulation & Hardware Integration — Cross-Platform Architecture (PCVR & Desktop)"
        bullets={[
          'Led the design of a large-scale (5 km) car and motorcycle traffic simulation with dual cross-platform deployment for PCVR headsets and standard desktop architectures, replicating real-world Bangalore road conditions.',
          'Integrated dual hardware input setups: physical steering wheel controllers for car driving, and custom IoT sensor-rigged actual motorcycle handlebar inputs built with the IoT hardware team.',
          'Implemented cloud-connected employee login and post-session telemetry data transfer pipeline for research analytics.',
          'Co-developed vehicle mechanics and telemetry systems alongside leading all 3D environment design, asset optimization, and custom shaders.',
        ]}
        image="/denso_bike_2.png"
        youtubeId="7clGrV4JmJ8"
        galleryCols={2}
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-120026.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-120026_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-115938.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-115938_orig.png`,
          },
          {
            thumb: '/denso_bike_1.png',
            full: '/denso_bike_1.png',
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-122053.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-122053_orig.png`,
          },
        ]}
      />

      {/* ===== UNITY SHADERS ===== */}
      <ProjectSection
        bgClass="section-dark"
        title="UNITY SHADERS"
        subtitle="Procedural vs Image Textures – Unity Visual Shader"
        bullets={[
          'Built two complete scenes in Unity: one using image textures and the other using a large procedural shader covering concrete, brick, stone, steel, rust, and dust overlays.',
          'Compared image quality while analyzing performance, optimization, and suitability for VR and mobile devices.',
          'Focused on package size, build size, GPU usage, and custom shader parameters to achieve scalable, VR-friendly visuals with stable runtime performance.',
          'Recorded package and build sizes: Procedural – 182 MB package | 386 MB build; Image Texture – 461 MB package | 386 MB build.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-06-07-163624-4_orig.png`}
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-37.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-37_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-41.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-41_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-23.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-23_orig.jpg`,
          },
        ]}
      />

      {/* ===== KARTHICK COTTAGE ===== */}
      <ProjectSection
        bgClass="section-alt2"
        title="KARTHICK COTTAGE"
        subtitle="VR Interior Walkthrough – Karthick Cottage"
        bullets={[
          'Designed and developed a real-time VR interior walkthrough based on 2D architectural plans, optimized for both desktop and mobile platforms.',
          'Modeled the complete interior with efficient light builds and asset optimization for smooth performance.',
          'Collaborated with the XR integration team to implement interactive features and ensure cross-platform stability.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/published/screenshot-2025-10-16-011902.png?1760557822`}
        youtubeId="io6MFmHkcdg"
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232222.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232222_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232250.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232250_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232312.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232312_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232341.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232341_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232407.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232407_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-16-011711.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-16-011711_orig.png`,
          },
        ]}
      />

      {/* ===== APOLLO TYRES ===== */}
      <ProjectSection
        bgClass="section-dark"
        title="APOLLO TYRES"
        subtitle="Digital Twin & Logistics Simulation – Apollo Tyres (Ongoing)"
        bullets={[
          "Currently developing a real-time digital twin of Apollo's Chennai factory in Unity, showcasing live machine operations and logistics flow.",
          'Conducted on-site visits to gather measurements and process data for accurate replication.',
          'Focusing on asset optimization, baked lighting, and custom shaders to achieve realistic visuals with stable runtime performance.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105610-2_orig.png`}
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-121118-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-121118-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-121715-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-121715-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-120729-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-120729-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105610-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105610-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105703-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105703-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105456-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105456-2_orig.png`,
          },
        ]}
      />

      {/* ===== MADURAI 1658 ===== */}
      <ProjectSection
        bgClass="section-alt"
        title="MADURAI - 1658"
        subtitle="Historic Theppakulam Recreation – Marlion Technologies"
        bullets={[
          'Recreated the 17th-century Theppakulam of Madurai in Unreal Engine 5.6, built entirely from scratch using historical and on-site references.',
          'Modeled and textured all architectural and environmental assets manually, using custom shaders for vegetation and water dynamics.',
          'Implemented Blueprints for procedural placement, wind animation, and fish simulation, ensuring both cultural authenticity and technical realism.',
          'Created a Pandiyan warrior character using MetaHuman, designing custom clothing and ornaments, texturing in Substance Painter, and completing skin weighting for integration into the environment.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/published/screenshot-2025-10-14-235714.png?1760555097`}
        youtubeId="kIIVA94g4rM"
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-20251004-130205-881.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-20251004-130205-881_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-16-01-02-37.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-16-01-02-37_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184017-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184017-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184109-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184109-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-185009-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-185009-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/inshot-20251016-011218842.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/inshot-20251016-011218842_orig.jpg`,
          },
        ]}
      />


      {/* ===== SOFTWARES ===== */}
      <section className="software-section">
        <div className="container">
          <RevealOnScroll>
            <h2>SOFTWARES</h2>
            <p>
              <span className="highlight">UNREAL ENGINE</span> |{' '}
              <span className="highlight">UNITY</span> |{' '}
              <span className="highlight">3DS MAX</span> |{' '}
              <span className="highlight">SUBSTANCE PAINTER</span> |{' '}
              <span className="highlight">BLENDER</span> |{' '}
              AUTOCAD | CHARACTER CREATOR 4 | ICLONE 8 | META TAILOR
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
