import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const dataPoints = ['Activities', 'Distance', 'Pace', 'Heart rate', 'Elevation', 'Cadence', 'Sleep', 'HRV', 'Recovery', 'Training load'];
const coachNotes = ['Strong long runs', 'Threshold needs durability', 'Prefers km-based sessions', 'Do not chase missed easy miles'];
const featureCards = [
  ['01', 'Adaptive coach', 'Daily guidance that explains what matters, what changed and why.'],
  ['02', 'Living plans', 'Training adapts around missed runs, fatigue, races and real life.'],
  ['03', 'Plan reviews', 'A clear assessment of what is working, what needs attention and the next best move.'],
  ['04', 'Race focus', 'Build towards your next sub with race-specific blocks, tapering and confidence tracking.'],
];
const roadmap = [
  ['Live in beta', 'Adaptive plans, coach chat, workout builder, race management and plan reviews.'],
  ['Next', 'Garmin import, automatic workout completion and health-led coaching decisions.'],
  ['Following', 'Workout sync, Apple Health, COROS, Strava, strength progression and race prediction.'],
];

function App() {
  const path = window.location.pathname;
  if (path === '/privacy') return <Shell><Legal type="privacy" /></Shell>;
  if (path === '/terms') return <Shell><Legal type="terms" /></Shell>;
  if (path === '/garmin') return <Shell><Garmin /></Shell>;
  return <Shell><Home /></Shell>;
}

function Shell({ children }) {
  return <>
    <div className="glow glowA" />
    <div className="glow glowB" />
    <header className="nav">
      <a className="brand" href="/" aria-label="RunSub home"><span className="logoMark">RS</span><span>RunSub</span></a>
      <nav>
        <a href="/#coach">Coach</a>
        <a href="/garmin">Garmin</a>
        <a href="/#roadmap">Roadmap</a>
        <a href="/privacy">Privacy</a>
        <a className="navButton" href="/#waitlist">Join beta</a>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div className="brand small"><span className="logoMark">RS</span><span>RunSub</span></div>
      <p>Every runner has a next sub.</p>
      <div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="mailto:hello@runsub.com">Contact</a></div>
    </footer>
  </>;
}

