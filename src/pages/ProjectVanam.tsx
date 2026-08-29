import {
  ArrowRight,
  BadgeCheck,
  Download,
  MapPin,
  Trees,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import LinkButton from '../components/LinkButton'

const VANAM_BROCHURE_HREF = '/brochures/vanam-premium-brochure.pdf'

const heroStats = [
  { label: 'Phase size', value: '2.5 Acres' },
  { label: 'Starting from', value: '₹2,799 / sqft' },
  { label: 'Open spaces', value: '45%' },
]

const lifestyleHighlights = [
  { title: '800-Acre Forest Adjacency', body: 'Live beside expansive greenery with a calm, nature-first setting.' },
  { title: '30 Ft. CC Roads', body: 'Wide cement-concrete internal roads designed for everyday ease.' },
  { title: '45% Open Spaces', body: 'Generous open areas for light, air, and community living.' },
  { title: 'Villa-Community Amenity', body: 'Enjoy township-scale amenities with the freedom of a private plot.' },
]

const valuePoints = [
  'MPA approved properties',
  'Premium plotted phase',
  'Easy bank loans',
  'In growing Whitefield',
  'Access to Bengaluru–Chennai Expressway',
  'Industries in commuting distance',
  'Near Satellite Town Ring Road (STRR)',
  'Part of a larger integrated township vision',
]

const layoutFeatures = [
  '30 Ft. CC roads',
  'Landscaped avenues',
  'Underground utilities',
  'Street lighting',
  'Water infrastructure',
  'Rainwater harvesting',
  'Gated security',
  '45% open spaces',
  '5,000 Sq. Ft. club house',
  'Basketball court',
  "Children's play zone",
  "Swimming pool & kid's pool",
  'Cricket practice nets',
  'Jogging & yoga zone',
  'Fully equipped gym',
  'Outdoor amphitheatre',
  'Party lawn',
  'Tennis & badminton courts',
  "Senior citizens' wellness garden",
  'Indoor games lounge',
]

const connectivity = [
  {
    title: 'Schools',
    items: [
      'Bangalore International Academy — 15 Min',
      'Shri Ram Global School — 25 Min',
      'Green Eden Public School — 5 Min',
      'Shrunga International School — 5 Min',
      'Unnathi Gurukula School — 15 Min',
      'DPS Whitefield — 25 Min',
      'JAIN Heritage Whitefield — 35 Min',
      'Whitefield Global School — 25 Min',
      'VK School — 25 Min',
    ],
  },
  {
    title: 'Colleges',
    items: [
      'Christ College of Science and Management — 11 Min',
      'MVJ College of Engineering — 22 Min',
      'MVJ PU College — 22 Min',
    ],
  },
  {
    title: 'Hospitals',
    items: [
      'MVJ Hospital — 15 Min',
      'RKB Sanjeevini Hospital — 10 Min',
      'Manipal Hospital Whitefield — 35 Min',
      'Motherhood Hospital — 30 Min',
      'Aster Whitefield Hospital — 32 Min',
      'Sir Sathya Sai Hospital — 35 Min',
      'Vydehi (PHC) Hospital — 07 Min',
    ],
  },
  {
    title: 'IT Parks',
    items: [
      'International Tech Park Bangalore — 29 Min',
      'Brigade Tech Gardens — 40 Min',
      'Sattva Tech Park — 30 Min',
      'DivyaSree Technopark — 37 Min',
    ],
  },
  {
    title: 'Shopping',
    items: [
      'Nexus Whitefield — 35 Min',
      'Phoenix Marketcity — 45 Min',
      'Park Square Mall — 32 Min',
      'Nexus Shantiniketan — 35 Min',
      'Virginia Mall — 35 Min',
    ],
  },
]

export default function ProjectVanam() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[10px] font-medium tracking-[0.08em] text-ink-950/70 ring-1 ring-ink-950/10 sm:text-xs sm:tracking-[0.12em]">
                ONGOING PROJECT · VANAM
              </p>
              <SectionHeading
                className="mt-4"
                eyebrow="MORE THAN A PLOT"
                title="Vanam — A Complete Lifestyle"
                description="Premium plotted development — the initial phase of an integrated township near STRR & Whitefield Extension. Land. Lifestyle. Location."
              />
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:p-5"
                  >
                    <p className="text-xs font-semibold tracking-[0.16em] text-ink-950/55">
                      {item.label.toUpperCase()}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-ink-950">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-2xl border border-gold-300/40 bg-gradient-to-br from-gold-50/80 to-white/90 p-4 sm:p-5">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-500 sm:text-xs sm:tracking-[0.16em]">
                  PROJECT SNAPSHOT
                </p>
                <p className="mt-2 text-sm leading-7 text-ink-950/75">
                  2.5 Acre premium plotted development — initial phase of an 11.5 acre integrated
                  township. A premium plotted address designed for buyers who want nature,
                  connectivity, and long-term value.
                </p>
                <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <LinkButton
                    href={VANAM_BROCHURE_HREF}
                    download="Vanam_Premium_Brochure_Property_Path.pdf"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Download Brochure <Download className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton
                    href="mailto:info@property-path.in?subject=Vanam%20Site%20Visit%20Request"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Schedule a Site Visit <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-ink-950/10 bg-gradient-to-br from-white/80 to-canvas-100 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                <p className="text-sm font-semibold text-ink-950">Why Vanam</p>
                <ul className="mt-4 grid gap-3">
                  {lifestyleHighlights.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-ink-950/10 bg-canvas-100 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-950/[0.05] ring-1 ring-ink-950/10">
                          <Trees className="h-4 w-4 text-gold-300/90" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-ink-950">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-ink-950/65">{item.body}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-950/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="LAND · LIFESTYLE · LOCATION"
              title="Built for nature, connectivity, and long-term value"
              description="The freedom of a plot with the lifestyle of a larger community — strategically positioned in Bengaluru East, close to STRR, Hosakote, Whitefield, and the broader employment corridor."
            />
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map((point, idx) => (
              <Reveal key={point} delay={0.03 * idx}>
                <div className="h-full rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft">
                  <span className="inline-flex items-start gap-2 text-sm text-ink-950/75">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                    <span className="leading-6">{point}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-950/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="LAYOUT PLAN"
                  title="Thoughtfully planned plotted living"
                  description="Roads, utilities, open spaces, and club amenities designed for everyday comfort and long-term community living."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:rounded-3xl sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {layoutFeatures.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-ink-950/10 bg-canvas-100 p-4 text-sm text-ink-950/75"
                      >
                        <span className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300/90" />
                          <span className="min-w-0 leading-6">{item}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-950/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="WELL CONNECTED · WELL LOCATED"
              title="Connected to everything that matters"
              description="Strategically positioned in Bengaluru East — close to STRR, Hosakote, Whitefield, and the broader employment & infrastructure corridor."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {connectivity.map((group, idx) => (
              <Reveal key={group.title} delay={0.04 * idx}>
                <div className="h-full rounded-2xl border border-ink-950/10 bg-white/80 p-4 shadow-soft sm:p-5">
                  <p className="text-sm font-semibold text-ink-950">{group.title}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-ink-950/70">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300/80" />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-950/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:pb-20 sm:pt-16">
          <Reveal>
            <div className="rounded-2xl border border-ink-950/10 bg-gradient-to-br from-white/80 to-canvas-100 p-5 shadow-soft sm:rounded-3xl sm:p-8">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-gold-500 sm:text-xs sm:tracking-[0.16em]">
                PRESENTED & MARKETED BY PROPERTYPATH
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
                Schedule a site visit
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-950/70">
                Plots starting from ₹2,799 / sqft. Speak with the PropertyPath team for brochure
                details, inventory updates, and a guided visit.
              </p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton
                  href="https://wa.me/916364467941?text=Hi%20PropertyPath%2C%20I%27d%20like%20details%20on%20Vanam."
                  external
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  WhatsApp Us <ArrowRight className="h-4 w-4" />
                </LinkButton>
                <LinkButton href="tel:+916364467941" variant="secondary" className="w-full sm:w-auto">
                  Call +91 6364467941
                </LinkButton>
                <LinkButton
                  href={VANAM_BROCHURE_HREF}
                  download="Vanam_Premium_Brochure_Property_Path.pdf"
                  variant="ghost"
                  className="w-full sm:w-auto"
                >
                  Get Your Brochure <Download className="h-4 w-4" />
                </LinkButton>
              </div>
              <div className="mt-6">
                <LinkButton to="/" variant="ghost" className="w-full sm:w-auto">
                  Back to Home
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
