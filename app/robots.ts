import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/#about',
                    '/#services',
                    '/#skills',
                    '/#portfolio',
                    '/#testimonials',
                    '/#contact',
                    '/api/visitors',
                ],
                disallow: [
                    '/private/',
                    '/admin/',
                    '/_next/',
                    '/api/private/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/admin/'],
                crawlDelay: 1,
            },
            {
                userAgent: 'YandexBot',
                allow: '/',
                disallow: ['/private/', '/admin/'],
                crawlDelay: 1,
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/private/', '/admin/'],
                crawlDelay: 1,
            },
        ],
        sitemap: 'https://saidkodirov.uz/sitemap.xml',
        host: 'https://saidkodirov.uz',
    }
} 