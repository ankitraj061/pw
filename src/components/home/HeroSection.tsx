'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream-base to-cream-warm flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source
            src="https://player.vimeo.com/external/290475008.hd.mp4?s=6f3e8b8d8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&profile_id=175"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-cream-base/90 to-cream-warm/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1]">
                Empowering Innovation & Leadership at{' '}
                <span className="text-secondary">PWIOI</span>
              </h1>
              <p className="font-open-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-2xl">
                A modern institution shaping future technologists, leaders, and creators
                through excellence in education, innovation, and community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                Explore Campus
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg transition-all duration-300"
              >
                Student Login
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: '30+', label: 'Programs' },
                { number: '500+', label: 'Faculty' },
                { number: '10k+', label: 'Students' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-poppins font-bold text-2xl md:text-3xl text-secondary">
                    {stat.number}
                  </div>
                  <div className="font-open-sans text-sm text-primary/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating with laptops"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-70" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-light rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
