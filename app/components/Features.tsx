import React from 'react';
import { Smartphone, PenLine, CloudCog, Sparkles, BarChart, QrCode } from "lucide-react";

const features = [
  {
    icon: <PenLine className="h-8 w-8 text-menu-primary" />,
    title: 'Easy Drag & Drop Editor',
    description: 'Create and customize your menu with our intuitive drag and drop interface. No design skills needed.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-menu-secondary" />,
    title: 'Mobile-Friendly Design',
    description: 'Your digital menu looks perfect on any device, providing a seamless experience for all customers.'
  },
  {
    icon: <QrCode className="h-8 w-8 text-menu-tertiary" />,
    title: 'QR Code Integration',
    description: 'Generate QR codes instantly for your customers to access your menu from their devices.'
  },
  {
    icon: <CloudCog className="h-8 w-8 text-menu-primary" />,
    title: 'Real-Time Updates',
    description: 'Update prices, add specials, or modify items in real-time. Changes reflect instantly on all devices.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-menu-secondary" />,
    title: 'Beautiful Templates',
    description: 'Choose from dozens of professionally designed templates to match your restaurant\'s style.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-menu-tertiary" />,
    title: 'Item Analytics',
    description: 'Track menu performance with analytics on your most viewed and popular items.'
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features That Make Menu Creation <span className="text-menu-primary">Simple</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create stunning digital menus that delight your customers and boost your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
