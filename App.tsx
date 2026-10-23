import { FormEvent, TouchEvent, useCallback, useEffect, useState } from 'react';
import { faqs, nav, reviews, services, site, steps, values } from './site';

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

type IconProps = { size?: number };
const Svg = ({ size = 18, children }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const ArrowUpRight = ({ size }: IconProps) => <Svg size={size}><path d="M7 17 17 7M8 7h9v9" /></Svg>;
const ArrowRight = ({ size }: IconProps) => <Svg size={size}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
const ArrowDown = ({ size }: IconProps) => <Svg size={size}><path d="M12 5v14M6 13l6 6 6-6" /></Svg>;
const ChevronLeft = ({ size }: IconProps) => <Svg size={size}><path d="m15 6-6 6 6 6" /></Svg>;
const ChevronRight = ({ size }: IconProps) => <Svg size={size}><path d="m9 6 6 6-6 6" /></Svg>;
const ChevronDown = ({ size }: IconProps) => <Svg size={size}><path d="m6 9 6 6 6-6" /></Svg>;
const MenuIcon = ({ size }: IconProps) => <Svg size={size}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>;
const CloseIcon = ({ size }: IconProps) => <Svg size={size}><path d="M6 6l12 12M18 6 6 18" /></Svg>;
const Check = ({ size }: IconProps) => <Svg size={size}><path d="m5 12 5 5 9-10" /></Svg>;
const Hammer = ({ size }: IconProps) => <Svg size={size}><path d="m14 5 5 5M3 21l9-9M10 4l4-1 7 7-1 4-3 1-7-7z" /></Svg>;
const Shield = ({ size }: IconProps) => <Svg size={size}><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" /></Svg>;

function BrandMark() {
  return (
    <a href="#home" aria-label={`${site.name} home`} className="brand-mark" onClick={(e) => { e.preventDefault(); scrollToId('home'); }}>
      <img className="brand-logo-img" src={site.logo} alt={`${site.name} logo`} />
    </a>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) { return <div className="section-tag"><span />{children}</div>; }

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 45);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  const go = (id: string) => { setOpen(false); requestAnimationFrame(() => scrollToId(id)); };
  return (
    <header className={`site-header ${scrolled || open ? 'site-header-solid' : ''}`}>
      <div className="header-inner page-shell">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={(e) => { e.preventDefault(); go(n.href.slice(1)); }}>{n.label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="header-book" onClick={() => go('contact')}>Get a free quote <ArrowUpRight size={16} /></button>
          <button className="menu-button" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>{open ? <CloseIcon size={25} /> : <MenuIcon size={25} />}</button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={(e) => { e.preventDefault(); go(n.href.slice(1)); }}>{n.label}<ArrowUpRight size={19} /></a>)}
          <button onClick={() => go('contact')}>Get a free quote <ArrowUpRight size={20} /></button>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-shade" />
      <div className="hero-inner page-shell">
        <div className="hero-main">
          <div className="hero-kicker"><span className="kicker-line" /> {site.area} • {site.tagline}</div>
          <h1 className="hero-heading">
            <span>Small fixes.</span>
            <span className="hero-heading-second">Smoother days<span className="accent-period">.</span></span>
          </h1>
          <p className="hero-subtitle">Finish carpentry and home repair done properly, from sticking doors and trim to fresh paint and new decks. {site.motto}</p>
          <div className="hero-ctas">
            <button className="button button-red" onClick={() => scrollToId('contact')}>Send your punch list <ArrowUpRight size={18} /></button>
            <button className="button button-ghost" onClick={() => scrollToId('services')}>Explore services <ArrowRight size={18} /></button>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-micro"><span className="hero-dot" /> {site.motto.toUpperCase()}</div>
          <button className="hero-scroll" onClick={() => scrollToId('about')}>SCROLL TO EXPLORE <ArrowDown size={17} /></button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="page-shell about-grid">
        <div className="about-copy">
          <SectionTag>WELCOME TO LOVELAND</SectionTag>
          <h2 className="display-title">Built with care.<br />Finished with <em>craftsmanship.</em></h2>
          <p className="lead-copy">{site.name} looks after homes and rentals across {site.area}, with a finish carpenter’s eye for the details.</p>
          <p className="muted-copy">From doors and trim to paint and decks, the goal is simple: honest work, clear quotes and a space you’re glad to come home to.</p>
          <button className="text-link" onClick={() => scrollToId('services')}>Discover what we do <ArrowUpRight size={19} /></button>
        </div>
        <div className="about-visual">
          <img src={site.aboutImage} alt="Organized workbench with hand tools and a cordless drill" loading="lazy" />
          <div className="image-caption"><span>THE WAY WE WORK</span><span>Careful work. Every time.</span></div>
        </div>
      </div>
    </section>
  );
}

