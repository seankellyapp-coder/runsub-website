import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, Brain, CalendarDays, Check, ChevronRight, Clock3, Gauge, HeartPulse, LineChart, Shield, Sparkles, Watch } from 'lucide-react'
import './styles.css'

const nav = ['Coach', 'Plans', 'Garmin', 'Roadmap']

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="RunSub home">
          <span className="mark">RS</span>
          <span>RunSub</span>
        </a>
        <nav>
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="navCta" href="#beta">Join Beta</a>
      </header>

      <section className="hero" id="top">
        <div className="heroText">
          <p className="eyebrow"><Sparkles size={15}/> Adaptive AI running coach</p>
          <h1>The coach that learns how you train.</h1>
          <p className="lead">RunSub turns your goal, workouts and wearable data into daily coaching that adapts when real life gets in the way.</p>
          <div className="actions">
            <a className="primary" href="#beta">Join the beta <ArrowRight size={17}/></a>
            <a className="secondary" href="#coach">See how it works</a>
          </div>
          <div className="proof">
            <span><Check size={14}/> Adaptive plans</span>
            <span><Check size={14}/> Coach reviews</span>
            <span><Check size={14}/> Garmin-ready</span>
          </div>
        </div>
        <div className="deviceWrap" aria-label="RunSub app preview">
          <div className="orb orbOne"></div>
          <div className="phone">
            <div className="phoneTop"><span></span><span></span></div>
            <div className="appCard heroCard">
              <p className="miniLabel">Today</p>
              <h3>Threshold focus</h3>
              <p>Last week was tough. Accumulate time today — don't chase pace.</p>
              <button>Start session</button>
            </div>
            <div className="miniGrid">
              <div><strong>81%</strong><span>confidence</span></div>
              <div><strong>2:47–2:49</strong><span>projection</span></div>
            </div>
            <div className="appCard recommendation">
              <p className="miniLabel">Coach next move</p>
              <h3>Keep building</h3>
              <p>Threshold remains the best route to sub‑2:45.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <p>Every runner has a next sub.</p>
        <div><span>Sub‑60</span><span>Sub‑40</span><span>Sub‑3</span><span>Sub‑2:45</span></div>
      </section>

      <section className="section" id="coach">
        <div className="sectionHead">
          <p className="eyebrow"><Brain size={15}/> AI Coach</p>
          <h2>Not another dashboard. A coach.</h2>
          <p>RunSub does not just report data. It explains what matters, recommends what to do next and turns decisions into plan changes.</p>
        </div>
        <div className="threeCards">
          <Feature icon={<CalendarDays/>} title="Daily briefing" text="Open the app and immediately know today's session, why it matters and what to watch." />
          <Feature icon={<LineChart/>} title="Plan review" text="Past, present and future training are reviewed together with a clear coach verdict." />
          <Feature icon={<HeartPulse/>} title="Recovery strategy" text="When the goal is at risk, RunSub offers routes back — not panic messages." />
        </div>
      </section>

      <section className="showcase" id="plans">
        <div className="copyBlock">
          <p className="eyebrow"><Gauge size={15}/> Adaptive planning</p>
          <h2>Training plans that move with you.</h2>
          <p>Miss a run, struggle with threshold, sleep poorly or overperform in a long run. RunSub rebalances the plan instead of blindly chasing mileage.</p>
          <ul>
            <li><Check/> Automatic workout naming and structure</li>
            <li><Check/> Plan review cards with one-tap actions</li>
            <li><Check/> Goal confidence that weights key sessions properly</li>
          </ul>
        </div>
        <div className="panelStack">
          <img src="/screenshots/progress.png" alt="RunSub progress review screen" />
          <img src="/screenshots/review.png" alt="RunSub coach review screen" />
        </div>
      </section>

      <section className="garmin" id="garmin">
        <div>
          <p className="eyebrow"><Watch size={15}/> Garmin integration</p>
          <h2>Wearable data becomes coaching.</h2>
          <p>RunSub will use Garmin activities, sleep, HRV, training load and recovery data to adapt training and automatically complete planned workouts.</p>
        </div>
        <div className="flow">
          <Flow icon={<Watch/>} title="Garmin" text="Activities, HR, sleep, HRV" />
          <ChevronRight className="flowArrow" />
          <Flow icon={<Brain/>} title="RunSub Coach" text="Interprets readiness" />
          <ChevronRight className="flowArrow" />
          <Flow icon={<Clock3/>} title="Today's plan" text="Adjusted automatically" />
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="sectionHead compact">
          <p className="eyebrow"><Shield size={15}/> Roadmap</p>
          <h2>Built around the coach.</h2>
        </div>
        <div className="timeline">
          <Road item="Adaptive plans" done />
          <Road item="Coach reviews" done />
          <Road item="Garmin import" />
          <Road item="Workout sync" />
          <Road item="Premium AI coaching" />
        </div>
      </section>

      <section className="beta" id="beta">
        <div>
          <p className="eyebrow">Private beta</p>
          <h2>Be first to train with RunSub.</h2>
          <p>Join the beta list for early access, Garmin updates and product progress.</p>
        </div>
        <form className="waitlist" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <input type="text" placeholder="Your next sub goal" aria-label="Running goal" />
          <button type="submit">Join beta <ArrowRight size={16}/></button>
          <small>Form connection coming next — v1 keeps this static for Garmin review readiness.</small>
        </form>
      </section>

      <footer>
        <div className="brand"><span className="mark">RS</span><span>RunSub</span></div>
        <p>The AI running coach that adapts with you.</p>
        <div className="footerLinks"><a href="#top">Home</a><a href="#garmin">Garmin</a><a href="mailto:hello@runsub.com">Contact</a></div>
      </footer>
    </main>
  )
}

function Feature({ icon, title, text }) {
  return <article className="feature"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>
}

function Flow({ icon, title, text }) {
  return <div className="flowItem"><div className="icon">{icon}</div><strong>{title}</strong><span>{text}</span></div>
}

function Road({ item, done }) {
  return <div className={done ? 'road done' : 'road'}><span>{done ? <Check size={15}/> : ''}</span>{item}</div>
}

createRoot(document.getElementById('root')).render(<App />)
