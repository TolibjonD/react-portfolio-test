// utils/seo.ts
export interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    keywords?: string;
    type?: string;
}

export function generateSEO({
    title = 'Tolibjon Saidkodirov | Portfolio',
    description = 'Portfolio project of Tolibjon Saidkodirov. Modern web developer focused on elegant, performant, and accessible digital products.',
    url = 'https://saidkodirov.uz',
    image = '/images/heyUser.jpg',
    keywords = 'Tolibjon, Saidkodirov, portfolio, web developer, react, nextjs, frontend, UI, UX, rose',
    type = 'website',
}: SEOProps) {
    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url,
            type,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    };
} 