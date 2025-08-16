import Header from '../../components/Header';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#006241]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#004a32]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#006241]/5 rounded-full blur-3xl animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#006241]/20 to-[#004a32]/20 backdrop-blur-sm border border-[#006241]/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-[#006241] rounded-full animate-pulse"></div>
            <span className="text-[#006241] font-medium text-sm">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Let's Start Your <span className="bg-gradient-to-r from-[#006241] to-[#004a32] bg-clip-text text-transparent">Transformation</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your full potential? We're here to guide you on your journey to success and personal growth.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20">
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 sm:p-10 hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                  <p className="text-gray-400 text-sm">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-white font-medium mb-3 text-sm">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#006241] focus:ring-2 focus:ring-[#006241]/20 transition-all duration-300 group-hover:border-gray-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-white font-medium mb-3 text-sm">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#006241] focus:ring-2 focus:ring-[#006241]/20 transition-all duration-300 group-hover:border-gray-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-white font-medium mb-3 text-sm">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#006241] focus:ring-2 focus:ring-[#006241]/20 transition-all duration-300 group-hover:border-gray-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-white font-medium mb-3 text-sm">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#006241] focus:ring-2 focus:ring-[#006241]/20 transition-all duration-300 group-hover:border-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-white font-medium mb-3 text-sm">Service Interest</label>
                  <select className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white focus:outline-none focus:border-[#006241] focus:ring-2 focus:ring-[#006241]/20 transition-all duration-300 group-hover:border-gray-500">
                    <option value="">Select a service</option>
                    <option value="life-coaching">Life Coaching</option>
                    <option value="group-workshops">Group Workshops</option>
                    <option value="online-courses">Online Courses</option>
                    <option value="consultation">Consultation Call</option>
                    <option value="corporate-training">Corporate Training</option>
                    <option value="wellness-programs">Wellness Programs</option>
                  </select>
                </div>
                
                <div className="group">
                  <label className="block text-white font-medium mb-3 text-sm">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#006241] focus:ring-2 focus:ring-[#006241]/20 transition-all duration-300 resize-none group-hover:border-gray-500"
                    placeholder="Tell us about your goals and how we can help..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#006241] to-[#004a32] hover:from-[#007a52] hover:to-[#006241] text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#006241]/30 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#007a52] to-[#006241] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Contact Information</h2>
                    <p className="text-gray-400 text-sm">Multiple ways to reach us</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-8">
                  We're here to support you on your journey. Reach out to us through any of the following channels and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">hello@victoreduventure.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Office Hours</h3>
                      <p className="text-gray-300">Mon-Fri: 9AM-6PM EST</p>
                      <p className="text-gray-300">Sat: 10AM-4PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
                    <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Everything you need to know about our coaching services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#006241] transition-colors duration-300">How long does a typical coaching session last?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Most coaching sessions are 60 minutes long, but we also offer 30-minute quick sessions and 90-minute intensive sessions depending on your needs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#006241] transition-colors duration-300">Do you offer online coaching sessions?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Yes! We offer both in-person and virtual coaching sessions via video conferencing platforms for your convenience.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#006241] transition-colors duration-300">What is your cancellation policy?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">We require 24 hours notice for session cancellations. Late cancellations may be subject to a fee.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#006241] transition-colors duration-300">How do I know if coaching is right for me?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">We offer a free 30-minute consultation call to discuss your goals and determine if coaching is the right fit for your situation.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#006241] transition-colors duration-300">What payment methods do you accept?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">We accept all major credit cards, PayPal, and bank transfers. Payment plans are also available for longer-term coaching programs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:border-[#006241]/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#006241] transition-colors duration-300">How quickly will I see results?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Results vary by individual, but most clients begin to see positive changes within the first few sessions. We work with you to set realistic expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your life. Contact us today and take the first step towards achieving your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#006241] to-[#004a32] hover:from-[#007a52] hover:to-[#006241] text-white px-8 sm:px-12 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#006241]/30 group">
                <span className="flex items-center justify-center space-x-2">
                  <span>Book Free Consultation</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-[#006241] text-[#006241] hover:bg-[#006241] hover:text-white px-8 sm:px-12 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
                <span className="flex items-center justify-center space-x-2">
                  <span>Download Brochure</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}