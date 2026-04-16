import { companyData } from '@/data/companyData';

export default function HeroSection() {
  const { owner, intro } = companyData;

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{owner.name}</h1>
              <p className="text-xl text-blue-100">{owner.title}</p>
            </div>
            <p className="text-lg text-blue-50 leading-relaxed">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Contact opnemen
              </a>
              <a
                href="#projects"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-center"
              >
                Bekijk projecten
              </a>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg border border-white border-opacity-20">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-blue-100">Jaar ervaring</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg border border-white border-opacity-20">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Projecten afgerond</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg border border-white border-opacity-20">
              <div className="text-4xl font-bold mb-2">2</div>
              <p className="text-blue-100">Bachelors</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg border border-white border-opacity-20">
              <div className="text-4xl font-bold mb-2">4</div>
              <p className="text-blue-100">Talen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
