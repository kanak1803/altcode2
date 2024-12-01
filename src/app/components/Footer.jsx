export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-sm">
              Your ultimate source for Alt Codes, special characters, and
              symbols. Create, explore, and elevate your content with our tools.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="/alt-codes"
                  className="hover:text-teal-400 transition-colors duration-150"
                >
                  Alt Codes
                </a>
              </li>
              <li>
                <a
                  href="/currency-symbols"
                  className="hover:text-teal-400 transition-colors duration-150"
                >
                  Currency Symbols
                </a>
              </li>
              <li>
                <a
                  href="/misc"
                  className="hover:text-teal-400 transition-colors duration-150"
                >
                  Misc
                </a>
              </li>
              <li>
                <a
                  href="/how-to-use-alt-code"
                  className="hover:text-teal-400 transition-colors duration-150"
                >
                  How to Use
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul>
              <li>Email: support@altcodes.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Location: 123 Alt Code St, Symbol City</li>
            </ul>
          </div>
  
          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-teal-400 transition-colors duration-150"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="#"
                className="hover:text-teal-400 transition-colors duration-150"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="#"
                className="hover:text-teal-400 transition-colors duration-150"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="bg-gray-700 py-4 text-center text-sm">
          © {new Date().getFullYear()} Alt Codes Explorer. All rights reserved.
        </div>
      </footer>
    );
  }
  