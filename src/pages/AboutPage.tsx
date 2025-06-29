import React from 'react';
import { Shield, Users, Award, Clock, Star, MapPin, Phone, Wrench } from 'lucide-react';

const AboutPage = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      location: "Hicksville, Long Island",
      text: "Third generation locksmith service that truly cares about their customers. They've been helping our Long Island neighborhood for years!"
    },
    {
      name: "Robert Kim",
      location: "Long Island City, Queens",
      text: "Professional commercial lock installation for our Queens office building. The team was efficient and the work was top-notch."
    },
    {
      name: "Linda Thompson",
      location: "Bay Ridge, Brooklyn",
      text: "Emergency lockout service at midnight in Brooklyn - they arrived quickly and got me back in my home safely. Grateful for their 24/7 service!"
    }
  ];

  const milestones = [
    { year: "1985", event: "Founded in Long Island", icon: MapPin },
    { year: "1995", event: "Expanded to Queens", icon: Users },
    { year: "2005", event: "Brooklyn Service Added", icon: Shield },
    { year: "2015", event: "Smart Lock Specialists", icon: Wrench },
    { year: "2024", event: "27,000+ Happy Customers", icon: Award }
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
              <Users className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-white">Trusted Local Locksmith Experts Since 1985</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-shadow-lg">
              Trusted Local Locksmith Experts 
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Since 1985</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light max-w-4xl mx-auto">
              Three generations of locksmith expertise serving our NYC metro community with integrity, skill, and dedication across 
              <span className="font-semibold text-white"> Long Island, Queens, and Brooklyn</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Now positioned above timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg font-medium">
                  Locksmith-Plus began as a small family business in 1985 when grandfather William "Bill" Harrison started offering locksmith services from his garage in Long Island. What started as a way to help neighbors who were locked out of their homes has grown into the most trusted locksmith service across the NYC metro area.
                </p>
                <p className="text-lg font-medium">
                  Today, the business is run by Bill's son Michael and grandson David Harrison, carrying on the family tradition of putting customers first. We've helped thousands of families, businesses, and individuals across Long Island, Queens, and Brooklyn with their security needs while maintaining the personal touch that made us who we are.
                </p>
                <p className="text-lg font-medium">
                  The "Plus" in our name represents our commitment to going above and beyond standard locksmith services. We're not just here to pick a lock or make a key – we're your partners in security, offering comprehensive solutions and peace of mind throughout the NYC metropolitan area.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 h-96 flex items-center justify-center border border-blue-100">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Family-Owned Business</h3>
                  <p className="text-gray-600 font-medium">Three generations of locksmith expertise serving the NYC metro area</p>
                  <div className="mt-6 flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">40+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">27,000+</div>
                      <div className="text-sm text-gray-600">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">3</div>
                      <div className="text-sm text-gray-600">Boroughs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline - Now positioned after Our Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              40 Years of Service Excellence
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Our journey from a small Long Island business to NYC metro's trusted locksmith service
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                          <milestone.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <p className="text-gray-700 font-medium">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Our customer-first values and NYC metro community focus set us apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 group-hover:border-blue-200 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Trust & Reliability</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Licensed, bonded, and insured with over 40 years of experience across Long Island, Queens, and Brooklyn. We show up when we say we will and do what we promise.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 group-hover:border-orange-200 transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Rapid Response</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  True 24/7 emergency service with average response times under 15 minutes across the NYC metro area. We understand that security can't wait.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 group-hover:border-green-200 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Professional Training</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Continuously trained technicians with state certifications and the latest tools and techniques in locksmith services and security technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              What Our NYC Metro Customers Say
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Real feedback from real customers across Long Island, Queens, and Brooklyn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200 group-hover:border-blue-200 transition-all duration-300">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed font-medium">"{testimonial.text}"</p>
                  <div className="space-y-1">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 font-semibold text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Focus */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">
              Proud NYC Metro Community Members
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-medium">
              As a local business, we're invested in the safety and security of our Long Island, Queens, and Brooklyn communities. 
              We sponsor local youth sports teams, participate in community safety events, and support neighborhood watch programs. 
              When you choose Locksmith-Plus, you're choosing a neighbor who cares about keeping our NYC metro communities safe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                Book Your Locksmith Now
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                See Our Services
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-white">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">3 Boroughs Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">27,000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">40 Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;