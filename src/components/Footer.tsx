import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-dots" />
      </div>
      
      <div className="max-container container-padding section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info - Precisely aligned */}
          <div className="space-content">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent whitespace-nowrap">
                Locksmith-Plus
              </h3>
              <p className="text-xs text-gray-400 font-medium whitespace-nowrap mt-1">
                NYC Metro Security Experts
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed font-medium">
              Professional 24/7 emergency locksmith services serving Long Island, Queens, and Brooklyn. 
              Licensed, insured, and trusted by thousands of customers across the NYC metro area.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700 cursor-pointer transition-colors hover-lift">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <div className="bg-blue-400 p-3 rounded-xl hover:bg-blue-500 cursor-pointer transition-colors hover-lift">
                <Twitter className="h-5 w-5 text-white" />
              </div>
              <div className="bg-pink-600 p-3 rounded-xl hover:bg-pink-700 cursor-pointer transition-colors hover-lift">
                <Instagram className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links - Precisely spaced */}
          <div className="space-content">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-items">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info - Precisely structured */}
          <div className="space-content">
            <h4 className="text-xl font-bold text-white">Contact Info</h4>
            <div className="space-items">
              <div className="flex items-center space-x-3">
                <div className="icon-container-sm bg-orange-500">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium">(516) 555-LOCK</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="icon-container-sm bg-green-500">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-300 font-medium">info@locksmith-plus.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="icon-container-sm bg-blue-500">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300 font-medium">
                  <p className="leading-tight">Serving Long Island,</p>
                  <p className="leading-tight">Queens & Brooklyn</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="icon-container-sm bg-purple-500">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300 font-medium">
                  <p className="leading-tight">24/7 Emergency Service</p>
                  <p className="text-sm text-gray-400 leading-tight">Always Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Services - Precisely centered */}
          <div className="space-content">
            <h4 className="text-xl font-bold text-white">Emergency Services</h4>
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-xl shadow-lg">
              <div className="text-center space-items">
                <div className="bg-white/20 w-12 h-12 rounded-full center-content mx-auto">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <p className="text-white font-bold text-lg leading-tight">24/7 Available</p>
                <div className="space-tight">
                  <p className="text-red-100 text-sm leading-tight">Emergency lockout assistance</p>
                  <p className="text-red-100 text-sm leading-tight">15-minute response guarantee</p>
                </div>
                <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors hover-lift">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Precisely aligned */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Locksmith-Plus. All rights reserved. Licensed & Insured in NY.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;