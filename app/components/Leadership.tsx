"use client";

interface TeamMember {
  name: string;
  role: string;
  monogram: string;
  bio: string;
  email: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Sagheer Malik",
    role: "Chief Executive Officer",
    monogram: "SM",
    bio: "Sagheer drives the overarching vision and international commercial strategy for AML Exports. Under his leadership, the company has established direct partnerships with premier global buyers and modern mineral processing lines.",
    email: "sagheer.malik@amlexports.com",
    linkedin: "https://linkedin.com/in/sagheer-malik",
  },
  {
    name: "Talha Sagheer",
    role: "Managing Director",
    monogram: "TS",
    bio: "Talha directs the supply chain operations, ensuring that logistics, custom clearance, and international shipping protocols meet the highest standards of efficiency. He bridges the gap between field production and port delivery.",
    email: "talha.sagheer@amlexports.com",
    linkedin: "https://linkedin.com/in/talha-sagheer",
  },
  {
    name: "Khurram Bashir",
    role: "General Manager",
    monogram: "KB",
    bio: "Khurram manages on-site extraction, quality validation laboratories, and environmental compliance at our Northern quarries. He ensures every batch of exports meets strict ISO and international grade specifications.",
    email: "khurram.bashir@amlexports.com",
    linkedin: "https://linkedin.com/in/khurram-bashir",
  }
];

export default function Leadership() {
  return (
    <section className="leadership-section section bg-light" id="leadership">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-center" style={{ marginBottom: "60px" }}>
          <span className="section-label">Executive Leadership</span>
          <h2 className="section-title">Owners & Partners</h2>
          <span className="section-divider" />
          <p className="section-subtitle">
            A distinguished leadership team driving excellence, sustainable quarry operations, and reliable international trade compliance.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member, i) => {
            const delayClass = i === 1 ? " delay-100" : i === 2 ? " delay-200" : "";
            return (
              <div className={`team-card reveal${delayClass}`} key={member.name}>
                
                {/* Card Details */}
                <div className="team-info">
                  {/* Card Header with Role & Monogram */}
                  <div className="team-card-header">
                    <span className="team-role-pill">{member.role}</span>
                    <div className="team-monogram-badge">{member.monogram}</div>
                  </div>

                  <h3 className="team-name">{member.name}</h3>

                  {/* Biography Quote Block */}
                  <div className="bio-container">
                    <p className="team-bio">{member.bio}</p>
                  </div>
                  
                  {/* Footer Contacts */}
                  <div className="team-footer">
                    <a href={`mailto:${member.email}`} className="team-email-btn" title={`Email ${member.name}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="contact-label">{member.email}</span>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-linkedin-btn" title="LinkedIn Profile">
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
          background: linear-gradient(135deg, #ffffff 0%, #f9fbfc 100%);
          border: 1px solid rgba(27, 86, 172, 0.08);
          border-top: 4px solid var(--orange);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.02);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .team-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          border: 1.5px solid transparent;
          pointer-events: none;
          transition: border-color 0.4s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: rgba(27, 86, 172, 0.2);
          box-shadow: 0 20px 45px rgba(27, 86, 172, 0.08);
        }

        .team-card:hover::after {
          border-color: rgba(27, 86, 172, 0.2);
        }

        .team-info {
          padding: 32px 28px 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .team-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .team-role-pill {
          font-family: 'Manrope', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: var(--orange);
          background: rgba(27, 86, 172, 0.05);
          padding: 6px 14px;
          border-radius: 30px;
          border: 1px solid rgba(27, 86, 172, 0.1);
          text-transform: uppercase;
        }

        .team-monogram-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--orange) 0%, var(--orange-dark) 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif), serif;
          font-weight: 700;
          font-size: 1.15rem;
          box-shadow: 0 4px 12px rgba(27, 86, 172, 0.2);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .team-card:hover .team-monogram-badge {
          transform: scale(1.1) rotate(5deg);
        }

        .team-name {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.35rem;
          color: #0b2545;
          margin-bottom: 16px;
          line-height: 1.25;
        }

        .bio-container {
          border-left: 2px solid var(--orange-light);
          padding-left: 14px;
          margin-bottom: 24px;
        }

        .team-bio {
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem;
          color: #465565;
          line-height: 1.65;
          margin: 0;
        }

        .team-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #eceff2;
          margin-top: auto;
        }

        .team-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #627282;
          transition: color 0.25s ease;
        }

        .team-email-btn:hover {
          color: var(--orange);
        }

        .contact-label {
          font-family: 'Manrope', sans-serif;
          font-size: 0.8125rem;
          font-weight: 500;
        }

        .team-linkedin-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f4f6f9;
          color: #627282;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .team-linkedin-btn:hover {
          background: var(--orange);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(var(--orange-rgb), 0.25);
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
            padding: 28px 20px 20px;
          }
        }
      `}</style>
    </section>
  );
}
