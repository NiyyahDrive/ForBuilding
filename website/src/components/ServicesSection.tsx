import { companyData } from '@/data/companyData';

export default function ServicesSection() {
  const { services } = companyData;

  const iconMap: { [key: number]: string } = {
    1: '🏗️',
    2: '📋',
    3: '⚠️',
    4: '✓',
    5: '👥',
    6: '💬',
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Services
          </h2>
          <p className="text-lg text-gray-600">
            Professionele werfleiding en civiele engineeringdiensten
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{iconMap[service.id]}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
