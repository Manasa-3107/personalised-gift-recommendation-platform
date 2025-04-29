import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Share2, ExternalLink, ArrowLeft, Filter, ShoppingBag } from 'lucide-react';

// Mock data - in a real application, this would come from your API
const mockGifts = [
  {
    id: 1,
    name: 'Premium Leather Journal',
    description: 'Handcrafted leather journal with high-quality paper, perfect for writers and creatives.',
    price: 1299,
    image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Books', 'Art'],
    rating: 4.7
  },
  {
    id: 2,
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium sound quality with active noise cancellation for an immersive audio experience.',
    price: 8999,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Technology', 'Music'],
    rating: 4.5
  },
  {
    id: 3,
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals, heart rate, and sleep patterns with this sleek smart watch.',
    price: 3499,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Technology', 'Fitness'],
    rating: 4.3
  },
  {
    id: 4,
    name: 'Gourmet Spice Collection',
    description: 'A set of premium spices from around the world for the cooking enthusiast.',
    price: 999,
    image: 'https://images.pexels.com/photos/6937454/pexels-photo-6937454.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Cooking'],
    rating: 4.8
  },
  {
    id: 5,
    name: 'Indoor Plant Starter Kit',
    description: 'All you need to start your indoor garden with decorative pots and easy-care plants.',
    price: 1499,
    image: 'https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Home Decor'],
    rating: 4.4
  },
  {
    id: 6,
    name: 'Personalized Star Map',
    description: 'Custom star map showing the night sky from a specific date and location.',
    price: 2299,
    image: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Art', 'Home Decor'],
    rating: 4.6
  },
  {
    id: 7,
    name: 'Premium Coffee Subscription',
    description: 'Monthly delivery of freshly roasted specialty coffee beans from around the world.',
    price: 849,
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Cooking'],
    rating: 4.9
  },
  {
    id: 8,
    name: 'Board Game Collection',
    description: 'Set of popular strategy board games for game nights with friends and family.',
    price: 3299,
    image: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Gaming'],
    rating: 4.7
  }
];

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [gifts, setGifts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const formData = location.state?.formData;

  useEffect(() => {
    if (!formData) {
      navigate('/recommend');
      return;
    }

    const fetchGifts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        let filteredGifts = [...mockGifts];
        
        // Only filter by interests if they are selected
        if (formData.interests && formData.interests.length > 0) {
          filteredGifts = filteredGifts.filter(gift => 
            gift.tags.some((tag: string) => formData.interests.includes(tag))
          );
        }
        
        // Parse budget range and filter
        if (formData.budget) {
          const budgetMatch = formData.budget.match(/₹(\d+,?\d*)\s*-\s*₹?(\d+,?\d*)/);
          if (budgetMatch) {
            const minBudget = parseInt(budgetMatch[1].replace(/,/g, ''));
            const maxBudget = parseInt(budgetMatch[2].replace(/,/g, ''));
            
            filteredGifts = filteredGifts.filter(gift => 
              gift.price >= minBudget && gift.price <= maxBudget
            );
          } else if (formData.budget.includes('₹10,000+')) {
            filteredGifts = filteredGifts.filter(gift => gift.price >= 10000);
          }
        }

        // If no gifts match the criteria, show all gifts
        if (filteredGifts.length === 0) {
          filteredGifts = [...mockGifts];
        }
        
        setGifts(filteredGifts);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGifts();
  }, [formData, navigate]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setShowFilters(false);
  };

  const filteredGifts = activeFilter === 'all' 
    ? gifts 
    : gifts.filter(gift => gift.tags.includes(activeFilter));

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="inline-block">
            <svg className="animate-spin h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mt-6">Finding perfect gifts...</h2>
          <p className="text-gray-600 mt-2">Our AI is analyzing your preferences</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        <div className="mb-8">
          <button 
            onClick={() => navigate('/recommend')}
            className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={18} className="mr-1" />
            <span>Back to Recommendations</span>
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Gift Recommendations</h1>
          <p className="text-gray-600">
            Here are personalized gift suggestions based on your preferences.
          </p>
        </div>

        {/* Mobile Filters Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center space-x-2"
          >
            <Filter size={18} />
            <span>Filter Gifts</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-1/4 lg:w-1/5`}>
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Filter By Interest</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleFilterChange('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeFilter === 'all' ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                  }`}
                >
                  All Gifts
                </button>
                {formData?.interests.map((interest: string) => (
                  <button
                    key={interest}
                    onClick={() => handleFilterChange(interest)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeFilter === interest ? 'bg-primary-100 text-primary-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Recipient</h3>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-medium">{formData?.recipient || 'Someone special'}</p>
                  <p className="text-sm text-gray-600">
                    {formData?.relationship}, {formData?.age}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Occasion: {formData?.occasion}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Budget</h3>
                <p className="text-gray-700">{formData?.budget}</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 lg:w-4/5">
            {filteredGifts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">No gifts found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any gifts matching your current filters. Try changing your preferences.
                </p>
                <button
                  onClick={() => navigate('/recommend')}
                  className="btn btn-primary"
                >
                  Adjust Preferences
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGifts.map((gift) => (
                  <motion.div
                    key={gift.id}
                    className="card overflow-hidden relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={gift.image} 
                        alt={gift.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={() => toggleFavorite(gift.id)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 shadow-sm transition-all duration-200 z-10"
                        aria-label={favorites.includes(gift.id) ? "Remove from favorites" : "Add to favorites"}
                      >
                        <Heart 
                          size={20} 
                          className={favorites.includes(gift.id) ? "fill-accent-500 text-accent-500" : "text-gray-500"} 
                        />
                      </button>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{gift.name}</h3>
                        <span className="font-medium text-lg text-primary-700">{formatPrice(gift.price)}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{gift.description}</p>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {gift.tags.map((tag: string) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(gift.rating) ? 'text-warning-400 fill-warning-400' : 'text-gray-300'}`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{gift.rating}</span>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button 
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Share gift"
                          >
                            <Share2 size={18} className="text-gray-600" />
                          </button>
                          <a 
                            href="#" 
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="View gift"
                          >
                            <ExternalLink size={18} className="text-gray-600" />
                          </a>
                        </div>
                      </div>
                      
                      <a 
                        href="#" 
                        className="mt-4 block w-full btn btn-primary flex items-center justify-center gap-2"
                      >
                        <ShoppingBag size={18} />
                        <span>View Product</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;