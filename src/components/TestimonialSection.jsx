import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  // Mock testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      review: "Absolutely love this product! The quality exceeded my expectations and the customer service was outstanding. Highly recommend to anyone looking for premium quality.",
      rating: 5,
      product: "Premium Wireless Headphones"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Enthusiast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review: "Fast shipping, excellent build quality, and amazing sound. This has become my go-to choice for work and entertainment. Worth every penny!",
      rating: 5,
      product: "Smart Watch Pro"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Fitness Coach",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review: "I've been using this for months now and it's still performing like new. The design is sleek and it fits perfectly into my daily routine.",
      rating: 5,
      product: "Fitness Tracker Elite"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      review: "Outstanding customer experience from start to finish. The product arrived quickly and works exactly as described. Will definitely shop here again!",
      rating: 5,
      product: "Laptop Stand Deluxe"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      review: "The attention to detail is incredible. This product has transformed my workspace and improved my productivity significantly. Couldn't be happier!",
      rating: 5,
      product: "Ergonomic Office Chair"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      review: "Great value for money and exceptional quality. The delivery was super fast and the packaging was eco-friendly. Highly satisfied with my purchase!",
      rating: 5,
      product: "Wireless Keyboard"
    }
  ];

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-base-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content dark:text-white mb-4 transition-colors duration-300">
            What Our Customers Say
          </h2>
          <p className="text-lg text-base-content/70 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="card bg-base-100 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="card-body p-6">
                  {/* Avatar and Rating */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.name}'s profile`}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base-content dark:text-white text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-base-content/60 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-base-content/80 dark:text-gray-300 leading-relaxed mb-4">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Product Badge */}
                  <div className="badge badge-primary badge-outline">
                    {testimonial.product}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="carousel carousel-center max-w-full space-x-4 p-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="carousel-item w-80 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card bg-base-100 dark:bg-gray-800 shadow-xl w-full">
                    <div className="card-body p-6">
                      {/* Avatar and Rating */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="avatar">
                          <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                              src={testimonial.avatar}
                              alt={`${testimonial.name}'s profile`}
                              className="rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-base-content dark:text-white text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-base-content/60 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-base-content/80 dark:text-gray-300 leading-relaxed mb-4">
                        "{testimonial.review}"
                      </blockquote>

                      {/* Product Badge */}
                      <div className="badge badge-primary badge-outline">
                        {testimonial.product}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-4">
              <p className="text-sm text-base-content/60 dark:text-gray-400">
                ← Swipe to see more reviews →
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="stats stats-horizontal shadow bg-base-100 dark:bg-gray-800">
            <div className="stat">
              <div className="stat-title text-base-content/60 dark:text-gray-400">Happy Customers</div>
              <div className="stat-value text-primary">10K+</div>
            </div>
            <div className="stat">
              <div className="stat-title text-base-content/60 dark:text-gray-400">Average Rating</div>
              <div className="stat-value text-primary">4.9/5</div>
            </div>
            <div className="stat">
              <div className="stat-title text-base-content/60 dark:text-gray-400">Reviews</div>
              <div className="stat-value text-primary">2,500+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Smooth scrolling for carousel */
        .carousel {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for carousel */
        .carousel::-webkit-scrollbar {
          height: 4px;
        }

        .carousel::-webkit-scrollbar-track {
          background: transparent;
        }

        .carousel::-webkit-scrollbar-thumb {
          background: #8b5cf6;
          border-radius: 2px;
        }

        .carousel::-webkit-scrollbar-thumb:hover {
          background: #7c3aed;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;