import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Financial Dashboard',
    description: 'Real-time analytics dashboard for financial data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tags: ['Vue.js', 'D3.js', 'AWS'],
  },
  {
    title: 'Healthcare App',
    description: 'Mobile application for patient management and telemedicine services.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    tags: ['React Native', 'Firebase', 'Node.js'],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-purple-400" />
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm text-purple-400 bg-purple-900/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}