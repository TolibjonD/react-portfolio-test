"use client"
import React, { useRef } from 'react';
import { Section } from './Section';
import { QuoteDown, User, ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { IconButton } from './IconButton';

const testimonials = [
    {
        name: 'Amina Rakhimova',
        role: 'Product Manager, FinTech Startup',
        text: 'Tolibjon is a rare frontend developer who combines pixel-perfect UI with real business sense. Our product launch was a success thanks to his attention to detail and proactive communication.',
        link: '#',
    },
    {
        name: 'Dmitry Ivanov',
        role: 'CTO, SaaS Platform',
        text: 'He delivered our Next.js dashboard ahead of schedule, with flawless responsiveness and beautiful animations. Highly recommended for any modern web project.',
        link: '#',
    },
    {
        name: 'Sara Kim',
        role: 'UX Designer',
        text: 'Working with Tolibjon was a delight. He truly cares about user experience and always goes the extra mile to make designs come alive.',
        link: '#',
    },
    {
        name: 'Alex Johnson',
        role: 'Founder, Startup Studio',
        text: 'Professional, creative, and reliable. Tolibjon is my go-to developer for all things React and Next.js.',
        link: '#',
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Show two cards per scroll page
    const scroll = (dir: 'left' | 'right') => {
        const el = scrollRef.current;
        if (!el) return;
        const cards = el.querySelectorAll('div[data-card]');
        if (!cards.length) return;
        // Get width of two cards + gap
        const cardWidth = (cards[0] as HTMLElement).offsetWidth;
        const gap = 24; // gap-6
        const scrollAmount = cardWidth * 2 + gap * 2;
        el.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    return (
        <Section
            id="testimonials"
            blurredBg
            className="relative md:px-10 sm:px-4"
        >
            <div className="max-w-5xl mx-auto mb-12 px-4 flex flex-col items-start sm:items-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 mb-2 drop-shadow-lg">Testimonials</h2>
                <p className="text-lg sm:text-xl text-zinc-300 mb-2 font-medium">What clients and collaborators say about working with me.</p>
            </div>
            {/* Scroll controls */}
            <div className="flex justify-end gap-2 max-w-5xl mx-auto px-4 mb-2">
                <IconButton aria-label="Scroll left" onClick={() => scroll('left')} className="bg-zinc-900/80 border-zinc-700 text-zinc-300 hover:bg-zinc-800/80">
                    <ArrowLeft2 color='currentColor' size={22} variant="Bold" />
                </IconButton>
                <IconButton aria-label="Scroll right" onClick={() => scroll('right')} className="bg-zinc-900/80 border-zinc-700 text-zinc-300 hover:bg-zinc-800/80">
                    <ArrowRight2 color='currentColor' size={22} variant="Bold" />
                </IconButton>
            </div>
            {/* Horizontally scrollable testimonials */}
            <div className="w-full overflow-x-auto pb-4 scrollbar-hide pt-20" ref={scrollRef}>
                <div className="flex gap-6 px-4 md:px-0 min-w-[340px]" style={{ scrollSnapType: 'x mandatory' }}>
                    {testimonials.map((t, idx) => (
                        <div
                            key={t.name}
                            data-card
                            className="relative flex-shrink-0 w-[90vw] max-w-md sm:w-[44vw] md:w-[28vw] bg-zinc-900/70 rounded-2xl shadow-xl border border-zinc-700 pt-12 p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl duration-200 backdrop-blur-xl"
                            style={{ scrollSnapAlign: 'start', animation: `fadeInUp 0.7s ${0.1 + idx * 0.1}s both` }}
                        >
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-zinc-800/60 rounded-full p-2 shadow-lg">
                                <QuoteDown size={32} color="#f43f5e" variant="Bold" />
                            </div>
                            <div className="mb-4 mt-4 flex items-center justify-center w-14 h-14 rounded-full border-2 border-zinc-700 bg-zinc-900/80">
                                <User size={36} variant="Bold" color="#f43f5e" />
                            </div>
                            <div className="mb-2">
                                <span className="block text-zinc-100 font-bold text-lg">{t.name}</span>
                                <span className="block text-zinc-400 text-sm font-medium">{t.role}</span>
                            </div>
                            <p className="text-zinc-300 text-base font-normal mb-6 mt-2">— <span className="italic">{t.text}</span></p>
                            <a href={t.link} className="mt-auto text-rose-400 hover:text-rose-300 text-sm font-semibold underline underline-offset-2 transition-colors duration-150">Read case study</a>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </Section>
    );
} 