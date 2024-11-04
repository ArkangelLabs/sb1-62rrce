import React from 'react';
import { Brain, Cloud, Code, Lock, Mail, MonitorSmartphone, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Hero Section */}
      <header className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <img 
            src="https://hfenjzxyhvcogrhsgngf.supabase.co/storage/v1/object/public/Misc-Bucker-Public/mythril-logo.png" 
            alt="Mythril Systems" 
            className="h-12 w-auto"
          />
          <div className="flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#stack" className="text-gray-300 hover:text-white transition-colors">Stack</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-black to-gray-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-8 animate-fade-in">
              Transforming Business Through
              <span className="text-blue-400"> AI Innovation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 animate-fade-in-delay">
              Specializing in AI solutions and digital transformation to help businesses evolve and thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Brain className="w-8 h-8 text-blue-400" />}
              title="AI Solutions"
              features={[
                "Custom AI integration",
                "Intelligent automation",
                "Data analytics",
                "Machine learning"
              ]}
            />
            <ServiceCard 
              icon={<Zap className="w-8 h-8 text-blue-400" />}
              title="Digital Transformation"
              features={[
                "Process optimization",
                "System modernization",
                "Cloud migration",
                "Digital workflows"
              ]}
            />
            <ServiceCard 
              icon={<Code className="w-8 h-8 text-blue-400" />}
              title="Custom Software"
              features={[
                "Bespoke applications",
                "Enterprise solutions",
                "Integration services",
                "Scalable architectures"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <TechItem icon={<MonitorSmartphone />} text="Microsoft Power Platform" />
            <TechItem icon={<Cloud />} text="Azure Cloud Services" />
            <TechItem icon={<Brain />} text="Custom AI Models" />
            <TechItem icon={<Zap />} text="Enterprise IoT Solutions" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Lock />}
              title="Enterprise-grade"
              description="Solutions scaled for any business size"
            />
            <FeatureCard 
              icon={<Code />}
              title="Certified Team"
              description="Microsoft certified development experts"
            />
            <FeatureCard 
              icon={<Zap />}
              title="Proven Track Record"
              description="Excellence in digital transformation"
            />
            <FeatureCard 
              icon={<Cloud />}
              title="Flexible Deployment"
              description="Multiple deployment options available"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
          <div className="inline-flex items-center space-x-2 text-lg text-gray-300">
            <Mail className="w-6 h-6" />
            <a href="mailto:hello@mythril.systems" className="hover:text-blue-400 transition-colors">
              hello@mythril.systems
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          © {new Date().getFullYear()} Mythril Systems. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, features }) {
  return (
    <div className="bg-black/50 p-8 rounded-lg shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-800">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TechItem({ icon, text }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-gray-800">
      <div className="text-blue-400 mb-4">{icon}</div>
      <p className="text-white font-medium">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 text-center group hover:bg-black/50 rounded-lg transition-all duration-300">
      <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;