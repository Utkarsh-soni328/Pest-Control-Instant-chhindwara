import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const services = [
  {
    name: 'Termite Control',
    icon: '🪲',
    desc: 'Termites can silently destroy your home structure. Our treatment includes drilling, injecting chemicals and a long-term protection barrier.',
    duration: '2-4 hours',
    price: '₹1500 - ₹5000',
    includes: ['Pre-construction treatment', 'Post-construction treatment', 'Wood treatment', 'Annual maintenance contract'],
  },
  {
    name: 'Cockroach Control',
    icon: '🪳',
    desc: 'We use gel bait and spray treatment to eliminate cockroaches from kitchen, bathrooms and all hidden areas.',
    duration: '1-2 hours',
    price: '₹500 - ₹1500',
    includes: ['Gel bait application', 'Spray treatment', 'Kitchen & bathroom focus', 'Follow-up if needed'],
  },
  {
    name: 'Rodent Control',
    icon: '🐀',
    desc: 'Rats and mice spread disease and damage property. We use traps, bait stations and entry point sealing.',
    duration: '1-3 hours',
    price: '₹800 - ₹2500',
    includes: ['Snap traps & glue boards', 'Rodenticide bait stations', 'Entry point identification', 'Follow-up visit'],
  },
  {
    name: 'Bed Bug Treatment',
    icon: '🛏️',
    desc: 'Bed bugs are hard to eliminate without professional treatment. We use chemical spray and heat treatment.',
    duration: '2-4 hours',
    price: '₹1000 - ₹3000',
    includes: ['Full room inspection', 'Chemical spray treatment', 'Mattress treatment', 'Follow-up guarantee'],
  },
  {
    name: 'Mosquito Control',
    icon: '🦟',
    desc: 'We reduce mosquito population through fogging and larvicide treatment targeting breeding areas.',
    duration: '1-2 hours',
    price: '₹500 - ₹2000',
    includes: ['Outdoor fogging', 'Larvicide treatment', 'Drain & water body treatment', 'Monthly packages available'],
  },
  {
    name: 'Ant Control',
    icon: '🐜',
    desc: 'Ant infestations in kitchen and walls are treated with gel bait and residual spray for long-lasting results.',
    duration: '1-2 hours',
    price: '₹400 - ₹1000',
    includes: ['Gel bait treatment', 'Residual spray', 'Entry point sealing', 'Kitchen focused treatment'],
  },
  {
    name: 'Bee & Wasp Removal',
    icon: '🐝',
    desc: 'Safe removal of bee hives and wasp nests from your home, office or garden with minimal disruption.',
    duration: '1-2 hours',
    price: '₹500 - ₹1500',
    includes: ['Hive location & assessment', 'Safe removal', 'Chemical treatment if needed', 'Disposal of hive'],
  },
  {
    name: 'General Pest Control',
    icon: '🏠',
    desc: 'Complete home pest control package covering all common pests. Best value for full home protection.',
    duration: '3-5 hours',
    price: '₹1500 - ₹4000',
    includes: ['All common pests covered', 'Full home treatment', 'Kitchen, bathroom & rooms', '3 month warranty'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-green-800 text-white py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Professional pest control treatments for homes, offices and commercial spaces across Chhindwara, Seoni and Nagpur.
          </p>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(service => (
              <div key={service.name}
                className="bg-white rounded-2xl shadow p-6 border border-gray-100 hover:border-green-300 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{service.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-green-800">{service.name}</h2>
                    <div className="flex gap-3 text-sm text-gray-500 mt-1">
                      <span>⏱ {service.duration}</span>
                      <span>💰 {service.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                <ul className="space-y-1">
                  {service.includes.map(item => (
                    <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-800 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-green-200 mb-8">
              Call us and we'll inspect your property and recommend the right treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9424300770"
                className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition">
                📞 Call: 94243 00770
              </a>
              <Link href="/contact"
                className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-800 transition">
                Book Online
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}