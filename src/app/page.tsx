import Link from 'next/link';
import Head from 'next/head';

// Hero Banner Component with Enhanced Styling
const HeroBanner = () => (
  <div className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-15"></div>
      <div className="text-center text-white px-6 py-12 sm:py-20 max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-serif tracking-tight leading-tight">
          <span className="block text-yellow-400 mb-2">Elite Cricket</span>
          <span className="block text-white">Academy</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Your journey to cricket excellence begins with professional coaching, world-class facilities, and a passion for the game.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/register" 
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Start Your Journey
          </Link>
          <Link 
            href="/programs" 
            className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 w-full sm:w-auto text-center"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2 border border-gray-100">
    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 text-blue-600">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900 font-serif">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed mb-6">{description}</p>
    <div className="mt-auto">
      <button className="text-blue-600 hover:text-blue-800 font-medium text-base flex items-center transition-colors duration-200 group">
        Learn more
        <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
);

// Highlights Component with Enhanced Design
const Highlights = () => {
  const features = [
    { 
      title: 'Expert Coaching', 
      description: 'Learn from BCCI and ICC certified coaches with years of professional playing and coaching experience.',
      icon: '🏆'
    },
    { 
      title: 'World-Class Facilities', 
      description: 'Train on professional turf wickets with modern training equipment and video analysis technology.',
      icon: '⚾'
    },
    { 
      title: 'Personalized Training', 
      description: 'Customized training programs tailored to individual skill levels and goals for all age groups.',
      icon: '🎯'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="inline-block px-5 py-2.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
            Excellence in <span className="text-blue-700">Cricket Training</span>
          </h2>
          <div className="w-32 h-1.5 bg-yellow-400 mx-auto rounded-full mb-12"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial Component
const Testimonial = () => (
  <div className="bg-blue-900 text-white py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="text-6xl mb-6">"</div>
      <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8">
        The coaching at Elite Cricket Academy transformed my game completely. The personalized attention and professional facilities are unmatched.
      </blockquote>
      <div className="font-medium">
        <p className="text-yellow-300">Rahul Sharma</p>
        <p className="text-blue-200 text-sm">Under-19 State Team Player</p>
      </div>
    </div>
  </div>
);

// Main Page Component
export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Head>
        <title>Elite Cricket Academy | Professional Cricket Training</title>
        <meta name="description" content="Professional cricket coaching for all ages and skill levels. Join our academy to train with certified coaches and elevate your game." />
      </Head>
      
      <HeroBanner />
      <Highlights />
      
      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-5 py-2.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              Our Programs
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
              Training for <span className="text-blue-700">Every Player</span>
            </h2>
            <div className="w-32 h-1.5 bg-yellow-400 mx-auto rounded-full mb-12"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive training programs designed to nurture talent at every level, from beginners to professional athletes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {[
              {
                title: 'Junior Program',
                age: 'Ages 8-14',
                description: 'Foundational skills development with focus on technique and fun.',
                features: ['Basic skills', 'Fitness training', 'Match simulations'],
                price: '₹3,500/month'
              },
              {
                title: 'Development Program',
                age: 'Ages 15-19',
                description: 'Advanced training for competitive players looking to excel.',
                features: ['Advanced techniques', 'Match strategy', 'Strength & conditioning'],
                price: '₹5,500/month',
                featured: true
              },
              {
                title: 'Elite Program',
                age: 'Ages 20+',
                description: 'Professional training for serious players and emerging talents.',
                features: ['High-performance coaching', 'Video analysis', 'Tournament preparation'],
                price: '₹8,500/month'
              }
            ].map((program, index) => (
              <div 
                key={index} 
                className={`h-full flex flex-col rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${
                  program.featured 
                    ? 'transform -translate-y-4 border-2 border-yellow-400' 
                    : 'border border-gray-200 hover:border-blue-200'
                }`}
              >
                {program.featured && (
                  <div className="bg-yellow-400 text-center py-2 text-sm font-semibold text-gray-900 tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-serif">{program.title}</h3>
                    <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                      {program.age}
                    </span>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">{program.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">{program.price}</div>
                    <p className="text-sm text-gray-500 mb-6">per month</p>
                    <ul className="space-y-4 mb-10 text-left">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 ${
                    program.featured 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white transform hover:scale-105' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Not sure which program is right for you? Our coaches will help you choose the best path.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
            >
              Contact Us for Guidance
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonial />
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
            Ready to Elevate Your <span className="text-yellow-400">Cricket Journey</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our academy today and take the first step towards cricket excellence with our expert coaching team.
            Transform your passion into performance with personalized training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/register" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href="/programs" 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore Programs
              <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
