'use client';
import React, { useState } from 'react';
import { Users, Trophy, Heart, Code, Palette, ArrowLeft, Mail, Calendar, LucideIcon } from 'lucide-react';
import Image from 'next/image';

// Define club key type
type ClubKey = 'tech' | 'social' | 'cultural' | 'creators' | 'sports';

// Define interfaces for type safety
interface ClubHead {
  name: string;
  position: string;
  email: string;
  phone?: string;
}

interface CoreMember {
  name: string;
  position: string;
  specialty?: string;
}

interface ClubData {
  id: string;
  name: string;
  icon: LucideIcon;
  image: string;
  logo?: string;
  bgColor: string;
  color: string;
  description: string;
  head: ClubHead;
  coreMembers: CoreMember[];
  activities: string[];
  recentEvents: string[];
}

const ClubPage = () => {
  const [selectedClub, setSelectedClub] = useState<ClubKey | null>(null);

  const clubsData: Record<ClubKey, ClubData> = {
    tech: {
      id: 'tech',
      name: 'Tech Club (Qubit)',
      icon: Code,
      image: '/techclub.avif',
      logo: "https://ik.imagekit.io/s0kb1s3cx3/PWIOI/techclublogo.jpg?updatedAt=1751290850316",
      bgColor: 'bg-blue-50',
      color: 'from-blue-600 to-blue-800',
      description: 'Innovating the future through technology and programming excellence',
      head: {
        name: 'Mohammad Shoyeb Ansari',
        position: 'Club President',
        email: 'shoyeb.sot010069@pwioi.com',
      },
      coreMembers: [
        { name: 'Aman Raj Gupta', position: 'Core Member' },
        { name: 'Rohit Makhani', position: 'Core Member' },
        { name: 'Saiyam Kumar', position: 'Core Member' },
        { name: 'Jivan Jamdar', position: 'Core Member' }
      ],
      activities: [
        'Annual hackathons and coding competitions',
        'Technical workshops and industry seminars',
        'Open source project contributions',
        'Industry mentor sessions and networking',
        'Innovation lab and research projects'
      ],
      recentEvents: [
        'SQL PowerBI Contest',
        'CP Mentorship Program',
        'Tech Industry Meetup'
      ]
    },
    social: {
      id: 'social',
      name: 'Social Welfare Club (Ehsaas)',
      icon: Heart,
      image: '/socialwelfare.avif',
      logo: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/ehsaas.jpg?updatedAt=1751273652766',
      bgColor: 'bg-green-50',
      color: 'from-green-600 to-green-800',
      description: 'Creating positive impact through community service and social responsibility',
      head: {
        name: 'Harish Sharma',
        position: 'Club President',
        email: 'harish.sot010042@pwioi.com',
      },
      coreMembers: [
        { name: 'Parv Manglani', position: 'Core Member' },
        { name: 'Abhinav Jain', position: 'Core Member' },
        { name: 'Aditi', position: 'Core Member' },
        { name: 'Harshit Raj', position: 'Core Member' },
        { name: 'MVS Gayathri', position: 'Core Member' },
        { name: 'Samruddhi Gujarathi', position: 'Core Member' },
        { name: 'Sushrut Kaviskar', position: 'Core Member' },
       
      ],
      activities: [
        'Community development and service projects',
        'Educational support for underprivileged children',
        'Environmental conservation initiatives',
        'Senior citizen care and support programs',
        'Disaster relief and emergency response'
      ],
      recentEvents: [
        'Festival for All',
        'Education Drive',
        'Periods of Change'
      ]
    },
    cultural: {
      id: 'cultural',
      name: 'Cultural Club',
      icon: Palette,
      image: '/cultural.avif',
      bgColor: 'bg-pink-50',
      color: 'from-pink-600 to-pink-800',
      description: 'Celebrating diversity and fostering artistic expression through vibrant cultural events',
      head: {
        name: 'Arjun Mehta',
        position: 'Club President',
        email: 'arjun.mehta@pwioi.edu',
      },
      coreMembers: [
        { name: 'Sophia Kim', position: 'Vice President', specialty: 'Classical & Contemporary Dance' },
        { name: 'Omar Hassan', position: 'Music Director', specialty: 'Traditional & Modern Music' },
        { name: 'Isabella Garcia', position: 'Art Coordinator', specialty: 'Visual Arts & Design' },
        { name: 'Raj Patel', position: 'Event Manager', specialty: 'Cultural Festival Planning' }
      ],
      activities: [
        'Grand cultural festivals and celebrations',
        'Traditional and contemporary dance performances',
        'Art exhibitions and creative showcases',
        'Music concerts and cultural recitals',
        'International heritage and food festivals'
      ],
      recentEvents: [
        'PWIOI Cultural Fest 2024',
        'International Arts Showcase',
        'Heritage Week Celebrations'
      ]
    },
    creators: {
      id: 'creators',
      name: 'Creators Club',
      icon: Users,
      image: '/creators.avif',
      bgColor: 'bg-orange-50',
      color: 'from-orange-600 to-orange-800',
      description: 'Nurturing creative minds through digital innovation and multimedia excellence',
      head: {
        name: 'Taylor Brooks',
        position: 'Club President',
        email: 'taylor.brooks@pwioi.edu',
        phone: '+91 65432 10987'
      },
      coreMembers: [
        { name: 'Jordan Lee', position: 'Creative Director', specialty: 'Video Production & Editing' },
        { name: 'Casey Morgan', position: 'Content Manager', specialty: 'Digital Marketing' },
        { name: 'Alex Rivera', position: 'Design Lead', specialty: 'Graphic & UI/UX Design' },
        { name: 'Sam Parker', position: 'Tech Support', specialty: 'Audio Engineering' }
      ],
      activities: [
        'Professional video production workshops',
        'Photography masterclasses and exhibitions',
        'Podcast creation and digital storytelling',
        'Design thinking and creative competitions',
        'Content creation and social media bootcamps'
      ],
      recentEvents: [
        'PWIOI Student Film Festival',
        'Creative Excellence Awards',
        'Digital Innovation Summit'
      ]
    },
    sports: {
      id: 'sports',
      name: 'Sports Club',
      icon: Trophy,
      image: '/sports.avif',
      bgColor: 'bg-red-50',
      color: 'from-red-600 to-red-800',
      description: 'Building champions through athletic excellence, teamwork, and sportsmanship',
      head: {
        name: 'Abhyudaya',
        position: 'Club President',
        email: 'abhyudaya.sot010007@pwioi.com',
      },
      coreMembers: [
        { name: 'Anuj Kumar', position: 'Core Member' },
        { name: 'Alok Kumar', position: 'Core Member', specialty: 'Basketball & Team Sports' },
        { name: 'Manshi Sharma', position: 'Core Member' },
        { name: 'Niraj Roy', position: 'Core Member' }
      ],
      activities: [
        'Inter-collegiate tournaments and championships',
        'Professional fitness training programs',
        'Sports camps and skill development clinics',
        'Marathon events and endurance challenges',
        'Team building and leadership activities'
      ],
      recentEvents: [
        'PWIOI Annual Sports Meet',
        'Inter-College Championship',
        'Fitness Challenge Series'
      ]
    }
  };

  if (selectedClub) {
    const club = clubsData[selectedClub];
    const IconComponent = club.icon;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className={`bg-gradient-to-r ${club.color} text-white py-20 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedClub(null)}
              className="flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              Back to Clubs
            </button>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex items-center justify-center">
                {club.logo ? (
                  <Image 
                    src={club.logo} 
                    alt={`${club.name} Logo`}
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain rounded-lg"
                  />
                ) : (
                  <IconComponent size={56} className="text-white" />
                )}
              </div>
              <div className="space-y-4">
                <h1 className="font-bold text-5xl lg:text-6xl leading-tight">{club.name}</h1>
                <p className="text-xl text-secondary lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                  {club.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Club Head */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="font-bold text-3xl mb-8 text-gray-800">Club Leadership</h2>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {club.head.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="font-bold text-2xl text-gray-800">{club.head.name}</h3>
                      <p className="text-lg text-blue-600 font-medium">{club.head.position}</p>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center gap-3">
                          <Mail size={18} className="text-orange-500" />
                          <span>{club.head.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Members */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="font-bold text-3xl mb-8 text-gray-800">Core Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {club.coreMembers.map((member, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-sm font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h4 className="font-semibold text-lg text-gray-800">{member.name}</h4>
                          <p className="text-blue-600 font-medium">{member.position}</p>
                          {member.specialty && (
                            <p className="text-sm text-gray-500">{member.specialty}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="font-bold text-3xl mb-8 text-gray-800">Our Activities</h2>
                <div className="space-y-4">
                  {club.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${club.color} mt-2 shadow-sm`}></div>
                      <span className="text-gray-800 leading-relaxed">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Events */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="font-bold text-xl mb-6 text-gray-800">Recent Events</h3>
                <div className="space-y-4">
                  {club.recentEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-orange-600 mb-2">
                        <Calendar size={16} />
                        <span>Recent Event</span>
                      </div>
                      <p className="font-medium text-gray-800">{event}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Gallery */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="font-bold text-xl mb-6 text-gray-800">Activity Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300">
                      <span className="text-gray-500 text-xs">Activity Photo {i}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Memories from our recent events and activities
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="font-bold text-xl mb-6 text-gray-800">Club Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <span className="text-gray-700">Active Members</span>
                    <span className="font-bold text-blue-600">180+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <span className="text-gray-700">Events This Year</span>
                    <span className="font-bold text-blue-600">10+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <span className="text-gray-700">Established</span>
                    <span className="font-bold text-blue-600">2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-15 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Student Clubs at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Discover your passion, build lifelong connections, and make a meaningful impact. 
              Join our vibrant student community and become part of something extraordinary.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: '5', label: 'Active Clubs' },
              { number: '300+', label: 'Student Members' },
              { number: '50+', label: 'Annual Events' },
              { number: '10+', label: 'Awards Won' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200">
                <div className="font-bold text-2xl md:text-3xl text-secondary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Object.entries(clubsData) as [ClubKey, ClubData][]).map(([key, club]) => {
              const IconComponent = club.icon;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedClub(key)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200">
                    {/* Card Header */}
                    <div className="relative h-40 overflow-hidden rounded-t-2xl">
                      <Image
                        src={club.image}
                        alt={`${club.name} Banner`}
                        className="object-cover"
                        fill
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.nextSibling) {
                            (target.nextSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black/10 hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <IconComponent size={48} className="text-gray-400" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        {club.logo ? (
                          <Image 
                            src={club.logo} 
                            alt={`${club.name} Logo`}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              if (target.nextSibling) {
                                (target.nextSibling as HTMLElement).style.display = 'block';
                              }
                            }}
                          />
                        ) : null}
                        <IconComponent 
                          size={32} 
                          className={`text-gray-600 ${club.logo ? 'hidden' : 'block'}`} 
                        />
                        <h3 className="font-bold text-2xl text-primary transition-colors">
                          {club.name}
                        </h3>
                      </div>
                      <p className="text-secondary mb-6 leading-relaxed">
                        {club.description}
                      </p>

                      {/* Quick Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <Calendar size={18} className="text-primary" />
                          <span>Regular Events & Activities</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-accent hover:bg-primary text-primary hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-md">
                        Explore Club Details
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubPage;