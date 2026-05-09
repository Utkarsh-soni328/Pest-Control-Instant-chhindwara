'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = ['Termite Control','Cockroach Control','Rodent Control','Bed Bug Treatment','Mosquito Control','Ant Control','Bee & Wasp Removal','General Pest Control']
const timeSlots = ['8:00 AM - 10:00 AM','10:00 AM - 12:00 PM','12:00 PM - 2:00 PM','2:00 PM - 4:00 PM','4:00 PM - 6:00 PM']

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '',
    address: '', preferred_date: '', preferred_time: '', message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', service: '', address: '', preferred_date: '', preferred_time: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main>

        <section className="bg-green-800 text-white py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Book an <span className="text-yellow-400">Appointment</span>
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Fill the form below and we will contact you within 2 hours to confirm your booking.
          </p>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow border border-gray-100">
                <h2 className="text-xl font-bold text-green-800 mb-4">Contact Info</h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <p className="font-semibold text-green-700">Phone</p>
                    <a href="tel:9424300770" className="hover:text-green-600">94243 00770</a>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Location</p>
                    <p>Chhindwara, Madhya Pradesh</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Working Hours</p>
                    <p>Mon - Sat: 8AM - 7PM</p>
                    <p>Sunday: 9AM - 5PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">Service Areas</p>
                    <p className="text-sm">Chhindwara, Seoni, Nagpur, Parasia, Sausar, Pandhurna, Lakhnadon</p>
                  </div>
                </div>
              </div>

              
                <a href="https://wa.me/919424300770" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-400 transition">Chat on WhatsApp</a>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-green-800 mb-6">Book a Service</h2>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6">
                    ✅ Booking received! We will call you within 2 hours to confirm.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6">
                    Something went wrong. Please call us at 94243 00770.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your mobile number"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email (optional)</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Address *</label>
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      placeholder="Full address with city"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                      <input
                        name="preferred_date"
                        value={form.preferred_date}
                        onChange={handleChange}
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                      <select
                        name="preferred_time"
                        value={form.preferred_time}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe your pest problem..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-green-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition disabled:opacity-50"
                  >
                    {status === 'loading' ? '⏳ Submitting...' : '📅 Book Appointment'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}