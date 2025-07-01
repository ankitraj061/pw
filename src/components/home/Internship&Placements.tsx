'use client';

import { Badge } from '@/components/ui/badge';
import { Building2 } from 'lucide-react';

// Define the Student type
interface Student {
  id: number;
  name: string;
  image: string;
  company: string;
  role: string;
  joiningMonth: string;
  joiningYear: number;
}

const InternshipAndPlacements = () => {
  const placedStudents: Student[] = [
    {
      id: 1,
      name: 'Rishabh Jain',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      company: 'Growth School',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 2,
      name: 'Raj Aggrawal',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3cb?w=300&h=400&fit=crop&crop=face',
      company: 'GEMSCAP Global Analyst Pvt Ltd',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
   
    {
      id: 4,
      name: 'Nimish Agrawal',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'Brand strategist ',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 5,
      name: 'Deepali Kumari',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 6,
      name: 'Harsh Bharwani',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 7,
      name: 'Parv Manglani',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
      company: 'Hue Learn',
      role: 'AI Content Intern',
      joiningMonth: 'march',
      joiningYear: 2024,
    },
    {
      id: 8,
      name: 'Vivek Shelke',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face',
      company: 'Prephub',
      role: 'Operations ',
      joiningMonth: 'Sep',
      joiningYear: 2024,
    },
    {
      id: 9,
      name: 'Abhinav Jain',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&crop=face',
      company: 'COMMUNITY 55',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 10,
      name: 'Rijurjatra Mondal',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&crop=face',
      company: 'Ampifi Solar',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 11,
      name: 'Saket Kumar',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 12,
      name: 'Ankit Raj',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah',
      role: 'Frontend Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 13,
      name: 'Nishchay Bhatia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah Central Office',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 14,
      name: 'Arman Raj Gupta',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah Central Office',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 15,
      name: 'Niharika Singh',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 16,
      name: 'Harsh Tiwari',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 17,
      name: 'Harish Kumar',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'Placement Coordinator ',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 18,
      name: 'Shreyash Pateriya',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&crop=face',
      company: 'Flobiz',
      role: 'Content Creation and Marketing',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 19,
      name: 'Ganesh Agarwal',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&crop=face',
      company: 'Zidio Development',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 20,
      name: 'Miteshkumar Agrawal',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 21,
      name: 'Rohit Makani',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 22,
      name: 'Aryan Chauhan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'Frontend Intern',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 23,
      name: 'Jivan Jamdar',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 24,
      name: 'Ashutosh Tiwari',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
      company: 'Physics Wallah IOI',
      role: 'TBD',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
    {
      id: 25,
      name: 'Karthikeya Bendi',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face',
      company: 'Advait',
      role: 'n8n Specialist ',
      joiningMonth: 'TBD',
      joiningYear: 2024,
    },
  ];

  const StudentCard = ({ student }: { student: Student }) => (
    <div className="flex-shrink-0 w-70 mx-4">
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-80">
        {/* Background Image */}
        <img
          src={student.image}
          alt={student.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay Content - Simplified with less blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
          {/* Bottom Section - All content consolidated here */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="backdrop-blur-sm bg-black/30 rounded-lg p-4 border border-white/20 space-y-3">
              {/* Name and Company */}
              <div className="text-center space-y-2">
                <h3 className="font-poppins font-bold text-accent text-lg">
                  {student.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
                  <Building2 className="w-4 h-4" />
                  <span className="font-semibold text-sm">{student.company}</span>
                </div>
              </div>
              
              {/* Role and Date */}
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Badge className="bg-accent text-primary hover:bg-white transition-colors duration-200">
                    {student.role}
                  </Badge>
                </div>
                {/* <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Joined {student.joiningMonth} {student.joiningYear}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Internships & Placements
          </h2>
          <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing our students with exceptional
            internship and placement opportunities, ensuring they gain
            real-world experience and are well-prepared for their careers.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden">
          {/* Gradient fade on sides */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Actual Marquee */}
          <div className="whitespace-nowrap animate-marquee">
            <div className="flex inline-flex">
              {placedStudents.map((student, index) => (
                <StudentCard key={`main-${index}`} student={student} />
              ))}
              {placedStudents.map((student, index) => (
                <StudentCard key={`duplicate-${index}`} student={student} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 100s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default InternshipAndPlacements;