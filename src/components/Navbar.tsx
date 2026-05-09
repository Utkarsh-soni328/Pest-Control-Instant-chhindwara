'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          🐛 Pest Control <span className="text-yellow-400">Instant</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link key={link.href} href={link.href}
              className="hover:text-yellow-400 transition font-medium">
              {link.label}
            </Link>
          ))}
          <a href="tel:9424300770"
            className="flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition">
            📞 94243 00770
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-900 px-4 py-4 flex flex-col gap-4">
          {links.map(link => (
            <Link key={link.href} href={link.href}
              className="hover:text-yellow-400 transition font-medium"
              onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="tel:9424300770"
            className="bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold w-fit">
            📞 94243 00770
          </a>
        </div>
      )}
    </nav>
  )
}