import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, Heart, Search, ArrowRight, TrendingUp, Star, Clock } from 'lucide-react';

const featureItems = [
  {
    icon: <Heart className="text-accent-500" size={24} />,
    title: 'Personalized Recommendations',
    description: 'Our AI understands your needs and suggests thoughtful, personalized gifts.'
  },
  {
    icon: <Search className="text-primary-500" size={24} />,
    title: 'Smart Filtering',
    description: 'Filter by occasion, relationship, budget, and recipient interests.'
  },
  {
    icon: <TrendingUp className="text-success-500" size={24} />,
    title: 'Trending Gifts',
    description: 'Stay updated with the latest and most popular gift ideas in India.'
  },
  {
    icon: <Clock className="text-warning-500" size={24} />,
    title: 'Quick Results',
    description: 'Get instant gift suggestions with our powerful AI technology.'
  }
];

const testimonials = [
  {
    name: 'manasa',
    role: 'vizag',
    content: 'GiftSage helped me find the perfect anniversary gift for my husband. The recommendations were spot-on!'
  },
  {
    name: 'kamakshi',
    role: 'rajahmundary',
    content: 'I was struggling to find a gift for my sister\'s graduation. GiftSage suggested options I hadn\'t even considered!'
  },
  {
    name: 'preethi',
    role: 'vijayawada',
    content: 'The budget filter is amazing! I found wonderful gifts within my price range. Highly recommend!'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-6">
                Find the Perfect Gift with AI
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover <span className="text-primary-600">Thoughtful</span> Gifts for Every <span className="text-accent-500">Occasion</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                Let our AI-powered platform help you find the perfect gift for your loved ones. Personalized recommendations based on occasion, interests, and your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/recommend" 
                  className="btn btn-primary flex items-center justify-center gap-2"
                >
                  <span>Find Gifts</span>
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/about" 
                  className="btn btn-secondary"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/264992/pexels-photo-264992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Gift suggestions" 
                className="rounded-2xl shadow-xl max-w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Our Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose GiftSage?
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We combine AI technology with a deep understanding of gift-giving to create a truly helpful experience.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureItems.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="rounded-full bg-gray-100 w-14 h-14 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How GiftSage Works
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Finding the perfect gift is just a few steps away.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell Us About Them',
                description: 'Share details about the recipient and the occasion.',
                color: 'primary'
              },
              {
                step: '02',
                title: 'Set Your Budget',
                description: 'Choose how much you want to spend in Indian Rupees.',
                color: 'accent'
              },
              {
                step: '03',
                title: 'Get Recommendations',
                description: 'Receive personalized gift suggestions perfect for the occasion.',
                color: 'success'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div 
                  className={`rounded-full bg-${item.color}-100 text-${item.color}-600 w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6`}
                  style={{ backgroundColor: index === 0 ? '#e0e7ff' : index === 1 ? '#fecdd3' : '#dcfce7',
                           color: index === 0 ? '#4f46e5' : index === 1 ? '#f43f5e' : '#16a34a' }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/recommend" 
              className="btn btn-primary"
            >
              Start Finding Gifts
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our Users Say
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Join thousands of happy gift-givers who found the perfect presents with GiftSage.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-warning-400 fill-warning-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Find the Perfect Gift?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Let our AI help you discover thoughtful gifts for your loved ones. Start now and make your gift-giving memorable!
              </p>
              <Link 
                to="/recommend" 
                className="btn bg-white text-primary-600 hover:bg-gray-100"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;