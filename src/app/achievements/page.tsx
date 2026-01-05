import { Trophy, Users, Film, ImageIcon } from 'lucide-react';
import Link from 'next/link';

// Achievement Card Component
const AchievementCard = ({ 
  title, 
  description, 
  count,
  icon: Icon,
  href
}: { 
  title: string; 
  description: string; 
  count: string;
  icon: React.ElementType;
  href: string;
}) => (
  <Link href={href} className="group block">
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
      <div className="p-8">
        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-100 transition-colors duration-300">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-blue-600 font-medium">
          <span className="text-3xl font-bold mr-2">{count}</span>
          <span className="text-sm">achievements</span>
          <svg className="w-5 h-5 ml-auto transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  </Link>
);

// Gallery Item Component
const GalleryItem = ({ 
  title, 
  count,
  icon: Icon,
  href
}: { 
  title: string; 
  count: string;
  icon: React.ElementType;
  href: string;
}) => (
  <Link href={href} className="group relative rounded-xl overflow-hidden h-64 md:h-80">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white">
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-blue-100">{count} items</p>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
        <span className="mr-2">View All</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  </Link>
);

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Our Achievements</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Celebrating our journey, victories, and the talented players who make it all possible.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
              Proud Moments & Milestones
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AchievementCard
              icon={Trophy}
              title="Tournament Wins"
              description="Championships and trophies won by our teams in various competitions."
              count="25+"
              href="/achievements/tournaments"
            />
            <AchievementCard
              icon={Users}
              title="Player Selections"
              description="Our players selected for district, state, and national level teams."
              count="150+"
              href="/achievements/selections"
            />
            <AchievementCard
              icon={Film}
              title="Match Highlights"
              description="Relive the best moments from our matches and training sessions."
              count="50+"
              href="/achievements/highlights"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
              Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of memorable moments, matches, and achievements.
            </p>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GalleryItem
              icon={Trophy}
              title="Tournaments"
              count="12 Albums"
              href="/achievements/tournaments"
            />
            <GalleryItem
              icon={Users}
              title="Player Spotlights"
              count="8 Albums"
              href="/achievements/spotlights"
            />
            <GalleryItem
              icon={ImageIcon}
              title="Training Sessions"
              count="15 Albums"
              href="/achievements/training"
            />
            <GalleryItem
              icon={Film}
              title="Match Highlights"
              count="24 Videos"
              href="/achievements/highlights"
            />
            <GalleryItem
              icon={Trophy}
              title="Awards"
              count="18 Photos"
              href="/achievements/awards"
            />
            <GalleryItem
              icon={Users}
              title="Team Events"
              count="10 Albums"
              href="/achievements/events"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Be Part of Our Success Story
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our academy and create your own path to cricketing excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              Join Now
              <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
