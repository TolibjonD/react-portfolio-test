// utils/seo.ts
export interface SEOProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    keywords?: string;
    type?: string;
    locale?: string;
}

// Enhanced multilingual keywords targeting high-value search terms
const ENHANCED_KEYWORDS = {
    english: [
        // Primary high-value keywords
        "web developer", "website creation", "web design", "UI/UX design", "React developer", "Next.js developer",
        "frontend developer", "website builder", "professional web services", "custom website development",
        "responsive web design", "modern website", "fast website development", "quality website creation",
        "web application development", "e-commerce website", "business website", "portfolio website",
        "website optimization", "SEO friendly website", "mobile responsive design", "web development services",
        "website maintenance", "web consulting", "digital solutions", "web technology expert",

        // Business-focused keywords
        "business website development", "corporate website design", "startup website", "company website",
        "professional portfolio", "web development agency", "custom software development", "web solutions",
        "digital transformation", "online presence", "web strategy", "technical consulting",

        // Technology-specific keywords
        "React.js development", "Next.js development", "TypeScript developer", "modern web technologies",
        "progressive web app", "single page application", "full-stack development", "API development",
        "database design", "cloud solutions", "performance optimization", "security implementation",

        // Location-based keywords
        "Tashkent web developer", "Uzbekistan web services", "Central Asia web development",
        "professional developer Tashkent", "web expert Uzbekistan", "local web development services"
    ],

    uzbek: [
        // Primary high-value keywords in Uzbek
        "veb dasturchi", "veb sayt yaratish", "veb dizayn", "UI/UX dizayn", "React dasturchi", "Next.js dasturchi",
        "frontend dasturchi", "veb sayt quruvchi", "professional veb xizmatlar", "maxsus veb sayt ishlab chiqish",
        "responsive veb dizayn", "zamonaviy veb sayt", "tez veb sayt ishlab chiqish", "sifatli veb sayt yaratish",
        "veb ilova ishlab chiqish", "e-commerce veb sayt", "biznes veb sayti", "portfolio veb sayti",
        "veb sayt optimizatsiyasi", "SEO do'stona veb sayt", "mobil responsive dizayn", "veb ishlab chiqish xizmatlari",
        "veb sayt texnik xizmati", "veb maslahatchi", "raqamli yechimlar", "veb texnologiya mutaxassisi",

        // High-value business keywords in Uzbek
        "web sayt yash xizmati", "eng zo'r web dasturchi", "biznesingiz uchun mukammal dashboard",
        "biznes veb sayt yaratish", "korporativ veb dizayn", "startup veb sayt", "kompaniya veb sayti",
        "professional portfolio", "veb ishlab chiqish agentligi", "maxsus dastur ishlab chiqish", "veb yechimlar",
        "raqamli transformatsiya", "onlayn mavjudlik", "veb strategiya", "texnik maslahat",

        // Technology keywords in Uzbek
        "React.js ishlab chiqish", "Next.js ishlab chiqish", "TypeScript dasturchi", "zamonaviy veb texnologiyalari",
        "progressiv veb ilova", "bitta sahifa ilovasi", "to'liq stack ishlab chiqish", "API ishlab chiqish",
        "ma'lumotlar bazasi dizayni", "bulut yechimlari", "ishlash optimizatsiyasi", "xavfsizlik amalga oshirish",

        // Location-based keywords in Uzbek
        "Toshkent veb dasturchi", "O'zbekiston veb xizmatlari", "Markaziy Osiyo veb ishlab chiqish",
        "professional dasturchi Toshkent", "veb mutaxassisi O'zbekiston", "mahalliy veb ishlab chiqish xizmatlari"
    ],

    russian: [
        // Primary high-value keywords in Russian
        "веб-разработчик", "создание сайтов", "веб-дизайн", "UI/UX дизайн", "React разработчик", "Next.js разработчик",
        "frontend разработчик", "создатель сайтов", "профессиональные веб-услуги", "разработка индивидуальных сайтов",
        "адаптивный веб-дизайн", "современный сайт", "быстрая разработка сайтов", "качественное создание сайтов",
        "разработка веб-приложений", "интернет-магазин", "корпоративный сайт", "сайт-портфолио",
        "оптимизация сайтов", "SEO-дружественный сайт", "мобильный адаптивный дизайн", "услуги веб-разработки",
        "техническое обслуживание сайтов", "веб-консалтинг", "цифровые решения", "эксперт по веб-технологиям",

        // High-value business keywords in Russian
        "разработка сайтов для бизнеса", "корпоративный веб-дизайн", "сайт для стартапа", "корпоративный сайт",
        "профессиональное портфолио", "агентство веб-разработки", "разработка индивидуального ПО", "веб-решения",
        "цифровая трансформация", "онлайн присутствие", "веб-стратегия", "техническое консультирование",

        // Technology keywords in Russian
        "разработка на React.js", "разработка на Next.js", "разработчик TypeScript", "современные веб-технологии",
        "прогрессивное веб-приложение", "одностраничное приложение", "полноценная разработка", "разработка API",
        "проектирование баз данных", "облачные решения", "оптимизация производительности", "реализация безопасности",

        // Location-based keywords in Russian
        "веб-разработчик Ташкент", "веб-услуги Узбекистан", "веб-разработка в Центральной Азии",
        "профессиональный разработчик Ташкент", "веб-эксперт Узбекистан", "местные услуги веб-разработки"
    ]
};

