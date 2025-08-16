"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer id="footer" className="relative bg-black text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#006241] to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#006241]/5 via-transparent to-black"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 98, 65, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 98, 65, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#006241]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#006241]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Company Brand Section */}
          <div className={`col-span-1 lg:col-span-5 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-3xl flex items-center justify-center shadow-lg shadow-[#006241]/25 transition-all duration-300 group-hover:shadow-[#006241]/50 group-hover:scale-110">
                  <span className="text-white font-bold text-2xl">V</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-[#006241] bg-clip-text text-transparent">
                  Victore
                </span>
                <span className="text-sm text-[#006241] font-medium -mt-1 tracking-wider">
                  EDUVENTURE
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              Embark on your educational adventure with Victor Eduventure. We transform learning into an exciting journey of discovery, growth, and achievement.
            </p>
            
            {/* Newsletter Signup - Improved for desktop view */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#006241]/30 transition-all duration-300">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#006241]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Stay Updated
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl sm:rounded-l-xl sm:rounded-r-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#006241] transition-colors duration-300 text-sm"
                />
                <button className="bg-gradient-to-r from-[#006241] to-[#004a32] hover:from-[#007a52] hover:to-[#006241] px-6 py-3 rounded-xl sm:rounded-l-none sm:rounded-r-xl font-medium transition-all duration-300 hover:scale-105 text-sm whitespace-nowrap shadow-lg shadow-[#006241]/20 hover:shadow-[#006241]/40">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2">Get the latest updates and exclusive content delivered to your inbox.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`col-span-1 lg:col-span-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-6 text-[#006241]">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={link.name} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#006241] mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`col-span-1 lg:col-span-2 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-bold mb-6 text-[#006241]">Services</h3>
            <ul className="space-y-4">
              {['Online Courses', 'Live Workshops', 'Certification', 'Career Guidance', 'Skill Assessment'].map((service, index) => (
                <li key={service} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#006241] mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`col-span-1 lg:col-span-3 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <h3 className="text-xl font-bold mb-6 text-[#006241]">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#006241]/20 rounded-xl flex items-center justify-center group-hover:bg-[#006241]/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#006241]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base">hello@victoreduventure.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#006241]/20 rounded-xl flex items-center justify-center group-hover:bg-[#006241]/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#006241]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium text-sm sm:text-base">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-[#006241]/20 rounded-xl flex items-center justify-center group-hover:bg-[#006241]/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#006241]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white font-medium text-sm sm:text-base">123 Education St, Learning City</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href="#"
              className="w-14 h-14 bg-white/10 hover:bg-gradient-to-r hover:from-[#006241] hover:to-[#004a32] rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 backdrop-blur-sm border border-white/10 hover:border-[#006241]/30"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-white/10 pt-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm flex items-center text-center lg:text-left">
              <span className="mr-2">©</span>
              <span className="text-[#006241] font-medium">2024 Victor Eduventure.</span>
              <span className="ml-2">All rights reserved. Made with</span>
              <svg className="w-4 h-4 mx-1 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>for education</span>
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-end space-x-4 lg:space-x-8">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#006241] text-sm transition-colors duration-300 hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#006241] to-transparent"></div>
    </footer>
  );
}