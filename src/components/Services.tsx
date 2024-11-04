import { Code, Palette, Smartphone, Gauge, Lock, LineChart } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Speed optimization and performance tuning for maximum efficiency.',
  },
  {
    icon: Lock,
    title: 'Security Solutions',
    description: 'Robust security implementations to protect your digital assets.',
  },
  {
    icon: LineChart,
    title: 'Digital Strategy',
    description: 'Strategic planning and consulting for digital transformation.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <service.icon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}