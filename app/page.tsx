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
  keywords: 'web sayt yash xizmati, eng zo\'r web dasturchi, biznesingiz uchun mukammal dashboard, web developer Tashkent, website creation services Uzbekistan, React developer Central Asia, веб-разработчик Ташкент, создание сайтов Узбекистан',
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tolibjon Saidkodirov",
    "jobTitle": "Professional Web Developer & UI/UX Designer",
    "description": "Professional web developer and UI/UX designer offering fast, high-quality website creation services. Specializing in React, Next.js, and modern web technologies.",
    "url": "https://saidkodirov.uz",
    "image": "https://saidkodirov.uz/images/me.jpg",
    "sameAs": [
      "https://github.com/tolibjon",
      "https://linkedin.com/in/tolibjon",
      "https://twitter.com/tolibjon"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Web Developer"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tashkent",
      "addressCountry": "UZ",
      "addressRegion": "Tashkent"
    },
    "knowsAbout": [
      "Web Development",
      "UI/UX Design",
      "React.js",
      "Next.js",
      "TypeScript",
      "Frontend Development",
      "Website Creation",
      "Responsive Design",
      "Business Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development"
    ],
    "serviceType": "Web Development Services",
    "areaServed": ["Uzbekistan", "Central Asia", "Worldwide"],
    "availableLanguage": ["English", "Uzbek", "Russian"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Creation",
            "description": "Fast and high-quality website development services",
            "category": "Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Professional user interface and user experience design",
            "category": "Design Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Frontend Development",
            "description": "Modern frontend development with React and Next.js",
            "category": "Development Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Website Development",
            "description": "Professional business websites and corporate solutions",
            "category": "Business Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "description": "Online store development and e-commerce platforms",
            "category": "E-commerce Services"
          }
        }
      ]
    },
    "award": [
      "Professional Web Developer",
      "UI/UX Design Expert",
      "React.js Specialist",
      "Next.js Developer"
    ],
    "knowsLanguage": ["English", "Uzbek", "Russian"],
    "nationality": "Uzbekistani",
    "birthPlace": {
      "@type": "Place",
      "name": "Tashkent, Uzbekistan"
    }
  };

  // Additional FAQ structured data for better search visibility
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can you create a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I can create high-quality websites in 1-2 weeks depending on complexity. I focus on fast delivery without compromising quality."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I specialize in modern technologies including React.js, Next.js, TypeScript, and responsive design principles for optimal performance."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website maintenance services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I offer comprehensive website maintenance including updates, security patches, performance optimization, and technical support."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with business website optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! I specialize in creating business-optimized websites with SEO best practices, fast loading times, and conversion-focused design."
        }
      }
    ]
  };

  return (
    <>
      {/* Enhanced Structured Data for better search engine understanding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* SEO-optimized content structure */}
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Hidden SEO content for better keyword targeting */}
      <div className="sr-only">
        <h2>Web Development Services in Tashkent, Uzbekistan</h2>
        <p>Professional web developer offering website creation services, UI/UX design, and React development in Tashkent. Fast, high-quality web solutions for businesses and individuals.</p>

        <h3>Key Services:</h3>
        <ul>
          <li>Website Creation and Development</li>
          <li>UI/UX Design Services</li>
          <li>React.js and Next.js Development</li>
          <li>Business Website Solutions</li>
          <li>E-commerce Development</li>
          <li>Website Maintenance and Support</li>
        </ul>

        <h3>Technologies:</h3>
        <ul>
          <li>React.js Development</li>
          <li>Next.js Framework</li>
          <li>TypeScript Programming</li>
          <li>Responsive Web Design</li>
          <li>Progressive Web Apps</li>
          <li>API Development</li>
        </ul>

        <h3>Location:</h3>
        <p>Based in Tashkent, Uzbekistan. Serving clients in Central Asia and worldwide. Professional web development services for local and international businesses.</p>
      </div>
    </>
  )
}
