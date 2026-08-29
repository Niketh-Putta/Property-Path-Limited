import LinkButton from './LinkButton'
import BrandMark from './BrandMark'

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          <div className="min-w-0">
            <BrandMark showWordmark className="select-none" />
            <p className="mt-4 text-sm leading-7 text-ink-950/70 text-pretty">
              We take complete ownership of every property we represent —
              including post-sale queries and dispute-related clarifications —
              so customers always have a trusted partner.
            </p>
            <p className="mt-4 text-[10px] font-semibold tracking-[0.12em] text-gold-500 sm:text-xs sm:tracking-[0.16em]">
              SAFE INVESTMENTS. STRONG RETURNS.
            </p>
          </div>

          <div className="min-w-0 text-sm text-ink-950/70">
            <p className="font-semibold text-ink-950">Contact</p>
            <p className="mt-3 break-words leading-7">
              PropertyPath LTD D.No: F1 &amp; F2, Sarovi #72, 1st Floor Sunshine
              Paradise Layout Kurudusonnenahalli, Virgonagar Post Bangalore –
              560049
            </p>
            <p className="mt-3 flex flex-col gap-1 break-words">
              <a className="text-ink-950/80 hover:text-ink-950" href="tel:+916364467941">
                +91 6364467941
              </a>
              <a className="text-ink-950/80 hover:text-ink-950" href="tel:+916364467942">
                +91 63644 67942
              </a>
            </p>
            <p className="mt-3 flex flex-col gap-1 break-words sm:block">
              <a className="text-ink-950/80 hover:text-ink-950" href="mailto:info@property-path.in">
                info@property-path.in
              </a>
              <span className="hidden text-ink-950/35 sm:inline"> · </span>
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

          <div className="flex min-w-0 flex-col items-stretch gap-3 sm:items-start">
            <p className="text-sm font-semibold text-ink-950">Quick actions</p>
            <LinkButton to="/verify-agent" variant="secondary" className="w-full sm:w-auto">
              Verify an Agent
            </LinkButton>
            <LinkButton
              to="/projects/bangalore-east-villas"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              View Aranya Project
            </LinkButton>
            <LinkButton
              to="/projects/skh-echium"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              View SKH Echium
            </LinkButton>
            <LinkButton
              href="/brochures/vanam-premium-brochure.pdf"
              download="Vanam_Premium_Brochure_Property_Path.pdf"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Download Vanam Brochure
            </LinkButton>
            <LinkButton
              href="mailto:info@property-path.in?subject=PropertyPath%20Consultation%20Request"
              variant="ghost"
              className="w-full sm:w-auto"
            >
              Book a Consultation
            </LinkButton>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-ink-950/10 pt-6 text-xs leading-6 text-ink-950/45 sm:flex-row sm:items-center">
          <p className="min-w-0">© {new Date().getFullYear()} PropertyPath LTD. All rights reserved.</p>
          <p className="min-w-0 sm:text-right">
            Verified listings. Verified partners. Transparent support.
          </p>
        </div>
      </div>
    </footer>
  )
}
