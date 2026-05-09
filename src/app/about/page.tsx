import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-green-800 text-white py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Trusted pest control professionals serving Chhindwara, Seoni, Nagpur and nearby districts.
          </p>
        </section>

        {/* Story */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Pest Control Instant is a professional pest management company based in Chhindwara, Madhya Pradesh. We provide fast, reliable and affordable pest control solutions for homes, offices and commercial spaces.
              </p>
              <p className="text-gray-600 mb-4">
                Our team is trained in the latest pest control techniques and uses only government-approved chemicals that are safe for your family, children and pets.
              </p>
              <p className="text-gray-600">
                We take pride in our quick response time and guaranteed results. If you are not satisfied, we come back and re-treat at no extra cost.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🐛</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Pest Control Instant</h3>
              <p className="text-gray-500">Chhindwara, Madhya Pradesh</p>
              <p className="text-gray-500 mt-2">📞 94243 00770</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '8+', label: 'Pest Types Treated' },
              { number: '2hr', label: 'Response Time' },
              { number: '100%', label: 'Satisfaction Guarantee' },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow">
                <div className="text-3xl font-extrabold text-green-700 mb-1">{stat.number}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-10">Why Trust Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '✅', title: 'Government Approved Chemicals', desc: 'All chemicals we use are certified and approved by the government, completely safe for humans and pets.' },
                { icon: '⚡', title: 'Same Day Service', desc: 'We understand urgency. Call us and we will be at your doorstep the same day or next day.' },
                { icon: '🔄', title: 'Free Re-treatment', desc: 'If pests return within the warranty period, we come back and treat again at absolutely no cost.' },
                { icon: '💰', title: 'Affordable Pricing', desc: 'We offer the most competitive prices in Chhindwara and surrounding areas without compromising quality.' },
                { icon: '🎓', title: 'Trained Professionals', desc: 'Our team is trained and experienced in handling all types of pest infestations safely and effectively.' },
                { icon: '📍', title: 'Local & Trusted', desc: 'We are a local business and understand the pest problems specific to Chhindwara, Seoni and Nagpur region.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 transition">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-green-800 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-800 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Rid of Pests?</h2>
            <p className="text-green-200 mb-8">Contact us today for a free inspection and quote.</p>
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