"use client"
import { Section } from '@/components/Section';
import React from 'react';
import { Star, Code, MonitorMobbile, Brush } from 'iconsax-react';
import Image from 'next/image';

const skillCards = [
    {
        name: 'React',
        icon: <Image
            src="/images/react.png"
            alt=""
            width={40}
            height={40}
            className='object-cover w-14
             h-14'
        />, // rose-500
        title: 'React',
        description: 'Building modular, interactive UIs with React’s component model and hooks.'
    },
    {
        name: 'Next.js',
        icon: <Image
            src="/images/nextjs.png"
            alt=""
            width={40}
            height={40}
            className='object-cover w-14
         h-14'
        />, // rose-500
        title: 'Next.js',
        description: 'Creating fast, SEO-friendly apps with Next.js, SSR, and API routes.'
    },
    {
        name: 'TypeScript',
        icon: <Image
            src="/images/typescript.png"
            alt=""
            width={40}
            height={40}
            className='object-cover w-14
         h-14'
        />, // rose-500
        title: 'TypeScript',
        description: 'Writing robust, type-safe code for scalable and maintainable projects.'
    },
    {
        name: 'UI/UX Design',
        icon: <Image
            src="/images/tailwind.png"
            alt=""
            width={40}
            height={40}
            className='object-cover w-14
         h-14'
        />, // rose-500
        title: 'UI/UX Design',
        description: 'Designing pixel-perfect, accessible, and delightful user experiences.'
    },
];

const quickFacts = [
    { label: 'Experience', value: '3+ years in web development' },
    { label: 'Stack', value: 'React, Next.js, TypeScript, Tailwind CSS' },
    { label: 'Philosophy', value: 'User-first, clean code, continuous learning' },
    { label: 'Fun fact', value: 'I love coffee ☕, hackathons 🚀, and minimalist design.' },
];

export default function About() {
    return (
        <Section
            id="about"
            blurredBg
            title={undefined}
            subtitle={undefined}
            className="min-h-[60vh] flex flex-col items-center justify-center"
        >
            {/* Two-column layout: left (photo, name, intro), right (quick facts) */}
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start py-16 px-2 sm:px-6">
                {/* Left: Photo, name, intro */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 relative">
                    {/* Blurred rose accent behind photo */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl -z-10" />
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mx-auto">
                        <div className="absolute inset-0 rounded-full bg-rose-500/10 blur-2xl" />
                        <img
                            src="/images/hero.jpg"
                            alt="Tolibjon Saidkodirov profile photo"
                            width={128}
                            height={128}
                            className="object-cover w-full h-full rounded-full border-4 border-rose-500 shadow-xl relative z-10"
                        />
                    </div>
                    <div className='w-full'> <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight text-center w-full">Tolibjon Saidkodirov</h2>
                        <p className="text-rose-400 text-lg font-semibold text-center w-full">Frontend Developer & UI Enthusiast</p></div>
                    <p className="text-zinc-300 text-base sm:text-lg font-light max-w-xl">
                        My journey began with a curiosity for how the web works and grew into a passion for building beautiful, performant, and accessible digital products. I thrive on turning ideas into reality, collaborating with creative teams, and always pushing for pixel-perfect results.
                    </p>
                </div>
                {/* Right: Quick Facts */}
                <div className="flex flex-col gap-6 max-w-md mx-auto md:mx-0 border-l border-zinc-800 pl-0 md:pl-10">
                    <h3 className="text-xl font-bold text-rose-400 mb-2">Quick Facts</h3>
                    <ul className="space-y-4">
                        {quickFacts.map(fact => (
                            <li key={fact.label} className="flex flex-col gap-0.5">
                                <span className="text-zinc-400 text-xs uppercase font-semibold tracking-wider">{fact.label}</span>
                                <span className="text-zinc-100 text-base font-medium">{fact.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Skills Cards full width below */}
            <h3 className="text-rose-400 text-xl sm:text-2xl font-bold mb-8 mt-16 text-center tracking-tight">What I Do</h3>
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-2">
                {skillCards.map((card, idx) => (
                    <div
                        key={card.name}
                        className="rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-zinc-700 bg-zinc-900/40 backdrop-blur transition-transform hover:scale-105 hover:shadow-2xl duration-200"
                        style={{ animation: `fadeInUp 0.7s ${0.1 + idx * 0.1}s both` }}
                    >
                        <div className="mb-5 rounded-full flex items-center justify-center shadow-lg">
                            {card.icon}
                        </div>
                        <h4 className="text-lg font-bold text-zinc-100 mb-2 drop-shadow">{card.title}</h4>
                        <p className="text-zinc-400 text-sm font-medium leading-relaxed drop-shadow-sm">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
            {/* Friendly closing statement */}
            <div className="text-zinc-400 text-base sm:text-lg font-medium text-center max-w-2xl mx-auto mt-12 mb-8">
                Let’s create something amazing together. I’m always open to new ideas, collaborations, and challenges!
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
      `}</style>
        </Section>
    );
}
