'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl shadow-2xl border-b border-[#006241]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo with premium animation - Made more compact for mobile */}
          <div className="flex items-center group">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center shadow-lg shadow-[#006241]/25 transition-all duration-300 group-hover:shadow-[#006241]/50 group-hover:rotate-3">
                  <span className="text-white font-bold text-lg sm:text-xl">V</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-[#006241] bg-clip-text text-transparent">
                  Victor
                </span>
                <span className="text-xs sm:text-sm text-[#006241] font-medium -mt-1 tracking-wider">
                  EDUVENTURE
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with premium hover effects */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-white font-medium transition-all duration-300 group overflow-hidden rounded-xl"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#006241] to-[#004a32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Premium CTA Button - Hidden on very small screens */}
            <button className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-[#006241] to-[#004a32] hover:from-[#007a52] hover:to-[#006241] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#006241]/25 hover:shadow-[#006241]/40 group text-sm sm:text-base">
              <span>Get Started</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 group"
            >
              <div className="flex flex-col space-y-1.5 w-5 sm:w-6">
                <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
        <div className={`relative h-full flex flex-col justify-center items-center space-y-8 transition-all duration-700 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Mobile Navigation Links */}
          {[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' }
          ].map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl sm:text-4xl font-bold text-white hover:text-[#006241] transition-all duration-500 transform hover:scale-110 ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <button 
            className={`bg-gradient-to-r from-[#006241] to-[#004a32] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl font-semibold transition-all duration-700 transform hover:scale-105 shadow-2xl shadow-[#006241]/30 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Get Started
          </button>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 border-2 border-[#006241]/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#006241]/20 to-[#004a32]/20 rounded-2xl rotate-45 animate-bounce"></div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#006241]/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 bg-[#006241]/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Bottom glow line */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#006241] to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </header>
  );
}