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
  title: 'Tolibjon Saidkodirov - Professional Web Developer & UI/UX Designer | Fast Website Creation Services',
  description: 'Professional web developer and UI/UX designer offering fast, high-quality website creation services. Specializing in React, Next.js, and modern web technologies. Based in Tashkent, Uzbekistan. Get your website created quickly with guaranteed quality.',
  url: 'https://saidkodirov.uz',
  image: '/images/me.jpg',
  type: 'website',
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tolibjon Saidkodirov",
    "jobTitle": "Web Developer & UI/UX Designer",
    "description": "Professional web developer and UI/UX designer offering fast, high-quality website creation services",
    "url": "https://saidkodirov.uz",
    "image": "https://saidkodirov.uz/images/me.jpg",
    "sameAs": [
      "https://github.com/tolibjon",
      "https://linkedin.com/in/tolibjon",
      "https://twitter.com/tolibjon"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tashkent",
      "addressCountry": "UZ"
    },
    "knowsAbout": [
      "Web Development",
      "UI/UX Design",
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Development",
      "Website Creation",
      "Responsive Design"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Creation",
            "description": "Fast and high-quality website development services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Professional user interface and user experience design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Frontend Development",
            "description": "Modern frontend development with React and Next.js"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <About />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
    </>
  )
}
