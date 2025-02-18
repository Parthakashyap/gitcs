"use client";

import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = window.innerHeight * 5.5;
      setScrolled(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`fixed w-full h-screen transition-transform duration-700 ease-in-out z-[0] ${
      scrolled ? "-translate-y-full" : "translate-y-0"
    }`}>
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-16 mb-16">
              <div>
                <div className="text-white text-2xl font-bold flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    N
                  </div>
                  NETWORKING
                </div>
                <p className="text-gray-400 mb-8">
                  Your trusted partner in international education. We help students achieve their dreams of studying abroad.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Universities</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study Abroad</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Counseling</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Visa Assistance</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Test Preparation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accommodation</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-purple-500" />
                    123 Education Street, City, Country
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-5 h-5 text-purple-500" />
                    +1 234 567 890
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-5 h-5 text-purple-500" />
                    info@networking.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex justify-between items-center">
                <p className="text-gray-400">© 2024 Networking. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}