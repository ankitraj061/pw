'use client';
import React from 'react';
import { 
  Play, 
  Users, 
  Utensils, 
  Trophy, 
  Building, 
  Calendar, 
  
  Star,
  
  PlayCircle,
  Heart,
  Globe,
  Wifi,
  Car,
  Shield,
 
  Coffee,
  Music,
  Gamepad2,
  Dumbbell,
  
} from 'lucide-react';

const CampusLifePage = () => {
 

  const campusStats = [
    { icon: Users, number: '300+', label: 'Students', color: 'text-secondary' },
    { icon: Globe, number: '6+', label: 'States Represented', color: 'text-secondary' },
    { icon: Building, number: '1', label: 'Hostel', color: 'text-secondary' },
    { icon: Trophy, number: '5+', label: 'Sports Facilities', color: 'text-secondary' }
  ];

  const diversityStats = [
    { percentage: '35%', label: 'International Students', color: 'bg-accent' },
    { percentage: '45%', label: 'Female Students', color: 'bg-accent' },
    { percentage: '60%', label: 'Scholarship Recipients', color: 'bg-accent' },
    { percentage: '25%', label: 'First-Generation College', color: 'bg-accent' }
  ];

  const hostelFeatures = [
    { icon: Wifi, title: 'High-Speed WiFi', description: '24/7 unlimited internet access' },
    { icon: Shield, title: 'Security', description: 'Round-the-clock security with CCTV monitoring' },
    { icon: Coffee, title: 'Common Areas', description: 'Study lounges, recreation rooms, and cafeterias' },
    { icon: Car, title: 'Transportation', description: 'Regular shuttle service to academic blocks' }
  ];

  const sportsFeatures = [
    { icon: Trophy, title: 'Olympic-Size Pool', description: 'Professional swimming facility with coaching' },
    { icon: Dumbbell, title: 'Modern Gymnasium', description: 'State-of-the-art equipment and fitness programs' },
    { icon: Gamepad2, title: 'Indoor Sports Complex', description: 'Basketball, badminton, table tennis, and more' },
    { icon: Music, title: 'Outdoor Grounds', description: 'Football, cricket, tennis, and athletics track' }
  ];

  const infrastructureHighlights = [
    { title: 'Smart Classrooms', description: 'Interactive digital learning environments', image: 'classroom' },
    { title: 'Research Labs', description: 'Cutting-edge facilities for innovation', image: 'lab' },
    { title: 'Central Library', description: '24/7 access to vast digital and physical resources', image: 'library' },
    { title: 'Innovation Hub', description: 'Maker spaces and startup incubation center', image: 'innovation' }
  ];

  const recentEvents = [
    { title: 'PWIOI Tech Summit 2024', date: 'March 15-17', category: 'Technology', image: 'tech-summit' },
    { title: 'Cultural Festival - Rang-e-PWIOI', date: 'February 20-25', category: 'Cultural', image: 'cultural' },
    { title: 'Inter-College Sports Meet', date: 'January 10-15', category: 'Sports', image: 'sports-meet' },
    { title: 'Industry Connect Symposium', date: 'December 8-10', category: 'Academic', image: 'industry' }
  ];

  const studentVlogs = [
    { 
      title: 'A Day in My Life at PWIOI Hostel', 
      creator: 'Priya Sharma - CSE 3rd Year',
      views: '25.4K',
      duration: '8:32',
      thumbnail: 'hostel-vlog'
    },
    { 
      title: 'Campus Tour: Hidden Gems of PWIOI', 
      creator: 'Rahul Mehta - MBA 2nd Year',
      views: '18.7K',
      duration: '12:15',
      thumbnail: 'campus-tour'
    },
    { 
      title: 'Mess Food Review & Hostel Life', 
      creator: 'Anjali Patel - ECE 2nd Year',
      views: '32.1K',
      duration: '10:45',
      thumbnail: 'mess-review'
    },
    { 
      title: 'Sports Day Highlights & Facilities Tour', 
      creator: 'Vikram Singh - Mech 4th Year',
      views: '22.8K',
      duration: '15:20',
      thumbnail: 'sports-tour'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-10 lg:py-15 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Campus Life at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-4xl mx-auto">
              Experience a vibrant community where learning extends beyond classrooms. 
              Discover world-class facilities, diverse cultures, and lifelong friendships.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
              {campusStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-cream-warm/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <IconComponent size={32} className={`${stat.color} mx-auto mb-3`} />
                    <div className="font-poppins font-bold text-2xl text-secondary mb-1">
                      {stat.number}
                    </div>
                    <div className="font-open-sans text-sm text-primary/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Diversity Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary">
                  Diversity & Inclusion
                </h2>
                <p className="font-open-sans text-lg text-primary/80 leading-relaxed">
                  Our campus is a melting pot of cultures, ideas, and perspectives. Students from across 
                  India and around the world come together to create a truly global learning environment.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {diversityStats.map((stat, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 ${stat.color} rounded-full`}></div>
                      <span className="font-poppins font-bold text-2xl text-secondary">
                        {stat.percentage}
                      </span>
                    </div>
                    <p className="font-open-sans text-primary/70">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-cream-base to-cream-warm rounded-xl">
                <Heart className="text-accent" size={24} />
                <span className="font-open-sans text-primary">
                  <strong>Cultural Unity at PWIOI - </strong> 5+ cultural organizations celebrating diversity
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-lg">
                <PlayCircle size={70} className="text-accent opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
              <p className="font-open-sans text-center text-primary/70 mt-4">
                Campus Diversity Showcase - Click to watch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Life Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Hostel Life - Your Home Away From Home
            </h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-3xl mx-auto">
              Experience comfortable living with modern amenities, fostering friendships and academic excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hostelFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <IconComponent size={32} className="text-accent mb-4" />
                      <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                        {feature.title}
                      </h4>
                      <p className="font-open-sans text-primary/70 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <PlayCircle size={70} className="text-blue-600 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                    Hostel Facilities Include:
                  </h4>
                  <ul className="font-open-sans text-primary/70 space-y-1 text-sm">
                    <li>• Single & Twin sharing rooms with attached bathrooms</li>
                    <li>• 24/7 power backup and water supply</li>
                    <li>• Laundry facilities and housekeeping services</li>
                    <li>• Recreation rooms with games and entertainment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mess & Dining Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-poppins font-bold text-3xl text-primary">
                Dining & Mess Facilities
              </h2>
              <p className="font-open-sans text-primary/80 leading-relaxed">
                Nutritious, hygienic, and delicious meals prepared with care. Our mess facilities 
                cater to diverse dietary preferences and cultural cuisines.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <Star className="text-green-600" size={15} />
                  <span className="font-open-sans text-primary text-sm">Multi-cuisine options daily</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <Star className="text-green-600" size={15} />
                  <span className="font-open-sans text-primary text-sm">Special dietary accommodations</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <Star className="text-green-600" size={15} />
                  <span className="font-open-sans text-primary text-sm">Hygienic preparation standards</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <Utensils size={50} className="text-orange-600 opacity-80" />
                </div>
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <PlayCircle size={50} className="text-orange-600 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                  </div>
                  <div className="bg-gradient-to-r from-cream-base to-cream-warm p-4 rounded-xl">
                    <h4 className="font-poppins font-semibold text-primary mb-2">Meal Timings</h4>
                    <div className="font-open-sans text-sm text-primary/70 space-y-1">
                      <p>Breakfast: 7:30 AM - 9:30 AM</p>
                      <p>Lunch: 12:00 PM - 2:00 PM</p>
                      <p>Dinner: 7:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Facilities Section */}
      <section className="py-20 bg-gray-100 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              World-Class Sports Facilities
            </h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-3xl mx-auto">
              Stay fit, competitive, and healthy with our comprehensive sports infrastructure and professional coaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {sportsFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="bg-blue-100 to-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="font-open-sans text-primary/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-200 rounded-xl flex items-center justify-center shadow-lg">
            <PlayCircle size={60} className="text-green-600 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
          <p className="font-open-sans text-center text-primary/70 mt-4">
            Take a virtual tour of our sports facilities
          </p>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Modern Infrastructure
            </h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-3xl mx-auto">
              State-of-the-art facilities designed to enhance learning and foster innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureHighlights.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 mb-4">
                  <Building size={50} className="text-primary opacity-80" />
                </div>
                <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                  {item.title}
                </h4>
                <p className="font-open-sans text-primary/70 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
              Campus Events & Activities
            </h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-3xl mx-auto">
              Year-round excitement with festivals, competitions, seminars, and cultural celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br bg-blue-50 flex items-center justify-center">
                  <Calendar size={40} className="text-blue-200 opacity-80" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-open-sans text-accent font-medium mb-2">
                    {event.category}
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                    {event.title}
                  </h4>
                  <p className="font-open-sans text-primary/70 text-sm">
                    {event.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Vlogs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary/100 mb-4">
              Student Life Vlogs
            </h2>
            <p className="font-open-sans text-lg text-primary/80 max-w-3xl mx-auto">
              Get an authentic glimpse into campus life through the eyes of our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentVlogs.map((vlog, index) => (
              <div key={index} className="bg-gradient-to-br from-cream-base to-cream-warm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                  <PlayCircle size={60} className="text-primary opacity-80 hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-open-sans">
                    {vlog.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-poppins font-semibold text-lg text-primary mb-2">
                    {vlog.title}
                  </h4>
                  <p className="font-open-sans text-primary/70 text-sm mb-2">
                    {vlog.creator}
                  </p>
                  <div className="flex items-center justify-between text-xs font-open-sans text-primary/60">
                    <span>{vlog.views} views</span>
                    <span className="flex items-center gap-1">
                      <Play size={12} />
                      Watch Now
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl">
              Ready to Be Part of PWIOI?
            </h2>
            <p className="font-open-sans text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join our vibrant community and experience the perfect blend of academics, culture, 
              sports, and lifelong friendships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-poppins font-semibold px-8 py-4 rounded-xl hover:bg-cream-base transition-all duration-300 hover:scale-105 shadow-lg">
                Schedule Campus Visit
              </button>
              <button className="border-2 border-white text-white font-poppins font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CampusLifePage;