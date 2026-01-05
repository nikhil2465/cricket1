'use client';

import React from 'react';
import { StarIcon, CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface Program {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function ProgramsPage() {
  const programs = [
    {
      id: 1,
      name: 'Junior Cricket Program',
      description: 'For young enthusiasts aged 6-16 years to learn the basics of cricket in a fun and engaging environment.',
      price: '₹2,500',
      duration: '3 months',
      features: [
        'Basic cricket skills training',
        '2 sessions per week',
        'Age-appropriate coaching',
        'Focus on fundamentals',
        'Fun games and activities',
        'Progress tracking',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Advanced Training Program',
      description: 'For serious players looking to take their game to the next level with intensive training.',
      price: '₹4,500',
      duration: '3 months',
      features: [
        'Advanced skills development',
        '4 sessions per week',
        'Strength & conditioning',
        'Match simulation',
        'Video analysis',
        'Personalized training plan',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Elite Performance Program',
      description: 'For competitive players aiming for district/state/national level cricket.',
      price: '₹7,500',
      duration: '3 months',
      features: [
        'Elite level training',
        '6 sessions per week',
        'Advanced fitness regime',
        'Mental conditioning',
        'Tournament preparation',
        'Scout connections',
      ],
      popular: false,
    },
  ];

  const specializedPrograms = [
    {
      name: 'Wicket-Keeping Masterclass',
      description: 'Specialized training for aspiring wicket-keepers with focus on technique, agility, and game awareness.',
      duration: '6 weeks',
      price: '₹3,500',
      features: ['Stance & positioning', 'Catching techniques', 'Stumping skills', 'Dive techniques'],
    },
    {
      name: 'Fast Bowling Clinic',
      description: 'Master the art of fast bowling with proper techniques, run-up, and variations.',
      duration: '6 weeks',
      price: '₹3,500',
      features: ['Run-up & action', 'Line & length', 'Swing & seam', 'Yorkers & bouncers'],
    },
    {
      name: 'Batting Excellence',
      description: 'Advanced batting techniques, shot selection, and match situation training.',
      duration: '6 weeks',
      price: '₹3,500',
      features: ['Shot selection', 'Footwork drills', 'Playing spin & pace', 'Match simulation'],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Verma',
      role: 'Parent of Arjun (Age 12)',
      content:
        'My son has been attending the Junior Program for 6 months, and his improvement is remarkable. The coaches are patient and knowledgeable.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Advanced Program Participant',
      content:
        'The Advanced Training Program transformed my game. The personalized attention and video analysis helped me correct my technique significantly.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Elite Program Graduate',
      content:
        'Thanks to the Elite Program, I got selected for the state U-19 team. The training intensity and quality of coaching is unmatched.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gray-800 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Programs
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Comprehensive cricket training programs designed for players of all ages and skill levels.
          </p>
        </div>
      </div>

      {/* Main Programs */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Training Programs</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Path to Excellence
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our structured programs are designed to help you achieve your cricket goals, whether you're a beginner or an aspiring professional.
            </p>
          </div>

          <div className="mt-16 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`relative p-8 bg-white border-2 ${
                  program.popular ? 'border-yellow-500' : 'border-gray-200'
                } rounded-2xl shadow-sm flex flex-col`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
                  <p className="mt-4 text-gray-500">{program.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">{program.price}</span>
                    <span className="text-base font-medium text-gray-500">/{program.duration}</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                        <span className="ml-3 text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/register"
                  className={`mt-8 block w-full py-3 px-6 border ${
                    program.popular
                      ? 'bg-yellow-500 text-white border-transparent hover:bg-yellow-600'
                      : 'bg-white text-yellow-600 border-yellow-600 hover:bg-gray-50'
                  } rounded-md text-center font-medium`}
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialized Programs */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Specialized Training</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Focused Skill Development
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Targeted programs to master specific aspects of the game.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {specializedPrograms.map((program, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
                      <p className="mt-2 text-gray-600">{program.description}</p>
                      <p className="mt-4">
                        <span className="text-2xl font-bold text-gray-900">{program.price}</span>
                        <span className="text-gray-600"> / {program.duration}</span>
                      </p>
                      <ul className="mt-4 space-y-2 text-left">
                        {program.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span className="ml-2 text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/register"
                        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Students Say
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`${
                          testimonial.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                        } h-5 w-5 flex-shrink-0`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-base text-gray-600">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to start your cricket journey?</span>
            <span className="block text-yellow-600">Choose your program today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
              >
                Enroll Now
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-yellow-100 hover:bg-yellow-200"
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
