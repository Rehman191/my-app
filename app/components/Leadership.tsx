"use client";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  linkedin: string;
  experience: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Muhammad Tariq",
    role: "Founder & Managing Partner",
    image: "/images/team-tariq.png",
    experience: "22+ Years in Geology & Sourcing",
    bio: "Tariq oversees quarry operations and strategic mining partnerships throughout Pakistan's mineral-rich northern territories.",
    email: "tariq@amlexports.com",
    linkedin: "https://linkedin.com/in/placeholder-tariq",
  },
  {
    name: "Dr. Yasmin Khan",
    role: "Partner & Head of Quality",
    image: "/images/team-yasmin.png",
    experience: "15+ Years in Mineralogy & QA",
    bio: "Holding a PhD in Mineralogy, Yasmin directs laboratory testing, chemical analysis, and international ISO certification compliance.",
    email: "yasmin.k@amlexports.com",
    linkedin: "https://linkedin.com/in/placeholder-yasmin",
  },
  {
    name: "Zubair Al-Mahmood",
    role: "Partner & Logistics Director",
    image: "/images/team-zubair.png",
    experience: "18+ Years in Global Trade Logistics",
    bio: "Zubair manages international cargo shipments, custom clearances, and C-TPAT supply chain security frameworks.",
    email: "zubair.am@amlexports.com",
    linkedin: "https://linkedin.com/in/placeholder-zubair",
  }
];

export default function Leadership() {
  return (
    <section className="leadership-section section bg-light" id="leadership">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-center" style={{ marginBottom: "60px" }}>
          <span className="section-label">Our Leadership</span>
          <h2 className="section-title">Owners & Partners</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            A partnership of experienced geologists, mining operations managers, and international trade compliance specialists leading Pakistan's premium mineral exports.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member, i) => {
            const delayClass = i === 1 ? " delay-100" : i === 2 ? " delay-200" : "";
            return (
              <div className={`team-card reveal${delayClass}`} key={member.name}>
                
                {/* Image Frame */}
                <div className="team-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`} 
                    className="team-image"
                  />
                  <div className="team-overlay">
                    <p className="team-overlay-bio">{member.bio}</p>
                  </div>
                </div>

                {/* Card Details */}
                <div className="team-info">
                  <span className="team-role-tag">{member.role}</span>
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-experience">{member.experience}</span>
                  
                  {/* Footer contacts */}
                  <div className="team-contact">
                    <a href={`mailto:${member.email}`} className="contact-icon-link" title={`Email ${member.name}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="contact-label">{member.email}</span>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link" title="LinkedIn Profile">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        .leadership-section {
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .team-card {
          background: #ffffff;
          border: 1px solid #e8e8e8;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }

        .team-card:hover {
          transform: translateY(-5px);
          border-color: rgba(252, 185, 0,0.25);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }

        .team-image-wrapper {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/5;
          width: 100%;
          background: #f7f7f7;
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover .team-image {
          transform: scale(1.06);
        }

        .team-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(23,23,23,0.95) 0%, rgba(23,23,23,0.7) 100%);
          display: flex;
          align-items: flex-end;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .team-card:hover .team-overlay {
          opacity: 1;
        }

        .team-overlay-bio {
          font-family: 'Manrope', sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.9);
          line-height: 1.6;
          margin: 0;
          transform: translateY(15px);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover .team-overlay-bio {
          transform: translateY(0);
        }

        .team-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .team-role-tag {
          font-family: 'Manrope', sans-serif;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--orange);
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .team-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #1d1d1d;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .team-experience {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          color: #7a7a7a;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .team-contact {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid #f3f3f3;
          margin-top: auto;
        }

        .contact-icon-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #5a5a5a;
          transition: color 0.2s ease;
        }

        .contact-icon-link:hover {
          color: var(--orange);
        }

        .contact-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
        }

        .linkedin-link {
          color: #5a5a5a;
          display: flex;
          align-items: center;
          transition: color 0.2s ease;
        }

        .linkedin-link:hover {
          color: var(--orange);
        }

        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .team-info {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
