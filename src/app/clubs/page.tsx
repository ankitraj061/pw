'use client';
import React, { useState } from 'react';
import { Users, Trophy, Heart, Code, Palette, ArrowLeft, Mail, Phone, Calendar, MapPin } from 'lucide-react';

const ClubPage = () => {
  const [selectedClub, setSelectedClub] = useState(null);

  const clubsData = {
    tech: {
      id: 'tech',
      name: 'Tech Club',
      icon: Code,
      image: '/techclub.avif',
      bgColor: 'bg-blue-50',
      description: 'Innovating the future through technology and programming excellence',
      head: {
        name: 'Alex Chen',
        position: 'Club President',
        email: 'alex.chen@pwioi.edu',
        phone: '+91 98765 43210'
      },
      coreMembers: [
        { name: 'Sarah Kumar', position: 'Vice President', specialty: 'AI/ML Development' },
        { name: 'Mike Johnson', position: 'Technical Lead', specialty: 'Full Stack Development' },
        { name: 'Priya Patel', position: 'Event Coordinator', specialty: 'Mobile Development' },
        { name: 'David Lee', position: 'Secretary', specialty: 'Cybersecurity' }
      ],
      activities: [
        'Annual hackathons and coding competitions',
        'Technical workshops and industry seminars',
        'Open source project contributions',
        'Industry mentor sessions and networking',
        'Innovation lab and research projects'
      ],
      recentEvents: [
        'PWIOI Hackathon 2024',
        'AI/ML Workshop Series',
        'Tech Industry Meetup'
      ]
    },
    social: {
      id: 'social',
      name: 'Social Welfare Club',
      icon: Heart,
      image: '/socialwelfare.avif',
      bgColor: 'bg-green-50',
      description: 'Creating positive impact through community service and social responsibility',
      head: {
        name: 'Emma Rodriguez',
        position: 'Club President',
        email: 'emma.rodriguez@pwioi.edu',
        phone: '+91 87654 32109'
      },
      coreMembers: [
        { name: 'James Wilson', position: 'Vice President', specialty: 'Community Outreach' },
        { name: 'Lisa Zhang', position: 'Volunteer Coordinator', specialty: 'Event Management' },
        { name: 'Ryan O\'Connor', position: 'Fundraising Lead', specialty: 'Donor Relations' },
        { name: 'Maya Sharma', position: 'Secretary', specialty: 'Social Media Coordination' }
      ],
      activities: [
        'Community development and service projects',
        'Educational support for underprivileged children',
        'Environmental conservation initiatives',
        'Senior citizen care and support programs',
        'Disaster relief and emergency response'
      ],
      recentEvents: [
        'Winter Relief Drive 2024',
        'Community Garden Initiative',
        'Senior Care Program Launch'
      ]
    },
    cultural: {
      id: 'cultural',
      name: 'Cultural Club',
      icon: Palette,
      image: '/cultural.avif',
      bgColor: 'bg-pink-50',
      description: 'Celebrating diversity and fostering artistic expression through vibrant cultural events',
      head: {
        name: 'Arjun Mehta',
        position: 'Club President',
        email: 'arjun.mehta@pwioi.edu',
        phone: '+91 76543 21098'
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
      description: 'Building champions through athletic excellence, teamwork, and sportsmanship',
      head: {
        name: 'Marcus Thompson',
        position: 'Club President',
        email: 'marcus.thompson@pwioi.edu',
        phone: '+91 54321 09876'
      },
      coreMembers: [
        { name: 'Ashley Davis', position: 'Vice President', specialty: 'Track & Field Athletics' },
        { name: 'Chris Martinez', position: 'Equipment Manager', specialty: 'Basketball & Team Sports' },
        { name: 'Nina Williams', position: 'Event Coordinator', specialty: 'Aquatic Sports' },
        { name: 'Jake Anderson', position: 'Fitness Trainer', specialty: 'Strength & Conditioning' }
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
      <div className="min-h-screen bg-gradient-to-br from-cream-base to-cream-warm">
        {/* Header */}
        <div className={`bg-gradient-to-r ${club.color} text-white py-20 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedClub(null)}
              className="flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-all duration-300 hover:scale-105 font-open-sans"
            >
              <ArrowLeft size={20} />
              Back to Clubs
            </button>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <IconComponent size={56} className="text-white" />
              </div>
              <div className="space-y-4">
                <h1 className="font-poppins font-bold text-5xl lg:text-6xl leading-tight">{club.name}</h1>
                <p className="font-open-sans text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-warm/20">
                <h2 className="font-poppins font-bold text-3xl mb-8 text-primary">Club Leadership</h2>
                <div className="bg-gradient-to-r from-cream-base to-cream-warm p-8 rounded-xl border border-cream-warm/30">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center shadow-lg">
                      <span className="font-poppins text-2xl font-bold text-white">
                        {club.head.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="font-poppins font-bold text-2xl text-primary">{club.head.name}</h3>
                      <p className="font-open-sans text-lg text-secondary font-medium">{club.head.position}</p>
                      <div className="space-y-2 font-open-sans text-primary/70">
                        <div className="flex items-center gap-3">
                          <Mail size={18} className="text-accent" />
                          <span>{club.head.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone size={18} className="text-accent" />
                          <span>{club.head.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Members */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-warm/20">
                <h2 className="font-poppins font-bold text-3xl mb-8 text-primary">Core Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {club.coreMembers.map((member, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-cream-base to-cream-warm rounded-xl border border-cream-warm/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center shadow-md">
                          <span className="font-poppins text-sm font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h4 className="font-poppins font-semibold text-lg text-primary">{member.name}</h4>
                          <p className="font-open-sans text-secondary font-medium">{member.position}</p>
                          <p className="font-open-sans text-sm text-primary/70">{member.specialty}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-warm/20">
                <h2 className="font-poppins font-bold text-3xl mb-8 text-primary">Our Activities</h2>
                <div className="space-y-4">
                  {club.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-cream-base to-cream-warm rounded-lg border border-cream-warm/30 hover:shadow-md transition-all duration-300">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${club.color} mt-2 shadow-sm`}></div>
                      <span className="font-open-sans text-primary leading-relaxed">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recent Events */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-warm/20">
                <h3 className="font-poppins font-bold text-xl mb-6 text-primary">Recent Events</h3>
                <div className="space-y-4">
                  {club.recentEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-cream-base to-cream-warm rounded-lg border border-cream-warm/30">
                      <div className="flex items-center gap-2 font-open-sans text-sm text-accent mb-2">
                        <Calendar size={16} />
                        <span>Recent Event</span>
                      </div>
                      <p className="font-poppins font-medium text-primary">{event}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Gallery */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-warm/20">
                <h3 className="font-poppins font-bold text-xl mb-6 text-primary">Activity Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-cream-base to-cream-warm border border-cream-warm/30 rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300">
                      <span className="font-open-sans text-primary/60 text-xs">Activity Photo {i}</span>
                    </div>
                  ))}
                </div>
                <p className="font-open-sans text-sm text-primary/70 mt-4 text-center">
                  Memories from our recent events and activities
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-warm/20">
                <h3 className="font-poppins font-bold text-xl mb-6 text-primary">Club Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cream-base to-cream-warm rounded-lg">
                    <span className="font-open-sans text-primary/80">Active Members</span>
                    <span className="font-poppins font-bold text-secondary">180+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cream-base to-cream-warm rounded-lg">
                    <span className="font-open-sans text-primary/80">Events This Year</span>
                    <span className="font-poppins font-bold text-secondary">28</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cream-base to-cream-warm rounded-lg">
                    <span className="font-open-sans text-primary/80">Established</span>
                    <span className="font-poppins font-bold text-secondary">2018</span>
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
    <div className="min-h-screen bg-gradient-to-br from-cream-base to-cream-warm">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Student Clubs at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-4xl mx-auto">
              Discover your passion, build lifelong connections, and make a meaningful impact. 
              Join our vibrant student community and become part of something extraordinary.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: '5', label: 'Active Clubs' },
              { number: '800+', label: 'Student Members' },
              { number: '120+', label: 'Annual Events' },
              { number: '15+', label: 'Awards Won' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-cream-warm/30">
                <div className="font-poppins font-bold text-2xl md:text-3xl text-secondary mb-1">
                  {stat.number}
                </div>
                <div className="font-open-sans text-sm text-primary/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(clubsData).map(([key, club]) => {
              const IconComponent = club.icon;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedClub(key)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105 animate-scale-in"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-cream-warm/20">
                    {/* Card Header */}
                   <div className="relative h-40 overflow-hidden rounded-xl shadow-md">
  {/* Background Image */}
  <img
    src={club.image}
    alt="Club Banner"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Icon centered over the image */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full shadow-lg">
      <IconComponent size={48} className="text-white" />
    </div>
  </div>

  {/* Top-right light dot */}
  <div className="absolute top-6 right-6">
    <div className="w-4 h-4 bg-white/30 rounded-full"></div>
  </div>
</div>

                    
                    {/* Card Content */}
                    <div className="p-8">
                      <h3 className="font-poppins font-bold text-2xl text-primary mb-4 group-hover:text-secondary transition-colors">
                        {club.name}
                      </h3>
                      <p className="font-open-sans text-primary/80 mb-6 leading-relaxed line-clamp-3">
                        {club.description}
                      </p>
                      
                      {/* Quick Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 font-open-sans text-sm text-primary/70">
                          <Users size={18} className="text-accent" />
                          <span>180+ Active Members</span>
                        </div>
                        <div className="flex items-center gap-3 font-open-sans text-sm text-primary/70">
                          <Calendar size={18} className="text-accent" />
                          <span>Regular Events & Activities</span>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <button className="w-full bg-accent hover:bg-accent-dark text-white font-poppins font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-md">
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