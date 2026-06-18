/* OperatorsDen UI primitives — built on DS tokens, exported to window. */

function Logo({ variant = 'primary', subtext = false, size = 26 }) {
  const reversed = variant === 'reversed';
  const badge = Math.round(size * 1.38);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.42 }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: badge, height: badge, borderRadius: Math.max(8, badge * 0.22),
        background: 'var(--gold)', color: 'var(--navy)', fontWeight: 800,
        fontSize: badge * 0.46, letterSpacing: '-0.05em', flexShrink: 0,
      }}>OD</span>
      <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontWeight: 700, fontSize: size, letterSpacing: '-0.025em' }}>
          <span style={{ color: reversed ? 'var(--offwhite)' : 'var(--sky)' }}>Operators</span>
          <span style={{ color: reversed ? 'var(--gold)' : 'var(--navy)' }}>Den</span>
        </span>
        {subtext && <span style={{ fontWeight: 700, fontSize: size * 0.32, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sky)', marginTop: size * 0.18 }}>AI Operating System</span>}
      </span>
    </span>
  );
}

function Button({ children, variant = 'primary', size = 'md', onClick, iconRight, iconLeft, style = {}, type = 'button' }) {
  const sizes = { sm: '9px 18px', md: '13px 26px', lg: '16px 32px' };
  const fs = { sm: 13, md: 15, lg: 16 };
  const variants = {
    primary: { background: 'var(--action-primary)', color: '#fff', border: 'none', boxShadow: 'var(--shadow-cta)' },
    dark: { background: 'var(--navy)', color: 'var(--offwhite)', border: 'none', boxShadow: 'var(--shadow-sm)' },
    secondary: { background: 'transparent', color: 'var(--sky)', border: '2px solid var(--sky)' },
    ghost: { background: 'var(--white)', color: 'var(--text-strong)', border: '1px solid var(--line)' },
    onDark: { background: 'var(--offwhite)', color: 'var(--navy)', border: 'none', boxShadow: '0 6px 18px rgba(0,0,0,0.18)' },
  };
  const [h, setH] = React.useState(false);
  const v = variants[variant];
  const hoverBg = {
    primary: 'var(--coral-600)', dark: 'var(--navy-600)', secondary: 'var(--sky-050)',
    ghost: 'var(--paper)', onDark: '#fff',
  }[variant];
  return (
    <button type={type} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
        fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: fs[size], lineHeight: 1,
        padding: sizes[size], borderRadius: 'var(--radius-pill)', cursor: 'pointer',
        transition: 'all var(--dur-base) var(--ease-out)', whiteSpace: 'nowrap', ...v,
        background: h ? hoverBg : v.background,
        boxShadow: h && variant === 'primary' ? 'var(--shadow-cta-hover)' : v.boxShadow,
        transform: h ? 'translateY(-1px)' : 'none',
        ...style,
      }}>
      {iconLeft}{children}{iconRight}
    </button>
  );
}

function Badge({ children, tone = 'running', dot = true, live = false }) {
  const tones = {
    running: ['var(--status-running-bg)', 'var(--status-running-fg)', 'var(--status-running-dot)'],
    clients: ['var(--status-clients-bg)', 'var(--status-clients-fg)', 'var(--status-clients-dot)'],
    session: ['var(--status-session-bg)', 'var(--status-session-fg)', 'var(--status-session-dot)'],
    neutral: ['var(--paper-deep)', 'var(--ink-700)', 'var(--ink-400)'],
  };
  const [bg, fg, d] = tones[tone] || tones.running;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: bg, color: fg, fontWeight: 700, fontSize: 13, padding: '7px 14px 7px 12px', borderRadius: 'var(--radius-pill)', lineHeight: 1, whiteSpace: 'nowrap' }}>
      <span className={live ? 'live-dot' : ''} style={{ width: 7, height: 7, borderRadius: '50%', background: d, boxShadow: live ? 'none' : `0 0 0 3px color-mix(in srgb, ${d} 20%, transparent)` }} />
      {children}
    </span>
  );
}

function Eyebrow({ children, color = 'var(--sky)', style = {} }) {
  return <span style={{ display: 'inline-block', fontWeight: 700, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color, ...style }}>{children}</span>;
}

function Card({ children, accent, interactive, padding = 32, style = {}, className = '' }) {
  const map = { context: 'var(--navy)', connections: 'var(--sky)', capabilities: 'var(--gold)', cadence: 'var(--coral)' };
  const ac = accent ? (map[accent] || accent) : null;
  const [h, setH] = React.useState(false);
  return (
    <div className={className} onMouseEnter={() => interactive && setH(true)} onMouseLeave={() => interactive && setH(false)}
      style={{
        background: 'var(--white)', border: '1px solid var(--line)',
        borderTop: ac ? `3px solid ${ac}` : '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)', padding,
        boxShadow: h ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: h ? 'translateY(-3px)' : 'none',
        transition: 'all var(--dur-base) var(--ease-out)', ...style,
      }}>{children}</div>
  );
}

function Icon({ name, size = 20, color = 'currentColor', style = {} }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, display: 'inline-flex', ...style }}></i>;
}

// Re-run lucide after React commits so new <i data-lucide> get drawn
function useLucide(dep) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

function Section({ children, dark = false, narrow = false, recessed = false, style = {}, id, inner = {} }) {
  const bg = dark ? 'var(--navy)' : recessed ? 'var(--bg-recessed)' : 'transparent';
  return (
    <section id={id} style={{ position: 'relative', background: bg, padding: 'var(--section-pad-y) var(--gutter)', ...style }}>
      <div style={{ maxWidth: narrow ? 780 : 1180, margin: '0 auto', position: 'relative', ...inner }}>{children}</div>
    </section>
  );
}

// Scroll-reveal — pure CSS entrance animation (plays once on mount). JS-driven
// reveal (IO, class toggle, React state) all proved non-deterministic in the
// preview iframe; a CSS @keyframes with fill-mode `both` is bulletproof and
// always ends in the visible state.
function Reveal({ children, delay = 0, as = 'div', style = {}, className = '' }) {
  const Tag = as;
  // Resting state is VISIBLE (no fill mode) so that if the browser throttles or
  // declines the animation, content still shows. The keyframe adds a gentle
  // fade-up when it runs in a real focused tab.
  const anim = { animation: `odFadeUp 0.7s var(--ease-out) ${(delay * 0.08).toFixed(2)}s` };
  return <Tag className={className} style={{ ...anim, ...style }}>{children}</Tag>;
}

Object.assign(window, { Logo, Button, Badge, Eyebrow, Card, Icon, Section, Reveal, useLucide });
