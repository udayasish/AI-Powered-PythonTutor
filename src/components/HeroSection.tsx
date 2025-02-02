import Link from "next/link";

const HeroSection = ({ setAiTutor }: { setAiTutor: (value: boolean) => void; aiTutor: boolean }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4 lg:pr-4 lg:pl-[18rem]"
    >
      <div className="max-w-7xl mx-auto w-full py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-600 leading-tight">
              Learn Python with Your AI Buddy – Coding Made Fun!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Join PyKids AI and discover the magic of coding with interactive
              lessons, games, and a friendly AI tutor!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href={"/ai-tutor"}>
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Learning Now
              </button>
              </Link>

              <Link href={"/ai-tutor"}>
                <button
                  className="px-8 py-4 bg-white text-indigo-600 rounded-full text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
                  onClick={() => setAiTutor(true)}
                >
                  Meet Your AI Tutor
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-600">
              <div className="flex items-center">
                {/* Animated Star */}
                <svg
                  className="w-5 h-5 text-yellow-400 animate-spin-slow"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-2">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                {/* Animated Checkmark */}
                <svg
                  className="w-5 h-5 text-green-500 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2">10k+ Happy Students</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4">
              <div className="w-full h-full max-w-sm mx-auto lg:mx-0 relative">
                {/* Moving Purple Circle */}
                <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-move-circle-1"></div>
                {/* Moving Yellow Circle */}
                <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-move-circle-2"></div>
                {/* Moving Pink Circle */}
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-move-circle-3"></div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-full max-w-sm mx-auto lg:mx-0">
                <div className="relative w-full h-[400px] bg-white rounded-2xl shadow-lg p-8 border border-neutral-200/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl"></div>
                  <div className="relative z-10">
                    {/* Bouncing Blue Circle */}
                    <div className="w-32 h-32 mx-auto bg-indigo-600 rounded-full mb-4 animate-bounce"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;