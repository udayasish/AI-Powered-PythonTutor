

// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="hidden lg:flex flex-col w-64 h-screen bg-white border-r border-neutral-200/20 fixed shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center p-6 border-b border-neutral-200/20">
        <span className="text-2xl font-semibold text-indigo-600 hover:text-indigo-700 transition-all duration-300">
          PyKids AI
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6">
        <Link
          href="#hero"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group"
        >
          <span className="group-hover:translate-x-2 transition-transform duration-300">Home</span>
        </Link>
        <Link
          href="#about"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group"
        >
          <span className="group-hover:translate-x-2 transition-transform duration-300">About</span>
        </Link>
        <Link
          href="#features"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group"
        >
          <span className="group-hover:translate-x-2 transition-transform duration-300">Features</span>
        </Link>
        <Link
          href="#how"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group"
        >
          <span className="group-hover:translate-x-2 transition-transform duration-300">Process</span>
        </Link>
        <Link
          href="#testimonials"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group"
        >
          <span className="group-hover:translate-x-2 transition-transform duration-300">Reviews</span>
        </Link>
      </div>

      {/* Support Section */}
      <div className="p-6 border-t border-neutral-200/20">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300">
              Support
            </p>
            <p className="text-xs text-gray-500 hover:text-indigo-500 transition-all duration-300">
              help@pykids.ai
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;