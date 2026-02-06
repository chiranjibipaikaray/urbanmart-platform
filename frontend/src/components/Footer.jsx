import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            UrbanMart
          </h2>
          <p className="text-sm text-gray-400">
            Smart shopping platform for modern India.  
            Fast delivery • Secure payments • Trusted sellers.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 cursor-pointer">
              <Facebook size={18} />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 cursor-pointer">
              <Instagram size={18} />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-sky-600 cursor-pointer">
              <Twitter size={18} />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 cursor-pointer">
              <Linkedin size={18} />
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} UrbanMart Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
