import { EnvelopeIcon, PhoneIcon, AcademicCapIcon, TrophyIcon, UserGroupIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/20/solid';
import Link from 'next/link';

type Coach = {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  bio: string;
  achievements: string[];
  email: string;
  phone: string;
  rating: number;
  image: string;
};

const coaches: Coach[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Head Coach & Batting Specialist',
    experience: '15+ Years',
    specialization: ['Batting Techniques', 'Match Strategy', 'Mental Conditioning'],
    bio: 'Former Ranji Trophy player with extensive experience in coaching at the national level. Specializes in transforming batting techniques and developing match-winning strategies.',
    achievements: [
      'NCA Level 3 Certified Coach',
      'Coached 10+ players to national teams',
      'Former Ranji Trophy player (Mumbai)',
      'Mentor for U-19 State Team',
    ],
    email: 'rahul.sharma@elitecricket.com',
    phone: '+91 98765 43210',
    rating: 4.9,
    image: '/images/coaches/rahul-sharma.jpg',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Fast Bowling Coach',
    experience: '12+ Years',
    specialization: ['Fast Bowling', 'Fitness Training', 'Injury Prevention'],
    bio: 'Former international cricketer with expertise in fast bowling. Has trained several players who have represented at the state and national levels.',
    achievements: [
      'Former Indian Women\'s Team Player',
      'NCA Level 2 Certified',
      'Specialist in Biomechanics',
      'Strength & Conditioning Expert',
    ],
    email: 'priya.patel@elitecricket.com',
    phone: '+91 98765 43211',
    rating: 4.8,
    image: '/images/coaches/priya-patel.jpg',
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    role: 'Spin Bowling Coach',
    experience: '10+ Years',
    specialization: ['Spin Bowling', 'Variations', 'Match Tactics'],
    bio: 'Former first-class spinner with a deep understanding of spin bowling variations and tactics. Specializes in developing young spinners.',
    achievements: [
      'Former Ranji Trophy Player',
      'NCA Level 2 Certified',
      'Specialist in Spin Bowling',
      'Mentor for U-23 State Team',
    ],
    email: 'vikram.mehta@elitecricket.com',
    phone: '+91 98765 43212',
    rating: 4.7,
    image: '/images/coaches/vikram-mehta.jpg',
  },
  {
    id: 4,
    name: 'Anjali Desai',
    role: 'Fielding & Wicket-Keeping Coach',
    experience: '8+ Years',
    specialization: ['Fielding Drills', 'Wicket-Keeping', 'Agility Training'],
    bio: 'Specialist fielding coach with expertise in modern fielding techniques and wicket-keeping skills. Focuses on agility, reflexes, and safe catching techniques.',
    achievements: [
      'NCA Certified Fielding Coach',
      'Former State Level Player',
      'Specialist in Wicket-Keeping',
      'Agility Training Expert',
    ],
    email: 'anjali.desai@elitecricket.com',
    phone: '+91 98765 43213',
    rating: 4.6,
    image: '/images/coaches/anjali-desai.jpg',
  },
  {
    id: 5,
    name: 'Arvind Kumar',
    role: 'Fitness & Conditioning Coach',
    experience: '10+ Years',
    specialization: ['Strength Training', 'Injury Prevention', 'Nutrition'],
    bio: 'Certified strength and conditioning specialist with extensive experience in cricket-specific fitness programs. Focuses on injury prevention and peak performance.',
    achievements: [
      'ISSA Certified Trainer',
      'Sports Nutrition Specialist',
      'Rehabilitation Expert',
      'Yoga & Flexibility Coach',
    ],
    email: 'arvind.kumar@elitecricket.com',
    phone: '+91 98765 43214',
    rating: 4.8,
    image: '/images/coaches/arvind-kumar.jpg',
  },
];

const CoachCard = ({ coach }: { coach: Coach }) => {
  return (
    <div key={coach.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-500">
          <UserGroupIcon className="h-16 w-16 text-gray-400" />
        </div>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{coach.name}</h3>
            <div className="flex items-center">
              <StarIconSolid className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              <span className="ml-1 text-gray-600">{coach.rating}</span>
            </div>
          </div>
          <p className="mt-1 text-sm font-medium text-yellow-600">{coach.role}</p>
          <p className="mt-1 text-sm text-gray-500">
            <ClockIcon className="inline-block h-4 w-4 mr-1" /> {coach.experience} Experience
          </p>
          <p className="mt-3 text-base text-gray-600 line-clamp-3">{coach.bio}</p>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Specializations:</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {coach.specialization.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Key Achievements:</h4>
            <ul className="mt-2 space-y-1">
              {coach.achievements.slice(0, 2).map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <TrophyIcon className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-sm text-gray-600">{achievement}</span>
                </li>
              ))}
              {coach.achievements.length > 2 && (
                <li className="text-sm text-gray-500">+{coach.achievements.length - 2} more</li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex space-x-4">
            <a
              href={`mailto:${coach.email}`}
              className="inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href={`tel:${coach.phone}`}
              className="inline-flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Call</span>
            </a>
            <Link
              href={`/coaches/${coach.id}`}
              className="ml-auto inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CoachesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gray-800 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meet Our Coaches
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Learn from the best in the business. Our experienced coaching staff brings a wealth of knowledge and expertise to help you excel in your cricket journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Expert Guidance</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              World-Class Coaching Staff
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our certified coaches have played at the highest levels and are dedicated to nurturing the next generation of cricket stars.
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>

          {/* Coaching Philosophy */}
          <div className="mt-20 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Coaching Philosophy</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                At Elite Cricket Academy, we believe in a holistic approach to player development.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Player-Centric Approach</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    We tailor our coaching to individual needs, recognizing that every player has unique strengths and areas for improvement.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Technical Excellence</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Focus on perfecting the fundamentals while incorporating modern techniques and technologies.
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Mental Toughness</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Building resilience, focus, and a winning mindset to perform under pressure.
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Physical Conditioning</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Comprehensive fitness programs to enhance performance and prevent injuries.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-yellow-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Ready to start your training?</h3>
            <p className="mt-2 text-lg text-gray-600">
              Join Elite Cricket Academy and get personalized coaching from our expert staff.
            </p>
            <div className="mt-6">
              <Link
                href="/register"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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
