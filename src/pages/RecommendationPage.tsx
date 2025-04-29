import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, ChevronRight, Info, Heart, Search, CheckCircle2 } from 'lucide-react';

interface FormData {
  recipient: string;
  relationship: string;
  age: string;
  occasion: string;
  interests: string[];
  budget: string;
  preferences: string;
}

const RecommendationPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    recipient: '',
    relationship: '',
    age: '',
    occasion: '',
    interests: [],
    budget: '',
    preferences: ''
  });

  const relationships = ['Friend', 'Parent', 'Sibling', 'Partner', 'Spouse', 'Child', 'Colleague', 'Other'];
  const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Graduation', 'Festival', 'Housewarming', 'Baby Shower', 'Other'];
  const interestOptions = ['Books', 'Technology', 'Fashion', 'Sports', 'Cooking', 'Travel', 'Art', 'Music', 'Fitness', 'Gaming', 'Home Decor', 'Beauty'];
  const budgetRanges = ['₹500 - ₹1,000', '₹1,000 - ₹2,500', '₹2,500 - ₹5,000', '₹5,000 - ₹10,000', '₹10,000+'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInterestToggle = (interest: string) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    
    setFormData({ ...formData, interests: updatedInterests });
  };

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // In a real implementation, this would send the form data to your backend
      // and get back AI-generated recommendations
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to results page with form data
      navigate('/results', { state: { formData } });
    } catch (error) {
      console.error('Error generating recommendations:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Who are you shopping for?</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
                  Recipient's Name (Optional)
                </label>
                <input
                  type="text"
                  id="recipient"
                  name="recipient"
                  value={formData.recipient}
                  onChange={handleInputChange}
                  placeholder="e.g., Aisha, Dad, etc."
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Relationship*
                </label>
                <select
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                >
                  <option value="" disabled>Select your relationship</option>
                  {relationships.map((relation) => (
                    <option key={relation} value={relation}>{relation}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Recipient's Age Range*
                </label>
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                >
                  <option value="" disabled>Select age range</option>
                  <option value="0-12">Child (0-12)</option>
                  <option value="13-19">Teenager (13-19)</option>
                  <option value="20-30">Young Adult (20-30)</option>
                  <option value="31-50">Adult (31-50)</option>
                  <option value="51+">Senior (51+)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
                  Gift Occasion*
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                >
                  <option value="" disabled>Select occasion</option>
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.relationship || !formData.age || !formData.occasion}
                className="btn btn-primary flex items-center gap-2"
              >
                <span>Next Step</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">What are their interests?</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select all that apply (at least 1)*
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 py-3 rounded-lg border text-left transition-colors ${
                      formData.interests.includes(interest)
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {formData.interests.includes(interest) && (
                        <CheckCircle2 size={16} className="text-primary-600" />
                      )}
                      <span>{interest}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range*
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                required
                className="input-field"
              >
                <option value="" disabled>Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="preferences" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Preferences (Optional)
              </label>
              <textarea
                id="preferences"
                name="preferences"
                value={formData.preferences}
                onChange={handleInputChange}
                placeholder="E.g., eco-friendly products, specific brands they like, things to avoid..."
                className="input-field min-h-[100px]"
              />
            </div>
            
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="btn btn-secondary"
              >
                Back
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={formData.interests.length === 0 || !formData.budget || loading}
                className="btn btn-primary flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <span>Find Gifts</span>
                    <Gift size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find the Perfect Gift</h1>
            <p className="text-gray-600">
              Tell us about the recipient, and we'll suggest thoughtful gift ideas tailored to them.
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div 
                className="h-full bg-primary-600 rounded-full transition-all duration-500"
                style={{ width: `${(step / 2) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span className={step >= 1 ? 'text-primary-600 font-medium' : ''}>Basic Info</span>
              <span className={step >= 2 ? 'text-primary-600 font-medium' : ''}>Preferences</span>
            </div>
          </div>
          
          {/* Form Card */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit}>
              {renderStepContent()}
            </form>
          </div>
          
          {/* Info Box */}
          <div className="mt-8 bg-primary-50 border border-primary-100 rounded-lg p-4 flex items-start">
            <Info size={20} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              Your information is only used to generate personalized gift recommendations. We don't store any personally identifiable information. See our <a href="#" className="text-primary-600 hover:underline">privacy policy</a> for more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;