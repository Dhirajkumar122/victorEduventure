import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Our <span className="bg-gradient-to-r from-[#006241] to-[#004a32] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your life with our comprehensive coaching services designed to unlock your full potential
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Life Coaching</h3>
              <p className="text-gray-300 leading-relaxed">
                Personalized one-on-one coaching sessions to help you overcome obstacles, set meaningful goals, and create lasting positive change in your life.
              </p>
              <div className="mt-6">
                <span className="text-[#006241] font-semibold">Starting at $150/session</span>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Group Workshops</h3>
              <p className="text-gray-300 leading-relaxed">
                Interactive group sessions focused on specific topics like confidence building, stress management, and goal achievement in a supportive community.
              </p>
              <div className="mt-6">
                <span className="text-[#006241] font-semibold">Starting at $75/person</span>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Online Courses</h3>
              <p className="text-gray-300 leading-relaxed">
                Self-paced digital courses covering essential life skills, mindset transformation, and personal development strategies you can access anytime.
              </p>
              <div className="mt-6">
                <span className="text-[#006241] font-semibold">Starting at $99/course</span>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Consultation Calls</h3>
              <p className="text-gray-300 leading-relaxed">
                Quick 30-minute consultation calls to discuss your specific needs and determine the best coaching approach for your situation.
              </p>
              <div className="mt-6">
                <span className="text-[#006241] font-semibold">Free consultation</span>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Corporate Training</h3>
              <p className="text-gray-300 leading-relaxed">
                Customized training programs for businesses and organizations focused on leadership development, team building, and workplace wellness.
              </p>
              <div className="mt-6">
                <span className="text-[#006241] font-semibold">Custom pricing</span>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Wellness Programs</h3>
              <p className="text-gray-300 leading-relaxed">
                Holistic wellness programs combining mental health support, stress management, and lifestyle coaching for complete well-being transformation.
              </p>
              <div className="mt-6">
                <span className="text-[#006241] font-semibold">Starting at $200/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose the service that best fits your needs and start your journey to personal growth today.
          </p>
          <button className="bg-gradient-to-r from-[#006241] to-[#004a32] hover:from-[#007a52] hover:to-[#006241] text-white px-12 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#006241]/30">
            Book Your Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