function Home() {
  return <>
    <section className="hero">
      <div className="heroCopy reveal">
        <p className="kicker">Adaptive AI running coach</p>
        <h1>Your next breakthrough starts here.</h1>
        <p className="lead">RunSub learns from your training, reviews your plan and guides you towards your next sub — from sub‑60 to sub‑3 and beyond.</p>
        <div className="ctaRow"><a className="primary" href="#waitlist">Join the beta</a><a className="secondary" href="/garmin">Garmin coming soon</a></div>
        <div className="trust"><span>Built for serious runners</span><span>Adaptive plans</span><span>Coach-led reviews</span></div>
      </div>
      <ProductStack />
    </section>

    <section id="coach" className="statement reveal">
      <p className="kicker">The coach is the product</p>
      <h2>Not another dashboard. Not another static plan.</h2>
      <p>RunSub is designed around one central experience: a coach that knows the runner, understands the goal, learns from every workout and makes the next decision easier.</p>
    </section>

    <section className="features">
      {featureCards.map(([num, title, text]) => <article className="feature reveal" key={title}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
    </section>

    <section className="coachPanel reveal">
      <div>
        <p className="kicker">Coach memory</p>
        <h2>It should feel like someone has been coaching you for months.</h2>
        <p>RunSub turns training history into coach notes: strengths, weak spots, recovery patterns, preferences and race risks.</p>
      </div>
      <div className="noteList">
        {coachNotes.map(note => <div key={note}><span>✓</span>{note}</div>)}
      </div>
    </section>

    <section className="reviewShowcase reveal">
      <div className="reviewCard">
        <div className="cardTop"><span>Plan Review</span><strong>81%</strong></div>
        <h3>Building well</h3>
        <p>Your marathon goal remains realistic. Threshold durability is the priority for the next block.</p>
        <div className="scoreGrid"><div><b>2:47–2:49</b><span>Projection</span></div><div><b>84%</b><span>After change</span></div></div>
        <button>Accept coach recommendation</button>
      </div>
      <div>
        <p className="kicker">Plan Review</p>
        <h2>Know where you stand in seconds.</h2>
        <p>RunSub reviews past training, current fatigue, future structure and race goals. Then it offers a clear next move — not a wall of numbers.</p>
      </div>
    </section>

    <section className="garminTeaser reveal">
      <div>
        <p className="kicker">Garmin integration</p>
        <h2>Garmin data should make the coach smarter.</h2>
        <p>Activities and recovery signals will help RunSub complete workouts automatically, understand readiness and adapt training before problems become injuries.</p>
        <a className="inlineLink" href="/garmin">See Garmin plan →</a>
      </div>
      <div className="dataCloud">{dataPoints.map(point => <span key={point}>{point}</span>)}</div>
    </section>

    <section id="roadmap" className="roadmap reveal">
      <p className="kicker">Roadmap</p>
      <h2>From beta to intelligent coaching platform.</h2>
      <div className="roadItems">{roadmap.map(([phase, body]) => <div key={phase}><strong>{phase}</strong><p>{body}</p></div>)}</div>
    </section>

    <section id="waitlist" className="waitlist reveal">
      <p className="kicker">Beta access</p>
      <h2>Join the RunSub beta.</h2>
      <p>Early access for runners who want adaptive plans, plan reviews and Garmin-powered coaching.</p>
      <form action="mailto:hello@runsub.com" method="post" encType="text/plain">
        <input name="email" type="email" placeholder="Email address" required />
        <input name="goal" type="text" placeholder="Goal e.g. Sub‑3 marathon" />
        <button type="submit">Request invite</button>
      </form>
      <small>This temporary form opens your email client. Replace with Supabase/Resend when ready.</small>
    </section>
  </>;
}

function ProductStack() {
  return <div className="productStack reveal" aria-label="RunSub product screenshots">
    <div className="phone phoneBack"><img src="/screens/progress.png" alt="RunSub progress dashboard preview" /></div>
    <div className="phone phoneFront"><img src="/screens/review.png" alt="RunSub plan review preview" /></div>
    <div className="floatingMetric"><span>Today</span><b>Threshold focus</b></div>
    <div className="floatingMetric second"><span>Next race</span><b>84 days</b></div>
  </div>;
}

function Garmin() {
  return <>
    <section className="pageHero reveal">
      <p className="kicker">Garmin coming soon</p>
      <h1>Device data interpreted by a coach.</h1>
      <p className="lead">RunSub plans to use Garmin Connect data to import training, complete planned workouts and personalise recommendations using readiness signals.</p>
    </section>
    <section className="garminGrid reveal">
      <article><h3>Activity import</h3><p>Distance, pace, heart rate, elevation, cadence and calories used to match planned workouts to completed runs.</p></article>
      <article><h3>Health signals</h3><p>Sleep, HRV, recovery and training load used to support better decisions around intensity and recovery.</p></article>
      <article><h3>User control</h3><p>Users connect Garmin by consent, can disconnect at any time, and should always know what data improves coaching.</p></article>
    </section>
    <section className="statement reveal"><p className="kicker">Why Garmin</p><h2>The goal is not more graphs.</h2><p>The goal is a coach that can say: poor sleep and falling HRV means we should protect today, or excellent recovery means you can safely progress.</p></section>
  </>;
}

function Legal({ type }) {
  const privacy = type === 'privacy';
  return <section className="legal reveal">
    <p className="kicker">RunSub</p>
    <h1>{privacy ? 'Privacy Policy' : 'Terms of Service'}</h1>
    <p className="muted">Draft starter text. Review with a solicitor before public launch.</p>
    {privacy ? <Privacy /> : <Terms />}
  </section>;
}
function Privacy() { return <div className="legalBody"><h2>Overview</h2><p>RunSub is designed to help runners plan, review and adapt training. We aim to collect only information needed to provide coaching, training analytics and account functionality.</p><h2>Data we may collect</h2><p>Account details, training goals, workouts, race plans, readiness feedback, connected device data where authorised, waitlist details and support messages.</p><h2>How we use data</h2><p>To generate plans, personalise coaching, complete workouts, improve recommendations, provide support and maintain the service.</p><h2>Garmin data</h2><p>If Garmin connection is enabled, RunSub may request activity and health data only with user consent. Users should be able to disconnect Garmin access at any time.</p><h2>Contact</h2><p>Email: hello@runsub.com</p></div> }
function Terms() { return <div className="legalBody"><h2>Use of RunSub</h2><p>RunSub provides training guidance and planning support. It is not medical advice and does not replace a qualified coach, doctor or physiotherapist.</p><h2>User responsibility</h2><p>Users are responsible for deciding whether a workout is appropriate and should stop if they experience pain, illness, dizziness or unsafe conditions.</p><h2>Beta service</h2><p>Features may change, break or be removed during beta. Training recommendations may be inaccurate and should be reviewed carefully.</p><h2>Contact</h2><p>Email: hello@runsub.com</p></div> }

createRoot(document.getElementById('root')).render(<App />);
