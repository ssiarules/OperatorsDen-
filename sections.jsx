/* OperatorsDen — content sections (part 1): Hero variants, What-Is, Four Cs, Ladder */

/* ---------- Animated terminal (the 7:15 report building itself) ---------- */
function Terminal({ compact = false }) {
  const lines = React.useMemo(() => ([
    { t: '07:15  market-wind › building daily report', c: 'var(--gold)', pre: '' },
    { t: 'pulling 11 tickers · pre-market gaps', c: 'var(--text-on-dark-muted)', pre: '→ ' },
    { t: 'scoring overnight news · risk flags', c: 'var(--text-on-dark-muted)', pre: '→ ' },
    { t: 'drafting + formatting · sending to inbox', c: 'var(--text-on-dark-muted)', pre: '→ ' },
    { t: 'delivered · 0 hands touched it', c: '#5fd08a', pre: '✓ ' },
  ]), []);
  const [shown, setShown] = React.useState(0);
  const [typed, setTyped] = React.useState('');
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let timers = [];
    timers.push(setTimeout(run, 500));
    function run() {
      let li = 0;
      function nextLine() {
        if (li >= lines.length) {
          // loop after a pause
          timers.push(setTimeout(() => { setShown(0); setTyped(''); li = 0; nextLine(); }, 3800));
          return;
        }
        const full = lines[li].pre + lines[li].t;
        let ci = 0;
        function typeChar() {
          ci++;
          setTyped(full.slice(0, ci));
          if (ci < full.length) {
            timers.push(setTimeout(typeChar, 16 + Math.random() * 22));
          } else {
            setShown((s) => s + 1);
            setTyped('');
            li++;
            timers.push(setTimeout(nextLine, 360));
          }
        }
        typeChar();
      }
      nextLine();
    }
    return () => { timers.forEach(clearTimeout); };
  }, [lines]);

  return (
    <div ref={ref} style={{ background: 'var(--navy)', borderRadius: 'var(--radius-xl)', padding: 8, boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-on-dark)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px' }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ marginLeft: 10, fontSize: 12, color: 'var(--text-on-dark-muted)', fontFamily: 'var(--font-mono)' }}>JJ_OS — market-wind.skill</span>
        <span style={{ marginLeft: 'auto' }}><Badge tone="running" live>System Running</Badge></span>
      </div>
      <div style={{ background: 'var(--bg-dark-recessed)', borderRadius: 'var(--radius-md)', padding: compact ? 16 : 22, fontFamily: 'var(--font-mono)', fontSize: compact ? 12.5 : 13.5, lineHeight: 1.85, color: 'var(--offwhite)', minHeight: compact ? 150 : 176 }}>
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} style={{ color: l.c }}>{l.pre}{l.t}</div>
        ))}
        {shown < lines.length && (
          <div style={{ color: lines[shown].c }}>{typed}<span className="cursor" /></div>
        )}
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero({ go, layout, accent }) {
  const emph = accent === 'gold' ? 'var(--gold)' : 'var(--coral)';
  const headline = (em) => (
    <>Your business runs on what you know.{' '}
      <span style={{ color: em, position: 'relative', whiteSpace: 'normal' }}>We wire it into an AI system that runs the work while you stay in control.</span>
    </>
  );
  const sub = 'The Operators Den installs an AI operating system, one 60-minute session at a time. No dev team. No subscriptions. Just a system mapped to how you actually think and operate.';

  const ctas = (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
      <a href="https://cal.com/operatorsden/30min?overlayCalendar=true" target="_blank" rel="noreferrer"><Button size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Book a Call</Button></a>
      <a href="how-it-works.html"><Button size="lg" variant="secondary">See how it works</Button></a>
    </div>
  );

  const trust = (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 22px', marginTop: 30, alignItems: 'center', fontSize: 13.5, color: 'var(--text-muted)', fontWeight: 500 }}>
      {['Bring your own Claude account', 'Every session stands alone', 'Built live, with you'].map((t) => (
        <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          <Icon name="check" size={15} color="var(--coral)" /> {t}
        </span>
      ))}
    </div>
  );

  // ---------- SPLIT ----------
  if (layout === 'split') {
    return (
      <Section style={{ paddingTop: 64, paddingBottom: 56 }} inner={{}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center' }} className="hero-grid">
          <div>
            <Reveal><Badge tone="clients" live>Currently Taking Clients</Badge></Reveal>
            <Reveal delay={1}><h1 style={hStyle()}>{headline(emph)}</h1></Reveal>
            <Reveal delay={2}><p style={pStyle()}>{sub}</p></Reveal>
            <Reveal delay={3} style={{ marginTop: 32 }}>{ctas}{trust}</Reveal>
          </div>
          <Reveal delay={2}><Terminal /></Reveal>
        </div>
      </Section>
    );
  }

  // ---------- EDITORIAL (centered) ----------
  if (layout === 'editorial') {
    return (
      <Section style={{ paddingTop: 72, paddingBottom: 44, textAlign: 'center' }} narrow>
        <Reveal><Badge tone="clients" live>Currently Taking Clients</Badge></Reveal>
        <Reveal delay={1}>
          <h1 style={{ ...hStyle(), fontSize: 'clamp(2.7rem, 1.3rem + 5vw, 4.7rem)', maxWidth: 920, margin: '24px auto 0' }}>{headline(emph)}</h1>
        </Reveal>
        <Reveal delay={2}><p style={{ ...pStyle(), margin: '26px auto 0', maxWidth: 640 }}>{sub}</p></Reveal>
        <Reveal delay={3} style={{ marginTop: 34, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {ctas}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 22px', marginTop: 26, fontSize: 13.5, color: 'var(--text-muted)', fontWeight: 500 }}>
            {['Bring your own Claude account', 'Every session stands alone', 'Built live, with you'].map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><Icon name="check" size={15} color="var(--coral)" /> {t}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={2} style={{ marginTop: 52, maxWidth: 860, marginLeft: 'auto', marginRight: 'auto' }}><Terminal /></Reveal>
      </Section>
    );
  }

  // ---------- MOSAIC ----------
  const tiles = [
    ['context', 'Know', 'Learns your business cold', 'brain'],
    ['connections', 'Reach', 'Wired to your real tools', 'cable'],
    ['capabilities', 'Do', 'Does the work without you', 'zap'],
    ['cadence', 'Run', 'Runs daily. Laptop closed.', 'repeat'],
  ];
  return (
    <Section style={{ paddingTop: 64, paddingBottom: 56 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center' }} className="hero-grid">
        <div>
          <Reveal><Badge tone="clients" live>Currently Taking Clients</Badge></Reveal>
          <Reveal delay={1}><h1 style={hStyle()}>{headline(emph)}</h1></Reveal>
          <Reveal delay={2}><p style={pStyle()}>{sub}</p></Reveal>
          <Reveal delay={3} style={{ marginTop: 32 }}>{ctas}{trust}</Reveal>
        </div>
        <Reveal delay={2}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {tiles.map(([key, title, body, icon], i) => (
              <div key={key} className="tile" style={{
                background: 'var(--white)', border: '1px solid var(--line)', borderTop: `3px solid var(--c-${key})`,
                borderRadius: 'var(--radius-lg)', padding: 22, boxShadow: 'var(--shadow-sm)',
                transform: i % 2 ? 'translateY(18px)' : 'none',
              }}>
                <span style={{ display: 'inline-flex', width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, var(--c-${key}) 12%, white)` }}>
                  <Icon name={icon} size={20} color={`var(--c-${key})`} />
                </span>
                <h3 style={{ margin: '14px 0 4px', fontSize: 16, fontWeight: 700, color: 'var(--navy)' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function hStyle() {
  return { margin: '22px 0 0', fontSize: 'clamp(2.5rem, 1.4rem + 4.2vw, 4.1rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.04, color: 'var(--navy)', textWrap: 'balance' };
}
function pStyle() {
  return { margin: '24px 0 0', fontSize: 'clamp(1.05rem, 1rem + 0.4vw, 1.2rem)', lineHeight: 1.62, color: 'var(--text-body)', maxWidth: 560, textWrap: 'pretty' };
}

/* ---------- Logo marquee strip ---------- */
function ProofStrip() {
  const items = ['Market report at 7:15 AM', 'Trading journal in 20 min', 'Client reports that write themselves', 'Lead follow-up handled for you', 'Weekly research, no prompt', 'Inbox triaged before coffee'];
  const row = [...items, ...items];
  return (
    <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', background: 'var(--white)', padding: '18px 0', overflow: 'hidden' }} className="marquee-wrap">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 14, fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)' }} />{t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- What this is (habit vs system) ---------- */
function WhatIs() {
  const habitTags = ['re-explains daily', 'forgets context', 'always manual'];
  const systemTags = ['remembers everything', 'stays connected', 'runs automatically'];
  const examples = [
    ['mail', 'Market report', 'Emails you at 7:15 AM every weekday, written, formatted, and sent without your hands touching it.'],
    ['trending-up', 'Trading journal', 'Pulls your trade data, scores your decisions against your own rules, and drafts the analysis.'],
    ['file-text', 'Client report', 'Assembles itself from your session notes and delivers a monthly summary before you open your laptop.'],
  ];

  return (
    <Section dark id="what" style={{ overflow: 'hidden', background: '#1A1714' }}>
      <Reveal style={{ maxWidth: 760 }}>
        <Eyebrow color="var(--gold)">What this is</Eyebrow>
        <h2 style={{ margin: '14px 0 0', fontSize: 'clamp(1.9rem, 1.3rem + 2vw, 2.7rem)', fontWeight: 700, letterSpacing: '-0.015em', color: 'var(--offwhite)', lineHeight: 1.12, textWrap: 'balance' }}>
          Most people use AI like a search engine.{' '}
          <span style={{ color: 'var(--gold)' }}>That is a habit, not a system.</span>
        </h2>
        <p style={{ margin: '22px 0 0', fontSize: 17, lineHeight: 1.65, color: 'var(--text-on-dark-muted)', maxWidth: 660 }}>
          A real system is different. It captures your business context, your workflows, your knowledge, your data, and runs the execution so you can focus on decisions. It does not forget between conversations. It does not need to be re-explained every Monday morning.
        </p>
      </Reveal>

      {/* contrast pair — coral = bad, gold = good */}
      <div className="whatis-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 0, marginTop: 44, alignItems: 'stretch' }}>
        <Reveal delay={1}>
          <div style={{
            background: 'rgba(235,90,52,0.06)', border: '1px solid rgba(235,90,52,0.22)',
            borderTop: '3px solid var(--coral)', borderRadius: 'var(--radius-lg)',
            padding: 28, height: '100%',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(235,90,52,0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="x" size={15} color="var(--coral)" />
              </span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--coral)' }}>A habit</span>
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--text-on-dark-muted)' }}>
              Open it. Ask a question. Copy-paste the answer. Close it. Tomorrow you start from scratch and explain everything again.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {habitTags.map((t) => (
                <span key={t} style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'rgba(235,90,52,0.6)', border: '1px solid rgba(235,90,52,0.2)', borderRadius: 100, padding: '4px 12px', textDecoration: 'line-through' }}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* VS badge */}
        <div className="whatis-vs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 18px', flexShrink: 0 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--navy)', border: '1px solid var(--border-on-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: 'var(--text-on-dark-muted)', letterSpacing: '0.08em' }}>VS</div>
        </div>

        <Reveal delay={2}>
          <div style={{
            background: 'rgba(250,179,40,0.07)', border: '1px solid rgba(250,179,40,0.28)',
            borderTop: '3px solid var(--gold)', borderRadius: 'var(--radius-lg)',
            padding: 28, height: '100%', boxShadow: '0 0 48px rgba(250,179,40,0.07)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(250,179,40,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="check" size={15} color="var(--gold)" />
              </span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)' }}>A system</span>
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'var(--offwhite)' }}>
              Lives on your machine. Knows your business. Wired to your calendar, email, and data. Runs things on its own, before you ask.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {systemTags.map((t) => (
                <span key={t} style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--gold)', background: 'rgba(250,179,40,0.12)', border: '1px solid rgba(250,179,40,0.3)', borderRadius: 100, padding: '4px 12px' }}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* in practice */}
      <Reveal style={{ marginTop: 48 }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>What one looks like in practice</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {examples.map(([icon, title, text]) => (
            <div key={icon} style={{ background: 'var(--bg-dark-recessed)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
              <div style={{ display: 'inline-flex', width: 40, height: 40, borderRadius: 10, background: 'rgba(250,179,40,0.14)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon name={icon} size={20} color="var(--gold)" />
              </div>
              <p style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 700, color: 'var(--gold)', letterSpacing: '-0.01em' }}>{title}</p>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--offwhite)' }}>{text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: 14.5, fontWeight: 700, color: 'var(--text-on-dark-muted)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <Icon name="user" size={15} color="var(--text-on-dark-muted)" /> One operator. No dev team.
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------- Four Cs ---------- */
function FourCs() {
  const data = [
    ['context', '01', 'Know', 'The system learns your business — we map your tools and find where your time leaks.', 'brain'],
    ['connections', '02', 'Reach', 'We wire your tools into a live foundation — calendar, email, CRM, whatever you run on.', 'cable'],
    ['capabilities', '03', 'Do', 'We build the first automation doing real work inside your workflow.', 'zap'],
    ['cadence', '04', 'Run', 'We set the rhythm. You hand off the task. Laptop closed, it keeps going.', 'repeat'],
  ];
  return (
    <Section recessed id="framework">
      <Reveal style={{ textAlign: 'center', marginBottom: 42 }}>
        <Eyebrow>The framework</Eyebrow>
        <h2 style={h2Style({ margin: '14px auto 0', maxWidth: 720 })}>Everything we build runs on Know, Reach, Do, Run</h2>
        <p style={{ margin: '14px auto 0', maxWidth: 560, fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-body)' }}>A complete system answers all four. We build toward that together, one session at a time.</p>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
        {data.map(([key, num, title, body, icon], i) => (
          <Reveal key={key} delay={(i % 4) + 1}>
            <Card accent={key} interactive padding={26} style={{ height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ display: 'inline-flex', width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, var(--c-${key}) 12%, white)` }}>
                  <Icon name={icon} size={20} color={`var(--c-${key})`} />
                </span>
                <span style={{ fontSize: 13, fontWeight: 800, color: `var(--c-${key})`, opacity: 0.4 }}>{num}</span>
              </div>
              <h3 style={{ margin: '18px 0 0', fontSize: 18, fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.01em' }}>{title}</h3>
              <p style={{ margin: '8px 0 0', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)' }}>{body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function h2Style(extra = {}) {
  return { fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.015em', color: 'var(--navy)', lineHeight: 1.12, textWrap: 'balance', ...extra };
}

Object.assign(window, { Hero, Terminal, ProofStrip, WhatIs, FourCs, h2Style });
