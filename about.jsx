/* OperatorsDen — About page (service-focused: problem, solution, offering) */

function AboutPage() {
  useLucide();

  const h2 = (extra = {}) => ({
    fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.5rem)', fontWeight: 700,
    letterSpacing: '-0.015em', color: 'var(--navy)', lineHeight: 1.12,
    textWrap: 'balance', ...extra,
  });

  const problems = [
    { icon: 'refresh-cw', title: 'Same tasks. Every week.', body: 'Reports, follow-ups, research, summaries. The work does not change — only who has to do it.' },
    { icon: 'brain', title: 'Knowledge stuck in your head.', body: 'You know how everything should run. Your tools do not. Every new conversation starts from scratch.' },
    { icon: 'clock', title: 'Hours on things that should run themselves.', body: 'The average operator spends 8 to 12 hours a week on workflows that could run automatically with the right setup.' },
  ];

  const differentiators = [
    { icon: 'hammer', label: 'vs. courses', title: 'We build. We do not teach.', body: 'You leave every session with something real installed and running — not a certificate and a to-do list.' },
    { icon: 'key', label: 'vs. consultants', title: 'You own it when we are done.', body: 'No black box. No dependency on us to maintain it. The system lives on your machine and you know how it works.' },
    { icon: 'cpu', label: 'vs. tools', title: 'Mapped to how you actually operate.', body: 'Off-the-shelf tools are built for everyone. We build around your workflows, your data, your voice.' },
  ];

  return (
    <div className="paper-grain" style={{ position: 'relative', minHeight: '100vh' }}>
      <SiteNav />

      {/* Hero */}
      <Section style={{ paddingTop: 'calc(var(--section-pad-y) + 40px)' }}>
        <Reveal>
          <Eyebrow>About OperatorsDen</Eyebrow>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 1.8rem + 2.5vw, 4rem)', fontWeight: 800,
            letterSpacing: '-0.025em', color: 'var(--navy)', lineHeight: 1.04,
            margin: '14px 0 0', textWrap: 'balance', maxWidth: 680,
          }}>
            A hands-on practice for operators who are ready to stop doing manually{' '}
            <span style={{ color: 'var(--coral)' }}>what should already be running automatically.</span>
          </h1>
        </Reveal>
        <Reveal delay={1}>
          <p style={{ margin: '22px 0 0', fontSize: 17, lineHeight: 1.65, color: 'var(--text-body)', maxWidth: 580 }}>
            We install AI operating systems built around how you actually think and run your business. Not demos. Not tutorials. A real system, mapped to your real workflows, built live with you. We work with individual operators, teams, and companies.
          </p>
        </Reveal>
      </Section>

      {/* The Problem */}
      <Section recessed>
        <Reveal style={{ marginBottom: 36 }}>
          <Eyebrow>The problem</Eyebrow>
          <h2 style={h2({ margin: '14px 0 0', maxWidth: 600 })}>
            Most operators are leaving hours on the table every week.
          </h2>
          <p style={{ margin: '14px 0 0', fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-body)', maxWidth: 600 }}>
            Not because they are not working hard. Because the work that should be automated has not been automated yet.
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {problems.map(({ icon, title, body }, i) => (
            <Reveal key={title} delay={i + 1}>
              <Card interactive accent={['context', 'connections', 'cadence'][i]} style={{ height: '100%' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--bg-recessed)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={icon} size={19} color="var(--navy)" />
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: 'var(--navy)' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The Solution */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="about-grid">
          <Reveal>
            <Eyebrow>The solution</Eyebrow>
            <h2 style={h2({ margin: '14px 0 24px' })}>
              An AI operating system built around your business.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 18 }}>
              An AI operating system is not a chatbot. It captures your business context permanently — your workflows, your knowledge, your rules — and runs automated tasks on a schedule. It does not forget between conversations. It does not need to be re-explained every Monday morning.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 28 }}>
              If you have workflows that repeat and knowledge that lives in your head, you have enough to build a system around them.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Works from your machine — no SaaS subscription',
                'Captures your business context once, references it forever',
                'Runs daily and weekly tasks automatically, on schedule',
                'Every session builds toward a fully autonomous system',
              ].map(t => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ flexShrink: 0, marginTop: 2, width: 20, height: 20, borderRadius: '50%', background: 'var(--coral-050)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="check" size={12} color="var(--coral)" />
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-strong)' }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-xl)', padding: 32, display: 'flex', flexDirection: 'column', gap: 0 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 20px' }}>What gets automated</p>
              {[
                ['mail', 'Daily reports', 'Written, formatted, sent automatically on schedule.'],
                ['trending-up', 'Performance tracking', 'Data pulled, scored, and summarized without manual entry.'],
                ['file-text', 'Client summaries', 'Assembled from session notes before you open your laptop.'],
                ['send', 'Follow-up sequences', 'Drafted and queued based on your context and voice.'],
              ].map(([icon, title, body]) => (
                <div key={title} style={{ display: 'flex', gap: 14, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: 8, background: 'rgba(250,179,40,0.14)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={icon} size={16} color="var(--gold)" />
                  </span>
                  <div>
                    <p style={{ margin: '0 0 2px', fontSize: 14, fontWeight: 700, color: 'var(--offwhite)' }}>{title}</p>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--text-on-dark-muted)' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* How we are different */}
      <Section recessed>
        <Reveal style={{ marginBottom: 36 }}>
          <Eyebrow>How this is different</Eyebrow>
          <h2 style={h2({ margin: '14px 0 0', maxWidth: 560 })}>
            Not a course. Not a consultant. Not a tool.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {differentiators.map(({ icon, label, title, body }, i) => (
            <Reveal key={title} delay={i + 1}>
              <Card interactive style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--bg-recessed)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={icon} size={17} color="var(--sky)" />
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: 'var(--navy)' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Discovery Call CTA */}
      <Section dark style={{ textAlign: 'center' }}>
        <Reveal>
          <Eyebrow style={{ color: 'var(--gold)' }}>Ready to build?</Eyebrow>
          <h2 style={{
            margin: '14px auto 0', maxWidth: 560,
            fontSize: 'clamp(1.8rem, 1.2rem + 2vw, 2.4rem)', fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--offwhite)', lineHeight: 1.1, textWrap: 'balance',
          }}>
            Book a free discovery call.{' '}
            <span style={{ color: 'var(--gold)' }}>We find your first automation together.</span>
          </h2>
          <p style={{ margin: '16px auto 0', maxWidth: 460, fontSize: 16, color: 'var(--text-on-dark-muted)', lineHeight: 1.65 }}>
            30 minutes. No pitch. We map your highest-leverage workflow and you leave knowing exactly what to build first.
          </p>
          <div style={{ marginTop: 36 }}>
            <a href="https://cal.com/operatorsden/30min?overlayCalendar=true" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <Button size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
                Book a Discovery Call — Free
              </Button>
            </a>
          </div>
        </Reveal>
      </Section>

      <SiteFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage />);
