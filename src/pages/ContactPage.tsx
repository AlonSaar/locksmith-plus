import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Shield, Award, Users } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const serviceAreas = [
    { name: "Long Island", areas: ["Nassau County", "Suffolk County", "Hempstead", "Levittown", "Hicksville"] },
    { name: "Queens", areas: ["Astoria", "Flushing", "Forest Hills", "Jamaica", "Long Island City"] },
    { name: "Brooklyn", areas: ["Park Slope", "Williamsburg", "Bay Ridge", "Crown Heights", "Flatbush"] }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Phone className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-white">Call a Locksmith Now - 24/7 Emergency Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-shadow-lg">
              Call a Locksmith 
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Now</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light max-w-4xl mx-auto">
              Available 24/7 for emergency locksmith services across 
              <span className="font-semibold text-white"> Long Island, Queens, and Brooklyn</span> – when you need us, we're here
            </p>
            
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-6 rounded-2xl inline-flex items-center space-x-4 text-3xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Phone className="h-10 w-10" />
                <span>(516) 555-LOCK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Phone Numbers</h3>
                    <p className="text-gray-600 font-medium">Emergency: (516) 555-LOCK</p>
                    <p className="text-gray-600 font-medium">Main Office: (516) 555-4567</p>
                    <p className="text-sm text-blue-600 font-semibold mt-2">Available 24/7 for emergencies across NYC metro</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Email Addresses</h3>
                    <p className="text-gray-600 font-medium">info@locksmith-plus.com</p>
                    <p className="text-gray-600 font-medium">emergency@locksmith-plus.com</p>
                    <p className="text-sm text-green-600 font-semibold mt-2">We respond within 2 hours during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Service Areas</h3>
                    <p className="text-gray-600 font-medium">Long Island, Queens & Brooklyn</p>
                    <p className="text-gray-600 font-medium">Complete NYC Metro Coverage</p>
                    <p className="text-sm text-orange-600 font-semibold mt-2">Mobile service - we come to you!</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Business Hours</h3>
                    <p className="text-gray-600 font-medium">Emergency Services: 24/7</p>
                    <p className="text-gray-600 font-medium">Office Hours: Mon-Fri 8AM-6PM</p>
                    <p className="text-gray-600 font-medium">Saturday: 9AM-4PM</p>
                    <p className="text-sm text-purple-600 font-semibold mt-2">Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Follow Us on Social Media</h3>
                <div className="flex space-x-4">
                  <div className="bg-blue-600 p-4 rounded-xl cursor-pointer hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <Facebook className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-blue-400 p-4 rounded-xl cursor-pointer hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <Twitter className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-pink-600 p-4 rounded-xl cursor-pointer hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200">
                <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium resize-none"
                      placeholder="Tell us about your locksmith needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              Our NYC Metro Service Areas
            </h2>
            <p className="text-xl text-gray-600 font-medium">Find us throughout Long Island, Queens, and Brooklyn</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Interactive Service Map</h3>
                    <p className="text-gray-600 font-medium">Google Maps integration showing our complete coverage area</p>
                    <p className="text-sm text-blue-600 font-semibold mt-2">Long Island • Queens • Brooklyn</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{area.name}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {area.areas.map((location, locationIndex) => (
                      <div key={locationIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-gray-600 font-medium text-sm">{location}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">
              Emergency Locksmith Services Available 24/7
            </h2>
            <p className="text-xl text-red-100 font-medium max-w-4xl mx-auto">
              Locked out? Lost keys? Security emergency? Don't wait – call us now for immediate assistance across Long Island, Queens, and Brooklyn!
            </p>
            
            <button className="bg-white text-red-600 px-10 py-5 rounded-xl font-bold text-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
              Call (516) 555-LOCK Now
            </button>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-white">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">15-Min Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="font-semibold">5-Star Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;