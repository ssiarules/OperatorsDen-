/* OperatorsDen — main app: assembles sections, owns booking modal + Tweaks. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "split",
  "heroAccent": "coral",
  "showProofStrip": true,
  "sectionOrder": "standard"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [booking, setBooking] = React.useState(false);
  const openBook = () => setBooking(true);
  const go = (where) => { if (where === 'book') openBook(); };

  // keep lucide icons painted as React swaps nodes
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  return (
    <div className="paper-grain" style={{ position: 'relative', minHeight: '100vh' }}>
      <Nav go={go} onBook={openBook} />
      <Hero go={go} layout={t.heroLayout} accent={t.heroAccent} />
      {t.showProofStrip && <ProofStrip />}
      <WhatIs />
      <Offer go={go} />
      <Sessions />
      <DemoSection onBook={openBook} />
      <Ladder go={go} />
      <ODAbout />
      <FAQ />
      <CTA go={go} />
      <Footer onBook={openBook} />

      <Booking open={booking} onClose={() => setBooking(false)} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero concept" />
        <TweakRadio label="Layout" value={t.heroLayout}
          options={['split', 'editorial', 'mosaic']}
          onChange={(v) => setTweak('heroLayout', v)} />
        <p style={{ margin: '2px 2px 0', fontSize: 11.5, lineHeight: 1.45, color: 'var(--text-muted)' }}>
          {t.heroLayout === 'split' && 'Headline + live terminal side by side. The default — proof next to the promise.'}
          {t.heroLayout === 'editorial' && 'Big centered headline, terminal beneath. Confident, magazine-like.'}
          {t.heroLayout === 'mosaic' && 'Headline beside a Four Cs tile mosaic. Frames the system up front.'}
        </p>
        <TweakSection label="Emphasis color" />
        <TweakColor label="Headline accent" value={t.heroAccent === 'coral' ? '#EB5A34' : '#FAB328'}
          options={['#EB5A34', '#FAB328']}
          onChange={(v) => setTweak('heroAccent', v === '#EB5A34' ? 'coral' : 'gold')} />
        <TweakSection label="Page" />
        <TweakToggle label="Scrolling proof strip" value={t.showProofStrip}
          onChange={(v) => setTweak('showProofStrip', v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
