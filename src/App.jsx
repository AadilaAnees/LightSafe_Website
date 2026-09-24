import { useState } from 'react'
import './App.css'

const steps = [
  {
    step: '01',
    title: 'Request in Seconds',
    description: 'Tap simple icons for pads, washroom access, or pain relief with optional location notes.',
    icon: 'request',
  },
  {
    step: '02',
    title: '300m Anonymous Broadcast',
    description: 'Verified nearby women receive instant alerts without exposing personal details or exact locations.',
    icon: 'radar',
  },
  {
    step: '03',
    title: 'Ephemeral Private Chat',
    description: 'Connect in auto-deleting rooms with fuzzy distance guidance like “Helper within 50m.”',
    icon: 'chat',
  },
  {
    step: '04',
    title: 'Safe Completion & Rewards',
    description: 'Tap “I’m Safe Now” to end the request and unlock Good Samaritan badges and partner vouchers.',
    icon: 'safe',
  },
]

const womenBenefits = [
  '100% Free 300m emergency peer-support network.',
  'Absolute privacy with zero GPS tracking and auto-deleting chats.',
  'Verified female-only safe space (NIC + Face-ID onboarding).',
  'Direct 1-on-1 health mentorship with verified doctors and AI cycle tracking.',
  'Good Samaritan loyalty points & sanitary brand discount vouchers.',
]

const partnerBenefits = [
  'Direct, positive brand exposure to an engaged female demographic (15–45).',
  'Co-branded emergency starter kits and sponsored “Good Samaritan” reward vouchers.',
  'High CSR/ESG alignment by advancing women’s health, period dignity, and transit safety.',
  'Institutional “LightSafe Care Passes” for university campuses and corporate workplaces.',
]

const teamMembers = [
  {
    name: 'Nadira Perera',
    role: 'Founder',
    bio: 'A public-health advocate focused on dignity-first women’s care and grassroots safety.',
  },
  {
    name: 'Maya Fernando',
    role: 'Tech Lead',
    bio: 'Builds privacy-first product systems that balance speed, safety, and trust.',
  },
  {
    name: 'Sithuli Weerasinghe',
    role: 'Product Lead',
    bio: 'Turns real-woman needs into intuitive experiences that feel discreet and supportive.',
  },
]

const socialLinks = [
  {
    label: '@lightsafe_w2w',
    href: 'https://www.instagram.com/lightsafe_w2w?stkn=MXExNzlzeHY2ejhpYw%3D%3D&utm_source=qr',
    icon: 'instagram',
  },
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
]

const defaultForm = {
  fullName: '',
  email: '',
  org: '',
  phone: '',
  notify: true,
}

const partnerFormDefaults = {
  organizationName: '',
  contactPerson: '',
  businessEmail: '',
  partnershipType: 'Brand Sponsorship',
  message: '',
}

