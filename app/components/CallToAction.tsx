import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
    'Free 14-day trial, no credit card required',
    'Easy-to-use drag and drop editor',
    'Mobile-friendly menus that look great on any device',
    'QR code generation for contactless viewing'
];

const CallToAction = () => {
    return (
        <section className="py-16 md:py-24 bg-menu-dark text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Create Your Digital Menu?
                    </h2>
                    <p className="text-xl mb-8 text-gray-300">
                        Join thousands of restaurants already using MenuMaestro to create stunning digital menus.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                            >
                                <CheckCircle className="h-5 w-5 text-menu-primary" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <Button
                        className="bg-menu-primary hover:bg-menu-primary/90 text-white font-medium text-lg h-12 px-8 animate-pulse"
                    >
                        Start Building Your Menu
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;