import React, { useState } from 'react';
import { Phone, Clock, Shield, MapPin, Star, ChevronLeft, ChevronRight, Award, Users, Zap } from 'lucide-react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Forest Hills, Queens",
      rating: 5,
      text: "Locked out at 2 AM in Queens and Locksmith-Plus was there in 12 minutes! Professional, fast, and affordable. They saved my night!"
    },
    {
      name: "Mike Chen",
      location: "Garden City, Long Island",
      rating: 5,
      text: "Rekeyed my entire house in Long Island after moving in. The technician was knowledgeable and explained everything clearly. Outstanding service!"
    },
    {
      name: "Emma Rodriguez",
      location: "Park Slope, Brooklyn",
      rating: 5,
      text: "Smart lock installation in Brooklyn was flawless. They even showed me how to use all the features and connected it to my phone. True professionals!"
    },
    {
      name: "David Kim",
      location: "Astoria, Queens",
      rating: 5,
      text: "Emergency car lockout in Queens - they arrived faster than expected and got me back on the road quickly. Highly recommend!"
    }
  ];

  const serviceAreas = [
    { name: "Long Island", description: "Nassau & Suffolk Counties", color: "bg-blue-500" },
    { name: "Queens", description: "All Neighborhoods", color: "bg-green-500" },
    { name: "Brooklyn", description: "Complete Coverage", color: "bg-purple-500" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section - Main Value Proposition */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern" />
        </div>

        <div className="max-container container-padding py-24 relative">
          <div className="text-center space-section">
            <div className="space-content">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield className="h-5 w-5 text-orange-400" />
                <span className="text-sm font-semibold text-white">Licensed & Insured in NY</span>
              </div>
              
              <h1 className="heading-xl text-shadow-lg">
                More Than Just a Locksmith – 
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> 
                  Locksmith-Plus
                </span> Has Your Back 24/7
              </h1>
              
              <p className="text-lead text-blue-100 max-w-4xl mx-auto">
                Fast response, trustworthy service, and local expertise you can count on across 
                <span className="font-semibold text-white"> Long Island, Queens, and Brooklyn</span>. 
                We're your neighbors, protecting what matters most to you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group">
                <span className="center-vertical justify-center space-x-2">
                  <Zap className="h-5 w-5 group-hover:animate-pulse" />
                  <span>Request Immediate Help</span>
                </span>
              </button>
              <button className="btn-secondary">
                Get a Free Quote
              </button>
              <button className="bg-blue-600/80 backdrop-blur-sm hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 border border-blue-400/30">
                Talk to a Technician
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="center-vertical space-x-3">
                <div className="icon-container-sm bg-orange-500">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-semibold">24/7 Emergency</span>
              </div>
              <div className="center-vertical space-x-3">
                <div className="icon-container-sm bg-green-500">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-semibold">Licensed & Insured</span>
              </div>
              <div className="center-vertical space-x-3">
                <div className="icon-container-sm bg-purple-500">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <span className="text-lg font-semibold">15-Min Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Areas - Above Get Help Now */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-container container-padding">
          <div className="text-center space-content">
            <h2 className="heading-lg bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              Our NYC Metro Service Areas
            </h2>
            <p className="text-body text-gray-600">
              Serving the greater New York metropolitan area with fast, reliable locksmith services
            </p>
          </div>
          
          <div className="grid-2-col">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-100 to-blue-50 rounded-2xl p-12 h-96 center-content border border-gray-200">
                <div className="text-center space-content">
                  <div className="icon-container bg-gradient-to-r from-blue-600 to-purple-600 mx-auto w-20 h-20 center-content">
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="heading-sm text-gray-800">NYC Metro Coverage Map</h3>
                  <p className="text-gray-600 font-medium">Interactive map showing our complete service coverage</p>
                  <div className="grid grid-cols-3 gap-4">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className={`${area.color} text-white p-3 rounded-lg text-sm font-bold text-center`}>
                        <div className="leading-tight">{area.name}</div>
                        <div className="text-xs opacity-90 leading-tight">{area.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-section">
              <div className="center-vertical space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <div className="icon-container">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="space-tight">
                  <h3 className="text-xl font-bold text-gray-800">Primary Service Areas</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    <strong>Long Island:</strong> Nassau & Suffolk Counties including Hempstead, Levittown, Hicksville<br/>
                    <strong>Queens:</strong> Astoria, Flushing, Forest Hills, Jamaica, Long Island City<br/>
                    <strong>Brooklyn:</strong> Park Slope, Williamsburg, Bay Ridge, Crown Heights, Flatbush
                  </p>
                </div>
              </div>
              
              <div className="center-vertical space-x-4 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="space-tight">
                  <h3 className="text-xl font-bold text-gray-800">Lightning-Fast Response Times</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    <strong>Emergency services:</strong> 15-30 minutes average response<br/>
                    <strong>Scheduled appointments:</strong> Same day or next day availability<br/>
                    <strong>Peak hours:</strong> Under 20 minutes in most areas
                  </p>
                </div>
              </div>
              
              <div className="center-vertical space-x-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="space-tight">
                  <h3 className="text-xl font-bold text-gray-800">24/7 Availability</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Call us anytime for emergency lockout assistance, security consultations, or to schedule service. 
                    Our dispatch center is always staffed with live operators, never automated systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Help Now Form - Separate Section */}
      <section className="section-padding bg-white">
        <div className="max-container container-padding">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative card bg-white text-gray-900 p-8 border-2 border-gray-100">
                <div className="text-center space-content">
                  <h2 className="heading-lg bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
                    Get Help Now
                  </h2>
                  <p className="text-body text-gray-600">Emergency response in 15 minutes or less</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-content">
                  <div className="space-items">
                    <div>
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        placeholder="Your email address"
                      />
                    </div>
                    <div>
                      <label className="form-label">Describe Your Issue</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input resize-none"
                        placeholder="Tell us about your locksmith needs..."
                      />
                    </div>
                  </div>
                  <button type="submit" className="w-full btn-primary">
                    Send Emergency Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Carousel - Precisely centered */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="content-container container-padding">
          <div className="text-center space-content">
            <h2 className="heading-lg bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              What Our NYC Metro Customers Say
            </h2>
            <p className="text-body text-gray-600">Real reviews from real customers across Long Island, Queens, and Brooklyn</p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-10"></div>
            <div className="relative card p-8">
              <div className="center-vertical justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <div className="flex-1 mx-12 text-center space-content">
                  <div className="center-horizontal">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 italic leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="space-tight">
                    <div className="font-bold text-xl text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-blue-600 font-semibold">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              
              {/* Testimonial Indicators - Precisely centered */}
              <div className="center-horizontal mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Precisely centered */}
      <section className="section-padding bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-dots" />
        </div>
        
        <div className="content-container container-padding text-center relative">
          <div className="space-section">
            <div className="space-items">
              <h2 className="heading-lg text-white text-shadow-lg">
                Need a Locksmith Right Now?
              </h2>
              <p className="text-lead text-orange-100 font-medium">
                Don't wait – our emergency response team is standing by 24/7 across Long Island, Queens, and Brooklyn
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                <span className="center-vertical space-x-3">
                  <Phone className="h-6 w-6 group-hover:animate-pulse" />
                  <span>Call (516) 555-LOCK</span>
                </span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105">
                Request Callback
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-white">
              <div className="center-vertical space-x-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">5000+ Happy Customers</span>
              </div>
              <div className="center-vertical space-x-2">
                <Award className="h-5 w-5" />
                <span className="font-semibold">15-Min Response</span>
              </div>
              <div className="center-vertical space-x-2">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;