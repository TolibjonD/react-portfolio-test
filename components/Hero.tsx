"use client"
import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'iconsax-react';
import BackgroundVideo from './BackgroundVideo';

export const Hero = () => {
    return (
        <BackgroundVideo src="/video/bge.mp4" overlayColor="bg-black/60" className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 z-10 py-10 pt-10 md:py-24 relative">
                {/* Visual centerpiece */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.7, type: 'spring' }}
                    className="relative flex-shrink-0 mb-10 md:mb-0"
                >
                    <span className="absolute inset-0 rounded-full bg-rose-500/30 blur-2xl scale-110" />
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-rose-500/10 shadow-xl backdrop-blur-xl">
                        <Image
                            src="/images/me.jpg"
                            alt="Tolibjon Saidkodirov profile photo"
                            width={220}
                            height={220}
                            className="object-cover w-44 h-44 sm:w-52 sm:h-52 rounded-full"
                            priority
                        />
                    </div>
                </motion.div>
                {/* Text content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-xl">
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7, type: 'spring' }}
                        className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight"
                    >
                        Building Modern Web Experiences
                    </motion.h1>
                    {/* Subheadline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7, type: 'spring' }}
                        className="text-zinc-300 text-lg sm:text-2xl font-medium mb-6 tracking-wide"
                    >
                        I’m <span className="text-rose-500 font-bold">Tolibjon</span>, a frontend & Next.js developer crafting beautiful, high-performance products for startups and teams.
                    </motion.h2>
                    {/* Micro-bio/stat row */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6, type: 'spring' }}
                        className="flex flex-wrap gap-3 mb-10"
                    >
                        <span className="px-4 py-1 rounded-full bg-zinc-800/70 text-zinc-300 text-xs sm:text-sm font-medium border border-zinc-700 backdrop-blur">3+ years experience</span>
                        <span className="px-4 py-1 rounded-full bg-zinc-800/70 text-zinc-300 text-xs sm:text-sm font-medium border border-zinc-700 backdrop-blur">Based in Tashkent</span>
                        <span className="px-4 py-1 rounded-full bg-zinc-800/70 text-zinc-300 text-xs sm:text-sm font-medium border border-zinc-700 backdrop-blur">React · Next.js · TypeScript</span>
                    </motion.div>
                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
                        className="w-full flex justify-center md:justify-start"
                    >
                        <Button
                            className='rounded-full border-none bg-rose-500 text-white px-10 py-4 text-lg font-bold shadow-none hover:bg-rose-600 transition-colors duration-200 backdrop-blur flex items-center gap-3'
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className='flex items-center gap-3'>
                                Let’s Work Together <ArrowRight size={22} color="currentColor" />
                            </div>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </BackgroundVideo>
    );
}; 