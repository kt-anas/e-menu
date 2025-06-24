import React from 'react';
import { Button } from './ui/Button';
import { ChevronRight, ChefHat, Image, Layout, Smartphone } from "lucide-react";

const Hero = () => {
    return (
        <div className={`hero-gradient pt-32 pb-16 md:pb-24`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    <div className="flex-1 animate-fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-menu-dark leading-tight mb-6">
                            Create Beautiful <span className="text-menu-primary">Digital Menus</span> in Minutes
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
                            Design, customize, and publish stunning digital menus for your restaurant.
                            No design skills needed - just drag, drop, and delight your customers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button className="bg-menu-primary hover:bg-menu-primary/90 text-white font-medium text-lg h-12 px-6">
                                Start Building
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" className="font-medium text-lg h-12 px-6">
                                View Templates
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 md:gap-8">
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-menu-primary">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">No coding required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-menu-primary">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Mobile-friendly</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-menu-primary">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">QR code generation</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative">
                            <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                                <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="text-sm text-gray-500">Menu Editor</div>
                                    <div className="w-16"></div>
                                </div>
                                <div className="p-4">
                                    <div className="bg-menu-light rounded-lg p-4 mb-4">
                                        <div className="text-center mb-3">
                                            <div className="inline-block text-xl font-bold px-4 py-1 border-b-2 border-menu-primary text-menu-primary">
                                                Menu Preview
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 shadow-sm menu-preview">
                                            <div className="text-center mb-3">
                                                <h2 className="text-2xl font-bold">Main Dishes</h2>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex justify-between pb-2 border-b border-dashed border-gray-200">
                                                    <div>
                                                        <h3 className="font-medium">Signature Pasta</h3>
                                                        <p className="text-sm text-gray-500">Fresh pasta with tomato sauce and parmesan</p>
                                                    </div>
                                                    <div className="font-bold text-menu-primary">$12.99</div>
                                                </div>
                                                <div className="flex justify-between pb-2 border-b border-dashed border-gray-200">
                                                    <div>
                                                        <h3 className="font-medium">Gourmet Burger</h3>
                                                        <p className="text-sm text-gray-500">Premium beef with special sauce and fries</p>
                                                    </div>
                                                    <div className="font-bold text-menu-primary">$14.99</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <Button variant="outline" size="sm">
                                            <Layout className="h-4 w-4 mr-1" />
                                            Templates
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Image className="h-4 w-4 mr-1" />
                                            Images
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <ChefHat className="h-4 w-4 mr-1" />
                                            Categories
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Smartphone className="h-4 w-4 mr-1" />
                                            Preview
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-8 -right-4 -bottom-4 -left-4 bg-menu-accent/20 rounded-xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
