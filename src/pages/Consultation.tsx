import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import LinkButton from '../components/LinkButton'

export default function Consultation() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="BOOK A CONSULTATION"
              title="Let’s Build Your Property Journey Together"
              description="Share your requirements for a site visit or project consultation. We remain accountable for all future queries and dispute-related clarifications."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-6 rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-ink-950">Office</p>
              <p className="mt-2 break-words text-sm leading-7 text-ink-950/70">
                PropertyPath LTD D.No: F1 &amp; F2, Sarovi #72, 1st Floor Sunshine Paradise Layout
                Kurudusonnenahalli, Virgonagar Post Bangalore – 560049
              </p>
              <p className="mt-4 text-sm text-ink-950/70">
                <span className="font-semibold text-ink-950">Phone</span>{' '}
                <span className="inline-flex flex-col gap-1 sm:inline">
                  <a className="text-ink-950/80 hover:text-ink-950" href="tel:+916364467941">
                    +91 6364467941
                  </a>
                  <span className="hidden text-ink-950/35 sm:inline"> · </span>
                  <a className="text-ink-950/80 hover:text-ink-950" href="tel:+916364467942">
                    +91 63644 67942
                  </a>
                </span>
              </p>
              <p className="mt-2 text-sm text-ink-950/70">
                <span className="font-semibold text-ink-950">Email</span>{' '}
                <a className="text-ink-950/80 hover:text-ink-950" href="mailto:info@property-path.in">
                  info@property-path.in
                </a>
              </p>
              <div className="mt-6">
                <LinkButton to="/" variant="ghost" className="w-full sm:w-auto">
                  Back to Home
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-ink-950/10 bg-gradient-to-br from-white/80 to-canvas-100 p-4 shadow-soft sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-ink-950">Book a consultation</p>
              <p className="mt-2 text-sm leading-7 text-ink-950/70">
                Tell us what you’re looking for — including site visit preferences — and we’ll
                coordinate next steps with the right team and verified developers.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
