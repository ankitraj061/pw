'use client';

import { Calendar, Clock, MapPin, Users, ChevronRight, Star, TrendingUp } from 'lucide-react';

// Define the Event interface
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  actualAttendees?: number;
  category: string;
  image: string;
  description: string;
  status?: string;
  highlights?: string[];
  feedback?: number;
  cardType?: string;
}

const EventsComponent = () => {
  // Explicitly type the empty array
  const upcomingEvents: Event[] = [
    // {
    //   id: 1,
    //   title: 'Tech Innovation Summit 2025',
    //   date: '2025-07-15',
    //   time: '09:00 AM',
    //   location: 'Convention Center, Bengaluru',
    //   attendees: 500,
    //   category: 'conference',
    //   image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
    //   description: 'Join industry leaders for cutting-edge tech discussions',
    //   status: 'filling-fast'
    // },
    // {
    //   id: 2,
    //   title: 'AI & Machine Learning Workshop',
    //   date: '2025-07-08',
    //   time: '02:00 PM',
    //   location: 'Tech Hub, HSR Layout',
    //   attendees: 50,
    //   category: 'workshop',
    //   image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    //   description: 'Hands-on workshop with AI experts',
    //   status: 'open'
    // },
    // {
    //   id: 3,
    //   title: 'Startup Pitch Night',
    //   date: '2025-07-20',
    //   time: '06:00 PM',
    //   location: 'Innovation Lab, Koramangala',
    //   attendees: 100,
    //   category: 'networking',
    //   image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
    //   description: 'Watch startups pitch to investors',
    //   status: 'open'
    // },
    // {
    //   id: 4,
    //   title: 'Cloud Computing Masterclass',
    //   date: '2025-07-25',
    //   time: '10:00 AM',
    //   location: 'Virtual Event',
    //   attendees: 200,
    //   category: 'workshop',
    //   image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    //   description: 'Deep dive into cloud technologies',
    //   status: 'open'
    // }
  ];

  const pastEvents: Event[] = [
    {
      id: 5,
      title: 'D2C Hackathon 2024',
      date: '27-28 Dec 2024',
      time: '24 hours',
      location: 'PWIOI Bengaluru Campus',
      attendees: 150,
      actualAttendees: 142,
      category: 'hackathon',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1740',
      description: 'Join us for an exciting hackathon focused on Direct-to-Consumer innovations. Build the next generation of D2C solutions and compete for amazing prizes!',
      highlights: ['Built 5 projects', '95% completion rate', 'Industry mentors'],
      feedback: 4.8,
      cardType: 'featured'
    },
    {
      id: 6,
      title: 'The Last Mile 2025',
      date: '26-27 March 2025',
      time: '02:00 PM-10:00 PM(Both Days)',
      location: 'PWIOI Bengaluru Hostel (Yellow Living)',
      attendees: 300,
      actualAttendees: 500,
      category: 'conference',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/DSC00521-min.JPG?updatedAt=1749622039884',
      description: 'Get ready for a flavorful experience at The Last Mile 2025 — an unforgettable two-day food fiesta by SOM students, serving up tasty delights and vibrant vibes for all!',
      highlights: ['20+ speakers', 'Live case studies', 'Networking sessions'],
      feedback: 4.6,
      cardType: 'minimal'
    },
    {
      id: 7,
      title: 'Ethnic Day 2025',
      date: '28th Feb 2025',
      time: '09:00 AM - 06:00 PM',
      location: 'PWIOI Bengaluru Campus',
      attendees: 80,
      actualAttendees: 285,
      category: 'networking',
      image: 'https://ik.imagekit.io/s0kb1s3cx3/PWIOI/120A8707-min.JPG?updatedAt=1749622041102',
      description: 'Join us for a vibrant ethnic day celebration at PWIOI Bengaluru Campus. Enjoy a day filled with delicious food, cultural performances, and networking opportunities for all!',
      highlights: ['Expert panels', 'Demo sessions', 'Q&A with founders'],
      feedback: 4.9,
      cardType: 'stats'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'filling-fast': return 'bg-red-100 text-red-700 border-red-200';
      case 'open': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'conference': return '🎯';
      case 'workshop': return '🛠️';
      case 'networking': return '🤝';
      case 'hackathon': return '💻';
      default: return '📅';
    }
  };

  const renderPastEventCard = (event: Event) => {
    const baseClasses = "group bg-white relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2";
    
    switch(event.cardType) {
      case 'featured':
        return (
          <div key={event.id} className={`${baseClasses} md:col-span-2 lg:col-span-2`}>
            <div className="relative h-64 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Only Featured Badge on image */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </div>
              
              {/* Category Icon */}
              <div className="absolute top-4 left-4 text-xl bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                {getCategoryIcon(event.category)}
              </div>
            </div>

            {/* All content below image */}
            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
                <span>•</span>
                <span className="text-gray-600 font-medium">{event.category}</span>
                <span>•</span>
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-800">{event.actualAttendees}</div>
                  <div className="text-xs text-gray-500">Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-yellow-600">⭐ {event.feedback}</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div key={event.id} className={`${baseClasses}`}>
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10" />
              
              {/* Only category icon on image */}
              <div className="absolute top-4 left-4 text-lg bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                {getCategoryIcon(event.category)}
              </div>
            </div>
            
            <div className="p-5 bg-white">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3" />
                <span>{event.date}</span>
                <span>•</span>
                <span className="text-gray-600 font-medium">{event.category}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{event.description}</p>
              
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-gray-700">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">{event.actualAttendees}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-600">
                  <Star className="w-4 h-4" />
                  <span className="font-medium">{event.feedback}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'stats':
        return (
          <div key={event.id} className={`${baseClasses}`}>
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10" />
              
              {/* Only badges on image */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Top Rated
              </div>
              
              <div className="absolute top-4 left-4 text-lg bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                {getCategoryIcon(event.category)}
              </div>
            </div>

            <div className="p-5 bg-white">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3" />
                <span>{event.date}</span>
                <span>•</span>
                <span className="font-medium">{event.category}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-blue-600">{event.actualAttendees}</div>
                  <div className="text-xs text-gray-500">Attendees</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-yellow-600">⭐ {event.feedback}</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-green-600">{event.highlights?.length || 0}</div>
                  <div className="text-xs text-gray-500">Highlights</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upcoming Events Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for these exciting upcoming events
            </p>
          </div>

          {/* Show message when no upcoming events */}
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Upcoming Events</h3>
              <p className="text-gray-500">Stay tuned for exciting events coming soon!</p>
            </div>
          ) : (
            /* Upcoming Events Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`group bg-white relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  {/* Event Image with minimal overlay */}
                  <div className={`relative ${index === 0 ? 'h-64' : 'h-48'} overflow-hidden`}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    
                    {/* Only essential badges on image */}
                    {event.status && (
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                        {event.status === 'filling-fast' ? 'Filling Fast' : 'Open'}
                      </div>
                    )}

                    <div className="absolute top-4 left-4 text-lg bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
                      {getCategoryIcon(event.category)}
                    </div>
                  </div>

                  {/* All content below image */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                      <span>•</span>
                      <span className="text-blue-600 font-medium">{event.category}</span>
                    </div>
                    
                    <h3 className={`font-bold text-gray-900 mb-2 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-blue-600">
                        <Users className="w-4 h-4" />
                        <span className="font-medium">{event.attendees} spots</span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2">
                        Register <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past Events Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Relive the memories and see what made these events special
            </p>
          </div>

          {/* Past Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => renderPastEventCard(event))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;