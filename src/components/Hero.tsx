import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-900 opacity-90" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <Code2 className="h-10 w-10 text-purple-400" />
            <h2 className="text-purple-400 text-xl font-semibold">Syndicate Digital</h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
            Building Digital Excellence Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Innovation
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl max-w-2xl">
            We transform ideas into powerful digital solutions. Our expert team crafts beautiful, 
            high-performance websites and applications that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}