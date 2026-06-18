/* OperatorsDen — content sections (part 2): Offer, Ladder, Sessions, FAQ, CTA, Nav, Footer, Booking */

const DISCOVERY_URL = 'https://cal.com/operatorsden/30min?overlayCalendar=true';

/* ---------- The Offer ---------- */
function Offer({ go }) {
  const items = [
    'A working project folder capturing your business context',
    'Your first data source connected',
    'At least one workflow mapped for automation',
    'A clear picture of what to build next',
  ];
  return (
    <Section narrow id="offer">
      <Reveal style={{ textAlign: 'center' }}>
        <Eyebrow>The offer</Eyebrow>
        <h2 style={h2Style({ margin: '14px 0 0' })}>AI Operating System Setup Session</h2>
        <p style={{ margin: '14px auto 0', fontSize: 17, color: 'var(--text-body)' }}>60 minutes. Hands-on. We build something real.</p>
      </Reveal>
      <Reveal delay={1}>
        <Card style={{ marginTop: 34 }} padding={36} accent="cadence">
          <p style={{ margin: '0 0 18px', fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>By the end of your first call, you will have:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {items.map((t) => (
              <div key={t} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, marginTop: 1, width: 22, height: 22, borderRadius: '50%', background: 'var(--coral-050)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={14} color="var(--coral)" />
                </span>
                <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-strong)' }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, paddingTop: 22, borderTop: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 14, color: 'var(--text-muted)', maxWidth: 380 }}>You need a laptop, Claude Code (free), and one workflow you are tired of doing manually.</span>
            <a href="book.html"><Button iconRight={<Icon name="arrow-right" size={17} />}>Book a Call</Button></a>
          </div>
        </Card>
      </Reveal>
      <Reveal delay={2} style={{ textAlign: 'center', marginTop: 18 }}>
        <span style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>Most clients need 2–3 calls to get their full system running. Every call stands on its own. No lock-in.</span>
      </Reveal>
    </Section>
  );
}

/* ---------- Four Sessions ---------- */
function Sessions() {
  const s = [
    ['01', 'Know', 'The system learns your business cold. Project folder live. First data source connected.', 'context'],
    ['02', 'Reach', 'Real tools wired in: calendar, email, CRM, whatever you run on.', 'connections'],
    ['03', 'Do', 'First automation doing real work inside your workflow.', 'capabilities'],
    ['04', 'Run', 'Rhythm set. Task handed off. Laptop closed, it keeps going.', 'cadence'],
  ];
  return (
    <Section id="sessions">
      <Reveal style={{ marginBottom: 40, maxWidth: 640 }}>
        <Eyebrow>Four calls</Eyebrow>
        <h2 style={h2Style({ margin: '14px 0 0' })}>From zero to something that runs itself</h2>
        <p style={{ margin: '12px 0 0', fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-body)' }}>Each call ends with something real built. Stop whenever it is enough.</p>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 0, position: 'relative' }}>
        {s.map(([num, title, body, key], i) => (
          <Reveal key={num} delay={(i % 4) + 1}>
            <div style={{ position: 'relative', padding: '0 22px', borderLeft: i === 0 ? 'none' : '1px solid var(--line)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ width: 34, height: 34, borderRadius: '50%', background: `var(--c-${key})`, color: key === 'capabilities' ? 'var(--navy)' : '#fff', fontWeight: 800, fontSize: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{num}</span>
                <span style={{ flex: 1, height: 2, background: 'var(--line)', borderRadius: 2 }} />
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 19, fontWeight: 700, color: 'var(--navy)' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- The Ladder ---------- */
function Ladder({ go }) {
  const steps = [
    ['Session', 'You learn the system. We map your highest-leverage automation. You leave with something running.', 'graduation-cap'],
    ['Audit', 'We assess what you have built, what gaps remain, and what a focused project would deliver.', 'clipboard-check'],
    ['Project', 'A scoped engagement. One end-to-end workflow built and deployed.', 'hammer'],
    ['Retainer', 'We keep your system healthy and expanding. Ongoing.', 'repeat'],
  ];
  const connectors = ['→', '→', '→'];
  return (
    <Section recessed id="ladder">
      <Reveal style={{ marginBottom: 38, maxWidth: 680 }}>
        <Eyebrow>The ladder</Eyebrow>
        <h2 style={h2Style({ margin: '14px 0 0' })}>Start with one call. The path opens from there.</h2>
        <p style={{ margin: '12px 0 0', fontSize: 16.5, color: 'var(--text-body)' }}>Every engagement is scoped to what you actually need. We talk through the right level before you commit to anything.</p>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {steps.map(([title, body, icon], i) => (
          <Reveal key={title} delay={(i % 4) + 1}>
            <div className="tile" style={{ position: 'relative', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-sm)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ display: 'inline-flex', width: 32, height: 32, borderRadius: 8, background: 'var(--bg-recessed)', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={icon} size={17} color="var(--sky)" />
                </span>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', color: 'var(--text-muted)' }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 19, fontWeight: 700, color: 'var(--navy)' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)' }}>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- OperatorsDen About ---------- */
function ODAbout() {
  const stats = [
    { label: 'Call length', value: '60 min' },
    { label: 'Engagement', value: 'Custom' },
    { label: 'Sessions per system', value: '2–4' },
    { label: 'Built live', value: 'Day one' },
  ];
  return (
    <Section narrow id="about">
      <Reveal style={{ textAlign: 'center', marginBottom: 40 }}>
        <Eyebrow>What is OperatorsDen</Eyebrow>
        <h2 style={h2Style({ margin: '14px auto 0', maxWidth: 720 })}>
          A hands-on practice for operators, teams, and companies ready to stop doing manually what should already be running automatically.
        </h2>
      </Reveal>
      <Reveal delay={1}>
        <Card padding={40}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="about-grid">
            <div>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--text-body)', margin: '0 0 16px' }}>
                We install AI operating systems built around how you actually think and run your business. Not demos. Not tutorials. A real system, mapped to your real workflows, built live with you.
              </p>
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--text-body)', margin: '0 0 24px' }}>
                If you have workflows that repeat and knowledge that lives in your head, you have enough to build a system around them.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {['No dev team', 'No subscriptions', 'No lock-in'].map(t => (
                  <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, padding: '5px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--bg-recessed)', border: '1px solid var(--line)', color: 'var(--text-strong)' }}>
                    <Icon name="check" size={13} color="var(--sky)" />{t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {stats.map(({ label, value }) => (
                <div key={label} style={{ padding: '20px', background: 'var(--bg-recessed)', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.03em', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginTop: 6 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const qs = [
    ['How does pricing work?', 'Pricing is discussed on the call and tailored to what you need. No packages, no lock-in.'],
    ['Do I need to know how to code?', 'No. We build it together during the calls.'],
    ['What do I need?', 'A laptop, a free Anthropic account, and Claude Code installed. Setup link sent when you book.'],
    ['Is this like ChatGPT?', 'No. ChatGPT forgets everything when the conversation ends. An AI operating system captures your context permanently and runs automated workflows connected to your real tools.'],
    ['How fast will I see results?', 'Most clients leave the first call with at least one thing automated or clearly mapped. Some have a working system after two calls.'],
    ['What kind of business is this for?', 'Founders, solopreneurs, traders, content creators, service businesses. If you have workflows that repeat and knowledge that lives in your head, we can build a system around them.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <Section narrow id="faq">
      <Reveal style={{ marginBottom: 24 }}>
        <Eyebrow>FAQ</Eyebrow>
        <h2 style={h2Style({ margin: '14px 0 0' })}>Before you book</h2>
      </Reveal>
      <Reveal delay={1}>
        <div>
          {qs.map(([q, a], i) => (
            <div className="faq-item" key={q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.01em' }}>{q}</span>
                <span className={`faq-chev${open === i ? ' open' : ''}`}><Icon name="plus" size={20} color="var(--sky)" /></span>
              </button>
              <div className={`faq-a${open === i ? ' open' : ''}`} style={{ maxHeight: open === i ? 240 : 0 }}>
                <p style={{ margin: '0 0 26px', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-body)', maxWidth: 640 }}>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- CTA ---------- */
function CTA({ go }) {
  return (
    <Section dark id="cta" style={{ textAlign: 'center', overflow: 'hidden' }}>
      <Reveal>
        <Eyebrow color="var(--gold)">Ready to build?</Eyebrow>
        <h2 style={{ margin: '16px auto 0', maxWidth: 640, fontSize: 'clamp(2rem, 1.3rem + 2.6vw, 3.1rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--offwhite)', lineHeight: 1.08, textWrap: 'balance' }}>
          One call. Something real built.{' '}
          <span style={{ color: 'var(--gold)' }}>We start on day one.</span>
        </h2>
        <p style={{ margin: '18px auto 0', maxWidth: 480, fontSize: 16.5, color: 'var(--text-on-dark-muted)', lineHeight: 1.65 }}>
          You do not need a dev team. You need a laptop, Claude Code, and one workflow you are tired of doing manually.
        </p>
        <div style={{ marginTop: 36 }}>
          <Button size="lg" variant="onDark" onClick={() => window.open(DISCOVERY_URL, '_blank')} iconRight={<Icon name="calendar" size={18} />}>
            Book a discovery call
          </Button>
        </div>
        <p style={{ margin: '20px auto 0', fontSize: 13, color: 'var(--text-on-dark-muted)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <Icon name="shield-check" size={14} color="var(--text-on-dark-muted)" /> Every call stands alone. No lock-in.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- Nav ---------- */
function Nav({ go, onBook }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [openM, setOpenM] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['About', 'about.html'], ['How it works', 'how-it-works.html']];
  return (
    <nav className="nav" style={{
      background: scrolled ? 'color-mix(in srgb, var(--paper) 88%, transparent)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-xs)' : 'none',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '14px var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        <a href="index.html" style={{ textDecoration: 'none', lineHeight: 0 }}><Logo size={22} /></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 26 }} className="nav-links">
          {links.map(([t, href]) => <a key={href} href={href} className="nav-link">{t}</a>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="nav-cta-wide"><a href="book.html"><Button size="sm">Book a Call</Button></a></span>
          <button className="nav-burger" onClick={() => setOpenM(!openM)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
            <Icon name={openM ? 'x' : 'menu'} size={24} color="var(--navy)" />
          </button>
        </div>
      </div>
      {openM && (
        <div style={{ borderTop: '1px solid var(--line)', background: 'var(--paper)', padding: '12px var(--gutter) 20px' }} className="mobile-menu">
          {links.map(([t, href]) => (
            <a key={href} href={href} style={{ display: 'block', padding: '12px 0', fontSize: 16, fontWeight: 600, color: 'var(--navy)', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}>{t}</a>
          ))}
          <div style={{ marginTop: 16 }}>
            <a href="book.html"><Button style={{ width: '100%', justifyContent: 'center' }}>Book a Call</Button></a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ---------- Footer ---------- */
function Footer({ onBook }) {
  const colLabel = { fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 16px' };
  const socials = [
    ['play', 'https://www.youtube.com/@johnsonjoseph', 'YouTube'],
    ['book-open', 'https://johnsonjoseph2.substack.com', 'Substack'],
    ['at-sign', 'mailto:johnson@operatorsden.com', 'Email'],
  ];
  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--text-on-dark)', padding: '64px var(--gutter) 36px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr', gap: 36 }} className="footer-grid">
          <div>
            <Logo variant="reversed" size={22} />
            <p style={{ margin: '18px 0 0', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 260 }}>Where you build your business to run itself.</p>
            <div style={{ marginTop: 20 }}><Badge tone="running" live>System Running</Badge></div>
          </div>
          <div>
            <p style={colLabel}>Product</p>
            {[['How it works', 'how-it-works.html'], ['About', 'about.html'], ['Book a call', 'book.html']].map(([t, href]) => (
              <a key={t} href={href} style={{ display: 'block', fontSize: 14.5, color: 'var(--text-on-dark-muted)', padding: '7px 0', textDecoration: 'none' }} className="footer-link">{t}</a>
            ))}
            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} style={{ display: 'block', fontSize: 14.5, color: 'var(--text-on-dark-muted)', padding: '7px 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }} className="footer-link">FAQ</button>
          </div>
          <div>
            <p style={colLabel}>Industries</p>
            {['Real Estate', 'Traders', 'Creators', 'Service businesses'].map(t => (
              <div key={t} style={{ fontSize: 14.5, color: 'var(--text-on-dark-muted)', padding: '7px 0' }}>
                {t}<span style={{ fontSize: 11, marginLeft: 6, color: 'var(--gold)' }}>soon</span>
              </div>
            ))}
          </div>
          <div>
            <p style={colLabel}>Get started</p>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', margin: '0 0 16px' }}>One call. A screen share and a conversation. Something real built.</p>
            <a href="book.html"><Button variant="onDark" size="sm">Book a Call</Button></a>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border-on-dark)', display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>© 2026 OperatorsDen. Built in Los Angeles.</span>
          <div style={{ display: 'flex', gap: 18 }}>
            {socials.map(([ic, href, label]) => (
              <a key={ic} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" title={label} style={{ color: 'var(--text-on-dark-muted)', display: 'inline-flex', alignItems: 'center' }}>
                <Icon name={ic} size={17} color="var(--text-on-dark-muted)" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Offer, Sessions, Ladder, ODAbout, FAQ, CTA, Nav, Footer });
