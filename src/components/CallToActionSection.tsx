import Link from "next/link";

// components/CallToActionSection.tsx
const CallToActionSection = () => {
    return (
      <section id="CallToAction" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-700/90"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Start Your Python Adventure?</h2>
                <p className="text-xl md:text-2xl text-indigo-100">Join PyKids AI today and unlock the world of coding!</p>
              </div>
  
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href={"/ai-tutor"}>
                <button className="px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-lg group">
                  Get Started Now
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">→</span>
                </button>
                </Link>

                <Link href={"/ai-tutor"}>
                <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full text-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  Meet Your AI Tutor
                </button>
                </Link>
              </div>
  
              <div className="mt-8 flex justify-center space-x-6">
                <div className="flex items-center text-indigo-100">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>7 Day Free Trial</span>
                </div>
                <div className="flex items-center text-indigo-100">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                  </svg>
                  <span>100% Safe & Secure</span>
                </div>
                <div className="flex items-center text-indigo-100">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-32" preserveAspectRatio="none" viewBox="0 0 1440 96">
            <path fill="white" d="M0,96L1440,32L1440,96L0,96Z"></path>
          </svg>
        </div>
      </section>
    );
  };
  
  export default CallToActionSection;