// components/Footer.tsx

'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About PWIOI */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">About PWIOI</h3>
            <p className="font-open-sans text-white/80 leading-relaxed">
              Empowering innovation and leadership through excellence in education, research, and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/academics" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Clubs
                </Link>
              </li>
              <li>
                <Link href="/library" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/policies/code-of-conduct" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/policies/anti-ragging" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Atendence Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Scholarship Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Examination Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Policies */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/policies/code-of-conduct" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Library Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/anti-ragging" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Klib Rules
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Sexual Harassment Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Anti-Ragging Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Social Media Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="font-open-sans text-white/80 hover:text-accent transition-colors duration-300">
                  Career Services Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl mb-6">Contact</h3>
            <div className="space-y-3">
              <p className="font-open-sans text-white/80">
                PWIOI Campus, Bengaluru
              </p>
              <p className="font-open-sans text-white/80">
                12th Floor, Brigade Signature Tower,

Old Madras Rd, Sannatammanahalli,

Bengaluru, Karnataka 560049
              </p>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span className="font-open-sans text-white/80">studentsuccess@pwioi.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-10 text-center">
          <p className="font-open-sans text-white/60">
            © 2024 PWIOI College. All rights reserved.
          </p>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
