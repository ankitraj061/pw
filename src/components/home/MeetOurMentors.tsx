'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const MeetOurMentors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mentors = [
    {
      id: 1,
      name: 'Gopal Sharma',
      role: 'Business Thinking',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
      company: 'Microsoft',
      companyLogo: '🏢'
    },
    {
      id: 2,
      name: 'Saurabh Moharikar',
      role: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3cb?w=400&h=500&fit=crop&crop=face',
      company: 'Red Hat',
      companyLogo: '🎩'
    },
    {
      id: 3,
      name: 'Shubham Gautam',
      role: 'Operating System',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
      company: 'Navi',
      companyLogo: '🚀'
    },
    {
      id: 4,
      name: 'Kinjal Sengupta',
      role: 'Career Excellence',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
      company: 'J.P.Morgan',
      companyLogo: '🏦'
    },
    {
      id: 5,
      name: 'Syed Zabi Ulla',
      role: 'Java/C++',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
      company: 'Decentro',
      companyLogo: '💼'
    },
    {
      id: 6,
      name: 'Nitin M',
      role: 'Web Development',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=500&fit=crop&crop=face',
      company: 'Google',
      companyLogo: '🔍'
    },
    {
      id: 7,
      name: 'Anisha Koshy',
      role: 'English',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&crop=face',
      company: 'Amazon',
      companyLogo: '📦'
    },
    {
      id: 8,
      name: 'Satya Sai Neerukonda',
      role: 'DSA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
      company: 'Google',
      companyLogo: '🔍'
    },
    
    
    {
      id: 10,
      name: 'Kaibalya Biswal',
      role: 'Python',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
      company: 'Google',
      companyLogo: '🔍'
    },


  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, mentors.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, mentors.length - 4)) % Math.max(1, mentors.length - 4));
  };

  const visibleMentors = mentors.slice(currentIndex, currentIndex + 5);

  return (
    <section className="py-20 bg-background text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">Our Mentors</h2>
            
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 text-primary bg-accent rounded-full border border-primary flex items-center justify-center  hover:text-white hover:bg-primary transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 text-primary bg-accent rounded-full border border-primary flex items-center justify-center hover:text-white hover:bg-primary transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {visibleMentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className="group cursor-pointer"
            >
              {/* Mentor Card */}
              <div className="relative overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300">


                <div className="relative h-80 rounded-xl overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-accent mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-white text-sm mb-3">
                      {mentor.role}
                    </p>
                    
                    {/* Company */}
                    {/* <div className="flex items-center gap-2">
                      <span className="text-2xl">{mentor.companyLogo}</span>
                      <span className="text-white font-semibold text-sm">
                        {mentor.company}
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.max(1, mentors.length - 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurMentors;