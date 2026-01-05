import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Excellence', value: '12+' },
    { label: 'Trained Players', value: '2000+' },
    { label: 'Certified Coaches', value: '15+' },
    { label: 'Tournaments Won', value: '50+' },
  ];

  const features = [
    {
      name: 'World-Class Facilities',
      description: 'Our academy boasts state-of-the-art cricket facilities including multiple turf pitches, bowling machines, and video analysis equipment.',
      icon: (
        <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Expert Coaching Staff',
      description: 'Learn from former international and first-class cricketers with years of experience in professional cricket coaching.',
      icon: (
        <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'Proven Training Methodology',
      description: 'Our scientific training approach combines traditional techniques with modern sports science to maximize player potential.',
      icon: (
        <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      name: 'Holistic Development',
      description: 'We focus on developing not just cricket skills but also physical fitness, mental toughness, and sportsmanship.',
      icon: (
        <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const coaches = [
    {
      name: 'Rahul Sharma',
      role: 'Head Coach',
      experience: '15+ years',
      speciality: 'Batting & Fielding',
      bio: 'Former Ranji Trophy player with extensive coaching experience at the national level. Specializes in batting techniques and mental conditioning.',
      image: '/images/coach1.jpg',
    },
    {
      name: 'Priya Patel',
      role: 'Bowling Coach',
      experience: '12+ years',
      speciality: 'Fast Bowling',
      bio: 'Former international cricketer with expertise in fast bowling. Has trained several players who have represented at the state and national levels.',
      image: '/images/coach2.jpg',
    },
    {
      name: 'Vikram Singh',
      role: 'Spin Bowling Coach',
      experience: '10+ years',
      speciality: 'Spin Bowling',
      bio: 'Former first-class spinner with a deep understanding of spin bowling variations and tactics. Specializes in developing young spinners.',
      image: '/images/coach3.jpg',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gray-800 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Our Academy</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Empowering the next generation of cricket champions through world-class coaching, state-of-the-art facilities, and a passion for the game.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-yellow-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by aspiring cricketers</h2>
            <p className="mt-3 text-xl text-yellow-100 sm:mt-4">
              Join hundreds of players who have transformed their game with our academy.
            </p>
          </div>
          <div className="mt-10 text-center">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="pt-6">
                  <div className="flow-root bg-yellow-700 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-yellow-500 rounded-md shadow-lg">
                          {stat.value}
                        </span>
                      </div>
                      <p className="mt-5 text-sm font-medium text-white">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Building Champions Since 2010
            </h1>
          </div>
          <div className="mt-6 prose prose-yellow text-gray-500 mx-auto">
            <p className="text-lg">
              Founded in 2010 by former first-class cricketer Arjun Mehta, Elite Cricket Academy was born out of a passion for the game and a vision to nurture young talent. What started as a small training center with just two nets has now grown into one of the most respected cricket academies in the region.
            </p>
            <p className="mt-4">
              Our journey has been marked by numerous success stories - from young beginners who discovered their love for the game to talented players who went on to represent state and national teams. But more than the accolades, we take pride in the life skills, discipline, and sportsmanship that our students develop along the way.
            </p>
            <p className="mt-4">
              Today, we continue to uphold our founding principles of excellence, integrity, and a player-first approach, ensuring that every student who walks through our doors receives the guidance and support they need to excel both on and off the field.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Approach to Cricket Excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We combine traditional coaching methods with modern sports science to deliver exceptional results.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coaches Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Our Coaches</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Expert Coaching Team
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Learn from the best in the business
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coaches.map((coach) => (
                <div key={coach.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div className="flex justify-center">
                        <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200">
                          <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500">
                            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-lg font-medium text-gray-900">{coach.name}</h3>
                        <p className="mt-1 text-sm text-yellow-600">{coach.role}</p>
                        <p className="mt-1 text-sm text-gray-500">Experience: {coach.experience}</p>
                        <p className="mt-1 text-sm text-gray-500">Speciality: {coach.speciality}</p>
                        <p className="mt-3 text-base text-gray-500">{coach.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to start your cricket journey?</span>
            <span className="block text-yellow-600">Join our academy today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
              >
                Register Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-yellow-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
