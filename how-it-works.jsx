/* OperatorsDen — How It Works page */

function HowItWorksPage() {
  useLucide();

  const h2 = (extra = {}) => ({
    fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.5rem)', fontWeight: 700,
    letterSpacing: '-0.015em', color: 'var(--navy)', lineHeight: 1.12,
    textWrap: 'balance', ...extra,
  });

  const sessions = [
    {
      num: '01', title: 'Know', color: 'var(--navy)', icon: 'book-open',
      body: 'The system learns your business cold. We map your tools and find where your time leaks. You leave with a working project folder capturing your business context, your first data source connected, and at least one workflow mapped for automation.',
    },
    {
      num: '02', title: 'Reach', color: 'var(--sky)', icon: 'plug',
      body: 'We wire your tools into a live foundation — calendar, email, CRM, whatever you run on. By the second call, something in your business is already running automatically.',
    },
    {
      num: '03', title: 'Do', color: 'var(--gold)', icon: 'zap',
      body: 'We build the first automation doing real work inside your workflow. Not a demo. Not a prototype. Something running inside your actual workflow, saving hours, not minutes.',
    },
    {
      num: '04', title: 'Run', color: 'var(--coral)', icon: 'infinity',
      body: 'We set the rhythm. You hand off the task. Laptop closed, it keeps going. Daily, weekly, monthly your system runs without you asking. This is the only result that matters.',
    },
  ];

  const ladder = [
    { title: 'Call', body: 'We map your highest-leverage automation together. You leave with something running.', icon: 'graduation-cap' },
    { title: 'Audit', body: 'We assess what you have built, what gaps remain, and what a focused project would deliver.', icon: 'clipboard-check' },
    { title: 'Project', body: 'A scoped engagement. One end-to-end workflow built and deployed.', icon: 'hammer' },
    { title: 'Retainer', body: 'We keep your system healthy and expanding. Monthly.', icon: 'repeat' },
  ];

  return (
    <div className="paper-grain" style={{ position: 'relative', minHeight: '100vh' }}>
      <SiteNav />

      {/* Hero */}
      <Section style={{ paddingTop: 'calc(var(--section-pad-y) + 40px)' }}>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 1.8rem + 2.5vw, 4rem)', fontWeight: 800,
            letterSpacing: '-0.025em', color: 'var(--navy)', lineHeight: 1.04,
            margin: '14px 0 0', textWrap: 'balance', maxWidth: 640,
          }}>
            Four calls.<br />One outcome.<br />
            <span style={{ color: 'var(--coral)' }}>Your system runs itself.</span>
          </h1>
        </Reveal>
        <Reveal delay={1}>
          <p style={{ margin: '20px 0 36px', fontSize: 17, lineHeight: 1.62, color: 'var(--text-body)', maxWidth: 520 }}>
            Every call builds on the last. By the fourth call, something in your business is running automatically while your laptop is closed. Stop whenever it is enough.
          </p>
          <a href="https://cal.com/operatorsden/30min?overlayCalendar=true" target="_blank" rel="noreferrer">
            <Button iconRight={<Icon name="arrow-right" size={17} />}>Book a Call</Button>
          </a>
        </Reveal>
      </Section>

      {/* Four Sessions */}
      <Section recessed id="sessions">
        <Reveal style={{ marginBottom: 40 }}>
          <Eyebrow>The calls</Eyebrow>
          <h2 style={h2({ margin: '14px 0 0' })}>From zero to something that runs itself</h2>
          <p style={{ margin: '12px 0 0', fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-body)' }}>
            Each call ends with something real built. Stop whenever it is enough.
          </p>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {sessions.map(({ num, title, color, body, icon }, i) => (
            <Reveal key={num} delay={i + 1}>
              <Card interactive style={{
                display: 'grid', gridTemplateColumns: '72px 1fr', gap: 28,
                alignItems: 'start', borderLeft: `4px solid ${color}`, borderTop: '1px solid var(--line)',
              }}>
                <div style={{ textAlign: 'center', paddingTop: 4 }}>
                  <div style={{ fontSize: 30, fontWeight: 800, color, lineHeight: 1 }}>{num}</div>
                  <div style={{ marginTop: 12 }}>
                    <Icon name={icon} size={20} color={color} />
                  </div>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 10px', fontSize: 21, fontWeight: 700, color: 'var(--navy)' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-body)' }}>{body}</p>
                  <div style={{ marginTop: 16 }}>
                    <span style={{
                      display: 'inline-block', fontSize: 12, fontWeight: 700,
                      padding: '5px 14px', borderRadius: 'var(--radius-pill)',
                      background: `color-mix(in srgb, ${color} 10%, transparent)`, color,
                    }}>60 minutes</span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The Ladder */}
      <Section dark id="ladder">
        <Reveal style={{ marginBottom: 38 }}>
          <Eyebrow style={{ color: 'var(--gold)' }}>The ladder</Eyebrow>
          <h2 style={h2({ margin: '14px 0 0', color: 'var(--offwhite)' })}>Call → Audit → Project → Retainer</h2>
          <p style={{ margin: '12px 0 0', fontSize: 16.5, color: 'var(--text-on-dark-muted)' }}>
            Start with a call. The ladder takes care of itself.
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {ladder.map(({ title, body, icon }, i) => (
            <Reveal key={title} delay={i + 1}>
              <div className="tile" style={{
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 'var(--radius-lg)', padding: 24, height: '100%',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--sky)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <Icon name={icon} size={18} color="var(--text-on-dark-muted)" />
                </div>
                <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 700, color: 'var(--offwhite)' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-on-dark-muted)' }}>{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={5}>
          <div style={{ marginTop: 40 }}>
            <a href="https://cal.com/operatorsden/30min?overlayCalendar=true" target="_blank" rel="noreferrer">
              <Button variant="onDark" iconRight={<Icon name="arrow-right" size={17} />}>Book a Call</Button>
            </a>
          </div>
        </Reveal>
      </Section>

      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HowItWorksPage />);
