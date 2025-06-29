import React from 'react';
import { Shield, Home, Building, Car, Smartphone, Wrench, Key, UserCheck, Clock, Award, Star, DoorOpen, HardHat } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      name: "Emergency Lockout Service",
      description: "Locked out of your home, car, or office in Long Island, Queens, or Brooklyn? Our emergency response team is available 24/7 to get you back in quickly and safely without damage to your property. Average response time: 15 minutes.",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["24/7 Availability", "15-Min Response", "No Damage Guarantee", "All Lock Types"]
    },
    {
      icon: DoorOpen,
      name: "Professional Door Unlocking",
      description: "Expert door unlocking services for all types of residential and commercial doors across NYC metro area. Our skilled technicians use advanced techniques to open locked doors without damage, whether it's a jammed lock, broken key, or malfunctioning mechanism.",
      image: "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Non-Destructive Methods", "All Door Types", "Emergency Service", "Professional Tools"]
    },
    {
      icon: Home,
      name: "Residential Lock Rekeying",
      description: "Enhance your home security across NYC metro area with professional rekeying services. Perfect for new homeowners, after roommate changes, or when keys are lost or stolen. We service all residential lock brands and types.",
      image: "https://images.pexels.com/photos/6077368/pexels-photo-6077368.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["All Lock Brands", "Same-Day Service", "Master Key Systems", "Security Upgrade"]
    },
    {
      icon: HardHat,
      name: "Door Replacement & Upgrade",
      description: "Complete door replacement and upgrade services throughout Long Island, Queens, and Brooklyn. We install high-security steel doors, reinforce wooden doors, and provide custom sizing for any opening. From residential to commercial applications, we enhance both security and aesthetics.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Steel Door Installation", "Custom Sizing", "Security Enhancement", "Wood to Steel Conversion"]
    },
    {
      icon: Building,
      name: "Commercial Lock Installation",
      description: "Secure your Long Island, Queens, or Brooklyn business with professional-grade commercial locks. We handle everything from simple door locks to complex access control systems, panic bars, and high-security installations.",
      image: "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["High-Security Locks", "Access Control", "Panic Hardware", "Master Key Systems"]
    },
    {
      icon: Car,
      name: "Automotive Key Services",
      description: "Modern car keys, transponder keys, and key fobs expertly duplicated and programmed across the NYC metro area. We handle all makes and models with precision, including luxury vehicles and the latest smart key technology.",
      image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["All Car Makes", "Transponder Keys", "Key Fob Programming", "Ignition Repair"]
    },
    {
      icon: Smartphone,
      name: "Smart Lock Installation",
      description: "Upgrade to the convenience and security of smart locks in your Long Island, Queens, or Brooklyn property. We install, configure, and teach you how to use the latest in home automation technology from leading brands.",
      image: "https://images.pexels.com/photos/8866985/pexels-photo-8866985.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Top Brands", "App Setup", "Integration", "Training Included"]
    },
    {
      icon: Wrench,
      name: "Safe Opening & Repair",
      description: "Professional safe services throughout the NYC metro area including opening locked safes, combination changes, and repair of mechanical or electronic safe components. We service residential and commercial safes of all sizes.",
      image: "https://images.pexels.com/photos/6077520/pexels-photo-6077520.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["All Safe Types", "Combination Reset", "Digital Safes", "Emergency Opening"]
    },
    {
      icon: Key,
      name: "Broken Key Extraction",
      description: "Broken key stuck in a lock anywhere in Long Island, Queens, or Brooklyn? Our specialized tools and techniques can extract broken keys without damaging your lock mechanism, followed by key replacement if needed.",
      image: "https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["No Lock Damage", "Immediate Service", "Key Replacement", "All Lock Types"]
    },
    {
      icon: UserCheck,
      name: "Security Consultation",
      description: "Comprehensive security assessment of your NYC metro area property with professional recommendations to enhance your overall security posture. We evaluate vulnerabilities and provide customized security solutions.",
      image: "https://images.pexels.com/photos/5029850/pexels-photo-5029850.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Property Assessment", "Custom Solutions", "Security Planning", "Upgrade Recommendations"]
    }
  ];

  const certifications = [
    { name: "Licensed in NY State", icon: Shield },
    { name: "Bonded & Insured", icon: Award },
    { name: "24/7 Emergency Service", icon: Clock },
    { name: "5-Star Rated", icon: Star }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Shield className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-white">Professional Locksmith Services in NYC Metro</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-shadow-lg">
              Professional Locksmith Services 
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Near You</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light max-w-4xl mx-auto">
              Comprehensive security solutions for residential, commercial, and automotive needs across 
              <span className="font-semibold text-white"> Long Island, Queens, and Brooklyn</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <cert.icon className="h-5 w-5 text-orange-400" />
                  <span className="text-sm font-semibold text-white">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              Our Complete Service Offerings
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Professional locksmith services using premium-grade tools and techniques across the NYC metro area
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="h-64 bg-gray-200 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg">
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 font-medium">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                      Get This Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Professional Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              Why Choose Our Professional Services?
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Setting the standard for locksmith excellence across Long Island, Queens, and Brooklyn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100 group-hover:border-green-200 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Licensed & Insured</h3>
                <p className="text-gray-600 text-center leading-relaxed font-medium">
                  All technicians are fully licensed, bonded, and insured for your protection and peace of mind. 
                  We carry comprehensive liability coverage and maintain all required NY state certifications.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 group-hover:border-blue-200 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Premium Tools & Materials</h3>
                <p className="text-gray-600 text-center leading-relaxed font-medium">
                  We use only the highest quality tools and materials to ensure lasting results and minimal damage. 
                  Our equipment is regularly updated with the latest locksmith technology and techniques.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100 group-hover:border-orange-200 transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Expert Technicians</h3>
                <p className="text-gray-600 text-center leading-relaxed font-medium">
                  Continuously trained professionals with years of experience and industry certifications. 
                  Our team stays current with the latest security technologies and locksmith best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">
                Need a Locksmith Now? Call Locksmith-Plus 24/7
              </h2>
              <p className="text-xl md:text-2xl text-orange-100 font-medium">
                Emergency services available around the clock across Long Island, Queens, and Brooklyn – no appointment necessary
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                Call (516) 555-LOCK
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105">
                Request Service Online
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-white">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">15-Min Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Licensed & Insured</span>
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

export default ServicesPage;