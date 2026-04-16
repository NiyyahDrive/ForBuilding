import { companyData } from '@/data/companyData';

export default function ProjectsSection() {
  const { projects } = companyData;

  const scaleColors: { [key: string]: string } = {
    Groot: 'bg-red-100 text-red-800',
    Industrieel: 'bg-purple-100 text-purple-800',
    Residenteel: 'bg-blue-100 text-blue-800',
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recente Projecten
          </h2>
          <p className="text-lg text-gray-600">
            Overzicht van afgeronde industriële en residentiële projecten
          </p>
        </div>

        {/* Projects Timeline */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 p-6 rounded-r-lg hover:bg-gray-100 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.company}</p>
                </div>
                <span className={`${scaleColors[project.scale]} px-3 py-1 rounded-full text-sm font-semibold w-fit`}>
                  {project.scale}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500">⏰ {project.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
