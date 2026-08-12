import RevealOnScroll from '../components/RevealOnScroll';

export default function Contact() {
  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `url('https://harish-portfolio.weebly.com/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184017-2_orig.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="page-hero-content">
          <p className="breadcrumb">LET'S CONNECT</p>
          <h1>Contact</h1>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section section-dark contact-section">
        <div className="container" style={{ maxWidth: '600px' }}>
          <RevealOnScroll>
            <div className="contact-info" style={{ textAlign: 'center' }}>
              <h2>Get in Touch</h2>
              <p style={{ margin: '0 auto 40px' }}>
                Interested in working together? Have a project in mind? Feel free to reach out and
                I'll get back to you as soon as possible.
              </p>

              <div className="contact-details-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <div className="contact-detail" style={{ width: '100%', maxWidth: '350px', justifyContent: 'flex-start' }}>
                  <div className="contact-detail-icon">📧</div>
                  <div className="contact-detail-text" style={{ textAlign: 'left' }}>
                    <h4>Email</h4>
                    <p>harsh.shk.sl@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail" style={{ width: '100%', maxWidth: '350px', justifyContent: 'flex-start' }}>
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text" style={{ textAlign: 'left' }}>
                    <h4>Phone</h4>
                    <p>8667219624</p>
                  </div>
                </div>

                <div className="contact-detail" style={{ width: '100%', maxWidth: '350px', justifyContent: 'flex-start' }}>
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text" style={{ textAlign: 'left' }}>
                    <h4>Location</h4>
                    <p>India</p>
                  </div>
                </div>

                <div className="contact-detail" style={{ width: '100%', maxWidth: '350px', justifyContent: 'flex-start' }}>
                  <div className="contact-detail-icon">💼</div>
                  <div className="contact-detail-text" style={{ textAlign: 'left' }}>
                    <h4>Current Role</h4>
                    <p>VR Designer | XR Lead at Marlion Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
