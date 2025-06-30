'use client';
import React, { useState } from 'react';
import { 
  BookOpen, Users, Award, TrendingUp, Building, Briefcase, Code, 
  PieChart, Stethoscope, PlayCircle, ChevronRight, Lightbulb,
  DollarSign
} from 'lucide-react';

const AcademicsPage = () => {
  const [activeSchool, setActiveSchool] = useState('technology');

  const stats = [
    { icon: BookOpen, number: '5+', label: 'Programs', color: 'text-primary' },
    { icon: Users, number: '10+', label: 'Faculty', color: 'text-primary' },
    { icon: Award, number: '90%', label: 'Placement', color: 'text-primary' },
    { icon: TrendingUp, number: '₹12.5L', label: 'Avg Package', color: 'text-primary' }
  ];

  const schools = {
    technology: {
      title: 'School of Technology',
      icon: Code,
      description: 'Leading innovation in engineering and technology education with cutting-edge research.',
      departments: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Information Technology', 'AI & Data Science'],
      placementRate: '97%',
      avgPackage: '₹14.2L',
      recruiters: ['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys']
    },
    management: {
      title: 'School of Management',
      icon: PieChart,
      description: 'Developing future business leaders with comprehensive management education.',
      departments: ['MBA', 'BBA', 'International Business', 'Digital Marketing', 'Finance', 'HR Management'],
      placementRate: '94%',
      avgPackage: '₹11.8L',
      recruiters: ['Deloitte', 'KPMG', 'Accenture', 'Wipro', 'HCL']
    },
    healthcare: {
      title: 'School of Healthcare',
      icon: Stethoscope,
      description: 'Advancing healthcare education with modern medical facilities and research.',
      departments: ['Medicine (MBBS)', 'Nursing', 'Pharmacy', 'Medical Lab Tech', 'Physiotherapy', 'Hospital Admin'],
      placementRate: '92%',
      avgPackage: '₹8.5L',
      recruiters: ['Apollo', 'Fortis', 'Max Healthcare', 'AIIMS', 'Medanta']
    }
  };

  const projects = [
    { title: 'AI Healthcare Diagnostics', school: 'Technology', team: 'CSE Final Year', impact: 'Patent Filed' },
    { title: 'Rural Business Model', school: 'Management', team: 'MBA Team', impact: 'National Winner' },
    { title: 'Telemedicine Platform', school: 'Healthcare', team: 'Inter-disciplinary', impact: '5 Districts' },
    { title: 'Smart City Solutions', school: 'Technology', team: 'Civil & IT', impact: 'Pilot Approved' }
  ];

  const videos = [
    { title: 'Innovation Lab Tour', duration: '8:45' },
    { title: 'MBA Case Study Finals', duration: '12:30' },
    { title: 'Medical Simulation Center', duration: '10:15' },
    { title: 'Student Research Symposium', duration: '15:20' }
  ];

  const placementStats = [
    { icon: TrendingUp, value: '₹45 LPA', label: 'Highest Package' },
    { icon: DollarSign, value: '₹12.5 LPA', label: 'Average Package' },
    { icon: Building, value: '150+', label: 'Companies' },
    { icon: Award, value: '2,500+', label: 'Job Offers' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-15">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <h1 className="font-bold text-3xl lg:text-6xl text-primary">
            Academic Excellence at <span className="text-secondary">PWIOI</span>
          </h1>
          <p className="text-lg max-w-4xl mx-auto text-blue-800 opacity-80">
            Empowering minds through innovative education, cutting-edge research, and industry-relevant curriculum.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="p-6 bg-white/70 rounded-2xl hover:scale-105 transition-all duration-300">
                  <IconComponent size={32} className={`${stat.color} mx-auto mb-3`} />
                  <div className="font-bold text-2xl mb-1 text-primary">{stat.number}</div>
                  <div className="text-sm text-primary opacity-70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl mb-4 text-primary">Our Schools</h2>
            <p className="text-lg text-blue-900 opacity-80">
              Three flagship schools designed to nurture expertise and innovation.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {Object.entries(schools).map(([key, school]) => {
              const IconComponent = school.icon;
              const isActive = activeSchool === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSchool(key)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-secondary text-white shadow-lg' 
                      : 'bg-white text-primary hover:shadow-md border border-gray-200'
                  }`}
                >
                  <IconComponent size={20} />
                  {school.title}
                </button>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-200">
                  {React.createElement(schools[activeSchool].icon, { 
                    size: 32, 
                    className: "text-blue-900" 
                  })}
                </div>
                <h3 className="font-bold text-3xl text-blue-900">
                  {schools[activeSchool].title}
                </h3>
              </div>
              
              <p className="text-lg text-blue-900 opacity-80">
                {schools[activeSchool].description}
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                {schools[activeSchool].departments.map((dept, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <ChevronRight size={16} className="text-secondary" />
                    <span className="text-sm text-blue-900">{dept}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 p-6 bg-blue-50 rounded-xl">
                <div className="text-center">
                  <div className="font-bold text-2xl text-primary">
                    {schools[activeSchool].placementRate}
                  </div>
                  <div className="text-sm text-blue-900 opacity-70">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-primary">
                    {schools[activeSchool].avgPackage}
                  </div>
                  <div className="text-sm text-blue-900 opacity-70">Average Package</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl flex items-center justify-center">
                <PlayCircle size={80} className="text-blue-600 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-lg mb-4 text-blue-900">Top Recruiters</h4>
                <div className="flex flex-wrap gap-2">
                  {schools[activeSchool].recruiters.map((recruiter, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-200 text-primary rounded-full text-xs">
                      {recruiter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Projects Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl mb-4 text-primary">Student Projects</h2>
            <p className="text-lg text-secondary opacity-80">
              Groundbreaking projects solving real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-200 text-primary rounded-full text-xs font-medium">
                    {project.school}
                  </span>
                  <Lightbulb size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  {project.title}
                </h4>
                <p className="text-sm mb-4 text-blue-600">{project.team}</p>
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                  <Award size={16} className="text-green-600" />
                  <span className="text-sm text-green-700 font-medium">{project.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement & Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold text-3xl mb-8 text-primary">Placement Excellence</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {placementStats.map((stat, i) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={i} className="text-center p-6 bg-green-50 rounded-xl">
                      <IconComponent size={32} className="text-accent mx-auto mb-3" />
                      <div className="font-bold text-2xl mb-1 text-primary">{stat.value}</div>
                      <div className="text-sm text-secondary opacity-70">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="font-bold text-3xl mb-8 text-primary">Academic Videos</h2>
              <div className="grid grid-cols-2 gap-4">
                {videos.map((video, i) => (
                  <div key={i} className="bg-gray-100 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                      <PlayCircle size={40} className="text-blue-900" />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-sm mb-2 text-primary">{video.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;