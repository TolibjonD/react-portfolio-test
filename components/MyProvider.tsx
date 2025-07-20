'use client';
import React, { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ArrowUp2 } from 'iconsax-react'; // use any upward arrow icon from iconsax

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex min-h-screen flex-col justify-between relative">
            <div>
                <Navbar />
                {children}
            </div>
            <Footer />

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-rose-500 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-rose-600 cursor-pointer
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}
        `}
                aria-label="Scroll to top"
            >
                <ArrowUp2 color='currentColor' size="20" variant="Bold" />
            </button>
        </div>
    );
};
