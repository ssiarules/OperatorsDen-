/* OperatorsDen — Booking modal (cal.com-style) + Demo section */

const DISCOVERY_URL = 'https://cal.com/operatorsden/30min?overlayCalendar=true';

function Booking({ open, onClose }) {
  const [step, setStep] = React.useState(0); // 0 pick, 1 details, 2 confirmed
  const [day, setDay] = React.useState(2);
  const [slot, setSlot] = React.useState(null);
  const [form, setForm] = React.useState({ name: '', email: '', workflow: '' });

  React.useEffect(() => {
    if (open) { setStep(0); setSlot(null); }
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const days = React.useMemo(() => {
    const out = []; const base = new Date(2026, 5, 10);
    const dn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 7; i++) { const d = new Date(base); d.setDate(base.getDate() + i); out.push({ dow: dn[d.getDay()], date: d.getDate(), full: d, weekend: d.getDay() === 0 || d.getDay() === 6 }); }
    return out;
  }, []);
  const times = ['8:00 AM', '9:30 AM', '11:00 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

  const submit = (e) => { e.preventDefault(); setStep(2); };

  return (
    <div className={`modal-backdrop${open ? ' open' : ''}`} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Left rail — meeting summary */}
        <div style={{ background: 'var(--navy)', color: 'var(--offwhite)', padding: 30, display: 'flex', flexDirection: 'column' }}>
          <Logo variant="reversed" size={20} />
          <div style={{ marginTop: 28 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)' }}>Discovery Call</span>
            <h3 style={{ margin: '10px 0 0', fontSize: 22, fontWeight: 800, color: 'var(--offwhite)', letterSpacing: '-0.01em' }}>AI Operating System Consultation</h3>
          </div>
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 13 }}>
            {[['clock', '60 minutes'], ['video', 'Google Meet · screen share'], ['user', 'with Johnson']].map(([ic, t]) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 11, fontSize: 14, color: 'var(--text-on-dark-muted)' }}>
                <Icon name={ic} size={16} color="var(--gold)" /> {t}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 24 }}>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-on-dark-muted)', margin: 0 }}>We show you the system, ask about your workflow, and map three things AI could do for you immediately. No pitch deck.</p>
          </div>
        </div>

        {/* Right — flow */}
        <div style={{ padding: 30, overflowY: 'auto', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="x" size={16} color="var(--text-strong)" />
          </button>

          {step === 0 && (
            <div>
              <h4 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700, color: 'var(--navy)' }}>Pick a time</h4>
              <p style={{ margin: '0 0 18px', fontSize: 13.5, color: 'var(--text-muted)' }}>June 2026 · Pacific Time</p>
              <div className="day-rail" style={{ display: 'flex', gap: 9, overflowX: 'auto', paddingBottom: 6 }}>
                {days.map((d, i) => (
                  <button key={i} onClick={() => { setDay(i); setSlot(null); }} style={{
                    flexShrink: 0, width: 58, padding: '10px 0', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                    border: day === i ? '2px solid var(--navy)' : '1px solid var(--line)',
                    background: day === i ? 'var(--navy)' : 'var(--white)', color: day === i ? 'var(--offwhite)' : 'var(--navy)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, transition: 'all .15s',
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 600, opacity: 0.7 }}>{d.dow}</span>
                    <span style={{ fontSize: 18, fontWeight: 800 }}>{d.date}</span>
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {times.map((t) => (
                  <button key={t} className={`slot${slot === t ? ' sel' : ''}`} onClick={() => setSlot(t)}>{t}</button>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <Button onClick={() => slot && setStep(1)} style={{ width: '100%', opacity: slot ? 1 : 0.5, pointerEvents: slot ? 'auto' : 'none' }} iconRight={<Icon name="arrow-right" size={17} />}>
                  {slot ? `Continue · ${days[day].dow} ${days[day].date}, ${slot}` : 'Select a time'}
                </Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <form onSubmit={submit}>
              <button type="button" onClick={() => setStep(0)} style={{ background: 'none', border: 'none', color: 'var(--sky)', fontWeight: 600, fontSize: 13.5, cursor: 'pointer', padding: 0, marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon name="arrow-left" size={15} /> Back
              </button>
              <h4 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700, color: 'var(--navy)' }}>Your details</h4>
              <p style={{ margin: '0 0 18px', fontSize: 13.5, color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                <Icon name="calendar-check" size={15} color="var(--coral)" /> {days[day].dow} June {days[day].date}, {slot} · 30 min
              </p>
              {[['name', 'Your name', 'text', 'Jordan Rivera'], ['email', 'Email', 'email', 'you@business.com']].map(([k, label, type, ph]) => (
                <label key={k} style={{ display: 'block', marginBottom: 14 }}>
                  <span style={fieldLabel}>{label}</span>
                  <input required type={type} placeholder={ph} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} style={fieldInput} />
                </label>
              ))}
              <label style={{ display: 'block', marginBottom: 18 }}>
                <span style={fieldLabel}>What is the one workflow you are tired of doing manually?</span>
                <textarea rows={3} placeholder="e.g. Following up with new leads, weekly reports, research…" value={form.workflow} onChange={(e) => setForm({ ...form, workflow: e.target.value })} style={{ ...fieldInput, resize: 'vertical', fontFamily: 'var(--font-sans)' }} />
              </label>
              <Button type="submit" style={{ width: '100%' }} iconRight={<Icon name="check" size={17} />}>Confirm booking</Button>
              <p style={{ margin: '12px 0 0', fontSize: 12, color: 'var(--text-muted)', textAlign: 'center' }}>Setup link sent to your inbox when confirmed.</p>
            </form>
          )}

          {step === 2 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--status-running-bg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <Icon name="check" size={30} color="var(--gold-700)" />
              </div>
              <h4 style={{ margin: '20px 0 8px', fontSize: 21, fontWeight: 800, color: 'var(--navy)' }}>You are booked.</h4>
              <p style={{ margin: '0 auto', maxWidth: 320, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)' }}>
                {days[day].dow} June {days[day].date} at {slot}. A calendar invite and your setup link are on the way to <strong style={{ color: 'var(--navy)' }}>{form.email || 'your inbox'}</strong>.
              </p>
              <div style={{ marginTop: 22, background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: 18, textAlign: 'left' }}>
                <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sky)' }}>Before the call</p>
                {['Create a free Anthropic account', 'Install Claude Code (link in email)', 'Have your one workflow in mind'].map((t) => (
                  <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '5px 0', fontSize: 14, color: 'var(--text-strong)' }}>
                    <Icon name="circle-dot" size={15} color="var(--coral)" /> {t}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20 }}><Button variant="ghost" onClick={onClose}>Done</Button></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const fieldLabel = { display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 6 };
const fieldInput = { width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', fontSize: 14.5, color: 'var(--navy)', background: 'var(--white)', outline: 'none', fontFamily: 'var(--font-sans)' };

/* ---------- Demo section (lower on page, per the brief) ---------- */
function DemoSection({ onBook }) {
  const seq = [
    ['01', 'Morning market report', '7:15 AM auto-email. 11 tickers. No hands touched it.', 'mail'],
    ['02', 'Trading journal automation', '3 to 4 hours of journaling reduced to 20 minutes.', 'line-chart'],
    ['03', 'The project folder', 'CLAUDE.md and the skills, live inside Claude Code.', 'folder'],
    ['04', 'One skill running live', 'market-wind fires on its own and reports back.', 'zap'],
  ];
  return (
    <Section id="demo" recessed>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.92fr) minmax(0,1.08fr)', gap: 52, alignItems: 'center' }} className="demo-grid">
        <Reveal>
          <Eyebrow>Live proof</Eyebrow>
          <h2 style={h2Style({ margin: '14px 0 0' })}>A real system, already running. <span style={{ color: 'var(--coral)' }}>Here is what one looks like.</span></h2>
          <p style={{ margin: '16px 0 0', fontSize: 16.5, lineHeight: 1.62, color: 'var(--text-body)', maxWidth: 480 }}>
            These are not screenshots from a tutorial. This is a live system built across sessions — the same kind we build together on your call.
          </p>
          <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {seq.map(([num, title, body, icon]) => (
              <div key={num} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--line)' }}>
                <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 10, background: 'var(--white)', border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={icon} size={18} color="var(--navy)" />
                </span>
                <div>
                  <h3 style={{ margin: '2px 0 3px', fontSize: 15.5, fontWeight: 700, color: 'var(--navy)' }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-body)' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}>
            <Button onClick={() => window.open(DISCOVERY_URL, '_blank')} iconRight={<Icon name="arrow-right" size={17} />}>Book a Call</Button>
          </div>
        </Reveal>
        <Reveal delay={1}><Terminal /></Reveal>
      </div>
    </Section>
  );
}

Object.assign(window, { Booking, DemoSection });
