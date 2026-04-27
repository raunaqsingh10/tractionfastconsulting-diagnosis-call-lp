import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect, useState } from 'react'
import { CAL_LINK, CAL_NAMESPACE } from '../config'

export function LandingPage() {
  const hasValidCalEmbed = !CAL_LINK.includes('replace-with-your-link') &&
    !CAL_NAMESPACE.includes('replace-with-your-namespace')

  useEffect(() => {
    if (!hasValidCalEmbed) {
      return
    }

    ;(async function initCalEmbed() {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#fc6a03' },
          dark: { 'cal-brand': '#fc6a03' },
        },
        hideEventTypeDetails: true,
        layout: 'month_view',
      })
    })()
  }, [hasValidCalEmbed])

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img
            className="nav-wordmark"
            src="/tractionfast-wordmark.png"
            alt="TractionFast Consulting"
            width="1881"
            height="379"
          />
        </a>
        <a href="#book" className="nav-cta">
          Book Diagnostic Call
        </a>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">For Performance Marketing Agencies</div>
          <h1>
            You are fully booked.
            <br />
            And still not making
            <br />
            what you <em>should be.</em>
          </h1>
          <p className="hero-sub">
            We will spend 45 minutes looking at your agency, your current clients, and your
            existing results. We tell you exactly what is blocking you from ₹40,000+ retainers. No
            pitch. No pressure. Just a precise diagnosis.
          </p>
          <div className="hero-cta-block">
            <a href="#book" className="btn-primary">
              Book Your Agency Diagnostic Call
            </a>
            <span className="cta-sub">Free · 45 minutes · 3 spots available this week</span>
          </div>
        </div>
      </section>

      <section className="situation">
        <div className="container">
          <div className="section-label">The Situation</div>
          <h2>You have been here long enough to know something is wrong.</h2>

          <ul className="symptom-list">
            <li>
              <span className="symptom-dot" />
              <span>
                You have maxed out on clients. Taking on more at ₹10,000 is not growth. It is a
                trap. You already know that.
              </span>
            </li>
            <li>
              <span className="symptom-dot" />
              <span>
                You tried raising prices. The prospect pushed back. You backed down. You have not
                tried again at the same number since.
              </span>
            </li>
            <li>
              <span className="symptom-dot" />
              <span>
                You have watched another agency doing comparable work, sometimes lesser work, close
                at ₹50,000 to ₹80,000 a month. You cannot explain the gap.
              </span>
            </li>
            <li>
              <span className="symptom-dot" />
              <span>
                Your revenue has been at roughly the same number for over a year. No clear reason.
                No clear path forward.
              </span>
            </li>
            <li>
              <span className="symptom-dot" />
              <span>
                You know what you need to do. You just cannot seem to make yourself do it. You are
                not sure whether the problem is the market or you.
              </span>
            </li>
          </ul>

          <div className="diagnosis-block">
            <p>
              This is not a confidence problem. It is not your market being price-sensitive. It is
              not your skills.{' '}
              <strong>
                The system behind your pricing has not kept pace with the quality of your work.
              </strong>{' '}
              That is the only thing that needs to change. And that is what a diagnostic call will
              show you, precisely, for your specific agency.
            </p>
          </div>
        </div>
      </section>

      <section className="what-happens">
        <div className="container">
          <div className="section-label">What Happens on the Call</div>
          <h2>45 minutes. A precise diagnosis. You leave knowing exactly what to fix first.</h2>

          <div className="call-steps">
            <div className="call-step">
              <div className="step-num">01 · 20 MIN</div>
              <div className="step-content">
                <h3>We look at your agency</h3>
                <p>
                  Your current client base, your pricing, your results, your positioning. We ask
                  specific questions, not generic ones. By the end of this section, we understand
                  your situation at a level most agency owners have never had articulated to them.
                </p>
              </div>
            </div>
            <div className="call-step">
              <div className="step-num">02 · 15 MIN</div>
              <div className="step-content">
                <h3>We give you the diagnosis</h3>
                <p>
                  We tell you specifically what is holding your pricing back. Not a general
                  framework. Your specific situation: which of the three structural gaps is
                  present, which is the primary constraint, and what would need to change first for
                  the number to move.
                </p>
              </div>
            </div>
            <div className="call-step">
              <div className="step-num">03 · 10 MIN</div>
              <div className="step-content">
                <h3>We tell you whether we can help</h3>
                <p>
                  If what we build is the right solution for your situation, we will tell you what
                  that looks like and how it works. If it is not, we will tell you what is and what
                  to do instead. Either way, you leave with something useful.
                </p>
              </div>
            </div>
          </div>

          <p className="call-note">
            We take on a maximum of three new engagements per month. The diagnostic call is how we
            decide together whether this is the right fit, for you and for us.
          </p>
        </div>
      </section>

      <section className="proof">
        <div className="container">
          <div className="section-label">What This Looks Like in Practice</div>
          <h2>One situation you may recognise.</h2>

          <div className="case-card">
            <div className="case-card-header">
              <span className="case-meta">Performance Marketing Agency · Delhi NCR</span>
              <span className="case-meta">Ceiling Trap</span>
            </div>
            <div className="case-card-body">
              <p className="case-quote">
                &quot;I&apos;m running at full capacity and still not making what I used to make in
                my last job. I don&apos;t know whether to laugh or cry.&quot;
              </p>
              <p className="case-narrative">
                Arjun had nine clients. Eight at ₹10,000 to ₹12,000 a month. He had tried raising
                prices once with a new prospect at ₹18,000 and backed down when they pushed back.
                He hadn&apos;t tried again. He had a freelancer on payroll at ₹18,000 a month. He
                was fully booked and quietly losing ground.
              </p>
              <p className="case-narrative">
                The diagnostic on his first call took twenty minutes. The problem was not his
                market, his confidence, or his clients. The problem was that there was no
                architecture behind the number he was asking for. His positioning was generic, his
                offer was unstructured, and his pricing had no system to defend it. On Day 38, he
                closed his first client at ₹40,000. No negotiation. The client came to the call
                already sold, through a landing page and qualification system built specifically for
                Arjun&apos;s agency.
              </p>
              <div className="case-stats">
                <div className="stat-cell">
                  <div className="stat-value">
                    ₹10k <span className="arrow">→</span> ₹40k
                  </div>
                  <div className="stat-label">Retainer per client</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-value">38</div>
                  <div className="stat-label">Days to first client at new rate</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-value">2</div>
                  <div className="stat-label">New clients closed at new rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qualifier">
        <div className="container">
          <div className="section-label">Qualification</div>
          <h2>This call is built for a specific agency.</h2>

          <div className="qualifier-grid">
            <div className="qualifier-col yes">
              <h3>This is for you if</h3>
              <ul className="qualifier-items">
                <li>
                  <span className="check">✓</span>
                  <span>
                    You have been running your agency for 1 to 3 years and are stuck at the same
                    revenue level
                  </span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>
                    You are delivering real results for clients and have proof you are proud of
                  </span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>
                    You are currently charging ₹8,000 to ₹20,000 per month and know it is not what
                    your work is worth
                  </span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>You have tried raising prices and the conversation fell apart</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span>You know what to do. You just cannot make yourself do it alone.</span>
                </li>
              </ul>
            </div>
            <div className="qualifier-col no">
              <h3>This is not for you if</h3>
              <ul className="qualifier-items">
                <li>
                  <span className="cross">×</span>
                  <span>You are new and do not yet have client results to point to</span>
                </li>
                <li>
                  <span className="cross">×</span>
                  <span>
                    Your delivery is inconsistent and you are not confident in your outcomes
                  </span>
                </li>
                <li>
                  <span className="cross">×</span>
                  <span>
                    You are looking for someone to run your business or manage your clients
                  </span>
                </li>
                <li>
                  <span className="cross">×</span>
                  <span>You want a course, a coaching programme, or a strategy session</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="book">
        <div className="container">
          <h2>If you already know your agency should be getting paid more, the next step is simple.</h2>
          <p>
            45 minutes. We look at your agency and tell you directly what is blocking you and what
            would need to change first. No pitch. No pressure. If we can help, we will tell you
            how. If we cannot, we will tell you that too.
          </p>

          {hasValidCalEmbed ? (
            <div className="cal-embed-shell">
              <Cal
                namespace={CAL_NAMESPACE}
                calLink={CAL_LINK}
                className="cal-embed"
                style={{ width: '100%', height: '100%', overflow: 'hidden', background: 'transparent' }}
                config={{
                  layout: 'month_view',
                  useSlotsViewOnSmallScreen: true,
                  theme: 'dark',
                  forwardQueryParams: true,
                }}
              />
            </div>
          ) : (
            <div className="cal-placeholder">
              Add your live Cal.com embed values in <code>src/config.js</code> to load the inline
              scheduler with UTM forwarding.
            </div>
          )}

          <p className="cta-conditions">
            Free · 45 minutes · We take on 3 new engagements per month. 2 spots currently open.
          </p>
        </div>
      </section>

      <footer>
        <p>TractionFast Consulting · A vertical of TractionFast · tractionfast.com</p>
        <p>© 2026 TractionFast. All rights reserved.</p>
      </footer>
    </>
  )
}
