import { companyData } from '@/data/companyData';

export default function ExperienceSection() {
  const { owner, education, languages, skills } = companyData;

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Profiel & Ervaring
          </h2>
          <p className="text-lg text-gray-600">
            Opleiding, talen en vakkundigheid
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Education */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎓 Opleiding</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-b pb-4">
                  <p className="font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🌍 Talen</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-3">
                  <p className="font-semibold text-gray-900">{lang.language}</p>
                  <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">👤 Persoonlijk</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-600">Geboortedatum</p>
                <p className="font-semibold text-gray-900">{owner.birthDate}</p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-600">Burgerlijke staat</p>
                <p className="font-semibold text-gray-900">{owner.maritalStatus}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">💼 Vaardigheden & Certificaten</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-600 font-bold">✓</span>
                <p className="text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
