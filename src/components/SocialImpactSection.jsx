import RevealOnScroll from './RevealOnScroll';
import LazyImage from './LazyImage';

const activities = [
  {
    id: 'amar-seva',
    title: 'Disability & Assistive Technology Outreach',
    organization: 'Amar Seva Sangam, Ayikudi',
    role: 'Volunteer VR Facilitator',
    description:
      'Deployed immersive VR assistive technology demonstrations for individuals with physical disabilities at Amar Seva Sangam — a renowned rehabilitation center. Facilitated hands-on VR sessions enabling wheelchair-bound users to experience virtual mobility and spatial interaction, bridging the gap between disability and digital inclusion.',
    impact: [
      'Introduced VR-based motor rehabilitation exercises for physically challenged individuals',
      'Demonstrated how immersive technology can enhance quality of life and independence',
      'Engaged with therapists and caregivers to explore sustainable assistive-tech integration',
    ],
    images: [
      { src: '/social/amar_seva_1.jpg', alt: 'Wheelchair user experiencing VR assistive technology at Amar Seva Sangam' },
      { src: '/social/amar_seva_2.jpg', alt: 'Harish explaining VR technology to staff and patients at Amar Seva Sangam' },
    ],
    accent: 'rgba(99, 179, 237, 0.6)',
  },
  {
    id: 'marlion',
    title: 'Industry Mentorship & Team Leadership',
    organization: 'Marlion Technologies',
    role: 'Lead XR Designer & Mentor',
    description:
      'Led a cross-functional team of designers and developers at Marlion Technologies, mentoring junior team members in real-time 3D pipelines, VR interaction design, and client delivery workflows. Championed a culture of knowledge-sharing by conducting internal workshops on Unity optimization and XR best practices.',
    impact: [
      'Mentored 5+ junior designers in end-to-end VR production pipelines',
      'Established internal documentation and onboarding processes for new hires',
      'Led client demo sessions for enterprise stakeholders including Denso and Apollo Tyres',
    ],
    images: [
      { src: '/social/marlion_mentorship.jpg', alt: 'Harish leading a VR workshop and mentoring team at Marlion Technologies' },
    ],
    accent: 'rgba(183, 148, 244, 0.6)',
  },
  {
    id: 'tce-outreach',
    title: 'Academic Outreach & Knowledge Transfer',
    organization: 'Thiagarajar College of Engineering (TCE), Madurai',
    role: 'Guest Speaker & Workshop Facilitator',
    description:
      'Conducted immersive technology workshops and VR demonstration sessions at TCE, exposing 100+ undergraduate students to the practical applications of Virtual Reality in industry. Shared real-world project case studies from enterprise XR deployments, inspiring the next generation of technologists to explore spatial computing.',
    impact: [
      'Delivered hands-on VR demos to 100+ engineering students across multiple departments',
      'Introduced students to Unity XR Toolkit, real-time rendering pipelines, and VR interaction design',
      'Sparked interest in XR research — multiple students initiated VR-related final year projects',
    ],
    images: [
      { src: '/social/tce_workshop_1.jpg', alt: 'Students experiencing VR demo at TCE workshop conducted by Harish' },
      { src: '/social/tce_workshop_2.jpg', alt: 'Harish conducting immersive technology workshop at Thiagarajar College of Engineering' },
    ],
    accent: 'rgba(129, 230, 217, 0.6)',
  },
];

export default function SocialImpactSection() {
  return (
    <section className="section section-alt social-impact-section" id="social-impact">
      <div className="container">
        <RevealOnScroll>
          <div className="social-impact-header">
            <span className="social-impact-label">Beyond the Code</span>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>
              Community Leadership & Social Impact
            </h2>
            <p className="social-impact-subtitle">
              Leveraging immersive technology for social good — bridging the gap between innovation and inclusion.
            </p>
          </div>
        </RevealOnScroll>

        <div className="social-impact-activities">
          {activities.map((activity, index) => (
            <RevealOnScroll key={activity.id}>
              <div
                className={`social-impact-card ${index % 2 !== 0 ? 'reversed' : ''}`}
              >
                {/* Image Side */}
                <div className="social-impact-media">
                  {activity.images.length === 1 ? (
                    <div className="social-impact-single-image">
                      <LazyImage
                        src={activity.images[0].src}
                        alt={activity.images[0].alt}
                        aspectRatio="16/10"
                        style={{ borderRadius: '12px' }}
                      />
                    </div>
                  ) : (
                    <div className="social-impact-gallery">
                      {activity.images.map((img, i) => (
                        <LazyImage
                          key={i}
                          src={img.src}
                          alt={img.alt}
                          aspectRatio="4/3"
                          style={{ borderRadius: '10px' }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Text Side */}
                <div className="social-impact-info">
                  <div className="social-impact-info-inner">
                    <span
                      className="social-impact-role-badge"
                      style={{ borderColor: activity.accent }}
                    >
                      {activity.role}
                    </span>
                    <h3>{activity.title}</h3>
                    <p className="social-impact-org">{activity.organization}</p>
                    <p className="social-impact-desc">{activity.description}</p>
                    <div className="social-impact-highlights">
                      <h4>Key Impact</h4>
                      <ul>
                        {activity.impact.map((point, i) => (
                          <li key={i}>
                            <span className="impact-bullet" style={{ background: activity.accent }} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
