import { ArrowRight, BadgeCheck, MapPin, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import LinkButton from '../components/LinkButton'

const highlights = [
  'RERA approved layout',
  'MPA approved layout',
  'Gated community',
  'Clear title',
  '40’ and 30’ BT roads',
  'Electricity with street lights',
  'Overhead water tank connected to each plot',
  'Developed parks',
  'Rain water harvesting pits',
  'Underground drainage connected to each plot',
  'Plantation across the layout',
  'Compound wall for the entire layout',
  '24/7 security',
  '2 years maintenance',
  'Vaastu-compliant planning',
]

export default function ProjectSkhEchium() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7">
          <Reveal>
            <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium tracking-[0.08em] text-ink-950/70 ring-1 ring-ink-950/10 sm:text-xs sm:tracking-[0.12em]">
              COMPLETED PROJECT · ALL SOLD OUT
            </p>
            <SectionHeading
              className="mt-4"
              eyebrow="COMPLETED PROJECT · SKH ECHIUM"
              title="SKH Echium — 24-Acre Residential Villa Plots near Whitefield"
              description="A RERA- and MPA-approved gated community of residential villa plots offering easy accessibility, greenery, and long-term value close to Whitefield, Bangalore."
            />
          </Reveal>

          <Reveal delay={0.04}>
            <div className="mt-6 rounded-2xl border border-gold-300/40 bg-gradient-to-br from-gold-50/80 to-white/90 p-4 sm:p-5">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-500 sm:text-xs sm:tracking-[0.16em]">
                PROJECT STATUS
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-950">All sold out</p>
              <p className="mt-1 text-sm leading-7 text-ink-950/70">
                Quoted price: ₹3,200 per sqft. For any resale opportunities, contact the
                PropertyPath team on our listed contact numbers.
              </p>
              <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton href="tel:+916364467941" variant="primary" className="w-full sm:w-auto">
                  Call +91 6364467941 <Phone className="h-4 w-4" />
                </LinkButton>
                <LinkButton href="tel:+916364467942" variant="secondary" className="w-full sm:w-auto">
                  Call +91 63644 67942
                </LinkButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8 grid gap-3 rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:grid-cols-3 sm:gap-4 sm:rounded-3xl sm:p-6">
              <div className="min-w-0 rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">SIZE</p>
                <p className="mt-2 text-sm font-semibold text-ink-950">24 Acres</p>
                <p className="mt-1 text-sm text-ink-950/70">Residential villa plots</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">PRICE</p>
                <p className="mt-2 text-sm font-semibold text-ink-950">₹3,200 / sqft</p>
                <p className="mt-1 text-sm text-ink-950/70">Quoted reference rate</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">LOCATION</p>
                <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-ink-950">
                  <MapPin className="h-4 w-4 text-gold-300/90" />
                  Near Whitefield
                </p>
                <p className="mt-1 text-sm text-ink-950/70">Close to Soukya Road</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-ink-950">About the project</p>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-ink-950/70">
                <p>
                  SKH Echium is a gated community of spacious residential villa plots developed
                  by M/s SKH Estates and Developers LLP. The layout recreates a greener Bangalore
                  ambience while staying close to Whitefield’s IT hubs, shopping, hotels,
                  specialty hospitals, and international schools.
                </p>
                <p>
                  It is legally approved by the Malur Planning Authority (MPA) and RERA-approved
                  (Reg No: PRM/KA/RERA/1265/347/PR/190219/002403). Located close to Soukya Road
                  and Whitefield, commuting to ITPL and EPIP is straightforward, with strong
                  connectivity via wide roads and a strategic east Bangalore setting.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-6 rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-ink-950">Key highlights</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 text-sm text-ink-950/75"
                  >
                    <span className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                      <span className="min-w-0 leading-6">{item}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-ink-950/10 bg-gradient-to-br from-white/80 to-canvas-100 p-4 shadow-soft sm:rounded-3xl sm:p-6">
              <p className="text-sm font-semibold text-ink-950">Resale enquiries</p>
              <p className="mt-2 text-sm leading-7 text-ink-950/70">
                This project is fully sold out. If you are looking for resale inventory in SKH
                Echium, reach the PropertyPath team directly — we coordinate verified options and
                transparent next steps.
              </p>

              <div className="mt-6 min-w-0 rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 sm:p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">
                  PROPERTYPATH CONTACT
                </p>
                <div className="mt-3 grid gap-2 text-sm text-ink-950/75">
                  <a className="hover:text-ink-950" href="tel:+916364467941">
                    +91 6364467941
                  </a>
                  <a className="hover:text-ink-950" href="tel:+916364467942">
                    +91 63644 67942
                  </a>
                  <a className="hover:text-ink-950" href="mailto:info@property-path.in">
                    info@property-path.in
                  </a>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <LinkButton
                  href="https://wa.me/916364467941?text=Hi%20PropertyPath%2C%20I%27m%20interested%20in%20SKH%20Echium%20resale."
                  external
                  variant="primary"
                  className="w-full"
                >
                  WhatsApp for Resale <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton
                  href="mailto:info@property-path.in?subject=SKH%20Echium%20Resale%20Enquiry"
                  variant="secondary"
                  className="w-full"
                >
                  Email PropertyPath Team
                </LinkButton>
                <LinkButton to="/" variant="ghost" className="w-full">
                  Back to Home
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
