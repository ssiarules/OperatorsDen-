/* OperatorsDen — shared multi-page nav + footer (used on all inner pages) */

function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openM, setOpenM] = React.useState(false);
  const current = window.location.pathname.split('/').pop() || 'index.html';

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['About', 'about.html'],
    ['How it works', 'how-it-works.html'],
  ];

  return (
    <nav className="nav" style={{
      background: scrolled ? 'color-mix(in srgb, var(--paper) 88%, transparent)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-xs)' : 'none',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '14px var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        <a href="index.html" style={{ textDecoration: 'none', lineHeight: 0 }}><Logo size={22} /></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 26 }} className="nav-links">
          {links.map(([t, href]) => (
            <a key={href} href={href} className="nav-link"
              style={{ fontWeight: current === href ? 700 : 600, color: current === href ? 'var(--navy)' : undefined }}>
              {t}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="nav-cta-wide">
            <a href="https://cal.com/operatorsden/30min?overlayCalendar=true" target="_blank" rel="noreferrer"><Button size="sm">Book a Call</Button></a>
          </span>
          <button className="nav-burger" onClick={() => setOpenM(!openM)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
            <Icon name={openM ? 'x' : 'menu'} size={24} color="var(--navy)" />
          </button>
        </div>
      </div>
      {openM && (
        <div style={{ borderTop: '1px solid var(--line)', background: 'var(--paper)', padding: '12px var(--gutter) 20px' }}>
          {links.map(([t, href]) => (
            <a key={href} href={href} style={{ display: 'block', padding: '12px 0', fontSize: 16, fontWeight: 600, color: 'var(--navy)', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}>{t}</a>
          ))}
          <div style={{ marginTop: 16 }}>
            <a href="https://cal.com/operatorsden/30min?overlayCalendar=true" target="_blank" rel="noreferrer"><Button style={{ width: '100%', justifyContent: 'center' }}>Book a Call</Button></a>
          </div>
        </div>
      )}
    </nav>
  );
}

function SiteFooter() {
  useLucide();
  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--text-on-dark)', padding: '64px var(--gutter) 36px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.4fr', gap: 36 }} className="footer-grid">
          <div>
            <Logo variant="reversed" size={22} />
            <p style={{ margin: '18px 0 0', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', maxWidth: 260 }}>
              Where you build your business to run itself.
            </p>
            <div style={{ marginTop: 20 }}><Badge tone="running" live>System Running</Badge></div>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 16px' }}>Product</p>
            {[['How it works', 'how-it-works.html'], ['About', 'about.html'], ['Book a call', 'book.html']].map(([t, href]) => (
              <a key={t} href={href} style={{ display: 'block', fontSize: 14.5, color: 'var(--text-on-dark-muted)', padding: '7px 0' }} className="footer-link">{t}</a>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 16px' }}>Industries</p>
            {['Real Estate', 'Traders', 'Creators'].map(t => (
              <div key={t} style={{ fontSize: 14.5, color: 'var(--text-on-dark-muted)', padding: '7px 0' }}>
                {t}<span style={{ fontSize: 11, marginLeft: 6, color: 'var(--gold)' }}>soon</span>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 16px' }}>Get started</p>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', margin: '0 0 16px' }}>
              One call. A screen share and a conversation. Something real built.
            </p>
            <a href="https://cal.com/operatorsden/30min?overlayCalendar=true" target="_blank" rel="noreferrer"><Button variant="onDark" size="sm">Book a Call</Button></a>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>© 2026 OperatorsDen. Built in Los Angeles.</span>
          <div style={{ display: 'flex', gap: 18 }}>
            {[
              ['play', 'https://www.youtube.com/@johnsonjoseph', 'YouTube'],
              ['book-open', 'https://johnsonjoseph2.substack.com', 'Substack'],
              ['at-sign', 'mailto:johnson@operatorsden.com', 'Email'],
            ].map(([ic, href, label]) => (
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

Object.assign(window, { SiteNav, SiteFooter });
