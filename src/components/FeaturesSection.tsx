

// components/FeaturesSection.tsx
const FeaturesSection = () => {
    return (
      <section id="features" className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Awesome Features</h2>
            <p className="text-xl text-gray-600">Discover what makes learning Python amazing with PythonKids!</p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:pl-32">
            {/* Interactive Lessons */}
            <div className="bg-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Interactive Lessons</h3>
              <p className="text-gray-600 text-center">Learn Python step-by-step with fun examples and challenges that keep you excited!</p>
            </div>
  
            {/* AI Tutor */}
            <div className="bg-white p-8 rounded-2xl border border-purple-100 hover:border-purple-300 transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">AI Tutor</h3>
              <p className="text-gray-600 text-center">Get instant help and feedback from your friendly AI buddy whenever you need it!</p>
            </div>
  
            {/* Gamified Learning */}
            <div className="bg-white p-8 rounded-2xl border border-green-100 hover:border-green-300 transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Gamified Learning</h3>
              <p className="text-gray-600 text-center">Earn points, badges, and level up as you learn. Make coding an exciting adventure!</p>
            </div>
  
            {/* Hands-On Projects */}
            <div className="bg-white p-8 rounded-2xl border border-yellow-100 hover:border-yellow-300 transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Hands-On Projects</h3>
              <p className="text-gray-600 text-center">Build games, stories, and more with Python. Show off your amazing creations!</p>
            </div>
          </div>
  
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
              Explore All Features
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;