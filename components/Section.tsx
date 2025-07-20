"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    id?: string;
    className?: string;
    blurredBg?: boolean;
    centered?: boolean;
}

export type { SectionProps };

export const Section: React.FC<SectionProps> = ({
    children,
    title,
    subtitle,
    id,
    className = '',
    blurredBg = false,
    centered = false,
}) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className={`relative py-12 sm:py-20 ${centered ? 'flex flex-col items-center justify-center' : ''} ${className}`}
        >
            {blurredBg && (
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-rose-500/40 via-rose-700/30 to-transparent blur-2xl rounded-full" />
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-rose-400/30 via-rose-600/20 to-transparent blur-2xl rounded-full" />
                    <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl" />
                </div>
            )}
            <div className="relative z-10">
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-center text-rose-500 mb-2 drop-shadow-lg"
                    >
                        {title}
                    </motion.h2>
                )}
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-lg sm:text-xl text-center text-zinc-300 mb-8"
                    >
                        {subtitle}
                    </motion.p>
                )}
                {children}
            </div>
        </motion.section>
    );
};
