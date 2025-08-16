"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, Users, Award, TrendingUp, ArrowRight, CheckCircle, BookOpen, Target, Zap } from 'lucide-react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Victor transformed my career trajectory. The personalized coaching approach helped me land my dream job at Google.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The strategic guidance I received was invaluable. My productivity increased by 300% within just 3 months.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Professional, insightful, and results-driven. Victor's coaching methodology is truly world-class.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Coached", icon: Users },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "500+", label: "Companies Placed", icon: TrendingUp },
    { number: "15+", label: "Years Experience", icon: Star }
  ];

  const services = [
    {
      icon: Target,
      title: "Career Coaching",
      description: "Strategic guidance to accelerate your professional growth and achieve your career goals.",
      features: ["1-on-1 Sessions", "Career Planning", "Goal Setting", "Performance Review"]
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Comprehensive training programs designed to enhance your technical and soft skills.",
      features: ["Technical Training", "Leadership Skills", "Communication", "Project Management"]
    },
    {
      icon: Zap,
      title: "Interview Prep",
      description: "Master the art of interviewing with personalized coaching and real-world practice.",
      features: ["Mock Interviews", "Resume Review", "Negotiation Tips", "Industry Insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section - Fixed padding to account for header */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#006241]/20 to-[#004a32]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#004a32]/15 to-[#006241]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#006241]/10 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-12">
            
            {/* Main Heading */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-[#006241] to-white bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="text-white">Career Journey</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                Premium coaching services that unlock your potential and accelerate your professional growth with proven methodologies
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="group relative bg-gradient-to-r from-[#006241] to-[#004a32] hover:from-[#007a52] hover:to-[#006241] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#006241]/30 hover:shadow-[#006241]/50 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              
              <button className="group flex items-center space-x-3 sm:space-x-4 text-white hover:text-[#006241] transition-all duration-300 text-lg sm:text-xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#006241]/20 transition-all duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                </div>
                <span className="font-medium">Watch Our Story</span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex flex-col items-center space-y-4 mt-8 sm:mt-16">
                <span className="text-gray-400 text-sm uppercase tracking-widest">Discover More</span>
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#006241] animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-to-br from-[#006241]/20 to-[#004a32]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-[#006241]/30">
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#006241]" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">{stat.number}</div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-[#006241]/5 rounded-full -z-10"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Our</span>
              <span className="bg-gradient-to-r from-[#006241] to-[#004a32] bg-clip-text text-transparent"> Services</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive coaching solutions tailored to your unique professional needs and aspirations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#006241]/20 hover:border-[#006241]/40 transition-all duration-500 hover:transform hover:scale-105 h-full">
                  
                  {/* Icon */}
                  <div className="mb-6 sm:mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center group-hover:rotate-3 transition-all duration-300">
                      <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-[#006241] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 sm:space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#006241] flex-shrink-0" />
                          <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="pt-2 sm:pt-4">
                      <button className="group/btn flex items-center space-x-2 text-[#006241] hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                      </button>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#006241]/5 to-[#004a32]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#006241]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-[#006241]/10 to-[#004a32]/10 rounded-2xl rotate-45"></div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-white">Success</span>
              <span className="bg-gradient-to-r from-[#006241] to-[#004a32] bg-clip-text text-transparent"> Stories</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Real transformations from professionals who trusted us with their career journey
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#006241]/20">
              
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === activeTestimonial ? 'opacity-100 visible' : 'opacity-0 invisible absolute inset-0 p-6 sm:p-8 lg:p-12'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="flex space-x-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-[#006241] fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed text-center mb-8 sm:mb-12 font-light px-4">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#006241]/50"
                    />
                    <div className="text-center sm:text-left">
                      <div className="font-semibold text-white text-base sm:text-lg">{testimonial.name}</div>
                      <div className="text-[#006241] text-xs sm:text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation dots */}
              <div className="flex justify-center space-x-3 mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-[#006241] scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-[#006241]/10 to-[#004a32]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-[#004a32]/10 to-[#006241]/10 rounded-full blur-3xl"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-24 border border-[#006241]/20 relative overflow-hidden">
            
            {/* Content */}
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Ready to</span>
                <br />
                <span className="bg-gradient-to-r from-[#006241] to-[#004a32] bg-clip-text text-transparent">
                  Transform Your Future?
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Join thousands of professionals who have accelerated their careers with our proven coaching methodology
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
                <button className="group bg-gradient-to-r from-[#006241] to-[#004a32] hover:from-[#007a52] hover:to-[#006241] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#006241]/30 hover:shadow-[#006241]/50">
                  <span className="flex items-center space-x-3">
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </button>
                
                <button className="text-white hover:text-[#006241] transition-colors duration-300 font-semibold text-lg sm:text-xl border-2 border-white/20 hover:border-[#006241] px-8 sm:px-12 py-4 sm:py-5 rounded-2xl">
                  Learn More
                </button>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#006241]/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-[#006241]/20 to-[#004a32]/20 rounded-2xl rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#006241]/5 to-[#004a32]/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#006241]/40 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-[#006241]/50 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        </div>
      </section>
    </div>
  );
}