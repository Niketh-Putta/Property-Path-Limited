import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Globe, Mail, MapPin, Phone } from 'lucide-react'
import VanamLeadForm from '../components/VanamLeadForm'

const amenityTiles = [
  { icon: '/vanam/pine-tree.png', title: '800-Acre Forest Adjacency' },
  { icon: '/vanam/road.png', title: '30 Ft. CC Roads' },
  { icon: '/vanam/park.png', title: '45% Open Spaces' },
  { icon: '/vanam/villa.png', title: 'Villa-Community Amenity' },
]

const valueTiles = [
  { icon: '/vanam/verified.png', title: 'MPA Approved Properties' },
  { icon: '/vanam/land-plot.png', title: 'Premium Plotted Phase' },
  { icon: '/vanam/loan.png', title: 'Easy Bank Loans' },
  { icon: '/vanam/growth.png', title: 'In Growing Whitefield' },
  { icon: '/vanam/road-2.png', title: 'Access to Bengaluru-Chennai Express Way' },
  { icon: '/vanam/briefcase.png', title: 'Industries in Commuting Distance' },
  { icon: '/vanam/road.png', title: 'Near Satellite Town Ring Road' },
  { icon: '/vanam/township.png', title: '50 Acre Integrated Township' },
]

const layoutAmenities = [
  '30 Ft. CC Roads',
  'Landscaped Avenues',
  'Underground Utilities',
  'Street Lighting',
  'Water Infrastructure',
  'Rainwater Harvesting',
  'Gated Security',
  '45% Open Spaces',
  '5,000 Sq. Ft. Club House',
  'Basketball Court',
  "Children's Play Zone",
  "Swimming Pool & Kid's Pool",
  'Cricket Practice Nets',
  'Jogging & Yoga Zone',
  'Fully Equipped Gym',
  'Outdoor Amphitheatre',
  'Party Lawn',
  'Tennis & Badminton Courts',
  "Senior Citizens' Wellness Garden",
  'Indoor Games Lounge',
]

