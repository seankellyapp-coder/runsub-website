import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const pillars = [
  ['Adaptive Coach', 'RunSub reviews your training like a real coach — what worked, what needs attention and what to do next.'],
  ['Living Plans', 'Training adjusts around missed runs, fatigue, race priorities and your current phase.'],
  ['Goal Confidence', 'A smarter confidence engine that weights long runs, key sessions, threshold work, recovery and race timing.'],
  ['Garmin Ready', 'Built for activity import, automatic workout completion and coaching from sleep, HRV and training load.'],
]

const roadmap = [
  ['Now', 'Adaptive plans, coach chat, plan reviews, workout builder and race management.'],
  ['Next', 'Garmin activity import, automatic workout completion and health metric analysis.'],
  ['Later', 'Workout sync, Apple Health, COROS, strength progression and dynamic race prediction.'],
]

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Logos />
      <CoachSection />
      <ProductShowcase />
      <GarminSection />
      <Roadmap />
      <Beta />
      <Policies />
      <Footer />
    </main>
  )
}

function Nav() {
  return <header className="nav">
    <a className="brand" href="#top" aria-label="RunSub home"><span className="mark">RS</span><span>RunSub</span></a>
    <nav>
      <a href="#coach">Coach</a>
      <a href="#garmin">Garmin</a>
      <a href="#roadmap">Roadmap</a>
      <a href="#beta" className="navCta">Join beta</a>
    </nav>
  </header>
}

function Hero() {
  return <section id="top" className="hero sectionGrid">
    <div className="heroCopy reveal">
      <div className="eyebrow">Every runner has a next sub</div>
      <h1>The AI coach that adapts with you.</h1>
      <p className="lede">RunSub learns from your training, reviews your progress and adjusts your plan so every week has a clear route to your next breakthrough.</p>
      <div className="heroActions">
        <a className="button primary" href="#beta">Join the beta</a>
        <a className="button ghost" href="#coach">See how it works</a>
      </div>
      <div className="proof"><span>Sub-60</span><span>Sub-40</span><span>Sub-3</span><span>Sub-2:45</span></div>
    </div>
    <div className="phoneStage reveal delay1" aria-hidden="true">
      <div className="orb orbOne" />
      <div className="phone mainPhone"><img src="/screens/home.jpg" alt="RunSub app home screen" /></div>
      <div className="floatingCard topCard"><strong>Coach says</strong><span>Threshold is the priority this block.</span></div>
      <div className="floatingCard bottomCard"><strong>81%</strong><span>Goal confidence</span></div>
    </div>
  </section>
}

function Logos() {
  return <section className="miniBand reveal">
    <span>Adaptive training</span><span>Race reviews</span><span>Workout builder</span><span>Recovery strategy</span><span>Garmin integration</span>
  </section>
}

function CoachSection() {
  return <section id="coach" className="coach sectionGrid compact">
    <div className="panel glow reveal">
      <div className="chatBubble muted">Morning Sean. Threshold today.</div>
      <div className="chatBubble">Last week's session was harder than expected. Focus on accumulating time rather than chasing pace.</div>
      <div className="quickGrid"><button>Replace session</button><button>Move run</button><button>Keep plan</button><button>Ask coach</button></div>
    </div>
    <div className="copy reveal delay1">
      <div className="eyebrow">The coach is the product</div>
      <h2>Not another dashboard. A coach that notices things.</h2>
      <p>RunSub turns your training data into practical coaching: what to protect, what to improve and when to push.</p>
      <div className="featureList">
        {pillars.map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}
      </div>
    </div>
  </section>
}

function ProductShowcase() {
  return <section className="showcase reveal">
    <div className="sectionHeader">
      <div className="eyebrow">Plan review dashboard</div>
      <h2>Two screens. Three answers.</h2>
      <p>Are you on track? Why? What should you do next?</p>
    </div>
    <div className="screens">
      <div className="phone"><img src="/screens/progress.png" alt="RunSub progress review" /></div>
      <div className="reviewCard">
        <span className="pill">Recommended route</span>
        <h3>Keep building</h3>
        <p>Your goal remains achievable. Threshold durability is the biggest opportunity over the next block.</p>
        <div className="metrics"><span><b>2:47–2:49</b>Projection</span><span><b>84%</b>Expected confidence</span></div>
        <a href="#beta" className="button primary small">Accept recommendation</a>
      </div>
      <div className="phone secondary"><img src="/screens/review.png" alt="RunSub coach review" /></div>
    </div>
  </section>
}

function GarminSection() {
  return <section id="garmin" className="garmin sectionGrid compact">
    <div className="copy reveal">
      <div className="eyebrow">Garmin integration</div>
      <h2>Real data. Better decisions.</h2>
      <p>RunSub is being prepared to connect with Garmin so the coach can react to activities, recovery, sleep, HRV and training load.</p>
      <div className="dataGrid">
        {['Activities','Heart rate','Elevation','Cadence','Sleep','HRV','Training load','Recovery'].map(x => <span key={x}>{x}</span>)}
      </div>
    </div>
    <div className="panel apiCard reveal delay1">
      <div className="apiLine"><span>GET</span>/activities</div>
      <div className="apiLine"><span>SYNC</span>planned workout</div>
      <div className="apiLine"><span>READ</span>sleep + HRV</div>
      <div className="apiLine active"><span>COACH</span>adjust next session</div>
    </div>
  </section>
}

function Roadmap() {
  return <section id="roadmap" className="roadmap reveal">
    <div className="sectionHeader"><div className="eyebrow">Roadmap</div><h2>Built around one idea.</h2><p>The coach gets smarter every time you train.</p></div>
    <div className="roadGrid">{roadmap.map(([t,d],i) => <article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
  </section>
}

function Beta() {
  return <section id="beta" className="beta reveal">
    <div><div className="eyebrow">Join the beta</div><h2>Be first to test RunSub.</h2><p>Leave your details and we'll invite early runners as the product moves towards Garmin-connected coaching.</p></div>
    <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks — waitlist form placeholder. Connect this to Supabase or Formspree next.')}}>
      <input aria-label="Email" type="email" placeholder="Email address" required />
      <input aria-label="Goal" placeholder="Next goal e.g. Dublin sub-2:45" />
      <button className="button primary" type="submit">Request access</button>
    </form>
  </section>
}

function Policies() {
  return <section className="policies reveal">
    <article id="privacy"><h2>Privacy</h2><p>RunSub only uses training and account data to provide coaching, plan adaptation and product support. Garmin or wearable data will only be accessed with user permission and can be disconnected by the user.</p></article>
    <article id="terms"><h2>Terms</h2><p>RunSub provides training guidance and performance tracking. It is not medical advice. Users should train responsibly and seek professional advice where health, injury or medical concerns apply.</p></article>
  </section>
}

function Footer() {
  return <footer><div className="brand"><span className="mark">RS</span><span>RunSub</span></div><span>© {new Date().getFullYear()} RunSub. The coach that adapts with you.</span></footer>
}

createRoot(document.getElementById('root')).render(<App />)
