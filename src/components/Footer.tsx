import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <div className="font-bold text-xl mb-3">
            🐛 Pest Control <span className="text-yellow-400">Instant</span>
          </div>
          <p className="text-green-300 text-sm">
            Professional pest control services in Chhindwara, Seoni, Nagpur and nearby districts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-yellow-400 mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-green-300">
            {['Home', 'Services', 'Gallery', 'About', 'Contact'].map(item => (
              <Link key={item} href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className="hover:text-yellow-400 transition">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-yellow-400 mb-3">Contact Us</h3>
          <div className="flex flex-col gap-3 text-green-300">
            <a href="tel:9424300770" className="hover:text-yellow-400 transition">
              📞 94243 00770
            </a>
            <p>📍 Chhindwara, M.P</p>
            <p className="text-xs">Serving: Chhindwara · Seoni · Nagpur · Nearby Districts</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-4 border-t border-green-700 text-center text-green-400 text-sm">
        © {new Date().getFullYear()} Pest Control Instant. All rights reserved.
      </div>
    </footer>
  )
}