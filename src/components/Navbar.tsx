'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, CircleUser, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudentsDropdownOpen, setIsStudentsDropdownOpen] = useState(false);
  const [isMobileStudentsOpen, setIsMobileStudentsOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState('technology');
  const [selectedLocation, setSelectedLocation] = useState('bengaluru');
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: 'Events', href: '/events' },
    { name: 'Academics', href: '/academics' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Clubs', href: '/clubs' },
  ];

  const schools = [
    { id: 'technology', name: 'School of Technology' },
    { id: 'management', name: 'School of Management' },
    { id: 'healthcare', name: 'School of Healthcare' }
  ];

  const locations = {
    technology: [
      { id: 'bengaluru', name: 'Bengaluru' },
      { id: 'pune', name: 'Pune' },
      { id: 'noida', name: 'Noida' }
    ],
    management: [
      { id: 'bengaluru', name: 'Bengaluru' },
      { id: 'pune', name: 'Pune' },
      { id: 'noida', name: 'Noida' }
    ],
    healthcare: [
      { id: 'bengaluru', name: 'Bengaluru' },
      { id: 'pune', name: 'Pune' },
      { id: 'noida', name: 'Noida' }
    ]
  };

  const batches = {
    bengaluru: ['2023', '2024', '2025'],
    pune: ['2025'],
    noida: ['2025']
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStudentsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle scroll to close mobile menu
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
        setIsMobileStudentsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  // Close mobile menu when menu is opened
  useEffect(() => {
    if (isMenuOpen) {
      setIsMobileStudentsOpen(false);
    }
  }, [isMenuOpen]);

  const handleSchoolSelect = useCallback((schoolId: string) => {
    setSelectedSchool(schoolId);
    // Reset location to first available when school changes
    const firstLocation = locations[schoolId as keyof typeof locations][0].id;
    setSelectedLocation(firstLocation);
  }, []);

  const handleLocationSelect = useCallback((locationId: string) => {
    setSelectedLocation(locationId);
  }, []);

  const getStudentLink = useCallback((batch: string) => {
    return `/students/${selectedSchool}/${selectedLocation}/${batch}`;
  }, [selectedSchool, selectedLocation]);

  // FIXED: Simplified batch click handler
  const handleBatchClick = useCallback((e: React.MouseEvent, batch: string) => {
    e.preventDefault();
    
    // Close all dropdowns
    setIsStudentsDropdownOpen(false);
    setIsMenuOpen(false);
    setIsMobileStudentsOpen(false);
    
    // Navigate using router.push - let Next.js handle it naturally
    const link = getStudentLink(batch);
    router.push(link);
  }, [router, getStudentLink]);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-2 border-accent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-poppins font-bold text-2xl text-primary">
              PWIOI
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-open-sans text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium relative group ${
                    pathname === item.href ? 'text-secondary font-semibold' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
              
              {/* Students Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className="font-open-sans text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium relative group flex items-center"
                  type="button"
                  onMouseEnter={() => setIsStudentsDropdownOpen(true)}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsStudentsDropdownOpen(!isStudentsDropdownOpen);
                  }}
                >
                  Students
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isStudentsDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>

                {/* Desktop Dropdown Menu */}
                {isStudentsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-80 bg-background border border-gray-200 rounded-lg shadow-lg z-50"
                    onMouseLeave={() => setIsStudentsDropdownOpen(false)}
                  >
                    <div className="p-4">
                      {/* Schools */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Select School</h4>
                        <div className="grid gap-2">
                          {schools.map((school) => (
                            <button
                              key={school.id}
                              onClick={(e) => {
                                e.preventDefault();
                                handleSchoolSelect(school.id);
                              }}
                              className={`text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                selectedSchool === school.id
                                  ? 'bg-accent text-accent-foreground font-medium'
                                  : 'text-gray-600 hover:bg-accent/30'
                              }`}
                              type="button"
                            >
                              {school.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Locations */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Select Location</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {locations[selectedSchool as keyof typeof locations].map((location) => (
                            <button
                              key={location.id}
                              onClick={(e) => {
                                e.preventDefault();
                                handleLocationSelect(location.id);
                              }}
                              className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                selectedLocation === location.id
                                  ? 'bg-accent text-accent-foreground font-medium'
                                  : 'text-gray-600 hover:bg-accent/30'
                              }`}
                              type="button"
                            >
                              {location.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Batches - FIXED */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Select Batch</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {batches[selectedLocation as keyof typeof batches].map((batch) => (
                            <button
                              key={batch}
                              onClick={(e) => handleBatchClick(e, batch)}
                              type="button"
                              className="px-3 py-2 rounded-md text-sm text-center text-gray-600 hover:bg-accent/30 hover:text-accent-foreground transition-colors duration-200 border border-gray-200 cursor-pointer"
                            >
                              {batch} Batch
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Student Login Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent-dark text-accent-foreground font-medium transition-colors duration-200">
              <CircleUser className="w-4 h-4 mr-2" />
              Student Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-cream-base rounded-lg mt-2 max-h-[calc(100vh-80px)] overflow-y-auto">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-open-sans text-primary hover:text-secondary px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Students Menu */}
              <div className="border-t border-gray-200 pt-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileStudentsOpen(!isMobileStudentsOpen);
                  }}
                  type="button"
                  className="w-full flex items-center justify-between font-open-sans text-primary px-3 py-3 text-base font-semibold hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Students
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileStudentsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mobile Students Dropdown Content */}
                {isMobileStudentsOpen && (
                  <div className="mt-2 space-y-4">
                    {/* Schools Selection */}
                    <div className="px-3">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Schools</h5>
                      <div className="space-y-1">
                        {schools.map((school) => (
                          <button
                            key={school.id}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSchoolSelect(school.id);
                            }}
                            type="button"
                            className={`block text-left w-full px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              selectedSchool === school.id 
                                ? 'bg-accent text-accent-foreground font-medium' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {school.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Locations Selection */}
                    <div className="px-3">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Locations</h5>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {locations[selectedSchool as keyof typeof locations].map((location) => (
                          <button
                            key={location.id}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLocationSelect(location.id);
                            }}
                            type="button"
                            className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 text-center ${
                              selectedLocation === location.id
                                ? 'bg-accent text-accent-foreground font-medium'
                                : 'text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                          >
                            {location.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Batches Selection - FIXED */}
                    <div className="px-3">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Batches</h5>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {batches[selectedLocation as keyof typeof batches].map((batch) => (
                          <button
                            key={batch}
                            onClick={(e) => handleBatchClick(e, batch)}
                            type="button"
                            className="px-3 py-2 text-sm text-center text-white bg-accent hover:bg-accent-dark rounded-md transition-colors duration-200 font-medium cursor-pointer"
                          >
                            {batch} Batch
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Login Button */}
              <div className="border-t border-gray-200 pt-3">
                <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-medium py-3">
                  <CircleUser className="w-4 h-4 mr-2" />
                  Student Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;