import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, DivideIcon as LucideIcon, MessageSquare, Code, Brain, Lock, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About GiftSage</h1>
              <p className="text-lg text-gray-700 mb-8">
                We're on a mission to make gift-giving meaningful, effortless, and joyful through the power of AI technology.
              </p>
              <a href="#our-story" className="btn btn-primary inline-flex items-center gap-2">
                <span>Our Story</span>
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How GiftSage Began</h2>
              <p className="text-gray-700 mb-4">
                GiftSage was born from a simple observation: finding the perfect gift is often stressful and time-consuming. 
                We wanted to create a solution that makes the gift selection process enjoyable and meaningful.
              </p>
              <p className="text-gray-700 mb-4">
                Founded in 2025, our team of gift enthusiasts and AI experts joined forces to build an intelligent recommendation 
                platform specifically designed for the Indian market, understanding local preferences, occasions, and cultural nuances.
              </p>
              <p className="text-gray-700">
                Today, GiftSage helps thousands of people across India discover thoughtful gifts for their loved ones, making 
                every celebration more special and memorable.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/5690283/pexels-photo-5690283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why GiftSage Exists
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We believe that thoughtful gift-giving strengthens relationships and creates lasting memories.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: 'Meaningful Connections',
                description: 'We help people strengthen their relationships through thoughtful gift-giving.'
              },
              {
                icon: Brain,
                title: 'AI-Powered Convenience',
                description: 'Our technology saves time while maintaining the personal touch that makes gifts special.'
              },
              {
                icon: Star,
                title: 'Local Relevance',
                description: 'We understand Indian gifting traditions and preferences, providing culturally relevant recommendations.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="rounded-full bg-primary-50 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {React.createElement(item.icon, { className: "text-primary-600", size: 24 })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-medium text-sm mb-4">
                Our Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How GiftSage Works
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Behind our simple interface is powerful AI technology designed to understand human preferences.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Intelligent Recommendation Engine</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Natural Language Processing',
                    description: 'Our AI interprets your description of the recipient to understand personalities and preferences.'
                  },
                  {
                    title: 'Contextual Analysis',
                    description: 'We consider the relationship dynamics, occasion context, and cultural nuances of gift-giving in India.'
                  },
                  {
                    title: 'Learning Algorithms',
                    description: 'Our system continuously improves based on user feedback and selection patterns.'
                  },
                  {
                    title: 'Indian Market Specialization',
                    description: 'All recommendations are tailored to products available in India with price ranges in rupees.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-full bg-primary-100 text-primary-600 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="AI technology" 
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white bg-opacity-20 text-white font-medium text-sm mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We Stand For
              </h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                These core principles guide everything we do at GiftSage.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Thoughtfulness',
                description: 'We believe in the power of thoughtful gestures to strengthen human connections.'
              },
              {
                title: 'Accessibility',
                description: "Great gift-giving shouldn't be limited by budget. We provide options for every price range."
              },
              {
                title: 'Privacy',
                description: 'We respect your data and maintain the highest standards of privacy and security.'
              },
              {
                title: 'Inclusivity',
                description: 'Our platform is designed to serve diverse interests, relationships, and cultural contexts.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white text-opacity-80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Find the Perfect Gift?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Experience the power of AI-driven gift recommendations personalized for your loved ones.
                </p>
                <a href="/recommend" className="btn btn-primary">
                  Start Finding Gifts
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;