"use client"
import React from 'react';
import { Section } from './Section';
import { Brush, Code, MonitorMobbile, MessageQuestion, CloudAdd, ShieldTick, Chart, People } from 'iconsax-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'UI/UX Design',
        icon: <Brush size={32} variant="Bulk" color="#f43f5e" />,
        description: 'Intuitive, beautiful, and accessible interfaces tailored to your brand and users.'
    },
    {
        title: 'Frontend Development',
        icon: <Code size={32} variant="Bulk" color="#f43f5e" />,
        description: 'Modern, maintainable web apps using React, TypeScript, and Tailwind for performance and scalability.'
    },
    {
        title: 'Next.js Apps',
        icon: <MonitorMobbile size={32} variant="Bulk" color="#f43f5e" />,
        description: 'SEO-friendly, scalable, and fast Next.js applications with SSR, SSG, and API routes.'
    },
    {
        title: 'Consulting',
        icon: <MessageQuestion size={32} variant="Bulk" color="#f43f5e" />,
        description: 'Expert advice on architecture, performance, and best practices for your frontend projects.'
    },
    {
        title: 'Cloud Integration',
        icon: <CloudAdd size={32} variant="Bulk" color="#f43f5e" />,
        description: 'Seamless integration with cloud services and APIs for modern, connected experiences.'
    },
    {
        title: 'Security & Best Practices',
        icon: <ShieldTick size={32} variant="Bulk" color="#f43f5e" />,
        description: 'Implementing secure coding standards and best practices to protect your users and data.'
    },
    {
        title: 'Analytics & Growth',
        icon: <Chart size={32} variant="Bulk" color="#f43f5e" />,
        description: 'Integrating analytics and growth tools to help you understand and expand your audience.'
    },
    {
        title: 'Team Training',
        icon: <People size={32} variant="Bulk" color="#f43f5e" />,
        description: 'Workshops and mentoring to upskill your team in modern frontend technologies.'
    },
];

const benefits = [
    'Clear communication & collaboration',
    'Pixel-perfect attention to detail',
    'On-time delivery & reliability',
    'User-first, business-driven mindset',
    'Continuous learning & improvement',
];

export default function ServicesSection() {
    return (
        <Section
            id="services"
            blurredBg={false}
            title="My Services"
            subtitle={undefined}
            className=""
        >
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3 tracking-tight">How I Can Help You Succeed</h3>
                <p className="text-zinc-400 text-base sm:text-lg font-medium mb-6">From design to deployment, I offer a full spectrum of services to bring your ideas to life and help your business grow. Every project is approached with care, creativity, and a focus on real results.</p>
                <ul className="flex flex-wrap justify-center gap-3 mb-2">
                    {benefits.map((b, i) => (
                        <li key={b} className="px-4 py-1 rounded-full bg-zinc-800/70 text-zinc-300 text-xs sm:text-sm font-medium border border-zinc-700 shadow backdrop-blur">
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-2">
                {services.map((service, idx) => (
                    <div
                        key={service.title}
                        className="rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-lg group"
                    >
                        <div className="mb-5 rounded-full flex items-center justify-center shadow bg-zinc-900 w-14 h-14 border border-zinc-700">
                            {service.icon}
                        </div>
                        <h4 className="text-lg font-bold text-zinc-100 mb-2 drop-shadow tracking-tight">{service.title}</h4>
                        <p className="text-zinc-400 text-sm font-medium leading-relaxed drop-shadow-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="text-zinc-400 text-base sm:text-lg font-medium text-center max-w-2xl mx-auto mt-8 mb-2">
                Ready to elevate your next project? Let's connect and make it happen.
            </div>
        </Section>
    );
} 