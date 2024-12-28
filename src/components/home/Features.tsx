import React from 'react';
import { Shield, Zap, ShoppingBag } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Protected payments and verified sellers for your peace of mind'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    },
    {
      icon: ShoppingBag,
      title: 'Wide Selection',
      description: 'Thousands of products across multiple categories'
    }
  ];

  return (
    <section className="bg-navy-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-navy-700">
              <feature.icon className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;