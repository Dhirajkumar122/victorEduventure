import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-[#006241] to-[#004a32] bg-clip-text text-transparent">Victor</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate about helping individuals unlock their full potential and create meaningful change in their lives
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Victor Eduventure, we believe that every individual has the power to transform their life. Our mission is to provide expert coaching and guidance that empowers people to overcome obstacles, discover their true potential, and create lasting positive change.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We combine evidence-based coaching methodologies with personalized approaches to help our clients achieve their goals, whether they're seeking career advancement, personal growth, improved relationships, or overall life satisfaction.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-semibold">Certified Professional Coaches</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#006241] mb-2">500+</div>
                    <div className="text-gray-300">Clients Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#006241] mb-2">10+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#006241] mb-2">95%</div>
                    <div className="text-gray-300">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#006241] mb-2">24/7</div>
                    <div className="text-gray-300">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Team Member 1 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 text-center hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-32 h-32 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl font-bold text-white">S</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sarah Johnson</h3>
              <p className="text-[#006241] font-semibold mb-4">Lead Life Coach</p>
              <p className="text-gray-300 leading-relaxed">
                Certified professional coach with over 8 years of experience helping individuals achieve their personal and professional goals.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 text-center hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-32 h-32 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl font-bold text-white">M</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Michael Chen</h3>
              <p className="text-[#006241] font-semibold mb-4">Wellness Specialist</p>
              <p className="text-gray-300 leading-relaxed">
                Expert in holistic wellness and stress management, specializing in helping clients achieve work-life balance and mental well-being.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 text-center hover:border-[#006241]/50 transition-all duration-500 group">
              <div className="w-32 h-32 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl font-bold text-white">E</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Emma Rodriguez</h3>
              <p className="text-[#006241] font-semibold mb-4">Career Coach</p>
              <p className="text-gray-300 leading-relaxed">
                Dedicated to helping professionals navigate career transitions, develop leadership skills, and achieve their career aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Empathy</h3>
              <p className="text-gray-300">We understand and connect with your unique journey</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-300">We maintain the highest standards in everything we do</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transformation</h3>
              <p className="text-gray-300">We believe in the power of positive change</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#006241] to-[#004a32] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-300">We build supportive networks for growth</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
