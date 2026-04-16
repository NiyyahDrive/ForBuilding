'use client';

import { companyData } from '@/data/companyData';
import { useState } from 'react';

export default function ContactSection() {
  const { owner } = companyData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neem Contact Op
          </h2>
          <p className="text-lg text-gray-600">
            Maak vrijblijvend kennis met ons
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contactgegevens</h3>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📧</div>
              <div>
                <p className="font-semibold text-gray-900">E-mail</p>
                <a
                  href={`mailto:${owner.email}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {owner.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📞</div>
              <div>
                <p className="font-semibold text-gray-900">Telefoon</p>
                <div className="space-y-1">
                  <a
                    href={`tel:${owner.phone}`}
                    className="block text-blue-600 hover:text-blue-800"
                  >
                    {owner.phone}
                  </a>
                  <a
                    href={`tel:${owner.phone2}`}
                    className="block text-blue-600 hover:text-blue-800"
                  >
                    {owner.phone2}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl">📍</div>
              <div>
                <p className="font-semibold text-gray-900">Adres</p>
                <p className="text-gray-700">{owner.address}</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h4 className="font-semibold text-gray-900 mb-2">Werktijden</h4>
              <p className="text-gray-700">
                Ma - Do: 07:00 - 18:00
                <br />
                Vr: 07:00 - 17:00
                <br />
                Za - Zo: Op afspraak
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Dank u wel! Uw bericht is verzonden. We nemen snel contact met u op.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="uw@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Onderwerp *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Onderwerp"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Uw bericht..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Bericht Verzenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