export function generateSEO({
    title = 'Tolibjon Saidkodirov - Professional Web Developer & UI/UX Designer | Website Creation Services',
    description = 'Professional web developer and UI/UX designer offering fast, high-quality website creation services. Specializing in React, Next.js, and modern web technologies. Based in Tashkent, Uzbekistan. Professional web development, website design, and digital solutions.',
    url = 'https://saidkodirov.uz',
    image = '/images/heyUser.jpg',
    keywords = '',
    type = 'website',
    locale = 'en',
}: SEOProps) {
    // Combine all language keywords for maximum SEO coverage
    const allKeywords = [
        ...ENHANCED_KEYWORDS.english,
        ...ENHANCED_KEYWORDS.uzbek,
        ...ENHANCED_KEYWORDS.russian,
        keywords
    ].filter(Boolean).join(", ");

    return {
        title,
        description,
        keywords: allKeywords,
        openGraph: {
            title,
            description,
            url,
            type,
            locale: locale === 'uz' ? 'uz_UZ' : locale === 'ru' ? 'ru_RU' : 'en_US',
            siteName: 'Tolibjon Saidkodirov Portfolio',
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
            languages: {
                'en': `${url}?lang=en`,
                'uz': `${url}?lang=uz`,
                'ru': `${url}?lang=ru`,
            }
        },
        // Additional SEO properties
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: 'T0Xe-jiLOg9fkGVFhDRj7ELLMp3rnNFTXbRmnBIy6UE', // Add your Google Search Console verification code
            yandex: '08962434ad0a2835', // Add your Yandex verification code if targeting Russian market
        }
    };
}

// Generate structured data for better search engine understanding
export function generateStructuredData() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Tolibjon Saidkodirov",
        "jobTitle": "Professional Web Developer & UI/UX Designer",
        "description": "Professional web developer and UI/UX designer offering fast, high-quality website creation services",
        "url": "https://saidkodirov.uz",
        "image": "https://saidkodirov.uz/images/me.jpg",
        "sameAs": [
            "https://github.com/TolibjonD",
            "https://linkedin.com/in/tolibjon",
            "https://twitter.com/TolibjonD"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance Web Developer",
            "url": "https://saidkodirov.uz"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tashkent",
            "addressCountry": "UZ",
            "addressRegion": "Tashkent"
        },
        "knowsAbout": [
            "Web Development",
            "React.js",
            "Next.js",
            "TypeScript",
            "UI/UX Design",
            "Website Creation",
            "Frontend Development",
            "Responsive Design"
        ],
        "serviceType": "Web Development Services",
        "areaServed": ["Uzbekistan", "Central Asia", "Worldwide"],
        "availableLanguage": ["English", "Uzbek", "Russian"]
    };
}

// Generate breadcrumb structured data
export function generateBreadcrumbData() {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://saidkodirov.uz"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://saidkodirov.uz#about"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Services",
                "item": "https://saidkodirov.uz#services"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Portfolio",
                "item": "https://saidkodirov.uz#portfolio"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://saidkodirov.uz#contact"
            }
        ]
    };
} 