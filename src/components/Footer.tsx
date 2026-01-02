import LinkButton from './LinkButton'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold-300/90 to-gold-700/70 shadow-soft ring-1 ring-gold-100/20" />
              <div>
                <p className="text-sm font-semibold text-canvas-50">
                  PropertyPath <span className="text-white/55">LTD</span>
                </p>
                <p className="mt-0.5 text-xs text-white/55">
                  India’s most trusted real estate digital marketing partner
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              We take complete ownership of every property we represent —
              including post-sale queries and dispute-related clarifications —
              so customers always have a trusted partner.
            </p>
          </div>

          <div className="text-sm text-white/70">
            <p className="font-semibold text-canvas-50">Contact</p>
            <p className="mt-3 break-words">
              PropertyPath LTD D.No: F1 &amp; F2, Sarovi #72, 1st Floor Sunshine
              Paradise Layout Kurudusonnenahalli, Virgonagar Post Bangalore –
              560049
            </p>
            <p className="mt-3">
              <a className="text-white/80 hover:text-white" href="mailto:info@property-path.in">
                info@property-path.in
              </a>
              <span className="text-white/35"> · </span>
              <a
                className="text-white/80 hover:text-white"
                href="https://www.property-path.in"
                target="_blank"
                rel="noreferrer"
              >
                www.property-path.in
              </a>
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <p className="text-sm font-semibold text-canvas-50">Quick actions</p>
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

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} PropertyPath LTD. All rights reserved.</p>
          <p>Verified listings. Verified partners. Transparent support.</p>
        </div>
      </div>
    </footer>
  )
}
