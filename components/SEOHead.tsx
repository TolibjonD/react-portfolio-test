"use client"
import React from 'react';
import Head from 'next/head';
import { generateStructuredData, generateBreadcrumbData } from '@/utils/seo';

interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    locale?: 'en' | 'uz' | 'ru';
    noindex?: boolean;
    nofollow?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
    title = "Tolibjon Saidkodirov - Professional Web Developer & UI/UX Designer | Website Creation Services",
    description = "Professional web developer and UI/UX designer offering fast, high-quality website creation services. Specializing in React, Next.js, and modern web technologies. Based in Tashkent, Uzbekistan.",
    keywords = "",
    image = "/images/heyUser.jpg",
    url = "https://saidkodirov.uz",
    type = "website",
    locale = "en",
    noindex = false,
    nofollow = false,
}) => {
    const fullUrl = url.startsWith('http') ? url : `https://saidkodirov.uz${url}`;
    const fullImageUrl = image.startsWith('http') ? image : `https://saidkodirov.uz${image}`;

    const structuredData = generateStructuredData();
    const breadcrumbData = generateBreadcrumbData();

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Tolibjon Saidkodirov" />
            <meta name="robots" content={noindex ? 'noindex' : 'index'} />
            {nofollow && <meta name="robots" content="nofollow" />}

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:site_name" content="Tolibjon Saidkodirov Portfolio" />
            <meta property="og:locale" content={locale === 'uz' ? 'uz_UZ' : locale === 'ru' ? 'ru_RU' : 'en_US'} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:site" content="@yourtwitterhandle" />
            <meta name="twitter:creator" content="@yourtwitterhandle" />

            {/* Language and Locale Meta Tags */}
            <meta httpEquiv="content-language" content={locale} />
            <meta name="language" content={locale === 'uz' ? 'Uzbek' : locale === 'ru' ? 'Russian' : 'English'} />
            <meta name="geo.region" content="UZ" />
            <meta name="geo.placename" content="Tashkent" />
            <meta name="geo.position" content="41.2995;69.2401" />
            <meta name="ICBM" content="41.2995, 69.2401" />

            {/* Language Alternates for Multilingual SEO */}
            <link rel="alternate" hrefLang="en" href={`https://saidkodirov.uz${url}?lang=en`} />
            <link rel="alternate" hrefLang="uz" href={`https://saidkodirov.uz${url}?lang=uz`} />
            <link rel="alternate" hrefLang="ru" href={`https://saidkodirov.uz${url}?lang=ru`} />
            <link rel="alternate" hrefLang="x-default" href={`https://saidkodirov.uz${url}`} />

            {/* Structured Data for Rich Snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbData),
                }}
            />

            {/* Additional SEO Meta Tags */}
            <meta name="theme-color" content="#be185d" />
            <meta name="msapplication-TileColor" content="#be185d" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Tolibjon Saidkodirov" />

            {/* Performance and Security Meta Tags */}
            <meta name="referrer" content="origin-when-cross-origin" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="format-detection" content="date=no" />
            <meta name="format-detection" content="address=no" />
            <meta name="format-detection" content="email=no" />

            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />
            <link rel="dns-prefetch" href="//www.googletagmanager.com" />

            {/* Favicon and App Icons */}
            <link rel="icon" href="/icon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icon.ico" />

            {/* Manifest for PWA */}
            <link rel="manifest" href="/manifest.json" />
        </Head>
    );
};
