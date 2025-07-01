'use client';

import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream-base to-cream-warm flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full rounded-2xl overflow-hidden shadow-lg mx-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
        src="https://ik.imagekit.io/s0kb1s3cx3/PWIOI/PW%20IOI%20Snippet%20F1.mp4?updatedAt=1751269072192"
        type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Existing gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-base/80 to-cream-warm/10 rounded-2xl" />

        {/* New slight blackish overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
              Empowering Innovation & Leadership at{' '}
              <span className="text-secondary">PWIOI</span>
            </h1>
            {/* <p className="font-open-sans text-lg md:text-xl text-primary/80 leading-relaxed max-w-3xl mx-auto">
              A modern institution shaping future technologists, leaders, and creators
              through excellence in education, innovation, and community.
            </p> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-medium px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Campus
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-none text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              Student Login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
