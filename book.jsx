/* OperatorsDen — Book page
   Right side uses the existing Booking modal inline (always open state).
   To swap in Cal.com: replace the <BookingInline /> block with the Cal.com embed.
   Cal.com embed URL: update CAL_URL constant below. */

const CAL_URL = 'https://cal.com/operatorsden/30min?overlayCalendar=true';

function BookPage() {
  useLucide();
  const [booking, setBooking] = React.useState(false);

  const items = [
    'A working project folder capturing your business context',
    'Your first data source connected',
    'At least one workflow mapped for automation',
    'A clear picture of what to build next',
  ];

  const meta = [
    { icon: 'clock', text: '30 minutes' },
    { icon: 'video', text: 'Google Meet + screen share' },
  ];

  return (
    <div className="paper-grain" style={{ position: 'relative', minHeight: '100vh' }}>
      <SiteNav />

      <Section style={{ paddingTop: 'calc(var(--section-pad-y) + 40px)', minHeight: 'calc(100vh - 68px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'start' }} className="book-grid">

          {/* Left: info */}
          <Reveal>
            <Eyebrow>Book a call</Eyebrow>
            <h1 style={{
              fontSize: 'clamp(2rem, 1.4rem + 2vw, 3.2rem)', fontWeight: 800,
              letterSpacing: '-0.025em', color: 'var(--navy)', lineHeight: 1.06,
              margin: '14px 0 20px', textWrap: 'balance',
            }}>
              One call.<br />30 minutes.<br />
              <span style={{ color: 'var(--coral)' }}>We start on day one.</span>
            </h1>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-body)', marginBottom: 24, maxWidth: 380 }}>
              You do not need to know how to code. You need a laptop, a free Anthropic account, and one workflow you are tired of doing manually.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {items.map(t => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{
                    flexShrink: 0, marginTop: 2, width: 22, height: 22, borderRadius: '50%',
                    background: 'var(--coral-050)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name="check" size={13} color="var(--coral)" />
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-strong)' }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {meta.map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--text-muted)' }}>
                  <Icon name={icon} size={15} color="var(--text-muted)" /> {text}
                </div>
              ))}
            </div>
            <Badge tone="clients" live>Currently Taking Clients</Badge>
          </Reveal>

          {/* Right: booking UI */}
          <Reveal delay={1}>
            {CAL_URL ? (
              /* Cal.com embed — active when CAL_URL is set */
              <div style={{
                background: 'var(--white)', border: '1px solid var(--line)',
                borderRadius: 'var(--radius-xl)', overflow: 'hidden', minHeight: 640,
              }}>
                <iframe
                  src={`${CAL_URL}?embed=true&layout=month_view&theme=light`}
                  width="100%" height="640"
                  frameBorder="0"
                  title="Book a call"
                />
              </div>
            ) : (
              /* Fallback — custom booking modal trigger until Cal.com URL is ready */
              <div style={{
                background: 'var(--white)', border: '1px solid var(--line)',
                borderRadius: 'var(--radius-xl)', padding: 40, textAlign: 'center',
              }}>
                <div style={{ marginBottom: 28 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'color-mix(in srgb, var(--coral) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon name="calendar" size={26} color="var(--coral)" />
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', margin: '0 0 10px' }}>Schedule your call</h2>
                  <p style={{ fontSize: 14.5, color: 'var(--text-body)', lineHeight: 1.6, maxWidth: 320, margin: '0 auto' }}>
                    Pick a time below or email directly. Calls run 30 minutes on Google Meet.
                  </p>
                </div>
                <Button onClick={() => setBooking(true)} iconRight={<Icon name="calendar" size={17} />} style={{ width: '100%', justifyContent: 'center' }}>
                  Pick a time
                </Button>
                <p style={{ margin: '16px 0 0', fontSize: 13, color: 'var(--text-muted)' }}>
                  Or email{' '}
                  <a href="mailto:johnson@operatorsden.com" style={{ color: 'var(--sky)', fontWeight: 600 }}>
                    johnson@operatorsden.com
                  </a>
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </Section>

      <SiteFooter />

      {/* Booking modal (used when CAL_URL is empty) */}
      <Booking open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BookPage />);
