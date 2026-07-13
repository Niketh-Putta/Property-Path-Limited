import LinkButton from './LinkButton'
import BrandMark from './BrandMark'

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <BrandMark showWordmark className="select-none" />
            <p className="mt-4 text-sm leading-7 text-ink-950/70">
              We take complete ownership of every property we represent —
              including post-sale queries and dispute-related clarifications —
              so customers always have a trusted partner.
            </p>
            <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-gold-500">
              SAFE INVESTMENTS. STRONG RETURNS.
            </p>
          </div>

          <div className="text-sm text-ink-950/70">
            <p className="font-semibold text-ink-950">Contact</p>
            <p className="mt-3 break-words">
              PropertyPath LTD D.No: F1 &amp; F2, Sarovi #72, 1st Floor Sunshine
              Paradise Layout Kurudusonnenahalli, Virgonagar Post Bangalore –
              560049
            </p>
            <p className="mt-3">
              <a className="text-ink-950/80 hover:text-ink-950" href="mailto:info@property-path.in">
                info@property-path.in
              </a>
              <span className="text-ink-950/35"> · </span>
              <a
                className="text-ink-950/80 hover:text-ink-950"
                href="https://www.property-path.in"
                target="_blank"
                rel="noreferrer"
              >
                www.property-path.in
              </a>
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <p className="text-sm font-semibold text-ink-950">Quick actions</p>
            <LinkButton to="/verify-agent" variant="secondary">
              Verify an Agent
            </LinkButton>
            <LinkButton to="/projects/bangalore-east-villas" variant="ghost">
              View Featured Project
            </LinkButton>
            <LinkButton
              href="mailto:info@property-path.in?subject=PropertyPath%20Consultation%20Request"
              variant="ghost"
            >
              Book a Consultation
            </LinkButton>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-ink-950/10 pt-6 text-xs text-ink-950/45 sm:flex-row">
          <p>© {new Date().getFullYear()} PropertyPath LTD. All rights reserved.</p>
          <p>Verified listings. Verified partners. Transparent support.</p>
        </div>
      </div>
    </footer>
  )
}