function App() {
  const [activeTab, setActiveTab] = useState('community')
  const [communityForm, setCommunityForm] = useState(defaultForm)
  const [partnerForm, setPartnerForm] = useState(partnerFormDefaults)

  const handleCommunityChange = (event) => {
    const { name, value, type, checked } = event.target
    setCommunityForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handlePartnerChange = (event) => {
    const { name, value } = event.target
    setPartnerForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="LightSafe home">
            <span className="brand-mark">L</span>
            <span className="brand-text">LightSafe</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">Why Us</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#benefits">Benefits</a>
            <a href="#team">Team</a>
          </nav>

          <a href="#community" className="button button-primary small-button">
            Join the Community
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Women-to-Women Instant Network</span>
              <h1>Sisterhood in Your Pocket: Instant, Discreet Peer Support When You Need It Most.</h1>
              <p className="lead">
                LightSafe connects verified women nearby within a 300-meter radius to offer immediate help with unexpected period emergencies, sanitary supplies, pain relief, and clean washroom access — safely and anonymously.
              </p>

              <div className="cta-row">
                <a href="#community" className="button button-primary">
                  Join the Community
                </a>
                <a href="#partnership" className="button button-secondary">
                  Partner With Us
                </a>
              </div>

              <div className="stat-row" aria-label="Impact stats">
                <div className="stat-item">
                  <strong>300m</strong>
                  <span>Local support radius</span>
                </div>
                <div className="stat-item">
                  <strong>56%+</strong>
                  <span>of commuters affected</span>
                </div>
                <div className="stat-item">
                  <strong>24/7</strong>
                  <span>women-first response</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="LightSafe app preview">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="radar-ring ring-one" />
              <div className="radar-ring ring-two" />
              <div className="phone-card">
                <div className="phone-topbar">
                  <span className="signal-dot" />
                  <span className="time">9:41</span>
                  <div className="status-icons">
                    <span className="status-signal" />
                    <span className="status-battery" />
                  </div>
                </div>

                <div className="broadcast-panel">
                  <div className="broadcast-header">
                    <span className="tiny-label">Live broadcast</span>
                    <span className="badge badge-soft">300m</span>
                  </div>
                  <div className="radar-scan" aria-hidden="true">
                    <span className="pulse" />
                  </div>
                  <div className="helper-line">
                    <span className="helper-avatar">A</span>
                    <div>
                      <strong>Anonymous helper</strong>
                      <small>within 50m</small>
                    </div>
                  </div>
                </div>

                <div className="request-pills">
                  <span className="pill active">Pads</span>
                  <span className="pill">Washroom</span>
                  <span className="pill">Pain Relief</span>
                </div>

                <div className="chat-card">
                  <div className="chat-bubble outgoing">
                    <span className="dot dot-one" />
                    <span className="dot dot-two" />
                    <span className="dot dot-three" />
                  </div>
                  <div className="chat-bubble incoming">
                    <small>Need help now</small>
                    <strong>Verified woman nearby</strong>
                  </div>
                </div>

                <div className="safe-banner">No GPS tracking • Private chat</div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section" id="about">
          <div className="container section-intro">
            <span className="section-kicker">Why We Built LightSafe</span>
            <h2>We created a safer, more dignified way to get help — without fear, stigma, or delay.</h2>
          </div>

          <div className="container narrative-grid">
            <article className="story-card problem-card">
              <span className="card-icon">
                <ShieldIcon />
              </span>
              <p className="card-label">The Problem</p>
              <p>
                56%+ of commuting women in Sri Lanka face unexpected menstrual emergencies without access to clean facilities or supplies, forced to suffer in silence due to stigma.
              </p>
            </article>

            <article className="story-card vision-card">
              <span className="card-icon">
                <HeartIcon />
              </span>
              <p className="card-label">Our Vision</p>
              <p>
                To create a world where no woman experiences fear, anxiety, or loss of dignity during a personal health emergency while away from home.
              </p>
            </article>

            <article className="story-card mission-card">
              <span className="card-icon">
                <SparkIcon />
              </span>
              <p className="card-label">Our Mission</p>
              <p>
                Empowering women through a privacy-first, peer-to-peer mesh network that bridges everyday safety, reproductive wellness, and community solidarity without reliance on police or male intermediaries.
              </p>
            </article>
          </div>
        </section>

        <section className="workflow-section" id="how-it-works">
          <div className="container section-intro align-left">
            <span className="section-kicker">How LightSafe Works</span>
            <h2>The 4-Step Cycle</h2>
          </div>

          <div className="container steps-grid">
            {steps.map((item) => (
              <article className="step-card" key={item.step}>
                <div className="step-topline">
                  <span className="step-number">{item.step}</span>
                  <span className="step-icon">{renderIcon(item.icon)}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-section" id="benefits">
          <div className="container section-intro">
            <span className="section-kicker">Dual Benefit Matrix</span>
            <h2>Built for women in need and the partners who want to help.</h2>
          </div>

          <div className="container benefit-grid">
            <article className="benefit-card women-card">
              <div className="benefit-header">
                <span className="mini-badge">For Women</span>
                <h3>What Women Get</h3>
              </div>
              <ul>
                {womenBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>

            <article className="benefit-card partner-card">
              <div className="benefit-header">
                <span className="mini-badge alt">For Partners</span>
                <h3>What Partners &amp; Sponsors Get</h3>
              </div>
              <ul>
                {partnerBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="team-section" id="team">
          <div className="container section-intro">
            <span className="section-kicker">The Team Behind LightSafe</span>
            <h2>Built by Innovators Committed to Women’s Dignity</h2>
          </div>

          <div className="container team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="member-photo">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="portal-section" id="community">
          <div className="container portal-panel" id="partnership">
            <div className="portal-header">
              <span className="section-kicker">Signup &amp; Partnership Portal</span>
              <h2>Join the movement or partner with us.</h2>
            </div>

            <div className="tabs" role="tablist" aria-label="Signup forms">
              <button
                type="button"
                className={activeTab === 'community' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('community')}
              >
                Join the Community
              </button>
              <button
                type="button"
                className={activeTab === 'partner' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('partner')}
              >
                Partner / Sponsor Us
              </button>
            </div>

            {activeTab === 'community' ? (
              <form className="portal-form">
                <div className="field-grid two-col">
                  <label>
                    <span>Full Name</span>
                    <input
                      type="text"
                      name="fullName"
                      value={communityForm.fullName}
                      onChange={handleCommunityChange}
                      placeholder="Enter your full name"
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={communityForm.email}
                      onChange={handleCommunityChange}
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <div className="field-grid two-col">
                  <label>
                    <span>University / Organization</span>
                    <input
                      type="text"
                      name="org"
                      value={communityForm.org}
                      onChange={handleCommunityChange}
                      placeholder="University or workplace"
                    />
                  </label>
                  <label>
                    <span>Phone Number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={communityForm.phone}
                      onChange={handleCommunityChange}
                      placeholder="+94 7XX XXX XXX"
                    />
                  </label>
                </div>

                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    name="notify"
                    checked={communityForm.notify}
                    onChange={handleCommunityChange}
                  />
                  <span>Notify me for Beta Access</span>
                </label>

                <button type="submit" className="button button-primary full-width">
                  Submit My Interest
                </button>
              </form>
            ) : (
              <form className="portal-form">
                <div className="field-grid two-col">
                  <label>
                    <span>Organization Name</span>
                    <input
                      type="text"
                      name="organizationName"
                      value={partnerForm.organizationName}
                      onChange={handlePartnerChange}
                      placeholder="Your organization name"
                    />
                  </label>
                  <label>
                    <span>Contact Person</span>
                    <input
                      type="text"
                      name="contactPerson"
                      value={partnerForm.contactPerson}
                      onChange={handlePartnerChange}
                      placeholder="Full name"
                    />
                  </label>
                </div>

                <div className="field-grid two-col">
                  <label>
                    <span>Business Email</span>
                    <input
                      type="email"
                      name="businessEmail"
                      value={partnerForm.businessEmail}
                      onChange={handlePartnerChange}
                      placeholder="hello@company.com"
                    />
                  </label>
                  <label>
                    <span>Partnership Type</span>
                    <select
                      name="partnershipType"
                      value={partnerForm.partnershipType}
                      onChange={handlePartnerChange}
                    >
                      <option>Brand Sponsorship</option>
                      <option>Campus Chapter</option>
                      <option>CSR Collaboration</option>
                    </select>
                  </label>
                </div>

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={partnerForm.message}
                    onChange={handlePartnerChange}
                    placeholder="Tell us how you’d like to partner with LightSafe..."
                    rows="5"
                  />
                </label>

                <button type="submit" className="button button-primary full-width">
                  Send Partnership Request
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand" aria-label="LightSafe brand">
              <span className="brand-mark">L</span>
              <span className="brand-text">LightSafe</span>
            </div>
            <p>Women-to-Women instant health and safety support for everyday emergencies.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#about">Why Us</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#benefits">Benefits</a>
            <a href="#community">Community</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-list">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="social-item">
                  <span className="social-icon">{renderSocialIcon(item.icon)}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 LightSafe. All rights reserved.</span>
          <span>Strictly Privacy-First. Your Data Belongs to You.</span>
        </div>
      </footer>
    </div>
  )
}

function renderIcon(iconName) {
  switch (iconName) {
    case 'request':
      return <RequestIcon />
    case 'radar':
      return <RadarIcon />
    case 'chat':
      return <ChatIcon />
    case 'safe':
      return <SafeIcon />
    default:
      return null
  }
}

function renderSocialIcon(iconName) {
  switch (iconName) {
    case 'instagram':
      return <InstagramIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'linkedin':
      return <LinkedinIcon />
    default:
      return null
  }
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.75 18.75 5v6.4c0 4.32-2.93 8.32-6.75 10.85-3.82-2.53-6.75-6.53-6.75-10.85V5L12 2.75Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9.5 12 1.5 1.5 3.5-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.25s-7.5-4.35-9.22-8.14C1.45 9.24 3.2 4.75 7.7 4.75c2.14 0 3.42 1.09 4.3 2.22.88-1.13 2.16-2.22 4.3-2.22 4.5 0 6.25 4.49 4.92 7.36C19.5 15.9 12 20.25 12 20.25Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.75V7m0 10v4.25M4.75 12H9m6 0h4.25M6.5 6.5l2.75 2.75m7.25 7.25 2.75 2.75M17.5 6.5l-2.75 2.75M9.25 14.75 6.5 17.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RequestIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7.5h10a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 7.5V6.7A2.7 2.7 0 0 1 12.2 4h0a2.7 2.7 0 0 1 2.7 2.7v.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M7.5 12h9M7.5 15h6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function RadarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M5.5 18.5 18.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 18.5 4 20.5V7.8A2.8 2.8 0 0 1 6.8 5h10.4A2.8 2.8 0 0 1 20 7.8v6.4a2.8 2.8 0 0 1-2.8 2.8H7.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10.5h8M8 13.5h5.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function SafeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.75 17.5 4.8v5.1c0 3.38-2.2 6.49-5.5 8.35-3.3-1.86-5.5-4.97-5.5-8.35V4.8L12 2.75Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9.5 12 1.5 1.5 3.5-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 20v-7h2.3l.5-2.8h-2.8V7.7c0-.9.5-1.4 1.5-1.4H16V3.8c-.4-.1-1.7-.2-2.9-.2-2.8 0-4.6 1.7-4.6 4.8v2.6H6.2V13h2.3v7h4.9Z" fill="currentColor" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8.5A1.5 1.5 0 1 1 6 5.5a1.5 1.5 0 0 1 0 3ZM4.8 10.4h2.4v8.2H4.8zM10.2 10.4h2.3v1.1h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v5.4H18v-5.1c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6v5.2h-2.4v-8.2Z" fill="currentColor" />
    </svg>
  )
}

export default App
