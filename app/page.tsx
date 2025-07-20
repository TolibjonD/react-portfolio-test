import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import About from '@/views/About'
import ServicesSection from '@/components/ServicesSection'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Hero } from '@/components/Hero';
import { generateSEO } from '@/utils/seo';
import { ContactSection } from '@/components/ContactSection';

export const metadata = generateSEO({
  title: 'Tolibjon Saidkodirov | Portfolio',
  description: 'Tolibjon Saidkodirov is a modern web developer specializing in elegant, rose-themed, performant, and accessible digital products. Explore his portfolio, skills, and projects.',
  url: 'https://saidkodirov.uz',
  image: '/images/me.jpg',
  keywords: 'Tolibjon, Saidkodirov, portfolio, web developer, react, nextjs, frontend, UI, UX, rose, modern, elegant',
  type: 'website',
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
    </>
  )
}
