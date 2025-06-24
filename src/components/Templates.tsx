import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from "lucide-react";

const templates = [
    {
        id: 1,
        name: 'Elegant Bistro',
        style: 'Modern & Clean',
        image: '/placeholder.svg',
        color: 'bg-orange-50'
    },
    {
        id: 2,
        name: 'Rustic Café',
        style: 'Warm & Inviting',
        image: '/placeholder.svg',
        color: 'bg-violet-50'
    },
    {
        id: 3,
        name: 'Fine Dining',
        style: 'Sophisticated & Luxurious',
        image: '/placeholder.svg',
        color: 'bg-blue-50'
    }
];

const Templates = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Beautiful Menu <span className="text-menu-primary">Templates</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            Get started quickly with our professionally designed templates, then customize to match your brand.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Button className="flex items-center gap-2">
                            View All Templates
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((template, index) => (
                        <div
                            key={template.id}
                            className={`rounded-xl overflow-hidden shadow-md card-hover animate-fade-up`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`h-64 ${template.color} flex items-center justify-center p-4`}>
                                <div className="bg-white rounded-lg shadow-sm w-full h-full flex items-center justify-center">
                                    <img src={template.image} alt={template.name} className="w-3/4 h-3/4 object-contain" />
                                </div>
                            </div>
                            <div className="p-6 bg-white">
                                <h3 className="text-xl font-semibold mb-1">{template.name}</h3>
                                <p className="text-gray-500 mb-4">{template.style}</p>
                                <div className="flex gap-2">
                                    <Button variant="outline" className="flex-1">Preview</Button>
                                    <Button className="flex-1 bg-menu-primary hover:bg-menu-primary/90">Use</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Templates;
