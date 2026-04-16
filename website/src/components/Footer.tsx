import Link from 'next/link';
import { companyData } from '@/data/companyData';

export default function Footer() {
  const { owner } = companyData;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Alrubaei Werken</h3>
            <p className="text-sm text-gray-400">
              Professionele werfleiding en civiele engineering services voor industriële
              en residentiële projecten.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-400 transition">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-blue-400 transition">
                  Ervaring
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">📧</span>
                <a
                  href={`mailto:${owner.email}`}
                  className="hover:text-blue-400 transition"
                >
                  {owner.email}
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">📞</span>
                <a
                  href={`tel:${owner.phone}`}
                  className="hover:text-blue-400 transition"
                >
                  {owner.phone}
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">📍</span>
                <span>{owner.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Alrubaei Werken. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-blue-400 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Voorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
