import { useEffect } from 'react'
import { trackMetaLead } from '../lib/metaPixel'

export function ThankYouPage() {
  useEffect(() => {
    trackMetaLead()
  }, [])

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <img
            className="nav-wordmark"
            src="/tractionfast-wordmark.png"
            alt="TractionFast Consulting"
            width="1881"
            height="379"
          />
        </a>
      </nav>

      <section className="thank-you">
        <div className="container">
          <div className="hero-eyebrow">You&apos;re confirmed.</div>
          <h1 className="thank-you-title">Your Agency Diagnostic Call is booked.</h1>
          <p className="thank-you-subheading">Here is what happens next.</p>

          <div className="thank-you-steps">
            <article className="thank-you-step">
              <div className="thank-you-step-num">Step 1</div>
              <p>
                Check your email for a calendar invite with the call link. The call is 45 minutes
                on Google Meet. Add it to your calendar now so it does not get buried.
              </p>
            </article>

            <article className="thank-you-step">
              <div className="thank-you-step-num">Step 2</div>
              <p>
                Before we speak, have three things ready: your current client list with what each
                one is paying you, one client result you are genuinely proud of with a specific
                measurable outcome, and a rough sense of what you have already tried to move your
                pricing. The more specific you are walking in, the more useful the call will be.
              </p>
            </article>

            <article className="thank-you-step">
              <div className="thank-you-step-num">Step 3</div>
              <p>
                You will receive a WhatsApp message from us within a few hours. It will reference
                something specific from your application and include a case study directly relevant
                to your situation. Read it before the call. It will give you useful context for
                what we will be discussing.
              </p>
            </article>
          </div>

          <p className="thank-you-closing">
            We look at your agency, your results, and your current clients and tell you directly
            what is blocking you and what needs to change first. See you on the call.
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
