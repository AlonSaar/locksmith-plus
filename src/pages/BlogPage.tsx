import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Wrench, Lock, Shield, Key, Home, AlertTriangle, Clock, Award } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "How to Fix a Jammed Door Lock in NYC Apartments",
      excerpt: "Learn simple techniques to fix a stuck door lock before calling a professional. Safe DIY methods for NYC apartment dwellers and when to stop trying.",
      date: "March 15, 2025",
      author: "David Harrison",
      readTime: "5 min read",
      category: "DIY Tips",
      icon: Lock,
      slug: "fix-jammed-door-lock-nyc"
    },
    {
      title: "When to Replace Your Door Locks in Long Island Homes",
      excerpt: "Signs that indicate it's time to upgrade your door locks for better security and peace of mind in your Long Island, Queens, or Brooklyn home.",
      date: "March 10, 2025",
      author: "Michael Harrison",
      readTime: "7 min read",
      category: "Home Security",
      icon: Shield,
      slug: "when-to-replace-door-locks-long-island"
    },
    {
      title: "Smart Locks vs Traditional Locks: NYC Metro Guide",
      excerpt: "Comprehensive comparison of smart locks and traditional locks to help NYC metro area residents make the best choice for their property.",
      date: "March 5, 2025",
      author: "David Harrison",
      readTime: "8 min read",
      category: "Technology",
      icon: Wrench,
      slug: "smart-locks-vs-traditional-nyc"
    },
    {
      title: "How to Avoid Lockouts in Queens and Brooklyn",
      excerpt: "Practical tips and strategies to prevent getting locked out of your home, car, or office in the busy NYC metro area.",
      date: "February 28, 2025",
      author: "Sarah Martinez",
      readTime: "6 min read",
      category: "Prevention",
      icon: Key,
      slug: "avoid-lockouts-queens-brooklyn"
    },
    {
      title: "What to Do if You Lose Your Car Keys in Long Island",
      excerpt: "Step-by-step guide on what to do when you lose your car keys in Long Island, including modern key fobs and transponder keys.",
      date: "February 22, 2025",
      author: "Michael Harrison",
      readTime: "5 min read",
      category: "Automotive",
      icon: AlertTriangle,
      slug: "lost-car-keys-long-island-guide"
    },
    {
      title: "Improve Your NYC Home Security on a Budget",
      excerpt: "Affordable ways to enhance your home security in Long Island, Queens, or Brooklyn without breaking the bank. Simple upgrades that make a big difference.",
      date: "February 18, 2025",
      author: "David Harrison",
      readTime: "9 min read",
      category: "Home Security",
      icon: Home,
      slug: "budget-home-security-nyc"
    }
  ];

  const categories = [
    "All Posts",
    "DIY Tips",
    "Home Security",
    "Technology",
    "Prevention",
    "Automotive"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
              <Shield className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-white">DIY Locksmith Tips & Advice for NYC Metro</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-shadow-lg">
              DIY Locksmith Tips & 
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Advice</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light max-w-4xl mx-auto">
              Helpful locksmith tips from the pros - free advice to keep you secure across 
              <span className="font-semibold text-white"> Long Island, Queens, and Brooklyn</span>
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent">
              Helpful Locksmith Tips From the Pros
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Learn from our decades of experience with these practical security tips for NYC metro residents
            </p>
          </div>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Enhanced Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg">
                        <post.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-900 hover:text-blue-700 cursor-pointer transition-colors group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-blue-700 hover:text-blue-800 font-bold flex items-center space-x-2 transition-colors group-hover:text-blue-600"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105">
                        Need Help? Call Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">
              Stay Updated with NYC Metro Security Tips
            </h2>
            <p className="text-xl text-blue-100 font-medium max-w-4xl mx-auto">
              Get the latest locksmith tips, security advice, and special offers for Long Island, Queens, and Brooklyn residents delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-orange-500 font-medium text-lg"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Subscribe Now
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-white">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="font-semibold">Security Tips</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Monthly Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Exclusive Offers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">
              Need Professional Help? Call Us Now
            </h2>
            <p className="text-xl text-orange-100 font-medium max-w-4xl mx-auto">
              While DIY tips are helpful, some situations require professional expertise across Long Island, Queens, and Brooklyn
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
                Call (516) 555-LOCK
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105">
                Schedule Service
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

export default BlogPage;