const connectivity = [
  {
    title: 'SCHOOLS',
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
    title: 'COLLEGES',
    items: [
      'Christ College of Science and Management — 11 Min',
      'MVJ College of Engineering — 22 Min',
      'MVJ PU College — 22 Min',
    ],
  },
  {
    title: 'HOSPITALS',
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
    title: 'IT PARKS',
    items: [
      'International Tech Park Bangalore — 29 Min',
      'Brigade Tech Gardens — 40 Min',
      'Sattva Tech Park — 30 Min',
      'DivyaSree Technopark — 37 Min',
    ],
  },
  {
    title: 'SHOPPING',
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
  const [openGroup, setOpenGroup] = useState('SCHOOLS')

  return (
    <div className="bg-white text-[#1a1a1a]">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div>
          <img src="/vanam/logo.webp" alt="Property Path" className="h-14 w-auto sm:h-16" />
          <h1 className="mt-8 font-serif text-6xl font-semibold tracking-tight text-ink-950 sm:text-7xl">
            VANAM
          </h1>
          <p className="mt-4 text-lg font-semibold tracking-wide text-ink-950 sm:text-xl">
            MORE THAN A PLOT. A COMPLETE LIFESTYLE
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-950/70 sm:text-base">
            Premium Plotted Development – The Initial Phase of an 11.5-Acre Integrated Township
            near STRR & Whitefield Extension
          </p>
          <p className="mt-6 inline-flex rounded-full border border-ink-950/70 px-5 py-2 text-sm font-medium">
            Plots Starting from ₹2,799 / SQ. FT.
          </p>
        </div>
        <div id="vanam-brochure">
          <VanamLeadForm />
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#163d24] via-[#1d4d2d] to-[#245c36] py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-white">
            <img
              src="/vanam/logo-white.webp"
              alt="Property Path"
              className="h-12 w-auto brightness-0 invert sm:h-14"
            />
            <h2 className="mt-8 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
              VANAM
            </h2>
            <p className="mt-4 text-lg font-semibold tracking-wide">
              MORE THAN A PLOT. A COMPLETE LIFESTYLE
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              2.5 Acre Premium Plotted Development Initial Phase of a 50-Acre Integrated Township
            </p>
            <p className="mt-6 inline-flex rounded-full border border-white/80 px-5 py-2 text-sm font-medium">
              Plots Starting from ₹2,799 / SQ. FT.
            </p>
          </div>
          <VanamLeadForm variant="light" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {amenityTiles.map((item) => (
            <div key={item.title} className="text-center">
              <img src={item.icon} alt="" className="mx-auto h-20 w-20 object-contain" />
              <p className="mt-4 text-sm font-semibold leading-6 text-ink-950">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f4ec] py-14">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="font-serif text-5xl font-semibold tracking-tight text-ink-950">VANAM</h2>
          <p className="mt-3 text-lg font-semibold tracking-[0.14em] text-ink-950">
            LAND. LIFESTYLE. LOCATION
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink-950/70">
            A premium plotted address designed for buyers who want nature, connectivity and
            long-term value.
          </p>
          <a
            href="#vanam-brochure"
            className="mt-6 inline-block text-sm font-semibold tracking-[0.12em] uppercase text-ink-950 underline underline-offset-4"
          >
            Get your Free Brochure
          </a>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueTiles.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white px-4 py-6 shadow-soft">
                <img src={item.icon} alt="" className="mx-auto h-16 w-16 object-contain" />
                <p className="mt-4 text-sm font-semibold leading-6 text-ink-950">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#8fbf7a] via-[#cfe3c4] to-white py-10">
        <h2 className="text-center font-serif text-3xl font-semibold tracking-wide text-ink-950 sm:text-4xl">
          VANAM LAYOUT PLAN
        </h2>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
        <img
          src="/vanam/map.webp"
          alt="Vanam layout plan"
          className="mx-auto w-full max-w-4xl rounded-xl object-contain"
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {layoutAmenities.map((item) => (
            <p key={item} className="flex items-start gap-2 text-sm leading-6 text-ink-950/80">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-950 text-[10px] text-white">
                <ChevronRight className="h-3 w-3" />
              </span>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex items-center justify-center gap-4">
          <img src="/vanam/pine-tree.png" alt="" className="h-8 w-8 object-contain" />
          <p className="text-center font-serif text-xl font-semibold tracking-wide text-ink-950 sm:text-2xl">
            THE FREEDOM OF A PLOT. THE LIFESTYLE OF A LARGER COMMUNITY
          </p>
        </div>
        <img
          src="/vanam/project-view.webp"
          alt="Vanam project view"
          className="mt-10 w-full rounded-xl object-cover"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:py-16">
        <div>
          <h2 className="font-serif text-5xl font-semibold tracking-tight text-ink-950">VANAM</h2>
          <p className="mt-3 text-lg font-semibold tracking-wide text-ink-950">
            CONNECTED TO EVERYTHING THAT MATTERS.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-ink-950/70">
            Strategically Positioned with Bengaluru East – Close to STRR, Hosakote, Whitefield and
            the broader Employment & Infrastructure Corridor
          </p>
          <img
            src="/vanam/landmark.webp"
            alt="Vanam location landmarks"
            className="mt-8 w-full object-contain"
          />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-ink-950/80">
            WELL CONNECTED · WELL LOCATED
          </p>
          <div className="mt-4 divide-y divide-ink-950/15 border border-ink-950/15">
            {connectivity.map((group) => {
              const open = openGroup === group.title
              return (
                <div key={group.title}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold tracking-wide"
                    onClick={() => setOpenGroup(open ? '' : group.title)}
                  >
                    <span>
                      {open ? '−' : '+'} {group.title}
                    </span>
                  </button>
                  {open ? (
                    <ul className="space-y-1 px-8 pb-4 text-sm leading-7 text-ink-950/75">
                      {group.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-ink-950/10 bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="font-serif text-5xl font-semibold text-[#c5a059]">VANAM</p>
            <p className="mt-3 text-sm text-ink-950/70">— Presented & Marketed by —</p>
            <img src="/vanam/logo.webp" alt="Property Path" className="mt-4 h-14 w-auto" />
          </div>
          <div className="grid gap-3 text-sm leading-7 text-ink-950/80">
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              Office: F1 & F2, Sarovi #72, 1st Floor, Sunshine Paradise Layout Whitefield, Bengaluru
              - 560049.
            </p>
            <p className="flex items-start gap-2">
              <Mail className="mt-1 h-4 w-4 shrink-0" />
              propertypath9@gmail.com / sales@property-path.in
            </p>
            <p className="flex items-start gap-2">
              <Globe className="mt-1 h-4 w-4 shrink-0" />
              <a href="https://www.property-path.in" className="hover:underline">
                www.property-path.in
              </a>
            </p>
            <p className="flex items-start gap-2">
              <Phone className="mt-1 h-4 w-4 shrink-0" />
              +91 6364 467944 | +91 6364 467941 | +91 6364 467942
            </p>
            <Link
              to="/consultation"
              className="mt-2 inline-flex text-sm font-semibold tracking-[0.14em] uppercase"
            >
              SCHEDULE A SITE VISIT
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
