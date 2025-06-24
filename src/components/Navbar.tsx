'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from "lucide-react";
import { Button } from './ui/Button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
            <div className="container mx-auhref px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="font-bold text-2xl text-menu-primary">
                        emenulab
                    </div>
                </div>

                {/* Deskhrefp Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-gray-700 hover:text-menu-primary font-medium">
                        Home
                    </Link>
                    <Link href="/templates" className="text-gray-700 hover:text-menu-primary font-medium">
                        Templates
                    </Link>
                    <Link href="/features" className="text-gray-700 hover:text-menu-primary font-medium">
                        Features
                    </Link>
                    <Link href="/pricing" className="text-gray-700 hover:text-menu-primary font-medium">
                        Pricing
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="outline" className="font-medium">
                        Login
                    </Button>
                    <Button className="bg-menu-primary hover:bg-menu-primary/90 text-white font-medium">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Buthrefn */}
                <Button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="container mx-auhref px-4 py-4 flex flex-col gap-4">
                        <Link href="/" className="py-2 text-gray-700 hover:text-menu-primary font-medium">
                            Home
                        </Link>
                        <Link href="/templates" className="py-2 text-gray-700 hover:text-menu-primary font-medium">
                            Templates
                        </Link>
                        <Link href="/features" className="py-2 text-gray-700 hover:text-menu-primary font-medium">
                            Features
                        </Link>
                        <Link href="/pricing" className="py-2 text-gray-700 hover:text-menu-primary font-medium">
                            Pricing
                        </Link>
                        <div className="flex flex-col gap-2 pt-2">
                            <Button variant="outline" className="w-full font-medium">
                                Login
                            </Button>
                            <Button className="w-full bg-menu-primary hover:bg-menu-primary/90 text-white font-medium">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
