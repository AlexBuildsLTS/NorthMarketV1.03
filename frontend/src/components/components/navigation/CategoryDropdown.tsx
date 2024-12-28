import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    subcategories: [
      { id: 'phones', name: 'Phones & Tablets' },
      { id: 'computers', name: 'Computers & Laptops' },
      { id: 'audio', name: 'Audio & Headphones' }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    subcategories: [
      { id: 'mens', name: "Men's Clothing" },
      { id: 'womens', name: "Women's Clothing" },
      { id: 'accessories', name: 'Accessories' }
    ]
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    subcategories: [
      { id: 'furniture', name: 'Furniture' },
      { id: 'decor', name: 'Home Decor' },
      { id: 'garden', name: 'Garden & Outdoor' }
    ]
  }
];

export const CategoryDropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleMouseEnter = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
    setIsOpen(false);
  };

  const handleSubcategoryClick = (categoryId: string, subcategoryId: string) => {
    navigate(`/category/${categoryId}/${subcategoryId}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="flex items-center space-x-1 px-4 py-2 text-white hover:text-emerald-500 transition-colors"
      >
        <span>Categories</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 w-[600px] bg-navy-800 rounded-lg shadow-xl border border-navy-700 z-50"
          onMouseLeave={() => handleMouseLeave()}
        >
          <div className="flex">
            <div className="w-1/2 border-r border-navy-700">
              {categories.map(category => (
                <div
                  key={category.id}
                  className={`px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-navy-700 ${
                    activeCategory === category.id ? 'bg-navy-700' : ''
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                  onMouseEnter={() => handleMouseEnter(category.id)}
                >
                  <span className="text-white">{category.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>

            <div className="w-1/2 py-2">
              {activeCategory && (
                <div className="space-y-2">
                  {categories
                    .find(c => c.id === activeCategory)
                    ?.subcategories.map(sub => (
                      <div
                        key={sub.id}
                        className="px-4 py-2 cursor-pointer hover:bg-navy-700 text-gray-300 hover:text-white"
                        onClick={() => handleSubcategoryClick(activeCategory, sub.id)}
                      >
                        {sub.name}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};