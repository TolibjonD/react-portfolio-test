'use client';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const inter = Inter({
    weight: ['100', '300', '500', '600', '700', '800'],
    subsets: ['latin'],
});

export const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Burger icon animation
    const BurgerIcon = ({ open }: { open: boolean }) => (
        <div className="w-8 h-8 flex flex-col justify-center items-center relative">
            <span className={`block h-0.5 w-6 bg-rose-500 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-rose-500 rounded transition-all duration-300 my-1 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-rose-500 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
    );

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: isVisible ? 0 : -64, opacity: isVisible ? 1 : 0 }}
            transition={{ type: 'tween', duration: 0.32, ease: 'easeInOut' }}
            className={
                `${inter.className} fixed top-0 left-0 right-0 z-50
                bg-zinc-950/80 backdrop-blur-xl shadow-xl
                flex justify-between items-center
                px-4 sm:px-10 lg:px-24 py-3 sm:py-4
                transition-all duration-200`
            }
            style={{ borderBottom: isVisible ? '1.5px solid #27272a' : '1.5px solid transparent', boxShadow: isVisible ? undefined : 'none' }}
        >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-wide text-rose-500 flex items-center relative overflow-hidden animate-pulse">
                    <span className="relative">
                        Saidkodirov
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shine"></span>
                    </span>
                </span>
                <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-rose-400 to-rose-600 shadow-lg group-hover:scale-110 transition-transform animate-pulse"></span>
            </a>
            {/* Desktop nav links */}
            <div className="hidden md:flex gap-10 items-center">
                {navLinks.map((link) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        className="relative text-base font-medium text-zinc-200 px-2 py-1 transition-colors duration-150 focus:outline-none group"
                        whileHover={{ color: '#fb7185' }} // rose-400
                        transition={{ type: 'tween', duration: 0.18 }}
                        onClick={e => handleNavClick(e, link.href)}
                    >
                        <span className="z-10 relative group-hover:text-rose-400 transition-colors duration-150">{link.label}</span>
                        <motion.span
                            layoutId="underline"
                            className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-rose-500 rounded origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                            whileHover={{ scaleX: 1 }}
                            initial={{ scaleX: 0 }}
                        />
                    </motion.a>
                ))}
            </div>
            {/* Burger menu for mobile */}
            {!menuOpen && (
                <button
                    className="md:hidden cursor-pointer z-50 p-2 rounded-full hover:bg-zinc-800/60 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <BurgerIcon open={menuOpen} />
                </button>
            )}
            {/* Mobile menu with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 24 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden px-4 py-8"
                    >
                        {/* Centered logo at the top */}
                        <div className="w-full flex justify-center items-center mb-8">
                            <div className="flex flex-col items-center gap-2">
                                <a href="#" className="flex items-center gap-2 group">
                                    <span className="text-3xl font-extrabold tracking-wide text-rose-400 flex items-center relative overflow-hidden animate-pulse">
                                        <span className="relative">
                                            Saidy
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shine"></span>
                                        </span>
                                    </span>
                                    <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-rose-400 to-rose-600 shadow-lg group-hover:scale-110 transition-transform animate-pulse"></span>
                                </a>
                            </div>
                        </div>
                        {/* Close button (only one) */}
                        <button
                            className="absolute top-3 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-800/90 hover:bg-rose-700/80 shadow text-2xl text-rose-300 hover:text-white transition-colors focus:outline-none border border-zinc-700"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l10 10M16 6l-10 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        {/* Nav links directly on the same solid background */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                            }}
                            className="w-full rounded-2xl bg-zinc-950 shadow-2xl flex flex-col items-center py-8 px-4 gap-2 border border-zinc-800"
                        >
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    className="text-xl font-bold tracking-wide text-zinc-200 w-full text-center py-4 rounded-lg transition-all duration-150 hover:text-rose-400 hover:bg-zinc-900/60 focus:outline-none focus:ring-2 focus:ring-rose-400"
                                    style={{
                                        textShadow: '0 2px 12px rgba(244,63,94,0.12), 0 1px 2px rgba(0,0,0,0.18)'
                                    }}
                                    onClick={e => { handleNavClick(e, link.href); setMenuOpen(false); }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.18, delay: 0.1 + idx * 0.06 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
