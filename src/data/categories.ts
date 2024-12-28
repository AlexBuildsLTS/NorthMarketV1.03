import type { CategoryWithSubs } from '../types/category';

export const categories: CategoryWithSubs[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'Laptop',
    subcategories: [
      { id: 'phones', name: 'Phones & Tablets' },
      { id: 'computers', name: 'Computers & Laptops' },
      { id: 'audio', name: 'Audio & Headphones' },
      { id: 'cameras', name: 'Cameras & Photography' },
      { id: 'gaming', name: 'Gaming & Consoles' }
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: 'Shirt',
    subcategories: [
      { id: 'mens', name: "Men's Clothing" },
      { id: 'womens', name: "Women's Clothing" },
      { id: 'shoes', name: 'Shoes & Footwear' },
      { id: 'accessories', name: 'Accessories' },
      { id: 'jewelry', name: 'Jewelry & Watches' }
    ]
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    icon: 'Home',
    subcategories: [
      { id: 'furniture', name: 'Furniture' },
      { id: 'decor', name: 'Home Decor' },
      { id: 'kitchen', name: 'Kitchen & Dining' },
      { id: 'garden', name: 'Garden & Outdoor' },
      { id: 'tools', name: 'Tools & Home Improvement' }
    ]
  },
  {
    id: 'books',
    name: 'Books',
    icon: 'BookOpen',
    subcategories: [
      { id: 'fiction', name: 'Fiction' },
      { id: 'nonfiction', name: 'Non-Fiction' },
      { id: 'education', name: 'Education & Reference' },
      { id: 'children', name: "Children's Books" },
      { id: 'comics', name: 'Comics & Manga' }
    ]
  }
];