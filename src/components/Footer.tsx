// components/Footer.tsx
const Footer = () => {
    return (
      <footer id="Footer" className="bg-white border-t border-neutral-200/20 lg:pl-[16rem]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-semibold text-indigo-600">PyKids AI</span>
              </div>
              <p className="text-gray-500 mb-4">Making Python programming fun and accessible for kids aged 8-14.</p>
              <p className="text-sm text-gray-400">Designed with <span className="text-red-500">❤️</span> for kids who love to code!</p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-500 hover:text-indigo-600 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#careers" className="text-gray-500 hover:text-indigo-600 transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-500 hover:text-indigo-600 transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
  
            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#privacy" className="text-gray-500 hover:text-indigo-600 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms" className="text-gray-500 hover:text-indigo-600 transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#cookies" className="text-gray-500 hover:text-indigo-600 transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-neutral-200/20">
            <div className="flex justify-between items-center flex-col sm:flex-row">
              <div className="flex space-x-6 mb-4 sm:mb-0">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                {/* Add more social icons here */}
              </div>
              <p className="text-gray-400 text-sm">© 2024 PyKids AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;