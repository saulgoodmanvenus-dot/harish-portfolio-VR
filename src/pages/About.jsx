import RevealOnScroll from '../components/RevealOnScroll';
import LazyImage from '../components/LazyImage';

export default function About() {
  const skills = [
    {
      title: 'Game Engines',
      description: 'Unity (URP/HDRP, XR Toolkit), Unreal Engine 5 (Blueprints, Sequencer, Nanite, Lumen)',
    },
    {
      title: '3D Modeling & Texturing',
      description: '3ds Max, Blender, Substance Painter, Character Creator 4, iClone 8, MetaHuman',
    },
    {
      title: 'VR/AR/MR Development',
      description: 'Oculus Quest, HTC Vive, Mixed Reality, XR Interaction Toolkit, OpenXR',
    },
    {
      title: 'Cinematics & Animation',
      description: 'Sequencer, Timeline, Path-traced rendering, VFX, Character animation, Motion dynamics',
    },
    {
      title: 'Optimization',
      description: 'LOD management, Texture atlasing, Draw-call mitigation, UV packing, Procedural shaders',
    },
    {
      title: 'Architecture & Visualization',
      description: 'Interior design, Archviz, Digital twins, Real-time walkthroughs, Floor plan modeling',
    },
  ];

  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `url('/autism_vr_demo.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="page-hero-content">
          <p className="breadcrumb">GET TO KNOW ME</p>
          <h1>About</h1>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="section section-dark about-content-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-details" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2>Harish Kumar</h2>
              <p className="role">VR Designer | XR Production Lead</p>
              <p>
                Results-driven XR & Multimedia Production Lead with 4+ years of end-to-end experience in immersive technology, digital twins, and spatial computing.
              </p>
              <p>
                Proven track record of architecting standalone VR simulations for enterprise clients like Apollo Tyres and Denso, and leading independent research in behavioral telemetry. 
              </p>
              <p>
                Skilled in Unity XR Toolkit, Unreal Engine, and full-stack integration (C#, Node.js, cloud dashboard telemetry). Seeking to leverage expertise in 3D pipelines, real-time networking, and team-driven spatial storytelling to lead XR production.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="section section-alt skills-section">
        <div className="container">
          <RevealOnScroll>
            <h2 className="section-title" style={{ marginBottom: '48px' }}>
              Skills & Expertise
            </h2>
          </RevealOnScroll>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <RevealOnScroll key={i}>
                <div className="skill-card">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="section section-dark">
        <div className="container">
          <RevealOnScroll>
            <h2 className="section-title" style={{ marginBottom: '48px' }}>
              Professional Experience
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="skill-card" style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              <h3>Quexi Technologies — XR Production Lead / Senior XR Designer</h3>
              <p style={{ color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: 600 }}>
                April 2026 – Present
              </p>
              <p>
                Leading the design and production of a comprehensive VR BIM Inspection Platform deployed on Meta Quest 3. Designing intuitive UX/UI for multi-discipline architectural inspections with integrated voice notes and cloud synchronization, while directing the optimization pipeline for complex Revit/BIM models.
              </p>
            </div>

            <div className="skill-card" style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              <h3>Marlion Technologies — Lead XR Designer</h3>
              <p style={{ color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: 600 }}>
                April 2023 – March 2026
              </p>
              <p>
                Led the end-to-end multimedia and VR design pipeline for enterprise digital twins and immersive training environments. Designed and deployed real-scale VR car and pedestrian simulations for Denso, and an enterprise 3D onboarding digital twin for Apollo Tyres. Architected URP rendering pipelines and real-time performance optimization for standalone mobile hardware.
              </p>
            </div>
            
            <div className="skill-card" style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              <h3>Harji Lab Systems — Junior Draftsman & 3D Visualizer</h3>
              <p style={{ color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: 600 }}>
                Nov 2021 – Feb 2023
              </p>
              <p>
                Delivered photorealistic renders, 360-degree product views, and interactive walkthroughs for client design validation. Produced 2D site layouts, elevations, and detailed working drawings.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