function Services({ onPick }: { onPick: (title: string) => void }) {
  return (
    <section id="services" className="section services-section">
      <div className="page-shell">
        <div className="section-heading-line">
          <div><SectionTag>WHAT WE CAN HELP WITH</SectionTag><h2 className="display-title">Small fixes.<br /><em>Big difference.</em></h2></div>
          <p>Pick a service to start your quote request. Not sure which one fits? Send your list and we’ll sort it out.</p>
        </div>
        <div className="service-grid">
          {services.map((s) => (
            <button key={s.key} className="service-card" onClick={() => { onPick(s.title); scrollToId('contact'); }} aria-label={`Request ${s.title}`}>
              <img src={s.image} alt={`${s.title} example`} loading="lazy" />
              <span className="service-overlay" />
              <span className="service-top"><span>SERVICE</span><span className="round-icon"><ArrowUpRight size={18} /></span></span>
              <span className="service-bottom">
                <span className="service-title">{s.title}</span>
                <span className="service-description">{s.quote}</span>
                <span className="service-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueStrip() {
  return (
    <section className="value-section section">
      <div className="page-shell value-grid">
        <div>
          <SectionTag>WHO WE WORK WITH</SectionTag>
          <h2 className="display-title">Between tenants?<br />Ready to <em>sell?</em></h2>
          <p className="muted-copy">Message us your punch list. Doors and hardware, trim repairs and small repairs, handled in one visit.</p>
        </div>
        <div className="value-list">
          {values.map((v) => (
            <div className="value-row" key={v.title}>
              <span className="value-check"><Check size={18} /></span>
              <div><h3>{v.title}</h3><p>{v.copy}</p></div>
              <ArrowUpRight size={19} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="page-shell">
        <div className="section-heading-line">
          <div><SectionTag>MADE WITH CARE</SectionTag><h2 className="display-title">Quality you<br /><em>can see.</em></h2></div>
          <p>The same room, before and after. Clean paint, solid floors and tidy finishes.</p>
        </div>
        <div className="work-grid">
          <figure className="comparison">
            <img src={site.beforeAfterImage} alt="Room before and after: dusty floor and white walls on the left, polished wood floor and painted walls on the right" loading="lazy" />
            <span className="comparison-label comparison-label-before">BEFORE</span>
            <span className="comparison-label comparison-label-after">AFTER</span>
          </figure>
          <div className="work-side">
            <img src={site.aboutImage} alt="Tools laid out on a workbench" loading="lazy" />
            <div className="work-side-bottom"><span>{site.motto.toUpperCase()}</span><ArrowUpRight size={25} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);
  const advance = useCallback((n: number) => setIndex((v) => (v + n + reviews.length) % reviews.length), []);
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 55) advance(dx < 0 ? 1 : -1);
    setTouchX(null);
  };
  return (
    <section id="reviews" className="section reviews-section">
      <div className="page-shell">
        <div className="reviews-head">
          <div><SectionTag>KIND WORDS</SectionTag><h2 className="display-title">The work speaks.<br /><em>So do the people.</em></h2></div>
          <div className="reviews-arrows">
            <button aria-label="Previous reviews" onClick={() => advance(-1)}><ChevronLeft size={21} /></button>
            <button aria-label="Next reviews" onClick={() => advance(1)}><ChevronRight size={21} /></button>
          </div>
        </div>
        <div className="review-grid" onTouchStart={(e) => setTouchX(e.touches[0].clientX)} onTouchEnd={onTouchEnd}>
          {[0, 1, 2].map((offset) => {
            const r = reviews[(index + offset) % reviews.length];
            return (
              <article className="review-card" key={`${index}-${offset}`}>
                <div className="review-top"><span className="review-quote-mark">“</span><span className="sample-pill">SAMPLE REVIEW</span></div>
                <p className="review-quote">{r.text}</p>
                <div className="review-foot"><span className="review-avatar">{r.initials}</span><div><strong>{r.name}</strong><span>{r.place}</span></div></div>
              </article>
            );
          })}
        </div>
        <div className="review-dots" aria-label="Review selection">
          {reviews.map((_, i) => <button aria-label={`Show review ${i + 1}`} key={i} className={i === index ? 'active' : ''} onClick={() => setIndex(i)} />)}
        </div>
        <p className="section-disclaimer">Sample reviews to show the layout. Replace with verified customer reviews before launch.</p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section">
      <div className="page-shell">
        <div className="process-top"><SectionTag>THREE SIMPLE STEPS</SectionTag><h2 className="display-title">Getting it fixed<br />should feel <em>easy.</em></h2></div>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div className="process-step" key={s.title}>
              <div className="process-number">{i + 1}<span><ArrowUpRight size={22} /></span></div>
              <h3>{s.title}</h3><p>{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ service, setService }: { service: string; setService: (s: string) => void }) {
  const [result, setResult] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setResult(true); }; // demo only: nothing is sent or stored
  return (
    <section id="contact" className="section contact-section">
      <div className="page-shell contact-grid">
        <div className="contact-intro">
          <SectionTag>LET’S TALK</SectionTag>
          <h2 className="display-title">Ready to get<br />it <em>done right?</em></h2>
          <p>Tell us about the job or send your punch list. We reply within one business day.</p>
          <dl className="contact-details">
            <div><dt>Phone</dt><dd>{site.phone}</dd></div>
            <div><dt>Email</dt><dd>{site.email}</dd></div>
            <div><dt>Address</dt><dd>{site.address}</dd></div>
            <div><dt>Hours</dt><dd>{site.hours}</dd></div>
          </dl>
        </div>
        <div className="form-card">
          <div className="form-head"><div><span className="form-eyebrow">QUOTE REQUEST</span><h3>Tell us about your job.</h3></div><span className="form-head-icon"><Hammer size={23} /></span></div>
          <div className="demo-notice"><Shield size={19} /><span><strong>Demo form only.</strong> This form does not send or store any information.</span></div>
          {result && (
            <div className="result-message" role="status"><Check size={22} /><span>Demo confirmation. Nothing was sent or stored.</span><button type="button" onClick={() => setResult(false)} aria-label="Dismiss message"><CloseIcon size={17} /></button></div>
          )}
          <form onSubmit={submit}>
            <div className="field-grid">
              <label className="form-field"><span>Your name *</span><input required minLength={2} placeholder="Full name" autoComplete="name" /></label>
              <label className="form-field"><span>Phone number *</span><input required type="tel" placeholder={site.phone} autoComplete="tel" /></label>
            </div>
            <div className="field-grid">
              <label className="form-field"><span>Email address *</span><input required type="email" placeholder="you@example.com" autoComplete="email" /></label>
              <label className="form-field"><span>Service needed *</span>
                <span className="select-wrap">
                  <select required value={service} onChange={(e) => setService(e.target.value)}>
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s.key} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other / Not sure</option>
                  </select>
                  <ChevronDown size={17} />
                </span>
              </label>
            </div>
            <div className="field-grid">
              <label className="form-field"><span>Town *</span><input required placeholder="Loveland, Berthoud, Windsor…" autoComplete="address-level2" /></label>
              <label className="form-field"><span>Preferred date</span><input type="date" /></label>
            </div>
            <label className="form-field"><span>Your punch list or job details *</span><textarea required minLength={10} rows={4} placeholder="What needs attention? Add any helpful details here..." /></label>
            <button className="button submit-button" type="submit">Preview quote request <ArrowUpRight size={19} /></button>
            <p className="form-small">Demo only. No booking is created and no customer details are collected.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="page-shell faq-grid">
        <div><SectionTag>GOOD TO KNOW</SectionTag><h2 className="display-title">A few things<br />you might <em>ask.</em></h2><p className="muted-copy">A little clarity goes a long way.</p></div>
        <div className="faq-list">
          {faqs.map((f) => <details key={f.q}><summary><span>{f.q}</span><span className="faq-plus">+</span></summary><p>{f.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-section">
      <div className="closing-bg" />
      <div className="page-shell closing-inner">
        <SectionTag>LET’S GET STARTED</SectionTag>
        <h2>{site.motto}</h2>
        <button className="button button-red" onClick={() => scrollToId('contact')}>Get your free quote <ArrowUpRight size={20} /></button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell">
        <div className="footer-top">
          <div className="footer-brand"><BrandMark /><p>{site.tagline} in {site.area}. {site.motto}</p></div>
          <div className="footer-columns">
            <div><span className="footer-title">EXPLORE</span><a href="#about">About us</a><a href="#services">Services</a><a href="#work">Our work</a><a href="#reviews">Reviews</a></div>
            <div><span className="footer-title">GET IN TOUCH</span><a href="#contact">Request a quote</a><span>{site.phone}</span><span>{site.email}</span></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.area}</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  const [service, setService] = useState('');
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About />
        <Services onPick={setService} />
        <ValueStrip /><Work /><Reviews /><Process />
        <Contact service={service} setService={setService} />
        <FAQ /><Closing />
      </main>
      <Footer />
    </>
  );
}
